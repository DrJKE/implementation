import React, { useState } from 'react';

// 1. 공통 아이콘
const RefreshIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const ChevronUpDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="7 15 12 20 17 15" />
    <polyline points="7 9 12 4 17 9" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export interface RightPanelNode {
  id: number;
  badge: string;
  title: string;
  type?: string;
  options?: string[];
  conditions?: Array<{
    tags?: string[];
    or?: boolean;
    next?: string | number;
    operator?: string;
    targetNodeBadge?: string;
    targetNodeTitle?: string;
    destinationBadge?: string;
    destinationTitle?: string;
  }>;
  defaultNextBadge?: string;
  defaultNextTitle?: string;
}

interface RightPanelProps {
  selectedNode: RightPanelNode | null;
  nodes: RightPanelNode[];
  onAddCondition?: (id: number) => void;
  onAddLogic?: (id: number) => void;
  onReset?: () => void;
  onDeleteLogic?: (id: number, idx: number) => void;
  onUpdateCondition?: (id: number, idx: number, data: any) => void;
  onUpdateDefaultNext?: (id: number, badge: string, title: string, targetId: number | null) => void;
}

export default function RightPanel({ selectedNode, nodes, onAddCondition, onAddLogic, onReset, onDeleteLogic, onUpdateCondition, onUpdateDefaultNext }: RightPanelProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!selectedNode) {
    return (
      <div style={{
        position: 'fixed', right: 0, top: '52px', bottom: 0, width: '280px',
        backgroundColor: '#ffffff', borderLeft: '1px solid #e5e7eb', zIndex: 100,
        overflowY: 'auto', padding: '16px', boxSizing: 'border-box',
        fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ color: '#9ca3af', fontSize: '13px', textAlign: 'center' }}>
          옵션을 설정할 카드를<br />먼저 선택해주세요.
        </div>
      </div>
    );
  }

  const operators = [
    '같음', '같지 않음', '시작이 일치', '끝이 일치',
    '문자 포함', '문자 미포함', '모두 포함', '모두 누락',
    '하나 이상 포함', '하나 이상 누락', '보다 작음', '이하',
    '보다 큼', '이상', '이전', '이전 또는 같음', '이후', '이후 또는 같음'
  ];

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div style={{
      position: 'fixed', right: 0, top: '52px', bottom: 0, width: '280px',
      backgroundColor: '#ffffff', borderLeft: '1px solid #e5e7eb', zIndex: 100,
      overflowY: 'auto', padding: '16px', boxSizing: 'border-box',
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      display: 'flex', flexDirection: 'column', gap: '24px'
    }}>

      {/* 상단: 초기화 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={onReset} style={{
          display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none',
          color: '#6b7280', fontSize: '13px', fontWeight: 500, cursor: 'pointer', padding: '4px 8px', borderRadius: '6px'
        }}>
          <RefreshIcon /> 초기화
        </button>
      </div>

      {/* 기본 이동 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', paddingLeft: '4px' }}>기본 이동</label>

        <div style={{ position: 'relative' }}>
          <div
            onClick={() => toggleDropdown('defaultNext')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '40px',
              padding: '0 12px', backgroundColor: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: '12px',
              cursor: 'pointer', boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
              {selectedNode.defaultNextBadge && selectedNode.defaultNextBadge !== 'next' && (
                <div style={{
                  backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '11px', fontWeight: 'bold',
                  padding: '2px 6px', borderRadius: '4px', marginRight: '8px', flexShrink: 0
                }}>
                  {selectedNode.defaultNextBadge}
                </div>
              )}
              <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {selectedNode.defaultNextTitle || '다음 필드'}
              </span>
            </div>
            <ChevronUpDown />
          </div>

          {openDropdown === 'defaultNext' && (
            <div style={{
              position: 'absolute', top: '44px', left: 0, right: 0, zIndex: 1000,
              backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxHeight: '250px', overflowY: 'auto'
            }}>
              <div
                onClick={() => {
                  onUpdateDefaultNext && onUpdateDefaultNext(selectedNode.id, 'next', '다음 필드', null);
                  setOpenDropdown(null);
                }}
                style={{ padding: '10px 12px', cursor: 'pointer', borderBottom: '1px solid #e5e7eb' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>다음 필드 (기본)</span>
              </div>

              {nodes.filter(n => n.id !== selectedNode.id).map((node, nodeIdx) => (
                <div
                  key={nodeIdx}
                  onClick={() => {
                    onUpdateDefaultNext && onUpdateDefaultNext(selectedNode.id, node.badge, node.title, node.id);
                    setOpenDropdown(null);
                  }}
                  style={{
                    padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    borderBottom: '1px solid #f3f4f6'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <div style={{
                    backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '11px', fontWeight: 'bold',
                    padding: '2px 6px', borderRadius: '4px', marginRight: '8px', flexShrink: 0
                  }}>
                    {node.badge}
                  </div>
                  <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                    {node.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => onAddLogic && onAddLogic(selectedNode.id)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '40px',
          backgroundColor: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: '12px',
          fontSize: '13px', fontWeight: 600, color: '#6b7280', cursor: 'pointer', marginTop: '4px', boxSizing: 'border-box'
        }}>
          <PlusIcon /> 새로운 로직
        </button>
      </div>

      {/* 로직 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
        {(!selectedNode.conditions || selectedNode.conditions.length === 0) ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280' }}>로직 #1</span>
            </div>
            <div style={{
              backgroundColor: '#f9fafb', borderRadius: '16px', padding: '14px', boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center',
              border: '1px dashed #d1d5db'
            }}>
              <span style={{ fontSize: '13px', color: '#9ca3af' }}>아직 설정된 로직이 없습니다.</span>
              <button onClick={() => onAddLogic && onAddLogic(selectedNode.id)} style={{
                padding: '6px 12px', backgroundColor: '#eef2ff', color: '#4f46e5', border: 'none', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', fontWeight: 600
              }}>+ 첫 로직 추가</button>
            </div>
          </div>
        ) : (
          selectedNode.conditions?.map((condition, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

              {/* 로직 헤더 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280' }}>로직 #{index + 1}</span>
                <div onClick={() => onDeleteLogic && onDeleteLogic(selectedNode.id, index)}>
                  <TrashIcon />
                </div>
              </div>

              {/* 로직 박스 내부 */}
              <div style={{
                backgroundColor: '#f9fafb', borderRadius: '16px', padding: '14px',
                display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box'
              }}>

                {/* 조건 섹션 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', color: '#6b7280', paddingLeft: '4px', marginBottom: '2px' }}>조건</span>

                  {/* 1. 대상 노드 선택 */}
                  <div style={{ position: 'relative' }}>
                    <div
                      onClick={() => toggleDropdown(`targetNode-${index}`)}
                      style={{
                        display: 'flex', alignItems: 'center', width: '100%', height: '40px', padding: '0 12px',
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', boxSizing: 'border-box'
                      }}>
                      <div style={{
                        backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '11px', fontWeight: 'bold',
                        padding: '2px 6px', borderRadius: '4px', marginRight: '8px', flexShrink: 0
                      }}>
                        {condition.targetNodeBadge || selectedNode.badge}
                      </div>
                      <span style={{ flex: 1, fontSize: '13px', color: '#374151', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left', fontWeight: 500 }}>
                        {condition.targetNodeTitle || selectedNode.title}
                      </span>
                      <ChevronUpDown />
                    </div>

                    {openDropdown === `targetNode-${index}` && (
                      <div style={{
                        position: 'absolute', top: '44px', left: 0, right: 0, zIndex: 1000,
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxHeight: '200px', overflowY: 'auto'
                      }}>

                        {/* 김문주 수정: 대상 노드에서 출발 노드를 제외하는 현상 수정 */}
                        {/* 삭제한 코드: nodes.filter(n => n.id !== selectedNode.id) */}
                        {/* {nodes.filter(n => n.id !== selectedNode.id).map((node, nodeIdx) => ( */}
                        {/* 삭제 대신 추가한 코드: {nodes.map((node, nodeIdx) => ( */}
                        {nodes.map((node, nodeIdx) => (
                          <div
                            key={nodeIdx}
                            onClick={() => {
                              onUpdateCondition && onUpdateCondition(selectedNode.id, index, {
                                targetNodeBadge: node.badge,
                                targetNodeTitle: node.title
                              });
                              setOpenDropdown(null);
                            }}
                            style={{
                              padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                              borderBottom: '1px solid #f3f4f6'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                          >
                            <div style={{
                              backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '11px', fontWeight: 'bold',
                              padding: '2px 6px', borderRadius: '4px', marginRight: '8px', flexShrink: 0
                            }}>
                              {node.badge}
                            </div>
                            <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{node.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. 비교 연산자 (같음) 🚀 수정됨 */}
                  <div style={{ position: 'relative' }}>
                    <div
                      onClick={() => toggleDropdown(`operator-${index}`)}
                      style={{
                        display: 'flex', alignItems: 'center', width: '100%', height: '36px', padding: '0 12px',
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', boxSizing: 'border-box'
                      }}>
                      <span style={{ flex: 1, fontSize: '13px', color: '#374151', fontWeight: 500, textAlign: 'left' }}>
                        {condition.operator || '같음'}
                      </span>
                      <ChevronUpDown />
                    </div>

                    {openDropdown === `operator-${index}` && (
                      <div style={{
                        position: 'absolute', top: '40px', left: 0, width: '200px', zIndex: 1000,
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxHeight: '250px', overflowY: 'auto'
                      }}>
                        {operators.map((op, opIdx) => (
                          <div
                            key={opIdx}
                            onClick={() => {
                              // 🚀 핵심: operator 필드만 업데이트
                              onUpdateCondition && onUpdateCondition(selectedNode.id, index, { operator: op });
                              setOpenDropdown(null);
                            }}
                            style={{
                              padding: '10px 12px', cursor: 'pointer',
                              borderBottom: '1px solid #f3f4f6',
                              fontSize: '13px', color: '#374151', fontWeight: 500
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                          >
                            {op}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 3. 옵션/커스텀 탭 */}
                  <div style={{ display: 'flex', backgroundColor: '#f3f4f6', padding: '4px', borderRadius: '12px', marginTop: '2px' }}>
                    <button style={{ flex: 1, height: '32px', backgroundColor: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#374151', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>옵션 선택</button>
                    <button style={{ flex: 1, height: '32px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#6b7280', cursor: 'pointer' }}>커스텀</button>
                  </div>

                  {/* 4. 선택된 값 (배열 형태) */}
                  {condition.tags?.map((tag, tagIdx) => (
                    <div key={tagIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', marginTop: tagIdx > 0 ? '4px' : '0px' }}>
                      {tagIdx > 0 && <span style={{ fontSize: '11px', fontWeight: 600, color: '#4f46e5', backgroundColor: '#eef2ff', padding: '2px 6px', borderRadius: '4px' }}>OR</span>}
                      <div
                        onClick={() => toggleDropdown(`selectedValue-${index}-${tagIdx}`)}
                        style={{
                          display: 'flex', alignItems: 'center', flex: 1, height: '40px', padding: '0 12px',
                          backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', boxSizing: 'border-box'
                        }}>
                        <span style={{ flex: 1, fontSize: '13px', color: '#374151', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center' }}>
                          {tag || '옵션을 선택하세요'}
                        </span>
                        <ChevronUpDown />
                      </div>

                      {/* 조건 삭제 버튼 (태그 삭제) */}
                      {(condition.tags?.length ?? 0) > 1 && (
                        <div onClick={() => {
                          const newTags = [...(condition.tags || [])];
                          newTags.splice(tagIdx, 1);
                          onUpdateCondition && onUpdateCondition(selectedNode.id, index, { tags: newTags });
                        }}>
                          <TrashIcon />
                        </div>
                      )}

                      {openDropdown === `selectedValue-${index}-${tagIdx}` && (
                        <div style={{
                          position: 'absolute', top: '44px', left: tagIdx > 0 ? '36px' : 0, right: (condition.tags?.length ?? 0) > 1 ? '32px' : 0, zIndex: 1000,
                          backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxHeight: '200px', overflowY: 'auto'
                        }}>
                          {selectedNode.options?.map((option, optIdx) => (
                            <div
                              key={optIdx}
                              onClick={() => {
                                const newTags = [...(condition.tags || [])];
                                newTags[tagIdx] = option;
                                onUpdateCondition && onUpdateCondition(selectedNode.id, index, { tags: newTags });
                                setOpenDropdown(null);
                              }}
                              style={{
                                padding: '10px 12px', cursor: 'pointer',
                                borderBottom: '1px solid #f3f4f6',
                                fontSize: '13px', color: '#374151', fontWeight: 500
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )) || (
                      <div style={{ fontSize: '12px', color: '#9ca3af', padding: '8px' }}>선택 가능한 옵션이 없습니다.</div>
                    )}
                </div>

                {/* 새로운 조건 추가 버튼 */}
                <button
                  onClick={() => {
                    const newTags = [...(condition.tags || []), '새로운 옵션 선택'];
                    onUpdateCondition && onUpdateCondition(selectedNode.id, index, { tags: newTags });
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '38px',
                    backgroundColor: '#ffffff', border: '1px dashed #d1d5db', borderRadius: '12px',
                    fontSize: '12px', fontWeight: 600, color: '#6b7280', cursor: 'pointer', boxSizing: 'border-box'
                  }}
                >
                  <PlusIcon /> 조건 옵션 추가 (OR)
                </button>

                <div style={{ height: '1px', backgroundColor: '#e5e7eb', width: '100%', margin: '4px 0' }} />

                {/* 이동하기 섹션 🚀 수정됨 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', color: '#6b7280', paddingLeft: '4px', marginBottom: '2px' }}>이동하기</span>
                  <div style={{ position: 'relative' }}>
                    <div
                      onClick={() => toggleDropdown(`destination-${index}`)}
                      style={{
                        display: 'flex', alignItems: 'center', width: '100%', height: '40px', padding: '0 12px',
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', boxSizing: 'border-box'
                      }}>
                      <div style={{
                        backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '11px', fontWeight: 'bold',
                        padding: '2px 6px', borderRadius: '4px', marginRight: '8px', flexShrink: 0
                      }}>
                        {condition.destinationBadge || '선택'}
                      </div>
                      <span style={{ flex: 1, fontSize: '13px', color: '#374151', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left', fontWeight: 500 }}>
                        {condition.destinationTitle || '목적지 선택'}
                      </span>
                      <ChevronUpDown />
                    </div>

                    {openDropdown === `destination-${index}` && (
                      <div style={{
                        position: 'absolute', top: '44px', left: 0, right: 0, zIndex: 1000,
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxHeight: '250px', overflowY: 'auto'
                      }}>
                        {nodes.filter(n => n.id !== selectedNode.id).map((node, nodeIdx) => (
                          <div
                            key={nodeIdx}
                            onClick={() => {
                              // 🚀 핵심: next(ID), badge, title을 세트로 업데이트
                              onUpdateCondition && onUpdateCondition(selectedNode.id, index, {
                                next: node.id,
                                destinationBadge: node.badge,
                                destinationTitle: node.title
                              });
                              setOpenDropdown(null);
                            }}
                            style={{
                              padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                              borderBottom: '1px solid #f3f4f6'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                          >
                            <div style={{
                              backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '11px', fontWeight: 'bold',
                              padding: '2px 6px', borderRadius: '4px', marginRight: '8px', flexShrink: 0
                            }}>
                              {node.badge}
                            </div>
                            <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                              {node.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )))}
      </div>
    </div>
  );
}