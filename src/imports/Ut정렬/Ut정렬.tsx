import svgPaths from "./svg-4iasrd4t6g";

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

function PTextSm() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">평소 작업 시 AI 도구를 활용하시나요?</p>
      </div>
    </div>
  );
}

function DivFlex() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] w-[7.883px]">
            <p className="leading-[1.5]">1</p>
          </div>
        </div>
        <PTextSm />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">예</p>
      </div>
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm1 />
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group3 />
          <DivFlex2 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">아니요</p>
      </div>
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm2 />
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group4 />
          <DivFlex4 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-[calc(50%+0.5px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2192">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function IconFunnel() {
  return (
    <div className="h-[27px] relative shrink-0 w-[16px]" data-name="icon_funnel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 27">
        <g id="icon_funnel">
          <path d={svgPaths.p14b9f080} fill="var(--fill-0, #687384)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">아니요</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">같음</p>
      </div>
    </div>
  );
}

function PTextSm3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame />
      <Frame1 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <PTextSm3 />
    </div>
  );
}

function Default() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#007eff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex />
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.01px)] opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] opacity-0 size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame17 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame18 />
              </div>
              <div className="bg-[#eaf2ff] relative rounded-[12px] shrink-0 w-full" data-name="options">
                <div aria-hidden="true" className="absolute border-2 border-[#007eff] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative w-full">
                  <Group5 />
                  <IconFunnel />
                  <Frame42 />
                </div>
              </div>
            </div>
          </div>
        </div>
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

function PTextSm4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px] mb-0">가장 선호하는 AI 아이콘 생성 스타일은</p>
        <p className="leading-[19.6px]">무엇인가요?</p>
      </div>
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[6px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg1 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">3-1</p>
          </div>
        </div>
        <PTextSm4 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">3D 클레이</p>
      </div>
    </div>
  );
}

function DivFlex7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm5 />
    </div>
  );
}

function DivFlex6() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group6 />
          <DivFlex7 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">미니멀 라인</p>
      </div>
    </div>
  );
}

function DivFlex9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm6 />
    </div>
  );
}

function DivFlex8() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group7 />
          <DivFlex9 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex8 />
    </div>
  );
}

function Group8() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">플랫 컬러</p>
      </div>
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm7 />
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group8 />
          <DivFlex11 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex10 />
    </div>
  );
}

function Group9() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">핸드 드로잉</p>
      </div>
    </div>
  );
}

function DivFlex13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm8 />
    </div>
  );
}

function DivFlex12() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group9 />
          <DivFlex13 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex12 />
    </div>
  );
}

function Group10() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">기타</p>
      </div>
    </div>
  );
}

function DivFlex15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm9 />
    </div>
  );
}

function DivFlex14() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group10 />
          <DivFlex15 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex14 />
    </div>
  );
}

function Group11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+147px)] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2192">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function IconFunnel1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[16px]" data-name="icon_funnel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 27">
        <g id="icon_funnel">
          <path d={svgPaths.p14b9f080} fill="var(--fill-0, #687384)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">3D 클레이</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">같음</p>
      </div>
    </div>
  );
}

function PTextSm10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame2 />
      <Frame3 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#efddff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b125aa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">또는</p>
      </div>
    </div>
  );
}

function PTextSm11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">플랫 컬러</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">같음</p>
      </div>
    </div>
  );
}

function PTextSm12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame5 />
      <Frame6 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
      <PTextSm10 />
      <PTextSm11 />
      <PTextSm12 />
    </div>
  );
}

function Default1() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex5 />
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.01px)] opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#3d00f0] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #3D00F0)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame19 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame20 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame21 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame22 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame23 />
              </div>
              <div className="bg-[#eaf2ff] relative rounded-[12px] shrink-0 w-full" data-name="options">
                <div aria-hidden="true" className="absolute border-2 border-[rgba(0,126,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative w-full">
                  <Group11 />
                  <IconFunnel1 />
                  <Frame43 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
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

function PTextSm13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px] mb-0 whitespace-pre">{`선택하신 스타일의 '입체감'이나 '그림자' `}</p>
        <p className="leading-[19.6px] whitespace-pre">농도를 조절하는 기능이 필요한가요?</p>
      </div>
    </div>
  );
}

function DivFlex16() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[6px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg2 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">3-2</p>
          </div>
        </div>
        <PTextSm13 />
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">예</p>
      </div>
    </div>
  );
}

function DivFlex18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm14 />
    </div>
  );
}

function DivFlex17() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group12 />
          <DivFlex18 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex17 />
    </div>
  );
}

function Group13() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">아니요</p>
      </div>
    </div>
  );
}

function DivFlex20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm15 />
    </div>
  );
}

function DivFlex19() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group13 />
          <DivFlex20 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex19 />
    </div>
  );
}

function Default2() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex16 />
          <div className="-translate-x-1/2 absolute bg-white left-[calc(50%+0.01px)] size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#3d00f0] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #3D00F0)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] opacity-0 size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame24 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame25 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col gap-[40px] items-center left-[1501px] p-[16px] rounded-[20px] top-[555px]">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-center pb-[9px] relative shrink-0 w-[332px]" data-name="Default">
        <Default1 />
      </div>
      <div className="content-stretch flex flex-col items-center pb-[9px] relative shrink-0 w-[332px]" data-name="Default">
        <Default2 />
      </div>
    </div>
  );
}

function Svg3() {
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

function PTextSm16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">어떤 방식의 레퍼런스 수집을 선호하시나요?</p>
      </div>
    </div>
  );
}

function DivFlex21() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg3 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] w-[7.883px]">
            <p className="leading-[1.5]">5</p>
          </div>
        </div>
        <PTextSm16 />
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">키워드 기반 이미지 추천</p>
      </div>
    </div>
  );
}

function DivFlex23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm17 />
    </div>
  );
}

function DivFlex22() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group14 />
          <DivFlex23 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]">
      <DivFlex22 />
    </div>
  );
}

function Group15() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">경쟁사 UI 패턴 분석</p>
      </div>
    </div>
  );
}

function DivFlex25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm18 />
    </div>
  );
}

function DivFlex24() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group15 />
          <DivFlex25 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]">
      <DivFlex24 />
    </div>
  );
}

function Group16() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">무드보드 자동 생성</p>
      </div>
    </div>
  );
}

function DivFlex27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm19 />
    </div>
  );
}

function DivFlex26() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group16 />
          <DivFlex27 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]">
      <DivFlex26 />
    </div>
  );
}

function Group17() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">기타</p>
      </div>
    </div>
  );
}

function DivFlex29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm20 />
    </div>
  );
}

function DivFlex28() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group17 />
          <DivFlex29 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]">
      <DivFlex28 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[240px] relative shrink-0 w-[296px]" data-name="내부옵션">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 absolute content-stretch flex h-[48px] items-start left-1/2 top-0" data-name="options">
          <Frame26 />
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex h-[48px] items-start left-1/2 top-[64px]" data-name="options">
          <Frame27 />
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex h-[48px] items-start left-1/2 top-[128px]" data-name="options">
          <Frame28 />
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex h-[48px] items-start left-1/2 top-[192px]" data-name="options">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[-7px] size-[16px] top-[21px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2188">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #808080)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[16px] top-[-7px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2189" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute right-[-7px] size-[16px] top-[21px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2190">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #808080)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[189px] left-1/2 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Default3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start justify-center left-[2837px] p-[18px] rounded-[16px] top-[150px]" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivFlex21 />
      <Component />
      <Group />
      <Group1 />
      <Group2 />
      <Group18 />
    </div>
  );
}

function Svg4() {
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

function PTextSm21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px] mb-0">AI 기능을 통해 가장 해결하고 싶은</p>
        <p className="leading-[19.6px]">{`디자인 업무는 무엇인가요? `}</p>
      </div>
    </div>
  );
}

function DivFlex30() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg4 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] w-[7.883px]">
            <p className="leading-[1.5]">2</p>
          </div>
        </div>
        <PTextSm21 />
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">아이콘 생성</p>
      </div>
    </div>
  );
}

function DivFlex32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm22 />
    </div>
  );
}

function DivFlex31() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group19 />
          <DivFlex32 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex31 />
    </div>
  );
}

function Group20() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">레이아웃 배치</p>
      </div>
    </div>
  );
}

function DivFlex34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm23 />
    </div>
  );
}

function DivFlex33() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group20 />
          <DivFlex34 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex33 />
    </div>
  );
}

function Group21() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">컬러 추천</p>
      </div>
    </div>
  );
}

function DivFlex36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm24 />
    </div>
  );
}

function DivFlex35() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group21 />
          <DivFlex36 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex35 />
    </div>
  );
}

function Group22() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">배경 제거</p>
      </div>
    </div>
  );
}

function DivFlex38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm25 />
    </div>
  );
}

function DivFlex37() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group22 />
          <DivFlex38 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex37 />
    </div>
  );
}

function Group23() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm26() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">텍스트 작성</p>
      </div>
    </div>
  );
}

function DivFlex40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm26 />
    </div>
  );
}

function DivFlex39() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group23 />
          <DivFlex40 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex39 />
    </div>
  );
}

function Group24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+147px)] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2192">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function IconFunnel2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[16px]" data-name="icon_funnel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 27">
        <g id="icon_funnel">
          <path d={svgPaths.p14b9f080} fill="var(--fill-0, #687384)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">아이콘 생성</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">포함</p>
      </div>
    </div>
  );
}

function PTextSm27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame7 />
      <Frame8 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#efddff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b125aa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">또는</p>
      </div>
    </div>
  );
}

function PTextSm28() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">배경 제거</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">포함</p>
      </div>
    </div>
  );
}

function PTextSm29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame10 />
      <Frame11 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
      <PTextSm27 />
      <PTextSm28 />
      <PTextSm29 />
    </div>
  );
}

function Default4() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex30 />
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.01px)] opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame30 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame31 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame32 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame33 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame34 />
              </div>
              <div className="bg-[#eaf2ff] relative rounded-[12px] shrink-0 w-full" data-name="options">
                <div aria-hidden="true" className="absolute border-2 border-[rgba(0,126,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative w-full">
                  <Group24 />
                  <IconFunnel2 />
                  <Frame44 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
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

function PTextSm30() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px] mb-0 whitespace-pre">{`AI 기능을 도입한다면, 어떤 '디자인 단계'에서 `}</p>
        <p className="leading-[19.6px] whitespace-pre">가장 큰 도움을 받고 싶으신가요?</p>
      </div>
    </div>
  );
}

function DivFlex41() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[6px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg5 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">4</p>
          </div>
        </div>
        <PTextSm30 />
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm31() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">리서치 및 아이디어 발산</p>
      </div>
    </div>
  );
}

function DivFlex43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm31 />
    </div>
  );
}

function DivFlex42() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group25 />
          <DivFlex43 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex42 />
    </div>
  );
}

function Group26() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm32() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">실무 제작 및 에셋 생성</p>
      </div>
    </div>
  );
}

function DivFlex45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm32 />
    </div>
  );
}

function DivFlex44() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group26 />
          <DivFlex45 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex44 />
    </div>
  );
}

function Group27() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm33() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">검수 및 피드백 자동화</p>
      </div>
    </div>
  );
}

function DivFlex47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm33 />
    </div>
  );
}

function DivFlex46() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group27 />
          <DivFlex47 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex46 />
    </div>
  );
}

function Group28() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-[calc(50%+0.5px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2192">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function IconFunnel3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[16px]" data-name="icon_funnel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 27">
        <g id="icon_funnel">
          <path d={svgPaths.p14b9f080} fill="var(--fill-0, #687384)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">실무 제작...</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">포함</p>
      </div>
    </div>
  );
}

function PTextSm34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame12 />
      <Frame13 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <PTextSm34 />
    </div>
  );
}

function Group29() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-[calc(50%+0.5px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 2192">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function IconFunnel4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[16px]" data-name="icon_funnel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 27">
        <g id="icon_funnel">
          <path d={svgPaths.p14b9f080} fill="var(--fill-0, #687384)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#dae2ed] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7d7e84] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">검수 및 피...</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#c1d9ff] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[50px] shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#007eff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">포함</p>
      </div>
    </div>
  );
}

function PTextSm35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">만약</p>
      </div>
      <Frame14 />
      <Frame15 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">일 경우</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <PTextSm35 />
    </div>
  );
}

function Default6() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex41 />
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame35 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame36 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame37 />
              </div>
            </div>
          </div>
          <div className="bg-[#eaf2ff] relative rounded-[12px] shrink-0 w-full" data-name="options">
            <div aria-hidden="true" className="absolute border-2 border-[rgba(0,126,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative w-full">
              <Group28 />
              <IconFunnel3 />
              <Frame45 />
            </div>
          </div>
          <div className="bg-[#eaf2ff] relative rounded-[12px] shrink-0 w-full" data-name="options">
            <div aria-hidden="true" className="absolute border-2 border-[rgba(0,126,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative w-full">
              <Group29 />
              <IconFunnel4 />
              <Frame46 />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-1/2 opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] size-[16px] top-[30px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[323px] size-[16px] top-[30px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mb-[-9px] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-0 mt-[8px] relative row-1 w-[290px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290 2">
            <path d="M0 1H290" id="Vector 439" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="col-1 ml-[137.01px] mt-0 relative row-1 size-[16px]" data-name="연결점">
        <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
        <div className="absolute inset-1/4">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Default5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[2185px] pb-[9px] top-[141px] w-[332px]" data-name="Default">
      <Default6 />
      <Group30 />
    </div>
  );
}

function Svg6() {
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

function PTextSm36() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">유료 플랜 도입 시, 팀 단위 결제와</p>
        <p className="leading-[1.5]">{`개인 결제 중 무엇을 선호하시나요? `}</p>
      </div>
    </div>
  );
}

function DivFlex48() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[6px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg6 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
        <PTextSm36 />
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm37() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">팀 단위 결제 (공동 관리)</p>
      </div>
    </div>
  );
}

function DivFlex50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm37 />
    </div>
  );
}

function DivFlex49() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group31 />
          <DivFlex50 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex49 />
    </div>
  );
}

function Group32() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">개인별 구독 (개별 관리)</p>
      </div>
    </div>
  );
}

function DivFlex52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm38 />
    </div>
  );
}

function DivFlex51() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group32 />
          <DivFlex52 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex51 />
    </div>
  );
}

function Group33() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm39() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">프로젝트 별 종량제 (사용량 기반)</p>
      </div>
    </div>
  );
}

function DivFlex54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm39 />
    </div>
  );
}

function DivFlex53() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group33 />
          <DivFlex54 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex53 />
    </div>
  );
}

function Group34() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm40() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">무료 버전만 사용 희망</p>
      </div>
    </div>
  );
}

function DivFlex56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm40 />
    </div>
  );
}

function DivFlex55() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group34 />
          <DivFlex56 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]">
      <DivFlex55 />
    </div>
  );
}

function Default8() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex48 />
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame38 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame39 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame40 />
              </div>
            </div>
          </div>
          <div className="h-[48px] relative shrink-0" data-name="options">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
              <Frame41 />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-1/2 opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] size-[16px] top-[30px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[323px] size-[16px] top-[30px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mb-[-9px] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-0 mt-[8px] relative row-1 w-[290px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290 2">
            <path d="M0 1H290" id="Vector 439" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="col-1 ml-[137.01px] mt-0 relative row-1 size-[16px]" data-name="연결점">
        <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
        <div className="absolute inset-1/4">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Default7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[4141px] pb-[9px] top-[141px] w-[332px]" data-name="Default">
      <Default8 />
      <Group35 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p2996c400} fill="var(--fill-0, #2272AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2272af] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">9</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder() {
  return (
    <div className="bg-[#e9f1f7] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
      <Frame16 />
      <SpanTextXs />
    </div>
  );
}

function PTextSm41() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">AI 기능 도입과 관련하여 보안상 가장</p>
        <p className="leading-[1.5]">우려되는 점은 무엇인가요?</p>
      </div>
    </div>
  );
}

function DivFlex57() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <DivBorder />
        <PTextSm41 />
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">답변을 입력해주세요</p>
      </div>
    </div>
  );
}

function DivFlex59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm42 />
    </div>
  );
}

function DivFlex58() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group36 />
          <DivFlex59 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex58 />
    </div>
  );
}

function Default10() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex57 />
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame48 />
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-1/2 opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] size-[16px] top-[30px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[323px] size-[16px] top-[30px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mb-[-9px] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-0 mt-[8px] relative row-1 w-[290px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290 2">
            <path d="M0 1H290" id="Vector 439" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="bg-white col-1 ml-[137.01px] mt-0 relative row-1 size-[16px]" data-name="연결점">
        <div className="absolute bg-white border-2 border-[#3d00f0] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
        <div className="absolute inset-1/4">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #3D00F0)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Default9() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[4793px] pb-[9px] top-[141px] w-[332px]" data-name="Default">
      <Default10 />
      <Group37 />
    </div>
  );
}

function Svg7() {
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

function PTextSm43() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">가장 자동화가 시급한 반복 작업은 무엇인가</p>
        <p className="leading-[1.5]">요?</p>
      </div>
    </div>
  );
}

function DivFlex60() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg7 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] w-[7.883px]">
            <p className="leading-[1.5]">6</p>
          </div>
        </div>
        <PTextSm43 />
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm44() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">아이콘 사이즈별 변환</p>
      </div>
    </div>
  );
}

function DivFlex62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm44 />
    </div>
  );
}

function DivFlex61() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group38 />
          <DivFlex62 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex61 />
    </div>
  );
}

function Group39() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm45() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">레이어 네이밍 자동화</p>
      </div>
    </div>
  );
}

function DivFlex64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm45 />
    </div>
  );
}

function DivFlex63() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group39 />
          <DivFlex64 />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex63 />
    </div>
  );
}

function Group40() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm46() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">이미지 배경 제거</p>
      </div>
    </div>
  );
}

function DivFlex66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm46 />
    </div>
  );
}

function DivFlex65() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group40 />
          <DivFlex66 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex65 />
    </div>
  );
}

function Group41() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm47() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">다국어 텍스트 치환</p>
      </div>
    </div>
  );
}

function DivFlex68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm47 />
    </div>
  );
}

function DivFlex67() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group41 />
          <DivFlex68 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex67 />
    </div>
  );
}

function Default11() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex60 />
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.01px)] opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-white left-[calc(50%-165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#3d00f0] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #3D00F0)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame49 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame50 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame51 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame52 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
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

function PTextSm48() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.308px] whitespace-nowrap">
        <p className="leading-[1.5]">AI가 검수해주길 바라는 항목을 선택해 주세요</p>
      </div>
    </div>
  );
}

function DivFlex69() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg8 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] w-[7.883px]">
            <p className="leading-[1.5]">7</p>
          </div>
        </div>
        <PTextSm48 />
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm49() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">디자인 시스템 준수 여부</p>
      </div>
    </div>
  );
}

function DivFlex71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm49 />
    </div>
  );
}

function DivFlex70() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group42 />
          <DivFlex71 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex70 />
    </div>
  );
}

function Group43() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm50() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">오타 및 비문 체크</p>
      </div>
    </div>
  );
}

function DivFlex73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm50 />
    </div>
  );
}

function DivFlex72() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group43 />
          <DivFlex73 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex72 />
    </div>
  );
}

function Group44() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">접근성(대비 등) 가이드 체크</p>
      </div>
    </div>
  );
}

function DivFlex75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm51 />
    </div>
  );
}

function DivFlex74() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group44 />
          <DivFlex75 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex74 />
    </div>
  );
}

function Default12() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex69 />
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.01px)] opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-white left-[calc(50%-165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#3d00f0] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #3D00F0)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #3D00F0)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame53 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame54 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame55 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg9() {
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

function PTextSm52() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 whitespace-pre">{`AI 도구 도입을 주저하게 만드는 가장 큰 `}</p>
        <p className="leading-[1.5] whitespace-pre">이유는?</p>
      </div>
    </div>
  );
}

function DivFlex76() {
  return (
    <div className="relative shrink-0 w-[296px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg9 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">10</p>
          </div>
        </div>
        <PTextSm52 />
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm53() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[51.041px]">저작권 및 보안 우려</p>
      </div>
    </div>
  );
}

function DivFlex78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm53 />
    </div>
  );
}

function DivFlex77() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group45 />
          <DivFlex78 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex77 />
    </div>
  );
}

function Group46() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm54() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[51.041px]">학습 비용(시간) 부담</p>
      </div>
    </div>
  );
}

function DivFlex80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm54 />
    </div>
  );
}

function DivFlex79() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group46 />
          <DivFlex80 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex79 />
    </div>
  );
}

function Group47() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm55() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[51.041px]">기존 툴과의 호환성 부족</p>
      </div>
    </div>
  );
}

function DivFlex82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm55 />
    </div>
  );
}

function DivFlex81() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group47 />
          <DivFlex82 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex81 />
    </div>
  );
}

function Group48() {
  return (
    <div className="-translate-y-1/2 absolute right-[-7px] size-[16px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2191" opacity="0">
          <rect fill="var(--fill-0, white)" height="14" id="div.react-flow__handle" rx="7" stroke="var(--stroke-0, #E2E2E2)" strokeWidth="2" width="14" x="1" y="1" />
          <circle cx="8" cy="8" fill="var(--fill-0, #E2E2E2)" id="Ellipse 1" r="4" />
        </g>
      </svg>
    </div>
  );
}

function PTextSm56() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="p.text-sm">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">인공적인 결과물에 대한 거부감</p>
      </div>
    </div>
  );
}

function DivFlex84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="div.flex">
      <PTextSm56 />
    </div>
  );
}

function DivFlex83() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
          <Group48 />
          <DivFlex84 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex83 />
    </div>
  );
}

function Default13() {
  return (
    <div className="bg-white mb-[-9px] relative rounded-[16px] shrink-0 w-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative w-full">
          <DivFlex76 />
          <div className="-translate-x-1/2 absolute left-[calc(50%+0.01px)] opacity-0 size-[16px] top-[-7px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%-165px)] size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#808080] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #808080)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, #808080)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute left-[calc(50%+165px)] opacity-0 size-[16px] top-[21px]" data-name="연결점">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
              <div className="absolute inset-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[296px]" data-name="내부옵션">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative w-full">
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame56 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame57 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame58 />
              </div>
              <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
                <Frame59 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg10() {
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

function Svg11() {
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

function Svg12() {
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

function Svg13() {
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

function Svg14() {
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

function Svg15() {
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

function Svg16() {
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

function Svg17() {
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

function Svg18() {
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

function Svg19() {
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

function Svg20() {
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

function Svg21() {
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

function Svg22() {
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

function Svg23() {
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

function Svg24() {
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

export default function Ut() {
  return (
    <div className="bg-[#fafbfc] relative size-full" data-name="UT 정렬">
      <div className="absolute content-stretch flex flex-col items-center left-[197px] pb-[9px] top-[150px] w-[332px]" data-name="Default">
        <Default />
      </div>
      <Frame47 />
      <Default3 />
      <div className="absolute content-stretch flex flex-col items-center left-[849px] pb-[9px] top-[150px] w-[332px]" data-name="Default">
        <Default4 />
      </div>
      <Default5 />
      <Default7 />
      <Default9 />
      <div className="absolute content-stretch flex flex-col items-center left-[3489px] pb-[9px] top-[555px] w-[332px]" data-name="Default">
        <Default11 />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-[3489px] pb-[9px] top-[929px] w-[332px]" data-name="Default">
        <Default12 />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-[5445px] pb-[9px] top-[150px] w-[332px]" data-name="Default">
        <Default13 />
      </div>
      <div className="absolute h-[1145.5px] left-[518px] top-[289px] w-[4441px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4442 1146.5">
          <path d={svgPaths.p21465340} id="Vector 573" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[545px] px-[8px] py-[6px] rounded-[16px] top-[344px]">
        <div aria-hidden="true" className="absolute border border-[#3d00f0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg10 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">9</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute h-0 left-[5131px] top-[179px] w-[308px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 2">
            <path d="M0 1H308" id="Vector 575" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[4479px] top-[179px] w-[308px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 2">
            <path d="M0 1H308" id="Vector 575" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[535px] top-[179px] w-[308px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 2">
            <path d="M0 1H308" id="Vector 575" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[1169px] top-[600px] w-[342px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 2">
            <path d="M0 1H342" id="Vector 580" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[2523px] top-[179px] w-[308px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 2">
            <path d="M0 1H308" id="Vector 575" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[51px] left-[1855px] top-[549px] w-[496px]">
        <div className="absolute inset-[0_-0.2%_-1.96%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 497 52">
            <path d={svgPaths.p1884eb00} id="Vector 582" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[103px] left-[3827px] top-[481px] w-[480px]">
        <div className="absolute inset-[0_-0.21%_-0.97%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 481 104">
            <path d={svgPaths.p14e1c030} id="Vector 584" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[477px] left-[3827px] top-[481px] w-[480px]">
        <div className="absolute inset-[0_-0.21%_-0.21%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 481 478">
            <path d={svgPaths.p1dd9fbc0} id="Vector 585" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[615px] left-[1855px] top-[549px] w-[496px]">
        <div className="absolute inset-[0_-0.2%_-0.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 497 616">
            <path d={svgPaths.p37a7ebb0} id="Vector 583" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[1187px] top-[179px] w-[992px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 992 2">
            <path d="M0 1H992" id="Vector 578" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[3175px] top-[179px] w-[960px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 2">
            <path d="M0 1H960" id="Vector 581" stroke="var(--stroke-0, #808080)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[5141px] px-[8px] py-[6px] rounded-[16px] top-[159px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg11 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">10</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[4489px] px-[8px] py-[6px] rounded-[16px] top-[159px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg12 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">9</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[545px] px-[8px] py-[6px] rounded-[16px] top-[159px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg13 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">2</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1197px] px-[8px] py-[6px] rounded-[16px] top-[159px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg14 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">4</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[3185px] px-[8px] py-[6px] rounded-[16px] top-[159px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg15 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[2533px] px-[8px] py-[6px] rounded-[16px] top-[159px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg16 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">5</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1881px] px-[8px] py-[6px] rounded-[16px] top-[580px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg17 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">4</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[3837px] px-[8px] py-[6px] rounded-[16px] top-[564px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg18 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[3837px] px-[8px] py-[6px] rounded-[16px] top-[938px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg19 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1881px] px-[8px] py-[6px] rounded-[16px] top-[1144px]">
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg20 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">4</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1197px] px-[8px] py-[6px] rounded-[16px] top-[580px]">
        <div aria-hidden="true" className="absolute border border-[#3d00f0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg21 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">3-1</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute h-[108px] left-[1683px] top-[1021px] w-[316.5px]">
        <div className="absolute inset-[-0.93%_-0.32%_0_-0.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 318.5 109">
            <path d={svgPaths.p55afe40} id="Vector 485" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[458px] left-[2505px] top-[500px] w-[978px]">
        <div className="absolute inset-[-0.22%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 978 460">
            <path d={svgPaths.p32283760} id="Vector 586" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[151px] left-[2505px] top-[433px] w-[978px]">
        <div className="absolute inset-[-0.66%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 978 153">
            <path d={svgPaths.p20a1df40} id="Vector 587" stroke="var(--stroke-0, #3D00F0)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1881px] px-[8px] py-[6px] rounded-[16px] top-[1001px]">
        <div aria-hidden="true" className="absolute border border-[#3d00f0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg22 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">3-2</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[2533px] px-[8px] py-[6px] rounded-[16px] top-[413px]">
        <div aria-hidden="true" className="absolute border border-[#3d00f0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg23 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">6</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[2533px] px-[8px] py-[6px] rounded-[16px] top-[480px]">
        <div aria-hidden="true" className="absolute border border-[#3d00f0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
          <Svg24 />
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
            <p className="leading-[1.5]">7</p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <p className="leading-[19.6px]">이동</p>
        </div>
      </div>
    </div>
  );
}