/*조민정 헤더 UI 수정*/
import React from 'react';
import svgPaths from "./svg-cdbqlw3mwv";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full shrink-0" style={{ borderBottom: '1px solid #E1E1E1', height: 'fit-content', padding: '5px 16px' }}>
      
      {/* Left Section */}
      <div className="flex flex-1 items-center gap-3">
        {/* Logo */}
        <div className="flex h-[20px] w-[26px] items-center justify-center overflow-hidden shrink-0">
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={svgPaths.p1d187380} fill="#007EFF" />
          </svg>
        </div>
        
        {/* Breadcrumb Text */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-[8px] hover:bg-gray-50 transition-colors cursor-pointer shrink-0">
          <span className="text-[#5d6269] text-[14px] font-['Inter:Regular',sans-serif] whitespace-nowrap">4팀 UT</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#5D6269" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#5d6269] text-[14px] font-['Inter:Regular',sans-serif] whitespace-nowrap">프로덕트 디자이너 AI활용에 대한 설문조사</span>
        </div>
      </div>

      {/* Middle Section (GNB) */}
      <div className="bg-[#F3F4F6] flex gap-0.5 items-center p-1 rounded-[14px] shrink-0">
        <button className="bg-white flex items-center justify-center px-3 py-1.5 rounded-[10px] shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="text-[#17171b] text-[14px] font-['Pretendard:Medium',sans-serif] tracking-[-0.14px] whitespace-nowrap leading-[1.5]">만들기</span>
        </button>
        <button className="flex items-center justify-center px-3 py-1.5 rounded-[10px] cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-[#687384] text-[14px] font-['Pretendard:Medium',sans-serif] tracking-[-0.14px] whitespace-nowrap leading-[1.5]">연동하기</span>
        </button>
        <button className="flex items-center justify-center px-3 py-1.5 rounded-[10px] cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-[#687384] text-[14px] font-['Pretendard:Medium',sans-serif] tracking-[-0.14px] whitespace-nowrap leading-[1.5]">공유하기</span>
        </button>
        <button className="flex items-center justify-center px-3 py-1.5 rounded-[10px] cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-[#687384] text-[14px] font-['Pretendard:Medium',sans-serif] tracking-[-0.14px] whitespace-nowrap leading-[1.5]">결과보기</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-end gap-2">
        {/* Link Button */}
        <button className="bg-[#f3f4f6] flex items-center justify-center rounded-[10.8px] w-[36px] h-[36px] shrink-0 cursor-pointer hover:bg-gray-200 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#687384" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </button>
        
        {/* Settings Button */}
        <button className="bg-[#f3f4f6] flex items-center justify-center rounded-[10.8px] w-[36px] h-[36px] shrink-0 cursor-pointer hover:bg-gray-200 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#687384" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>

        {/* Publish Button */}
        <button className="bg-[#007EFF] flex h-9 items-center justify-center px-3.5 rounded-[10.8px] shrink-0 cursor-pointer hover:bg-blue-600 transition-colors">
          <span className="text-[#fafafa] text-[14px] font-medium leading-[20px] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif]">게시하기</span>
        </button>
      </div>

    </div>
  );
}