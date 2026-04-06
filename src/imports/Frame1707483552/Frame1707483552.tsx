import svgPaths from "./svg-tc5i9rnhph";

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

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <div className="bg-[#eaedf8] content-stretch flex gap-[4px] items-center px-[7px] py-[5px] relative rounded-[10.8px] shrink-0" data-name="로직/설정/질문검색/아이콘">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
        <Svg />
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[12px] tracking-[-0.12px] whitespace-nowrap">
          <p className="leading-[1.5]">2</p>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[19.6px]">이동</p>
      </div>
    </div>
  );
}