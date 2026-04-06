import svgPaths from "./svg-lsem4lhfpc";

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p337ae7f2} fill="var(--fill-0, #6B778C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonInlineFlex() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center justify-center pb-[8.5px] pt-[7.5px] px-[10px] relative rounded-[10.8px] shrink-0" data-name="button.inline-flex">
      <Frame />
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">초기화</p>
      </div>
    </div>
  );
}

function DivWFull2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="div.w-full">
      <ButtonInlineFlex />
    </div>
  );
}

function LabelFontMediumMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="label.font-medium:margin">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">기본 이동</p>
      </div>
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.flex-1">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pr-[71.17px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">다음 필드</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.5">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee53d40} id="Vector_2" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialogDefaultBranchSelection() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[12px]" data-name="button dialog#default-branch-selection">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <DivFlex1 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function DivFlex() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.flex">
      <LabelFontMediumMargin />
      <ButtonDialogDefaultBranchSelection />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pbb2e200} fill="var(--fill-0, #6B778C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonInlineFlex1() {
  return (
    <div className="bg-[#f6f6f6] h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button.inline-flex">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <Frame2 />
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">새로운 로직</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PTextXs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.text-xs">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">로직 #1</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p2e14d600} fill="var(--fill-0, #6B778C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[10.8px] shrink-0" data-name="div.flex">
      <PTextXs />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1e4fbf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonInlineFlex2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative rounded-[10.8px] shrink-0 size-[24px]" data-name="button.inline-flex">
      <Frame4 />
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[4px] relative shrink-0 w-full" data-name="div.flex">
      <DivFlex4 />
      <ButtonInlineFlex2 />
    </div>
  );
}

function DivH() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pl-[8px] relative shrink-0" data-name="div.h-6">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">조건</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1e4fbf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonInlineFlex3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative rounded-[10.8px] shrink-0 size-[24px]" data-name="button.inline-flex">
      <Frame5 />
    </div>
  );
}

function DivFlex9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.flex">
      <DivH />
      <ButtonInlineFlex3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pcd3d500} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextSm() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pr-[8.86px] relative shrink-0" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">평소 작업 시 AI 도구를</p>
      </div>
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative self-stretch" data-name="div.flex">
      <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
        <Svg />
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] w-[7.883px]">
          <p className="leading-[1.5]">1</p>
        </div>
      </div>
      <DivTextSm />
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[26px] items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="div.flex-1">
      <DivFlex11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.5">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee53d40} id="Vector_2" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialogBranchConditionOperand() {
  return (
    <div className="bg-[#f6f6f6] h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button dialog#branch-condition-operand-1337572795">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <DivFlex10 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function DivFlex12() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="div.flex-1">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">같음</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.5">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee53d40} id="Vector_2" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenuRadixR2U() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex h-[36px] items-center justify-between overflow-clip px-[10px] py-[8px] relative rounded-[10.8px] shrink-0" data-name="button menu#radix-_r_2u0_">
      <DivFlex12 />
      <Frame7 />
    </div>
  );
}

function ButtonInlineFlex4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[10.8px]" data-name="button.inline-flex">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] px-[10px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">옵션 선택</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonInlineFlex5() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[10.8px]" data-name="button.inline-flex">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] px-[10px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">커스텀</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFlex14() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[12.8px] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[4px] relative w-full">
          <ButtonInlineFlex4 />
          <ButtonInlineFlex5 />
        </div>
      </div>
    </div>
  );
}

function SpanBlock() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative self-stretch shrink-0" data-name="span.block">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">아니요</p>
      </div>
    </div>
  );
}

function DivFlex15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex-1">
      <SpanBlock />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.5">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee53d40} id="Vector_2" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialogInlineFlex() {
  return (
    <div className="bg-[#f6f6f6] h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button dialog.inline-flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <DivFlex15 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function DivFlex13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.flex">
      <DivFlex14 />
      <ButtonDialogInlineFlex />
    </div>
  );
}

function DivFlex8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.flex">
      <DivFlex9 />
      <ButtonDialogBranchConditionOperand />
      <ButtonMenuRadixR2U />
      <DivFlex13 />
    </div>
  );
}

function DivFlex7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.flex">
      <DivFlex8 />
      <div className="bg-[#e1e1e1] h-px shrink-0 w-full" data-name="div.bg-border" />
    </div>
  );
}

function DivFlex6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.flex">
      <DivFlex7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pbb2e200} fill="var(--fill-0, #6B778C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonInlineFlex6() {
  return (
    <div className="bg-[#f6f6f6] h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button.inline-flex">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <Frame9 />
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">새로운 조건</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.flex">
      <DivFlex6 />
      <ButtonInlineFlex6 />
    </div>
  );
}

function LabelFontMediumMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="label.font-medium:margin">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">이동하기</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pcd3d500} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.flex-1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[58.38px] relative w-full">
          <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
            <Svg1 />
            <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
              <p className="leading-[1.5]">9</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">AI 기능 도입과 관련하여</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.5">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee53d40} id="Vector_2" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialogBranchAction98097C8441034FfcAe5CD6452Ad9A() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[12px]" data-name="button dialog#branch-action-98097c84-4103-4ffc-ae5c-d6452ad9a789">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <DivFlex17 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function DivFlex16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.flex">
      <LabelFontMediumMargin1 />
      <ButtonDialogBranchAction98097C8441034FfcAe5CD6452Ad9A />
    </div>
  );
}

function DivBgGray() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10.8px] shrink-0 w-full" data-name="div.bg-gray-50">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[12px] relative w-full">
        <DivFlex5 />
        <div className="bg-[#e1e1e1] h-px shrink-0 w-full" data-name="div.bg-border" />
        <DivFlex16 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <DivFlex3 />
      <DivBgGray />
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="div.flex">
      <Div />
    </div>
  );
}

function DivRelative() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[48px] relative shrink-0 w-full" data-name="div.relative">
      <DivFlex2 />
    </div>
  );
}

function DivHFull() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-name="div.h-full">
      <DivWFull2 />
      <DivFlex />
      <ButtonInlineFlex1 />
      <DivRelative />
    </div>
  );
}

function DivWFull1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[60px] px-[12px] relative w-full">
          <DivHFull />
        </div>
      </div>
    </div>
  );
}

function DivSizeFull() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-[246px] relative" data-name="div.size-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center min-w-[inherit] overflow-x-clip overflow-y-auto relative size-full">
        <DivWFull1 />
      </div>
    </div>
  );
}

export default function DivWFull() {
  return (
    <div className="bg-white relative size-full" data-name="div.w-full">
      <div className="content-stretch flex items-start justify-center pb-[16px] pl-[5px] pr-[4px] pt-[22px] relative size-full">
        <DivSizeFull />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}