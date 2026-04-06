import svgPaths from "./svg-ukg3mbkukz";

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

function Group() {
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
          <Group />
          <DivFlex2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex1 />
    </div>
  );
}

function Group1() {
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
          <Group1 />
          <DivFlex4 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <DivFlex3 />
    </div>
  );
}

function Group2() {
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <PTextSm3 />
    </div>
  );
}

export default function Default() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[18px] relative rounded-[16px] size-full" data-name="Default">
      <div aria-hidden="true" className="absolute border-2 border-[#808080] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivFlex />
      <div className="opacity-0 relative shrink-0 size-[16px]" data-name="연결점">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
          <div className="absolute inset-1/4">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0 size-[16px]" data-name="연결점">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute bg-white border-2 border-[#e2e2e2] border-solid inset-0 rounded-[40px]" data-name="div.react-flow__handle" />
          <div className="absolute inset-1/4">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 1" r="3.33333" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="연결점">
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
            <Frame2 />
          </div>
          <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="options">
            <Frame3 />
          </div>
          <div className="bg-[#eaf2ff] relative rounded-[12px] shrink-0 w-full" data-name="options">
            <div aria-hidden="true" className="absolute border-2 border-[rgba(0,126,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative w-full">
              <Group2 />
              <IconFunnel />
              <Frame4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}