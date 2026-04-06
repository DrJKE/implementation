import React from 'react';
import svgPaths from "../../imports/DivRoundedLg-1/svg-36lgtf42ue";

interface FloatingToolbarProps {
  onBack?: () => void;
  onAlign: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onPreview?: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const BORDER_OVERLAY_CLASS = "absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12.8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]";

// --- 아이콘 컴포넌트들 (기존과 동일) ---
function Icon() { return ( <div className="relative shrink-0 size-[20px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 20 20"><g><path d={svgPaths.p2dd1b5b4} stroke="#007EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /><path d={svgPaths.p1399d500} stroke="#007EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></g></svg></div> ); }
function Icon1() { return ( <div className="relative size-[20px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 20 20"><g><path d={svgPaths.p38fbb5f0} stroke="#6B778C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /><path d={svgPaths.p3ee6a600} stroke="#6B778C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /><path d="M1.6664 9.99999H18.3331" stroke="#6B778C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></g></svg></div> ); }
function ArrowUDownLeft({ disabled }: { disabled?: boolean }) { return ( <div className="relative shrink-0 size-[20px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 20 20"><g><path d={svgPaths.p3824cf00} stroke={disabled ? "#D0D0D0" : "#6B778C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" /><path d={svgPaths.p3e6c2800} stroke={disabled ? "#D0D0D0" : "#6B778C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" /></g></svg></div> ); }
function ArrowUDownRight({ disabled }: { disabled?: boolean }) { return ( <div className="relative shrink-0 size-[20px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 20 20"><g><path d={svgPaths.pf611300} stroke={disabled ? "#D0D0D0" : "#6B778C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" /><path d={svgPaths.p25a7bc00} stroke={disabled ? "#D0D0D0" : "#6B778C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" /></g></svg></div> ); }
function Frame() { return ( <div className="relative shrink-0 size-[20px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 20 20"><g><path d={svgPaths.pd373b00} fill="#6B778C" /></g></svg></div> ); }

export default function FloatingToolbar({ onBack, onAlign, onUndo, onRedo, onPreview, canUndo, canRedo }: FloatingToolbarProps) {
  return (
    <div 
      style={{
        position: 'fixed',
        top: '72px',
        left: '323.54px', 
        right: '320px',
        zIndex: 200,
      }}
    >
      {/* 🚀 해결 포인트 1, 2 해결 완료: Tailwind 클래스를 빼고 style로 직접 강제 주입! */}
      <div 
        className="bg-white flex items-center justify-between relative rounded-[12.8px] w-full border-none shadow-none"
        style={{
          padding: '0 16px', // 🚀 1. 패딩 조절 (0은 위아래, 20px은 양옆 간격입니다. 마음대로 바꿔보세요!)
          height: '56px'     // 🚀 2. 툴바 높이 조절 (버튼들이 삐져나가지 않게 넉넉히 줬습니다)
        }}
      >
        <div aria-hidden="true" className={BORDER_OVERLAY_CLASS} />
        
        {/* 왼쪽 버튼 그룹 (절대값, 꽉 채우기 속성 전부 제거) */}
        <div className="flex items-center gap-[12px] z-10">
          <button
            onClick={onBack}
            className="bg-[#eaf2ff] flex justify-center gap-[8px] h-[32px] w-[180px] items-center px-[24px] rounded-[12px] cursor-pointer border-none outline-none"
          >
            <Icon />
            <span className="font-medium text-[#007eff] text-[14px] whitespace-nowrap">편집화면으로 돌아가기</span>
          </button>
          
          <button
            onClick={onAlign}
            className="bg-[#f6f6f6] flex justify-center gap-[6px] h-[32px] w-[100px] items-center px-[16px] rounded-[12px] cursor-pointer border-none hover:bg-[#eeeeee] transition-colors outline-none"
          >
            <div className="-rotate-90 flex items-center"><Icon1 /></div>
            <span className="font-medium text-[#6b778c] text-[14px] whitespace-nowrap">정렬하기</span>
          </button>
        </div>

        {/* 오른쪽 버튼 그룹 (flex-1 같은 너비 확장 속성 전부 제거) */}
        <div className="flex items-center gap-[12px] z-10">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className={`h-[40px] w-[40px] flex items-center justify-center rounded-[10.8px] border-none ${
              canUndo ? 'cursor-pointer hover:bg-[#f0f0f0]' : 'cursor-not-allowed opacity-40'
            }`}
          >
            <ArrowUDownLeft disabled={!canUndo} />
          </button>
          
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className={`h-[32px] w-[40px] flex items-center justify-center rounded-[10.8px] border-none ${
              canRedo ? 'cursor-pointer hover:bg-[#f0f0f0]' : 'cursor-not-allowed opacity-40'
            }`}
          >
            <ArrowUDownRight disabled={!canRedo} />
          </button>
          
          <div className="bg-[#e1e1e1] h-[24px] w-px mx-[4px]" />
          
          <button
            onClick={onPreview}
            className="bg-[#f6f6f6] flex justify-center h-[32px] w-[100px] flex gap-[8px] items-center px-[16px] rounded-[12px] border-none cursor-pointer hover:bg-[#eeeeee] transition-colors"
          >
            <Frame />
            <span className="font-medium text-[#6b778c] text-[14px] whitespace-nowrap">미리보기</span>
          </button>
        </div>
      </div>
    </div>
  );
}