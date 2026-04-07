import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Minimap } from '../imports/Minimap';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import FloatingToolbar from './components/FloatingToolbar';
import Header from '../imports/Header';

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  blue: '#007EFF', blueLight: '#eaf2ff', blueMid: '#c1d9ff', blueDark: '#304eb8',
  badgeBg: '#eaedf8', bg: '#ffffff', bg2: '#f6f6f6', bg3: '#f3f4f6', bg4: '#f8f8f8',
  panelBg: '#f9fafb', text: '#212121', text2: '#6b778c', text3: '#6a7282',
  textGray: '#99A1AF', border: '#e1e1e1', border2: '#e2e2e2',
  red: '#EF4444', green: '#10B981', greenLight: '#ECFDF5',
} as const;

const CORNER_R = 20;

// ─── Types ────────────────────────────────────────────────────────────────────
interface Node {
  id: number; x: number; y: number;
  badge: string; type: string; title: string; short?: string;
  options: string[];
  conditions: Array<{
    tags: string[]; or: boolean;
    logicalOperators?: string[];
    operators?: string[];
    targetNodeBadges?: string[];
    targetNodeTitles?: string[]; next: string;
    operator?: string; targetNodeBadge?: string; targetNodeTitle?: string;
    destinationBadge?: string; destinationTitle?: string;
    defaultNextBadge?: string; defaultNextTitle?: string;
    edgeId?: string;
  }>;
  defaultNextBadge?: string; defaultNextTitle?: string;
}

// 김문주 수정 edge 타입에 midY추가
interface Edge { id: string; from: number; to: number; fromOption?: number; fromLogicDir?: string; toLogicDir?: string; fromLogicIdx?: number; midX?: number; midY?: number; }
// 김문주 수정 edge 완료
interface DrawingEdge { fromNodeId: number; fromX: number; fromY: number; fromOption?: number; fromLogicDir?: string; fromLogicIdx?: number; }
interface HistoryState { nodes: Node[]; edges: Edge[]; }

// ─── SVG Path Helpers ─────────────────────────────────────────────────────────
// 김문주_연결선 위아래조절 가능_orthogonalPath 함수 midY적용
function orthogonalPath(x1: number, y1: number, x2: number, y2: number, customMidX?: number, customMidY?: number, arrivalDir: string = 'left'): string {
  const r = CORNER_R;

  // 1. 왼쪽 도착 (기존의 부드러운 순방향 라우팅)
  if (arrivalDir === 'left') {
    const dy = y2 - y1;
    let midX = customMidX !== undefined ? customMidX : (x1 + x2) / 2;

    if (customMidX === undefined && x2 > x1 + 120) midX = x1 + 60;
    if (x2 < x1 + 40) midX = customMidX !== undefined ? customMidX : x1 + 40; // 방어 코드

    const dx1 = midX - x1;
    const dx2 = x2 - midX;
    if (Math.abs(dy) < 2) return `M${x1},${y1} H${x2}`;

    const signY = dy >= 0 ? 1 : -1;
    const signX1 = dx1 >= 0 ? 1 : -1;
    const signX2 = dx2 >= 0 ? 1 : -1;
    const cr1 = Math.min(r, Math.abs(dx1) * 0.9, Math.abs(dy) * 0.45);
    const cr2 = Math.min(r, Math.abs(dx2) * 0.9, Math.abs(dy) * 0.45);

    return [
      `M${x1},${y1}`,
      `H${midX - signX1 * cr1}`,
      `Q${midX},${y1} ${midX},${y1 + signY * cr1}`,
      `V${y2 - signY * cr2}`,
      `Q${midX},${y2} ${midX + signX2 * cr2},${y2}`,
      `H${x2}`
    ].join(' ');
  }

  // 2. 위 또는 아래 도착 (새로운 입체적 곡선 라우팅)
  const isTop = arrivalDir === 'top';
  const dirY = isTop ? 1 : -1; // 위로 들어갈지 아래로 들어갈지 방향
  const bufferY = 30; // 카드 위/아래 여유 공간

  const defaultMidY = isTop ? y2 - bufferY : y2 + bufferY;
  const midY = customMidY !== undefined ? customMidY : defaultMidY;
  // 김문주_연결선 위아래조절 가능_orthogonalPath 함수 midY적용 끗

  let midX = customMidX !== undefined ? customMidX : x1 + 50;
  if (customMidX === undefined && x2 > x1 + 100) {
    midX = (x1 + x2) / 2;
  }

  const signY1 = midY > y1 ? 1 : -1;
  const signX1 = midX > x1 ? 1 : -1;
  const signX2 = x2 > midX ? 1 : -1;

  // 곡선(Round) 값이 선 길이보다 커지지 않도록 안전장치 계산
  const cr1 = Math.min(r, Math.abs(midX - x1) * 0.9, Math.abs(midY - y1) * 0.45);
  const cr2 = Math.min(r, Math.abs(midY - y1) * 0.45, Math.abs(x2 - midX) * 0.9);
  const cr3 = Math.min(r, Math.abs(x2 - midX) * 0.9, Math.abs(y2 - midY) * 0.9);

  return [
    `M${x1},${y1}`,
    `H${midX - signX1 * cr1}`,
    `Q${midX},${y1} ${midX},${y1 + signY1 * cr1}`,
    `V${midY - signY1 * cr2}`,
    `Q${midX},${midY} ${midX + signX2 * cr2},${midY}`,
    `H${x2 - signX2 * cr3}`,
    `Q${x2},${midY} ${x2},${midY + dirY * cr3}`,
    `V${y2}` // 마지막에 세로(Vertical)로 꽂히면서 화살표가 자연스럽게 아래/위를 향함!
  ].join(' ');
}

function orthogonalMid(x1: number, y1: number, x2: number, y2: number, customMidX?: number) {
  return { x: customMidX !== undefined ? customMidX : (x1 + x2) / 2, y: (y1 + y2) / 2 };
}
// 김문주 수정5. 수정 끗


// ─── Connection Node Variants ─────────────────────────────────────────────────
function ConnDot({ border, fill }: { border: string; fill: string }) {
  return (
    <div style={{ position: 'relative', width: 16, height: 16 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'white', border: `2px solid ${border}`, borderRadius: 40 }} />
      <div style={{ position: 'absolute', inset: '25%' }}>
        <svg viewBox="0 0 8 8" width="100%" height="100%" fill="none">
          <circle cx="4" cy="4" r="3.33333" fill={fill} stroke={fill} strokeWidth="1.33333" />
        </svg>
      </div>
    </div>
  );
}
const ConnNodeDefault = () => <ConnDot border="#808080" fill="#808080" />;
const ConnNodeLogic = () => <ConnDot border="#3D00F0" fill="#3D00F0" />;
const ConnNodeHover = () => <ConnDot border="#e2e2e2" fill="white" />;
const ConnNodeSelected = () => <ConnDot border={C.blue} fill={C.blue} />;

// ─── QBadge ──────────────────────────────────────────────────────────────────
function SurveyIcon({ color, size = 12 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <rect x="2" y="2.5" width="12" height="1.8" rx="0.9" fill={color} />
      <rect x="2" y="7.1" width="12" height="1.8" rx="0.9" fill={color} />
      <rect x="2" y="11.7" width="12" height="1.8" rx="0.9" fill={color} />
    </svg>
  );
}
function QBadge({ num, selected }: { num: string; selected?: boolean }) {
  return (
    <div style={{ background: selected ? C.blueLight : C.badgeBg, borderRadius: 10, padding: '4px 7px', display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
      <SurveyIcon color={C.blueDark} size={11} />
      <span style={{ fontSize: 14, fontWeight: 600, color: C.blueDark, letterSpacing: '-0.01em', lineHeight: 1 }}>{num}</span>
    </div>
  );
}

// ─── Preview Modal ────────────────────────────────────────────────────────────
function PreviewModal({ nodes, onClose }: { nodes: Node[]; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Set<string>>>({});
  const q = nodes[step];
  const toggleOpt = (id: number, opt: string, type: string) => {
    setAnswers(prev => {
      const cur = new Set(prev[id] || []);
      if (type === 'single') return { ...prev, [id]: new Set([opt]) };
      if (cur.has(opt)) cur.delete(opt); else cur.add(opt);
      return { ...prev, [id]: new Set(cur) };
    });
  };
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300 }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 24, width: 380, border: `1px solid ${C.border}`, boxShadow: '0 20px 60px rgba(0,0,0,0.18)' }}>
        {!q ? (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>설문이 완료되었습니다!</div>
            <div style={{ fontSize: 12, color: C.text2, marginBottom: 18 }}>답해 주셔서 감사합니다.</div>
            <button onClick={onClose} style={{ background: C.blue, color: '#fff', border: 'none', padding: '9px 28px', borderRadius: 10, cursor: 'pointer', fontSize: 14 }}>닫기</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>설문 미리보기</span>
              <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 20, color: C.text2 }}>×</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <QBadge num={q.badge} />
              <div style={{ fontSize: 14, color: C.text2 }}>{step + 1} / {nodes.length}</div>
            </div>
            <div style={{ background: C.bg3, borderRadius: 4, height: 3, marginBottom: 14 }}>
              <div style={{ width: `${Math.round((step + 1) / nodes.length * 100)}%`, height: '100%', background: C.blue, borderRadius: 4, transition: 'width 0.3s' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.6, marginBottom: 14 }}>{q.title}</div>
            {q.type === '주관식' ? (
              <textarea style={{ width: '100%', border: `1px solid ${C.border2}`, borderRadius: 10, padding: '10px 14px', fontSize: 14, height: 80, resize: 'none', fontFamily: 'inherit', outline: 'none', background: C.bg4, boxSizing: 'border-box' }} placeholder="답변을 입력하세요..." />
            ) : (
              q.options.map(o => {
                const isSel = (answers[q.id] || new Set()).has(o);
                return (
                  <div key={o} onClick={() => toggleOpt(q.id, o, q.type)} style={{ border: `1.5px solid ${isSel ? C.blue : C.border2}`, background: isSel ? C.blueLight : C.bg4, borderRadius: 10, padding: '11px 16px', marginBottom: 8, cursor: 'pointer', fontSize: 14, color: isSel ? C.blueDark : C.text, transition: 'all 0.1s' }}>{o}</div>
                );
              })
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, gap: 8 }}>
              {step > 0
                ? <button onClick={() => setStep(s => s - 1)} style={{ flex: 1, border: `1px solid ${C.border}`, background: C.bg, padding: '9px 0', borderRadius: 10, cursor: 'pointer', fontSize: 14, color: C.text2 }}>이전</button>
                : <span style={{ flex: 1 }} />}
              <button onClick={() => setStep(s => s + 1)} style={{ flex: 1, background: C.blue, color: '#fff', border: 'none', padding: '9px 0', borderRadius: 10, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>다음 →</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── QuestionPicker Popup ─────────────────────────────────────────────────────
function QuestionPicker({ nodes, excludeId, currentGotoId, onSelect, onClose }: {
  nodes: Node[]; excludeId: number; currentGotoId: number | null;
  onSelect: (n: Node) => void; onClose: () => void;
}) {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { setTimeout(() => inputRef.current?.focus(), 50); }, []);
  const filtered = nodes.filter(n => n.id !== excludeId && (search === '' || n.title.includes(search) || n.badge.includes(search)));
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 200 }} onClick={onClose}>
      <div style={{ position: 'absolute', right: 290, top: '50%', transform: 'translateY(-50%)', background: '#fff', borderRadius: 12, boxShadow: '0 0 8px rgba(0,0,0,0.15)', width: 270, overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        <div style={{ height: 45, background: '#fff', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px' }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" opacity={0.5}><path d="M14 14L11.1067 11.1067" stroke={C.text} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" /><circle cx={7.33} cy={7.33} r={5.33} stroke={C.text} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" /></svg>
          <input ref={inputRef} value={search} onChange={e => setSearch(e.target.value)} placeholder="질문 검색" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, color: 'rgba(33,33,33,0.5)', fontFamily: 'inherit', background: 'transparent' }} />
        </div>
        <div style={{ maxHeight: 380, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {filtered.length === 0 && <div style={{ fontSize: 14, color: C.text2, textAlign: 'center', padding: '20px 0' }}>검색 결과가 없어요</div>}
          {filtered.map(n => {
            const isSel = n.id === currentGotoId;
            return (
              <div key={n.id} onClick={() => { onSelect(n); onClose(); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', borderRadius: 9, cursor: 'pointer', background: isSel ? C.blueLight : 'transparent', transition: 'background 0.1s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                  <QBadge num={n.badge} selected={isSel} />
                  <span style={{ fontSize: 14, color: C.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.title.slice(0, 20)}</span>
                </div>
                {isSel && <svg width={14} height={14} viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={C.blue} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Initial Data ─────────────────────────────────────────────────────────────
const INITIAL_NODES: Node[] = [
  {
    id: 1, x: 50, y: 300, badge: '1', type: '객관식', title: '평소 작업 시 AI 도구를 활용하시나요?', short: '평소 작업 시 AI 도구를...', options: ['예', '아니요'], conditions: [{
      tags: ['아니요'], or: false, operator: '같음', next: '10', destinationBadge: '9', destinationTitle: 'AI 기능 도입과 관련하여 추가로 문의 사항이 있으신가요?',
      edgeId: 'logic-1-0'
    }],
    defaultNextBadge: '2',
    defaultNextTitle: 'AI기능을 통해 가장 해결하고 싶은 업무는?'
  },
  {
    id: 2, x: 550, y: 300, badge: '2', type: '객관식', title: 'AI 기능을 통해 가장 해결하고 싶은 업무는?', short: 'AI 기능을 통해 가장 해...', options: ['아이콘 생성', '레이아웃 배치', '컬러 추천', '배경 제거', '텍스트 작성'],
    conditions: [{
      tags: ['아이콘 생성', '배경제거'], or: true, operator: '같음', next: '3', destinationBadge: '3-1', destinationTitle: '가장 선호하는 AI 아이콘 생성 스타일은?',
      edgeId: 'logic-2-0'
    }],
    defaultNextBadge: '4',
    defaultNextTitle: 'AI 기능을 도입한다면, 어떤 영역에서 가장 큰 도움을 받고 싶으신가요?'
  },
  {
    id: 3, x: 1050, y: 300, badge: '3-1', type: '객관식', title: '가장 선호하는 AI 아이콘 생성 스타일은?', short: '가장 선호하는 AI...', options: ['3D 클레이', '미니멀 라인', '플랫 컬러', '핸드 드로잉', '기타'],
    conditions: [{
      tags: ['3D클레이', '플랫 컬러'], or: true, operator: '같음', next: '6', destinationBadge: '5', destinationTitle: "어떤 방식의 레퍼런스 수집을 선호하시나요?",
      edgeId: 'logic-3-0'
    }],
    defaultNextBadge: '4',
    defaultNextTitle: 'AI 기능을 도입한다면, 어떤 디자인 단계에서 가장 큰 도움을 받고 싶으신가요?'
  },
  { id: 4, x: 1550, y: 50, badge: '3-2', type: '객관식', title: "선택하신 스타일의 '입체감'이나 '그림자' 농도 조절 기능이 필요하신가요?", short: '선택하신 스타일의...', options: ['예', '아니요'], conditions: [] },
  {
    id: 5, x: 1550, y: 550, badge: '4', type: '객관식', title: 'AI 기능을 도입한다면, 어떤 영역에서 가장 큰 도움을 받고 싶으신가요?', short: 'AI 기능을 도입한다면...', options: ['리서치 및 아이디어 발산', '실무 제작 및 에셋 생성', '검수 및 피드백 자동화'],
    conditions: [{
      tags: ['실무 제작 및 에셋 생성'], or: false, operator: '같음', next: '7', destinationBadge: '6', destinationTitle: "가장 자동화가 시급한 반복 업무는 무엇인가요?",
      edgeId: 'logic-5-0'
    },
    {
      tags: ['검수 및 피드백 자동화'], or: false, operator: '같음', next: '8', destinationBadge: '7', destinationTitle: "AI가 검수해주길 바라는 항목은?",
      edgeId: 'logic-5-1'
    }

    ]
  },
  { id: 6, x: 2050, y: 550, badge: '5', type: '객관식', title: '어떤 방식의 레퍼런스 수집을 선호하시나요?', short: '어떤 방식의 레퍼런스...', options: ['URL 입력', '이미지 직접 업로드', '키워드 검색'], conditions: [] },
  { id: 7, x: 2550, y: 50, badge: '6', type: '주관식', title: '가장 자동화가 시급한 반복 업무는 무엇인가요?', short: '가장 자동화가 시급한...', options: ['답변을 입력해주세요'], conditions: [] },
  { id: 8, x: 2550, y: 550, badge: '7', type: '객관식', title: 'AI가 검수해주길 바라는 항목은?', short: 'AI가 검수해주길 바라는...', options: ['색상 일관성', '폰트 정렬', '여백 규칙'], conditions: [] },
  { id: 9, x: 3050, y: 550, badge: '8', type: '객관식', title: '유료 플랜 도입 시, 팀 단위 도입을 고려하시나요?', short: '유료 플랜 도입 시...', options: ['예, 팀 전체 도입 예정', '개인 사용 후 검토', '아직 미정'], conditions: [] },
  { id: 10, x: 3550, y: 550, badge: '9', type: '주관식', title: 'AI 기능 도입과 관련하여 추가로 문의 사항이 있으신가요?', short: 'AI 기능 도입과 관련하여...', options: ['답변을 입력해주세요'], conditions: [] },
  { id: 11, x: 4050, y: 550, badge: '10', type: '객관식', title: 'AI 도구 도입을 주저하게 만드는 요인은?', short: 'AI 도구 도입을 주저하게...', options: ['비용 부담', '학습 어려움', '데이터 보안', '기타'], conditions: [] },
];

const INITIAL_EDGES: Edge[] = [
  { id: 'logic-1-0', from: 1, to: 10, fromLogicDir: 'right', fromLogicIdx: 0 },
  { id: 'e1', from: 1, to: 2 },
  { id: 'logic-2-0', from: 2, to: 3, fromLogicDir: 'right', fromLogicIdx: 0 },
  { id: 'e2', from: 2, to: 5 },
  { id: 'e3', from: 3, to: 5 },
  { id: 'logic-3-0', from: 3, to: 6, fromLogicDir: 'right', fromLogicIdx: 0 },
  { id: 'e5', from: 4, to: 5 },
  { id: 'logic-5-0', from: 5, to: 7, fromLogicDir: 'right', fromLogicIdx: 0 },
  { id: 'logic-5-1', from: 5, to: 8, fromLogicDir: 'right', fromLogicIdx: 1 },
  { id: 'e6', from: 5, to: 6 },
  { id: 'e9', from: 6, to: 9 },
  { id: 'e10', from: 7, to: 9 },
  { id: 'e11', from: 8, to: 9 },
  { id: 'e12', from: 9, to: 10 },
  { id: 'e13', from: 10, to: 11 },
];

const NODE_Y_OFFSET = 27;

// ─── Main App ─────────────────────────────────────────────────────────────────
function App() {
  const [nodes, setNodes] = useState<Node[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<Edge[]>(INITIAL_EDGES);
  const [scale, setScale] = useState(0.95);
  const [panX, setPanX] = useState(60);
  const [panY, setPanY] = useState(60);
  const [isPanning, setIsPanning] = useState(false);
  const [selectedNode, setSelectedNode] = useState<number | null>(INITIAL_NODES[0]?.id || null);
  const [draggingNode, setDraggingNode] = useState<number | null>(null);
  const [draggingEdgeMid, setDraggingEdgeMid] = useState<string | null>(null);
  const [drawingEdge, setDrawingEdge] = useState<DrawingEdge | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [hoverConnIdx, setHoverConnIdx] = useState<number | null>(null);
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null);
  const [hoverCardId, setHoverCardId] = useState<number | null>(null);
  const [hoverInputId, setHoverInputId] = useState<number | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastVis, setToastVis] = useState(false);
  const [] = useState<'make' | 'connect' | 'share' | 'result'>('make');
  // ── Added missing features ──
  const [selOpts, setSelOpts] = useState<Record<number, Set<string>>>({});
  const [hoverOptKey, setHoverOptKey] = useState<string | null>(null);
  const [hoverLogicKey, setHoverLogicKey] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerTarget, setPickerTarget] = useState<{ nodeId: number; condIdx: number; field: 'goto' | 'source' } | null>(null);

  // ── Node Grouping & Layout ──
  const [nodeHeights, setNodeHeights] = useState<Record<number, number>>({});
  const resizeObserver = useMemo(() => new ResizeObserver((entries) => {
    setNodeHeights(prev => {
      let changed = false;
      const next = { ...prev };
      for (const entry of entries) {
        const idStr = (entry.target as HTMLElement).dataset.nodeid;
        if (idStr) {
          const id = Number(idStr);
          const height = entry.borderBoxSize?.[0]?.blockSize || (entry.target as HTMLElement).offsetHeight;
          // 김문주 개선 수정: 개선1번으로 인한 레리아웃 스래싱 현상 수정 3 
          // 아래 코드 삭제
          // if (next[id] !== height) {
          // 아래 코드 추가
          if (Math.abs((next[id] || 0) - height) > 2) {
            next[id] = height;
            changed = true;
          }
        }
      }
      return changed ? next : prev;
    });
  }), []);

  const getGroupId = (badge: string) => {
    const match = badge.match(/^(\d+)-/);
    return match ? match[1] : badge;
  };

  const getGroups = (nList: Node[]) => {
    const groups: Record<string, Node[]> = {};
    nList.forEach(n => {
      const gid = getGroupId(n.badge);
      if (!groups[gid]) groups[gid] = [];
      groups[gid].push(n);
    });
    for (const gid in groups) {
      if (groups[gid].length <= 1) delete groups[gid];
    }
    return groups;
  };

  // Enforce vertical group layout
  useEffect(() => {
    setNodes(prev => {
      let changed = false;
      const next = JSON.parse(JSON.stringify(prev)) as Node[];
      const groups = getGroups(next);
      for (const gid in groups) {
        const grp = groups[gid].sort((a, b) => a.id - b.id);
        const master = grp[0];
        let currentY = master.y;
        for (const n of grp) {
          if (n.x !== master.x) { n.x = master.x; changed = true; }
          if (Math.abs(n.y - currentY) > 5) { n.y = currentY; changed = true; } // >5px for robustness
          currentY += (nodeHeights[n.id] || 200) + 40;
        }
      }
      return changed ? next : prev;
    });
  }, [nodeHeights, nodes.length, nodes.map(n => n.options.length).join(','), nodes.map(n => n.conditions.length).join(',')]);

  const panStartRef = useRef<{ x: number; y: number } | null>(null);
  const dragOffsetRef = useRef<{ x: number; y: number } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverInputRef = useRef<number | null>(null);
  const scaleRef = useRef(scale);
  useEffect(() => { scaleRef.current = scale; }, [scale]);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg); setToastVis(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVis(false), 2200);
  }, []);

  const getHandleCenterById = (id: string) => {
    const handle = document.getElementById(id);
    // 김문주 개선 수정: 개선1번으로 인한 레리아웃 스래싱 현상 수정 1
    // 아래 코드 한줄 삭제
    // const canvasInner = document.getElementById('canvas-inner');
    if (!handle) return { cx: 0, cy: 0 };
    //아래 코드 세 줄 삭제
    // const hRect = handle.getBoundingClientRect();
    // const cRect = canvasInner.getBoundingClientRect();
    // return { cx: (hRect.left + hRect.width / 2 - cRect.left) / scaleRef.current, cy: (hRect.top + hRect.height / 2 - cRect.top) / scaleRef.current };
    // 아래 코드 추가
    let cx = handle.offsetWidth / 2;
    let cy = handle.offsetHeight / 2;
    let el = handle as HTMLElement;

    while (el && el.id !== 'canvas-inner') {
      cx += el.offsetLeft;
      cy += el.offsetTop;
      el = el.offsetParent as HTMLElement;
    }
    // 코드 추가 끝
    return { cx, cy };
  };

  const getNodeCenter = (node: Node | undefined) => {
    if (!node) return { cx: 0, cy: 0, lx: 0, ly: 0 };
    const src = getHandleCenterById(`src-${node.id}`);
    const tgt = getHandleCenterById(`tgt-${node.id}`);
    return { cx: src.cx, cy: src.cy, lx: tgt.cx, ly: tgt.cy };
  };

  const canvasMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).id === 'canvas-inner') {
      setIsPanning(true);
      panStartRef.current = { x: e.clientX, y: e.clientY };
      setSelectedNode(null);
      setSelectedEdgeId(null);
    }
  };

  const canvasMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drawingEdge && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left - panX) / scale;
      const my = (e.clientY - rect.top - panY) / scale;

      // 김문주 수정5. 마우스를 뒤로 끌면 자동으로 방향을 위 아래로 꺾어준다
      let drawDir = 'left';
      if (mx < drawingEdge.fromX + 60) {
        drawDir = my > drawingEdge.fromY ? 'top' : 'bottom';
      }
      // 김문주 코드 추가 끗

      const drawingPath = document.getElementById('drawing-edge') as unknown as SVGPathElement;
      if (drawingPath) {
        // 김문주 연결선 조절 관련 드로잉패스 수정
        drawingPath.setAttribute('d', orthogonalPath(drawingEdge.fromX, drawingEdge.fromY, mx, my, undefined, undefined, drawDir));
        // 김문주 연결선 조절 관련 드로잉패스 수정 끗
        drawingPath.style.display = '';
      }
      return;
    }
    if (draggingEdgeMid && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left - panX) / scale;
      // 김문주 midY 드래그값 적용
      const my = (e.clientY - rect.top - panY) / scale;
      setEdges(prev => prev.map(edge => edge.id === draggingEdgeMid ? { ...edge, midX: Math.round(mx / 10) * 10, midY: Math.round(my / 10) * 10 } : edge));
      // 김문주 midY 추가 끗
      return;
    }
    if (draggingNode !== null && canvasRef.current && dragOffsetRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left - panX) / scale;
      const my = (e.clientY - rect.top - panY) / scale;

      const draggedNode = nodes.find(n => n.id === draggingNode);
      if (!draggedNode) return;
      const dx = Math.round((mx - dragOffsetRef.current!.x) / 10) * 10 - draggedNode.x;
      const dy = Math.round((my - dragOffsetRef.current!.y) / 10) * 10 - draggedNode.y;

      const draggedGroup = getGroupId(draggedNode.badge);
      const isGrouped = getGroups(nodes)[draggedGroup] !== undefined;

      setNodes(prev => prev.map(n => {
        if (n.id === draggingNode || (isGrouped && getGroupId(n.badge) === draggedGroup)) {
          return { ...n, x: n.x + dx, y: n.y + dy };
        }
        return n;
      }));
      return;
    }
    if (isPanning && panStartRef.current) {
      setPanX(prev => prev + (e.clientX - panStartRef.current!.x));
      setPanY(prev => prev + (e.clientY - panStartRef.current!.y));
      panStartRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const canvasMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drawingEdge && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left - panX) / scale;
      const my = (e.clientY - rect.top - panY) / scale;
      let targetNodeId: number | null = null;
      nodes.forEach(n => {
        if (n.id === drawingEdge.fromNodeId) return;
        const { lx, ly } = getNodeCenter(n);
        if (Math.hypot(mx - lx, my - ly) < 40) targetNodeId = n.id;
      });

      // 김문주 코드 추가: 40px을 벗어나도 마우스를 놓은 곳이 노드 내부라면 그 내부를 타겟으로 잡음
      if (!targetNodeId) {
        const dropTarget = (e.target as HTMLElement).closest('.node');
        if (dropTarget) {
          const nodeIdStr = dropTarget.getAttribute('data-nodeid');
          if (nodeIdStr) {
            const droppedOnId = parseInt(nodeIdStr, 10);
            if (droppedOnId !== drawingEdge.fromNodeId) {
              targetNodeId = droppedOnId;
            }
          }
        }
      }
      // 김문주 코드 추가 끝

      const snapId = hoverInputRef.current;
      const finalTarget = snapId && snapId !== drawingEdge.fromNodeId ? snapId : targetNodeId;
      if (finalTarget) {
        if (drawingEdge.fromLogicIdx !== undefined) {
          const targetNode = nodes.find(n => n.id === finalTarget);
          if (targetNode) {
            handleUpdateCondition(drawingEdge.fromNodeId, drawingEdge.fromLogicIdx, {
              next: finalTarget.toString(),
              destinationBadge: targetNode.badge,
              destinationTitle: targetNode.title
            });
            showToast('연결이 추가되었어요');
          }
        } else {
          const targetNode = nodes.find(n => n.id === finalTarget);
          if (targetNode) {
            handleUpdateDefaultNext(drawingEdge.fromNodeId, targetNode.badge, targetNode.title, targetNode.id);
            showToast('연결이 추가되었어요');
          }
        }
      }
      const drawingPath = document.getElementById('drawing-edge') as unknown as SVGPathElement;
      if (drawingPath) drawingPath.style.display = 'none';
      setDrawingEdge(null); setHoverInputId(null); hoverInputRef.current = null;
    }
    if (draggingNode !== null) setTimeout(() => saveToHistory(), 50);
    setDraggingNode(null); setIsPanning(false); setDraggingEdgeMid(null);
  };

  const nodeHeaderMouseDown = (e: React.MouseEvent, id: number) => {
    if (e.button !== 0) return; e.stopPropagation(); setDraggingNode(id);
    const n = nodes.find(x => x.id === id);
    if (n && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      dragOffsetRef.current = { x: (e.clientX - rect.left - panX) / scale - n.x, y: (e.clientY - rect.top - panY) / scale - n.y };
    }
  };

  const handleMouseDownSrc = (e: React.MouseEvent, nodeId: number, logicIdx?: number) => {
    e.stopPropagation(); e.preventDefault();
    const pos = getNodeCenter(nodes.find(x => x.id === nodeId));
    let startX = pos.cx;
    let startY = pos.cy;

    if (logicIdx !== undefined) {
      const center = getHandleCenterById(`logic-out-${nodeId}-${logicIdx}`);
      if (center.cx !== 0 || center.cy !== 0) {
        startX = center.cx;
        startY = center.cy;
      }
    }
    setDrawingEdge({ fromNodeId: nodeId, fromX: startX, fromY: startY, fromLogicIdx: logicIdx });
  };

  const zoom = (factor: number) => setScale(prev => Math.min(2, Math.max(0.3, prev * factor)));
  const canvasWheel = (e: React.WheelEvent) => { e.preventDefault(); zoom(e.deltaY > 0 ? 1 / 1.1 : 1.1); };
  const handleViewportChange = (offset: { x: number; y: number }) => { setPanX(offset.x); setPanY(offset.y); };

  useEffect(() => {
    const update = () => canvasRef.current && setCanvasSize({ width: canvasRef.current.offsetWidth, height: canvasRef.current.offsetHeight });
    update(); window.addEventListener('resize', update);

    // 키보드 화살표 이동 (대지 이동 제약 개선)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      const step = 40;
      switch (e.key) {
        case 'ArrowUp': setPanY(p => p + step); break;
        case 'ArrowDown': setPanY(p => p - step); break;
        case 'ArrowLeft': setPanX(p => p + step); break;
        case 'ArrowRight': setPanX(p => p - step); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => { window.removeEventListener('resize', update); window.removeEventListener('keydown', handleKeyDown); };
  }, []);

  useEffect(() => {
    if (history.length === 0) setHistory([{ nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) }]);
    setHistoryIndex(0);
  }, []);

  const saveToHistory = () => {
    setHistory(prev => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push({ nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) });
      return newHistory.length > 50 ? newHistory.slice(1) : newHistory;
    });
    setHistoryIndex(prev => prev + 1);
  };

  const handleUndo = () => { if (historyIndex > 0) { const s = history[historyIndex - 1]; setNodes(s.nodes); setEdges(s.edges); setHistoryIndex(historyIndex - 1); } };
  const handleRedo = () => { if (historyIndex < history.length - 1) { const s = history[historyIndex + 1]; setNodes(s.nodes); setEdges(s.edges); setHistoryIndex(historyIndex + 1); } };

  // [정렬하기 할 때 그룹이 풀렸다가 다시 렌더링하면서 돌아오는 현상 해결] 
  const handleAutoAlign = () => {
    saveToHistory();

    // 김문주 수정: [정렬하기 할 때 그룹이 풀렸다가 다시 렌더링하면서 돌아오는 현상 수정]
    //   setNodes(prev => prev.map((n, i) => ({ ...n, x: i * 500 + 50, y: 300 })));
    //   showToast('카드를 정렬했어요');
    // };
    setNodes(prev => {
      const next = JSON.parse(JSON.stringify(prev)) as Node[];

      const processedGids = new Set<string>();
      let col = 0;
      const gapX = 500;

      next.forEach(n => {
        const gid = getGroupId(n.badge);
        // 이미 처리한 그룹(ex: 3-1할 때 3-2도 같이 처리됨)은 건너뜀
        if (processedGids.has(gid)) return;
        processedGids.add(gid);

        // 같은 그룹에 속한 노드들을 찾아 ID 순서대로 정렬 (마스터 노드가 무조건 먼저 오도록)
        const grpNodes = next.filter(x => getGroupId(x.badge) === gid).sort((a, b) => a.id - b.id);

        // 마스터 노드의 기준 X, Y 좌표
        const masterX = col * gapX + 50;
        let currentY = 300;

        grpNodes.forEach(gn => {
          gn.x = masterX;
          gn.y = currentY;
          // 다음 서브 노드(ex: 3-2)는 현재 노드의 높이 + 여백(40)만큼 아래로 배치
          currentY += (nodeHeights[gn.id] || 200) + 40;
        });

        col++; // 그룹 하나 배치가 끝나면 다음 열(컬럼)로 이동
      });

      // 김문주 개선 추가: 정렬 후 화면 맞춤 로직 실행(scale, pan)
      setTimeout(() => {
        if (!canvasRef.current || next.length === 0) return;
        // 전체 카드를 감싸는 가상의 큰 박스(Bounding Box)의 끝점들을 찾습니다.
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        next.forEach(n => {
          minX = Math.min(minX, n.x);
          maxX = Math.max(maxX, n.x + 280); // 카드의 대략적인 너비(280px)
          minY = Math.min(minY, n.y);
          maxY = Math.max(maxY, n.y + (nodeHeights[n.id] || 200)); // 카드 높이
        });

        const padding = 100; // 화면 가장자리 여백
        const totalW = (maxX - minX) + padding * 2;
        const totalH = (maxY - minY) + padding * 2;

        const viewW = canvasRef.current.offsetWidth;
        const viewH = canvasRef.current.offsetHeight;

        // 화면에 맞추기 위한 최적의 배율(Scale) 계산
        let newScale = Math.min(viewW / totalW, viewH / totalH);

        // 너무 작아지거나 커지지 않도록 기존 줌 제한(0.3 ~ 2.0) 적용
        newScale = Math.max(0.3, Math.min(2, newScale));

        // 화면 정중앙에 배치하기 위한 Pan(위치) 값 계산
        const newPanX = (viewW - (maxX - minX) * newScale) / 2 - minX * newScale;
        const newPanY = (viewH - (maxY - minY) * newScale) / 2 - minY * newScale;

        // 계산된 값들 적용
        setScale(newScale);
        setPanX(newPanX);
        setPanY(newPanY);
      }, 0);
      // 김문주 개선 추가 끝
      return next;
    });
    showToast('카드를 정렬했어요');
  };

  const handleDeleteNode = (id: number) => {
    saveToHistory();
    setNodes(prev => prev.filter(n => n.id !== id));
    if (selectedNode === id) setSelectedNode(null);
    showToast('카드를 삭제했어요');
  };

  const handleDeleteOption = (nodeId: number, oIdx: number) => {
    saveToHistory();
    setNodes(prev => prev.map(n => {
      if (n.id === nodeId) {
        const newOptions = [...n.options];
        newOptions.splice(oIdx, 1);
        return { ...n, options: newOptions };
      }
      return n;
    }));
  };

  const handleAddLogic = () => {
    if (!selectedNode) return;
    setNodes(prev => prev.map(n => n.id === selectedNode ? { ...n, conditions: [...n.conditions, { tags: ['옵션 선택'], or: false, next: '같음' }] } : n));
    setTimeout(() => saveToHistory(), 50);
  };

  const handleResetLogic = () => {
    if (!selectedNode) return;
    setNodes(prev => prev.map(n => n.id === selectedNode ? { ...n, conditions: [] } : n));
    setTimeout(() => saveToHistory(), 50);
    showToast('로직이 초기화되었어요');
  };

  const handleDeleteLogic = (nid: number, idx: number) => {
    const node = nodes.find(n => n.id === nid);
    if (node && node.conditions[idx]?.edgeId) {
      const edgeIdToRemove = node.conditions[idx].edgeId;
      setEdges(prev => prev.filter(e => e.id !== edgeIdToRemove));
    }
    setNodes(prev => prev.map(n => n.id === nid ? { ...n, conditions: n.conditions.filter((_, i) => i !== idx) } : n));
    setTimeout(() => saveToHistory(), 50);
  };

  // 김문주 수정 로직 연결선 중복 수정
  const handleUpdateCondition = (nid: number, idx: number, up: any) => {
    const node = nodes.find(n => n.id === nid);
    if (!node) return;
    const currentCond = node.conditions[idx];

    // 새 선의 ID를 setEdges 밖에서 미리 확정합니다. (엇박자 문제 해결!)
    const targetEdgeId = currentCond.edgeId || `edge-logic-${nid}-${Date.now()}`;

    if (up.next !== undefined) {
      setEdges(prevEdges => {
        let edgesCopy = [...prevEdges];
        // 현재 노드/로직에 연결된 선이 이미 있는지 찾습니다.
        const edgeIdx = edgesCopy.findIndex(e => e.id === targetEdgeId);

        if (edgeIdx !== -1) {
          // 이미 선이 있다면 목적지(to)만 새 노드로 갈아끼웁니다 (중복 생성 철벽 방어!)
          edgesCopy[edgeIdx] = { ...edgesCopy[edgeIdx], to: parseInt(up.next, 10), fromLogicIdx: idx };
        } else {
          // 선이 없다면 새로 추가합니다.
          edgesCopy.push({ id: targetEdgeId, from: nid, to: parseInt(up.next, 10), fromLogicDir: 'right', fromLogicIdx: idx });
        }
        return edgesCopy;
      });
    }
    //김문주 수정 로직 연결선 중복 수정 끗

    setNodes(prev => prev.map(n => {
      if (n.id !== nid) return n;
      const newConds = [...n.conditions];
      // 👇 3. 확정된 선의 ID를 노드 상태에도 확실하게 저장해줍니다.
      newConds[idx] = { ...newConds[idx], ...up, edgeId: targetEdgeId };
      return { ...n, conditions: newConds };
    }));

    setTimeout(() => saveToHistory(), 50);
  };

  const handleUpdateDefaultNext = (nodeId: number, badge: string, title: string, targetNodeId: number | null) => {
    setNodes(prev => prev.map(n => n.id === nodeId ? { ...n, defaultNextBadge: badge, defaultNextTitle: title } : n));
    setEdges(prev => {
      const idx = prev.findIndex(e => e.from === nodeId && e.fromOption === undefined && !e.fromLogicDir);
      if (targetNodeId === null) return idx !== -1 ? prev.filter((_, i) => i !== idx) : prev;
      if (idx !== -1) { const ne = [...prev]; ne[idx] = { ...ne[idx], to: targetNodeId }; return ne; }
      return [...prev, { id: `edge-def-${nodeId}-${Date.now()}`, from: nodeId, to: targetNodeId }];
    });
    setTimeout(() => saveToHistory(), 50);
  };

  const deleteEdge = (edgeId: string) => {
    setEdges(prev => prev.filter(e => e.id !== edgeId));
    showToast('연결이 해제되었어요');
    setHoverConnIdx(null);
    setTimeout(() => saveToHistory(), 50);
  };

  const toggleOpt = (nodeId: number, opt: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelOpts(prev => {
      const cur = new Set(prev[nodeId] || []);
      if (cur.has(opt)) cur.delete(opt); else cur.add(opt);
      return { ...prev, [nodeId]: new Set(cur) };
    });
  };

  const openPickerForCond = (nodeId: number, condIdx: number, field: 'goto' | 'source') => {
    setPickerTarget({ nodeId, condIdx, field });
    setPickerOpen(true);
  };

  const handlePickerSelect = (selected: Node) => {
    if (!pickerTarget) return;
    const { nodeId, condIdx, field } = pickerTarget;
    if (field === 'goto') {
      handleUpdateCondition(nodeId, condIdx, { next: selected.id, destinationBadge: selected.badge, destinationTitle: selected.title });
    } else {
      handleUpdateCondition(nodeId, condIdx, { targetNodeBadge: selected.badge, targetNodeTitle: selected.title });
    }
    setPickerOpen(false); setPickerTarget(null);
    showToast(`${selected.badge} 질문으로 연결됐어요`);
  };

  const selectedNodeData = selectedNode ? nodes.find(n => n.id === selectedNode) : null;
  const navItems = [{ k: 'make', l: '만들기' }, { k: 'connect', l: '연동하기' }, { k: 'share', l: '공유하기' }, { k: 'result', l: '결과보기' }] as const;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', background: C.bg, fontFamily: '"Pretendard",-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif', fontSize: 14 }}>

      {/* ── Top bar ── */}
      <div id="topbar">
        <Header />
      </div>

      {/* ── FloatingToolbar ── */}
      <FloatingToolbar
        onAlign={handleAutoAlign}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onPreview={() => setPreviewOpen(true)}
      />

      {/* ── Left Panel ── */}
      <div style={{ position: 'fixed', left: 0, top: '52px', bottom: 0, width: '283.54px', zIndex: 90 }}>
        <LeftPanel nodes={nodes} onDeleteNode={handleDeleteNode} />
      </div>

      {/* ── Canvas ── */}
      <div id="canvas" ref={canvasRef}
        onMouseDown={canvasMouseDown}
        onMouseMove={canvasMouseMove}
        onMouseUp={canvasMouseUp}
        onWheel={canvasWheel}
        // 김문주 개선 수정: 개선1번으로 인한 레리아웃 스래싱 현상 수정 2 + 자꾸 대지 이동 시 텍스트 선택되는 현상 수정
        onMouseLeave={canvasMouseUp}
        style={{
          right: selectedNode ? '280px' : '0', transition: 'right 0.2s ease-in-out', cursor: drawingEdge ? 'crosshair' : isPanning ? 'grabbing' : 'default',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'none'
          // 김문주 코드 수정 완료
        }}
      >
        <div id="canvas-inner" style={{
          // 김문주 코드 추가함(개선1번 관련)
          transformOrigin: '0 0',
          // 김문주 코드 추가 완료
          transform: `translate(${panX}px, ${panY}px) scale(${scale})`
        }}>

          <svg id="edge-svg">
            <defs>
              <marker id="arr-b" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
                <path d="M2 2L8 5L2 8" fill="none" stroke={C.blue} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="arr-g" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
                <path d="M2 2L8 5L2 8" fill="none" stroke="#808080" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="arr-r" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
                <path d="M2 2L8 5L2 8" fill="none" stroke={C.red} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <filter id="lbl-shadow" x="-20%" y="-30%" width="140%" height="160%">
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="rgba(0,0,0,0.10)" />
              </filter>
            </defs>

            {/* Edges */}
            {edges.map((e, i) => {
              const fromN = nodes.find(n => n.id === e.from);
              const toN = nodes.find(n => n.id === e.to);
              if (!fromN || !toN) return null;
              const fPos = getNodeCenter(fromN);
              // const tPos = getNodeCenter(toN); // 김문주 코드 삭제
              let x1 = fPos.cx, y1 = fPos.cy;
              if (e.fromLogicIdx !== undefined) {
                const logicCenter = getHandleCenterById(`logic-out-${e.from}-${e.fromLogicIdx}`);
                if (logicCenter.cx !== 0 || logicCenter.cy !== 0) {
                  x1 = logicCenter.cx;
                  y1 = logicCenter.cy;
                }
              }

              // 김문주 수정5. 타겟 노드의 위치를 분석하여 꼬이지 않는 최적의 도착지점 찾기
              const tH = nodeHeights[toN.id] || 200;
              const tW = 280;
              const tX = toN.x;
              const tY = toN.y;

              let targetDir = 'left';
              let x2 = tX;
              let y2 = tY + NODE_Y_OFFSET; // 기본: 왼쪽 도착

              // 타겟이 출발지점보다 뒤에 있거나 겹칠 때 (꼬임 방지)
              if (tX < x1 + 60) {
                if (y1 < tY + tH / 2) {
                  targetDir = 'top';
                  x2 = tX + 140;
                  y2 = tY;
                } else {
                  targetDir = 'bottom';
                  x2 = tX + 140;
                  y2 = tY + tH;
                }
              }
              // 김문주 수정5. 김문주 코드 추가

              const midXValue = e.midX !== undefined ? e.midX : (x1 + x2) / 2;
              // 김문주 연결선 타입 추가
              const d = orthogonalPath(x1, y1, x2, y2, e.midX, e.midY, targetDir);
              // 김문주 연결선 타입 추가

              const mid = orthogonalMid(x1, y1, x2, y2, e.midX);
              const isActive = selectedNode !== null && (e.from === selectedNode || e.to === selectedNode);
              const isParentSelected = selectedNode !== null && e.from === selectedNode;
              const isSelected = selectedEdgeId === e.id;
              const isHovered = hoverConnIdx === i || isSelected;
              const isLogic = !!e.fromLogicDir;
              let stroke = '#808080', sw = 1.5, strokeOpacity = 0.55;
              if (isHovered) { stroke = C.red; sw = 2; strokeOpacity = 1; }
              else if (isLogic && isActive) { stroke = '#3D00F0'; sw = 2; strokeOpacity = 1; }
              else if (isActive) { stroke = C.blue; sw = 2; strokeOpacity = 1; }
              else if (isLogic) { stroke = '#3D00F0'; strokeOpacity = 0.5; }
              const arrId = isHovered ? 'url(#arr-r)' : (isLogic || isActive) ? 'url(#arr-b)' : 'url(#arr-g)';
              const pathLen = Math.abs(x2 - x1) + Math.abs(y2 - y1);
              const destNum = toN.badge;
              const bW = 8 + 44 + 4 + 26 + 8;
              const bH = 30;
              // bX, bY 출발지 기준 고정 
              const bX = x1 + 16;
              const bY = y1 - bH / 2;
              return (
                <g key={e.id}>
                  {/* 전체 선을 드래그해서 위치(midX) 조절 가능하게 만듦 */}
                  <path d={d} fill="none" stroke="transparent" strokeWidth={24} style={{ cursor: 'col-resize', pointerEvents: 'stroke' }}
                    onMouseEnter={() => setHoverConnIdx(i)} onMouseLeave={() => setHoverConnIdx(null)}
                    onClick={(ev) => {
                      ev.stopPropagation(); setSelectedEdgeId(e.id);
                    }}
                    onMouseDown={(ev) => { ev.stopPropagation(); setDraggingEdgeMid(e.id); }} />
                  <path d={d} fill="none" stroke={stroke} strokeWidth={sw} opacity={strokeOpacity} strokeLinecap="round" strokeLinejoin="round" markerEnd={arrId} style={{ pointerEvents: 'none' }} />

                  {pathLen > 60 && (
                    <g
                      style={{ cursor: 'pointer', pointerEvents: 'all' }}
                      onClick={(ev) => {
                        ev.stopPropagation();
                        // 1. 해당 선이 출발한 부모 카드를 선택 상태로 만들어 우측 패널을 엽니다.
                        setSelectedNode(e.from);
                        // 2. 클릭한 선도 파란색으로 활성화되도록 선택합니다.
                        setSelectedEdgeId(e.id);
                      }}
                    >
                      <rect x={bX} y={bY} width={bW} height={bH} rx={bH / 2} fill="white" stroke={isHovered ? C.red : isActive ? C.blue : '#808080'} strokeWidth={isActive || isHovered ? 1.5 : 1} opacity={0.9} filter="url(#lbl-shadow)" />
                      <rect x={bX + 4} y={bY + (bH - 22) / 2} width={44} height={22} rx={11} fill="#eaedf8" />
                      <line x1={bX + 10} y1={bY + 10} x2={bX + 20} y2={bY + 10} stroke={C.blueDark} strokeWidth={1.3} strokeLinecap="round" />
                      <line x1={bX + 10} y1={bY + 15} x2={bX + 20} y2={bY + 15} stroke={C.blueDark} strokeWidth={1.3} strokeLinecap="round" />
                      <line x1={bX + 10} y1={bY + 20} x2={bX + 20} y2={bY + 20} stroke={C.blueDark} strokeWidth={1.3} strokeLinecap="round" />
                      <text x={bX + 30} y={bY + bH / 2 + 4.5} textAnchor="middle" fontSize={12} fontWeight={500} fill={C.blueDark} fontFamily="Pretendard,-apple-system,sans-serif">{destNum}</text>
                      <text x={bX + 8 + 44 + 4 + 13} y={bY + bH / 2 + 4.5} textAnchor="middle" fontSize={14} fill="#687384" fontFamily="Pretendard,-apple-system,sans-serif">이동</text>
                    </g>
                  )}
                  {isHovered && (
                    <g style={{ cursor: 'pointer', pointerEvents: 'all' }} onClick={(ev) => { ev.stopPropagation(); deleteEdge(e.id); setSelectedEdgeId(null); setHoverConnIdx(null); }}>
                      <circle cx={bX + bW + 12} cy={y1} r={9} fill={C.red} opacity={0.92} />
                      <text x={bX + bW + 12} y={y1 + 4.5} textAnchor="middle" fontSize={12} fill="#fff" fontWeight={700} fontFamily="-apple-system,sans-serif">×</text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Drawing edge */}
            <path id="drawing-edge" d="" stroke={C.green} strokeWidth={2} fill="none" strokeLinejoin="round" strokeLinecap="round" strokeDasharray="8 4" style={{ display: 'none' }} />
          </svg>

          {/* Node connection dots & Group Backgrounds */}
          <div id="nodes-container">
            {/* Group Background Boxes */}
            {Object.entries(getGroups(nodes)).map(([gid, grpNodes]) => {
              const master = grpNodes[0];
              if (!master) return null;
              let totalHeight = 0;
              grpNodes.forEach((n, i) => {
                totalHeight += (nodeHeights[n.id] || 200);
                if (i < grpNodes.length - 1) totalHeight += 40;
              });
              return (
                <div key={`group-${gid}`} style={{
                  position: 'absolute',
                  left: master.x - 16,
                  top: master.y - 16,
                  width: 280 + 32,
                  height: totalHeight + 32,
                  background: '#F8F8F8',
                  border: '2px solid #E2E2E2',
                  borderRadius: 20,
                  zIndex: 3,
                  pointerEvents: 'none'
                }} />
              );
            })}

            {nodes.map(n => {
              const isSelected = selectedNode === n.id;
              const isDraggingFrom = drawingEdge?.fromNodeId === n.id;
              const isHoverTarget = hoverInputId === n.id;
              const isCardHovered = hoverCardId === n.id;
              const hasConditions = n.conditions.length > 0;
              const isDragging = drawingEdge !== null;
              // 김문주 수정8. 로직 생기면 메인핸들도 보라색으로 변하는 현상 수정
              const OutputNode = (isDraggingFrom || isSelected) ? ConnNodeSelected : ConnNodeDefault;
              // 김문주 수정8 끗~

              {/* 수정6. (수정5 관련) 호버 시각 효과 개선 */ }
              const showInput = isDragging && drawingEdge.fromNodeId !== n.id && (isCardHovered || isHoverTarget);
              // 수정6. (수정5 관련) 호버 시각 효과 개선 끗
              const nPos = getNodeCenter(n);

              return (
                <div key={`conn-${n.id}`}>
                  {/* Output handle */}
                  <div id={`src-${n.id}`} data-node="out"
                    onMouseDown={e => handleMouseDownSrc(e, n.id)}
                    style={{ position: 'absolute', left: n.x + 280 - 8, top: n.y + NODE_Y_OFFSET - 8, zIndex: 12, cursor: 'crosshair', transform: isDraggingFrom ? 'scale(1.25)' : 'scale(1)', transition: 'transform 0.12s', borderRadius: '50%' }}>
                    <OutputNode />
                  </div>
                  {/* 김문주 수정5. 아래 코드 삭제 */}
                  {/* <div id={`tgt-${n.id}`} data-node="in"
                    onMouseEnter={() => { hoverInputRef.current = n.id; setHoverInputId(n.id); }}
                    onMouseLeave={() => { hoverInputRef.current = null; setHoverInputId(null); }}
                    style={{ position: 'absolute', left: n.x - 8, top: n.y + NODE_Y_OFFSET - 8, zIndex: 12, cursor: isDragging ? 'crosshair' : 'default', opacity: showInput ? 1 : 0, transform: `scale(${isHoverTarget ? 1.4 : 1})`, transition: 'opacity 0.12s, transform 0.12s', filter: isHoverTarget ? 'drop-shadow(0 0 4px #22c55e)' : 'none', borderRadius: '50%' }}>
                    <ConnNodeHover />
                  </div>
                </div>
              );
            })} */}
                  {/* 김문주 수정5. 코드 삭제 끗, 아래 코드 추가 */}

                  {/* Input handle */}
                  {[
                    { id: `tgt-${n.id}`, left: n.x - 8, top: n.y + NODE_Y_OFFSET - 8 }, // 기존 왼쪽
                    { id: `tgt-top-${n.id}`, left: n.x + 140 - 8, top: n.y - 8 },     // 상단 중앙
                    { id: `tgt-bot-${n.id}`, left: n.x + 140 - 8, top: n.y + (nodeHeights[n.id] || 200) - 8 } // 하단 중앙
                  ].map(pos => (
                    <div key={pos.id} id={pos.id} data-node="in"
                      onMouseEnter={() => { hoverInputRef.current = n.id; setHoverInputId(n.id); }}
                      onMouseLeave={() => { hoverInputRef.current = null; setHoverInputId(null); }}
                      style={{
                        position: 'absolute', left: pos.left, top: pos.top,
                        zIndex: 12, cursor: isDragging ? 'crosshair' : 'default',
                        opacity: showInput ? 1 : 0,
                        // 수정6관련 이 코드만 추가해주세용(문주)
                        pointerEvents: isDragging ? 'all' : 'none',
                        // 수정6관련 이 코드만 추가 완료!~! 평소 클릭/호버 이벤트 방해하지 않도록 처리하는 코드임
                        transform: `scale(${isHoverTarget ? 1.4 : 1})`,
                        transition: 'opacity 0.12s, transform 0.12s',
                        filter: isHoverTarget ? 'drop-shadow(0 0 4px #22c55e)' : 'none',
                        borderRadius: '50%'
                      }}>
                      <ConnNodeHover />
                    </div>
                  ))}
                </div>
              );
            })}
            {/* 김문주 수정5. 코드 추가 끗 */}

            {/* Q-Cards */}
            {nodes.map(n => {
              const isSel = selectedNode === n.id;
              return (
                <div key={n.id}
                  data-nodeid={n.id}
                  ref={el => { if (el) resizeObserver.observe(el); }}
                  onMouseDown={e => nodeHeaderMouseDown(e, n.id)}
                  onClick={() => setSelectedNode(n.id)}
                  onMouseEnter={() => setHoverCardId(n.id)}
                  onMouseLeave={() => setHoverCardId(prev => prev === n.id ? null : prev)}
                  className={`node ${isSel ? 'selected' : ''}`}
                  style={{ left: n.x, top: n.y, zIndex: 5, cursor: 'grab' }}
                >
                  {/* Header */}
                  <div className="node-header">
                    <QBadge num={n.badge} selected={isSel} />
                    <span className="node-title">{n.title.length > 36 ? n.title.slice(0, 36) + '…' : n.title}</span>
                  </div>
                  {/* Body */}
                  <div className="node-body">
                    {n.type === '주관식' ? (
                      <div style={{ border: `1.5px solid ${C.border2}`, borderRadius: 10, padding: '9px 14px', fontSize: 14, color: C.text2, height: 38, display: 'flex', alignItems: 'center', background: C.bg4 }}>주관식 입력</div>
                    ) : (
                      n.options.map((o, oIdx) => {
                        const isSo = (selOpts[n.id] || new Set()).has(o);
                        const hasGoto = n.conditions.find(c => c.tags.includes(o));
                        const optKey = `${n.id}-${o}`;
                        return (
                          <div key={o} className="group"
                            onMouseEnter={() => setHoverOptKey(optKey)}
                            onMouseLeave={() => setHoverOptKey(null)}
                            style={{
                              border: `1.5px solid ${isSo ? C.blue : C.border2}`,
                              background: isSo ? C.blueLight : C.bg4,
                              borderRadius: 10, padding: '9px 14px', marginBottom: 0,
                              fontSize: 14, color: isSo ? C.blueDark : C.text,
                              transition: 'all 0.1s',
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              fontWeight: isSo ? 500 : 400, position: 'relative',
                            }}>
                            <span style={{ paddingRight: '16px' }}>{o}</span>
                            {hasGoto && <span style={{ fontSize: 14, color: C.blue, opacity: isSo ? 1 : 0.45, fontWeight: 500 }}>{hasGoto.destinationBadge || '→'} ▸</span>}

                            {/* 삭제 버튼 */}
                            <div
                              className="hidden group-hover:flex items-center justify-center p-1 rounded-sm hover:bg-[#d1d5db]"
                              style={{ position: 'absolute', top: 4, right: 4, zIndex: 30, cursor: 'pointer' }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteOption(n.id, oIdx);
                              }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        );
                      })
                    )}
                    {n.conditions.length > 0 && (
                      <div className="logic-container">
                        {n.conditions.map((cond, i) => {
                          const logicKey = `${n.id}-logic-${i}`;
                          const isLogicHov = hoverLogicKey === logicKey;
                          return (
                            <React.Fragment key={i}>
                              <div className="condition-row"
                                onMouseEnter={() => setHoverLogicKey(logicKey)}
                                onMouseLeave={() => setHoverLogicKey(null)}
                                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>

                                {cond.tags.map((tag, ti) => {
                                  const logicalOp = ti > 0 ? (cond.logicalOperators?.[ti - 1] || 'OR') : null;
                                  const opForTag = cond.operators?.[ti] || (ti === 0 ? cond.operator : undefined) || '같음';

                                  return (
                                    <React.Fragment key={ti}>
                                      {/* 김문주 로직 텍스트 줄바꿈 수정 */}
                                      {/* 1. AND/OR 뱃지 (첫 번째 조건이 아닐 때만 표시) */}
                                      {ti > 0 && logicalOp && (
                                        <div style={{ marginLeft: '19px', marginBottom: '2px' }}>
                                          <span style={{
                                            backgroundColor: logicalOp === 'AND' ? '#FDF4FF' : '#FCE7F3',
                                            color: logicalOp === 'AND' ? '#C026D3' : '#DB2777',
                                            padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 500
                                          }}>{logicalOp === 'AND' ? '그리고' : '또는'}</span>
                                        </div>
                                      )}

                                      {/* 2. 아이콘과 텍스트를 분리하는 전체 컨테이너 */}
                                      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', fontSize: '14px' }}>

                                        {/* 좌측 고정 너비 영역: 14px(아이콘) + 5px(여백) = 19px 확보 */}
                                        <div style={{ width: '19px', flexShrink: 0, display: 'flex', paddingTop: '1px' }}>
                                          {ti === 0 && (
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
                                              <path d="M5.533 11.344c0 .124.036.245.103.35.068.106.165.19.28.245l1.384.667c.105.051.222.075.34.07a.937.937 0 00.682-.389.933.933 0 00.163-.586V7.34a.964.964 0 01.287-.448l4.996-5.331a.964.964 0 00.172-.34.96.96 0 00-.095-.773.964.964 0 00-.629-.447H.691a.96.96 0 00-.628.447.96.96 0 00-.095.773.964.964 0 00.172.34l4.997 5.331a.964.964 0 01.286.448l.11 4.004z" fill="#687384" />
                                            </svg>
                                          )}
                                        </div>

                                        {/* 우측 텍스트 영역: 줄바꿈(wrap)은 오직 이 구역 안에서만 일어남 */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap', flex: 1, fontSize: '14px' }}>
                                          <span className="cond-label" style={{ whiteSpace: 'nowrap' }}>만약</span>
                                          <span className="cond-tag cond-tag-option" style={{ background: '#E2E8F0', color: '#64748B', wordBreak: 'keep-all', whiteSpace: 'normal', lineHeight: '1.4', textAlign: 'left' }}>{tag}</span>
                                          <span className="cond-tag cond-tag-operator" style={{ background: '#DBEAFE', color: '#3B82F6', whiteSpace: 'nowrap' }}>{opForTag}</span>
                                          <span className="cond-label" style={{ whiteSpace: 'nowrap' }}>일 경우</span>
                                        </div>
                                        {/* 김문주 로직 텍스트 줄바꿈 수정 끗 */}

                                      </div>
                                    </React.Fragment>
                                  );
                                })}

                                {/* logic row hover output ConnNode */}
                                {/* 김문주 수정7. 로직 노드 위치 수정 */}
                                <div id={`logic-out-${n.id}-${i}`} data-node="out" style={{ position: 'absolute', right: -18, top: '50%', marginTop: '-8px', width: 16, height: 20, opacity: 1, transition: 'opacity 0.12s', zIndex: 20, cursor: 'crosshair' }}
                                  // 김문주 수정7 끗~
                                  onMouseDown={ev => { ev.stopPropagation(); ev.preventDefault(); handleMouseDownSrc(ev, n.id, i); }}>
                                  {isSel ? <ConnNodeSelected /> : isLogicHov ? <ConnNodeHover /> : <ConnNodeLogic />}
                                </div>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 줌인/아웃 툴박스 (가로 모드, 우측 하단이나 좌측 하단 배치) */}
        <div style={{ position: 'fixed', left: 300, bottom: 20, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 14, padding: '0 8px', zIndex: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: '0 8px 16px rgba(0,0,0,0.08)', height: 48, gap: 2 }}>
          {/* Select tool (cursor) */}
          <button
            onClick={() => { setDrawingEdge(null); showToast('선택 도구'); }}
            title="선택"
            style={{ width: 36, height: 36, border: 'none', background: C.blue, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '4px 2px' }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <path d="M4 4l7.5 18 3.5-7.5L22 11 4 4z" fill="#fff" stroke="#fff" strokeWidth={1} strokeLinejoin="round" />
            </svg>
          </button>
          {/* Pan tool (hand) */}
          {/* Divider */}
          <div style={{ width: 1, height: 28, background: C.border, margin: '0 4px' }} />
          {/* Zoom In */}
          <button onClick={() => zoom(1.1)} title="확대" style={{ width: 36, height: 40, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.text }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx={11} cy={11} r={7} /><path d="M21 21l-3.5-3.5M11 8v6M8 11h6" /></svg>
          </button>
          {/* Zoom % */}
          <div style={{ fontSize: 11, fontWeight: 700, color: C.text, textAlign: 'center', padding: '2px 0', lineHeight: 1 }}>{Math.round(scale * 100)}%</div>
          {/* Zoom Out */}
          <button onClick={() => zoom(0.9)} title="축소" style={{ width: 40, height: 36, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.text }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx={11} cy={11} r={7} /><path d="M21 21l-3.5-3.5M8 11h6" /></svg>
          </button>
          {/* Divider */}
          <div style={{ width: 1, height: 28, background: C.border, margin: '0 4px' }} />
          {/* Fit Screen */}
          <button onClick={() => { setScale(0.95); setPanX(60); setPanY(60); showToast('화면에 맞게 조정했어요'); }} title="화면 맞추기" style={{ width: 36, height: 40, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.text }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" /></svg>
          </button>
        </div>

        {/* Minimap */}
        <Minimap nodes={nodes} scale={scale} offset={{ x: panX, y: panY }} canvasSize={canvasSize} onViewportChange={handleViewportChange} />

        {/* Toast (위로 변경, 헤더 밑에 노출) */}
        <div style={{ position: 'fixed', top: 76, left: '50%', transform: `translateX(-50%) translateY(${toastVis ? 0 : -20}px)`, background: 'rgba(30,28,60,0.92)', color: '#fff', padding: '6px 16px', borderRadius: 20, fontSize: 14, opacity: toastVis ? 1 : 0, transition: 'opacity 0.2s,transform 0.2s', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 9999 }}>
          {toastMsg}
        </div>

        {/* Drawing hint */}
        {drawingEdge && (
          <div style={{ position: 'fixed', top: 120, left: '50%', transform: 'translateX(-50%)', background: 'rgba(30,28,60,0.85)', color: '#fff', padding: '5px 14px', borderRadius: 20, fontSize: 14, zIndex: 30, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
            {hoverInputId !== null ? '✓ 연결 가능! 마우스를 놓으세요' : '연결할 카드에 가져다 놓으세요'}
            {/* 수정5 관련 토스트 수정 바로 위 문장 끗~ */}
          </div>
        )}
      </div>

      {/* Right Panel */}
      <RightPanel
        selectedNode={selectedNodeData ?? null}
        nodes={nodes}
        onAddCondition={handleAddLogic}
        onAddLogic={handleAddLogic}
        onReset={handleResetLogic}
        onDeleteLogic={handleDeleteLogic}
        onUpdateCondition={handleUpdateCondition}
        onUpdateDefaultNext={handleUpdateDefaultNext}
      />

      {/* Preview Modal */}
      {previewOpen && <PreviewModal nodes={nodes} onClose={() => setPreviewOpen(false)} />}

      {/* Question Picker */}
      {pickerOpen && selectedNode && (
        <QuestionPicker
          nodes={nodes}
          excludeId={selectedNode}
          currentGotoId={pickerTarget ? (parseInt(nodes.find(n => n.id === selectedNode)?.conditions[pickerTarget.condIdx]?.next ?? '') || null) : null}
          onSelect={handlePickerSelect}
          onClose={() => { setPickerOpen(false); setPickerTarget(null); }}
        />
      )}
    </div>
  );
}

export default App;