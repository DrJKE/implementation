import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64.54642486572266px] py-[9.221px] relative shrink-0 w-full" data-name="div.flex:margin">
      <div className="min-h-[46.10458755493164px] relative shrink-0 w-full" data-name="div.flex">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] pb-[19.594px] pt-[10.374px] px-[9.221px] relative w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="label.text-sm">
              {/* 수정4. 설문 필드, 엔딩필드 여백 */}
              <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full"
                style={{ paddingLeft: '16px' }}>
                {/* 수정4. 수정 끗 */}
                <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.137px] text-[rgba(33,33,33,0.7)] w-full">
                  <p className="leading-[16.137px]">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
