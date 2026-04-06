import svgPaths from "./svg-cdbqlw3mwv";
// Placeholder avatars (figma:asset/ protocol removed for Vite compatibility)
const makeAvatar = (color: string) => `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><rect width='32' height='32' fill='${encodeURIComponent(color)}' rx='16'/></svg>`;
const img = makeAvatar('#A259FF');
const img1 = makeAvatar('#1ABCFE');
const img2 = makeAvatar('#F24E1E');
const img3 = makeAvatar('#0ACF83');
const img4 = makeAvatar('#FF7262');

function Group() {
  return (
    <div className="absolute bottom-1/4 left-0 right-0 top-1/4" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 20">
        <g id="Group">
          <path d={svgPaths.p1d187380} fill="var(--fill-0, #007EFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[26px]" data-name="Frame">
      <Group />
    </div>
  );
}

function ATransitionColors() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="a.transition-colors">
      <Frame />
    </div>
  );
}

function DivTruncate() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="div.truncate">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d6269] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">워크스페이스명</p>
      </div>
    </div>
  );
}

function ATransitionColors1() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-w-[300px] p-[12px] relative rounded-[10.8px] shrink-0" data-name="a.transition-colors">
      <DivTruncate />
    </div>
  );
}

function LiItemsCenter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="li.items-center">
      <ATransitionColors1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #5D6269)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function LiM() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="li.m-0">
      <Frame1 />
    </div>
  );
}

function DivOverflowHidden() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="div.overflow-hidden">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d6269] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">프로젝트명</p>
      </div>
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-w-[200px] min-w-[100px] overflow-clip px-[12px] relative rounded-[10.8px] shrink-0" data-name="div.flex">
      <DivOverflowHidden />
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="div.flex">
      <DivFlex3 />
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0" data-name="div.flex">
      <DivFlex2 />
    </div>
  );
}

function OlItemsCenter() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ol.items-center">
      <ATransitionColors />
      <LiItemsCenter />
      <LiM />
      <DivFlex1 />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="breadcrumb">
      <OlItemsCenter />
    </div>
  );
}

function DivFlex() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[790.23px]" data-name="div.flex">
      <Breadcrumb />
    </div>
  );
}

function ButtonDialogInlineFlex() {
  return (
    <div className="absolute h-[32px] right-0 top-0 w-[57px]" data-name="button dialog.inline-flex">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 32">
        <g id="button dialog.inline-flex">
          <path d={svgPaths.p128e3f60} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="조민정">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
      </div>
    </div>
  );
}

function SpanRelative() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]" data-name="span.relative">
      <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Component />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[32px] items-center left-[96px] top-0 w-[57px]">
      <ButtonDialogInlineFlex />
      <SpanRelative />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="조민정">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[109.81%] left-[-7.92%] max-w-none top-[-0.28%] w-[114.29%]" src={img1} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="조민정">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[118.16%] left-[-15.63%] max-w-none top-[-7.99%] w-[137.5%]" src={img2} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative size-[32px]" data-name="조민정">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[115.07%] left-[-10.61%] max-w-none top-[-5.8%] w-[120.92%]" src={img3} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="조민정">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[109.47%] left-[-7.18%] max-w-none top-[-4.91%] w-[113.52%]" src={img4} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[153px]">
      <Frame2 />
      <div className="absolute left-[72px] rounded-[114.031px] size-[32px] top-0" data-name="span.relative">
        <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          <Component1 />
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[114.031px]" />
      </div>
      <div className="absolute left-[48px] rounded-[114.031px] size-[32px] top-0" data-name="span.relative">
        <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          <Component2 />
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[114.031px]" />
      </div>
      <div className="absolute left-[24px] rounded-[114.031px] size-[32px] top-0" data-name="span.relative">
        <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[32.114px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-[-0.2deg]">
              <Component3 />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[114.031px]" />
      </div>
      <div className="absolute content-stretch flex items-start justify-center left-0 overflow-clip rounded-[114.031px] size-[32px] top-0" data-name="span.relative/Variant6">
        <Component4 />
      </div>
    </div>
  );
}

function DivInlineFlex() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] h-[36px] items-center px-[8px] relative rounded-[10.8px] shrink-0" data-name="div.inline-flex">
      <Frame3 />
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="div.flex">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[10.8px] shrink-0 size-[36px]" data-name="button dialog.inline-flex">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon_20x20">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute bottom-[40.63%] left-1/2 right-[34.38%] top-[31.25%]" data-name="Vector">
            <div className="absolute inset-[-13.33%_-24%_-13.34%_-24%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.62511 7.12511">
                <path d="M0.75 0.75V4.5L3.875 6.375" id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[59.38%] left-[12.5%] right-[71.88%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-24%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.625 4.625">
                <path d="M3.875 3.875H0.75V0.75" id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[15.63%_15.63%_15.62%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.45%_-5.22%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8746 15.25">
                <path d={svgPaths.p2564a280} id="Vector" stroke="var(--stroke-0, #6B778C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[10.8px] shrink-0 size-[36px]" data-name="button dialog.inline-flex">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon_20x20">
          <div className="absolute inset-[29.17%_8.32%_29.16%_8.36%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6645 8.33333">
              <path d={svgPaths.p305d5a00} fill="var(--fill-0, #6B778C)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[10.8px] shrink-0 size-[36px]" data-name="button dialog.inline-flex">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon_20x20">
          <div className="absolute inset-[8.33%_9.49%_8.34%_9.49%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2055 16.6667">
              <path d={svgPaths.p370a5f00} fill="var(--fill-0, #6B778C)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#007eff] content-stretch flex h-[36px] items-center justify-center min-w-[75px] px-[14px] py-[8px] relative rounded-[10.8px] shrink-0" data-name="button_logic_edit">
        <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">게시하기</p>
        </div>
      </div>
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[790.23px]" data-name="div.flex">
      <DivFlex5 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full" data-name="Header">
      <DivFlex />
      <div className="bg-[#f3f4f6] content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[12.8px] shrink-0" data-name="GNB">
        <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[10.8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="button_GNB">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#17171b] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
            <p className="leading-[1.5]">만들기</p>
          </div>
        </div>
        <button className="content-stretch cursor-pointer flex items-center justify-center px-[12px] py-[6px] relative rounded-[10.8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="button_GNB">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687384] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
            <p className="leading-[1.5]">연동하기</p>
          </div>
        </button>
        <button className="content-stretch cursor-pointer flex items-center justify-center px-[12px] py-[6px] relative rounded-[10.8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="button_GNB">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687384] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
            <p className="leading-[1.5]">공유하기</p>
          </div>
        </button>
        <button className="content-stretch cursor-pointer flex items-center justify-center px-[12px] py-[6px] relative rounded-[10.8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="button_GNB">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687384] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
            <p className="leading-[1.5]">결과보기</p>
          </div>
        </button>
      </div>
      <DivFlex4 />
    </div>
  );
}