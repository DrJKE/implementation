import React from 'react';
import svgPaths from '../../../imports/svg-t2rohp9ghw';

interface NodeItemProps {
  node: {
    id: number;
    badge: string;
    title: string;
  };
  isFirst: boolean;
  onDeleteNode?: (id: number) => void;
}

export function NodeItem({ node, isFirst, onDeleteNode }: NodeItemProps) {
  return (
    <div
      className={`w-full flex items-center rounded-xl cursor-pointer transition-colors border group ${isFirst
        ? 'bg-[#EEF2FF] border-[#C7D2FE]'
        : 'bg-white border-[#F3F4F6] hover:bg-gray-50'
        }`}
      // 🚀 1. 컨테이너 패딩 조절 (여기서 숫자를 바꿔보세요!)
      style={{ padding: '12px 12px' }}
    >
      {/* 1. 뱃지 영역 (아이콘 + 번호) */}
      <div
        className="flex flex-shrink-0 items-center bg-[#E0E7FF] rounded-lg"
        // 🚀 2. 뱃지와 텍스트 사이 간격 / 뱃지 내부 여백 조절
        style={{
          marginRight: '12px', // 텍스트와의 간격
          padding: '6px 8px', // 뱃지 내부 여백
          gap: '2px' // 아이콘과 숫자 사이 간격
        }}
      >
        <svg
          // 🚀 3. 찌그러진 아이콘 사이즈 수정 (w-6 h-16 -> w-4 h-4)
          className="w-4 h-4 text-[#3B6EF8]"
          viewBox="0 0 18.4418 18.4418"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d={svgPaths.p187ce480} fill="currentColor" />
        </svg>
        <span className="text-xs font-bold text-[#3B6EF8] leading-none mt-[1px]">
          {node.badge.replace('E ', '')}
        </span>
      </div>

      {/* 2. 타이틀 영역 (긴 텍스트 말줄임 처리) */}
      <div className="flex-1 min-w-0 pr-2">
        <p className="text-[14px] font-normal text-[#374151] truncate">
          {node.title}
        </p>
      </div>

      {/* 3. 호버 시 삭제 버튼 */}
      <div
        className="hidden group-hover:flex items-center justify-center p-1 rounded-md hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteNode && onDeleteNode(node.id);
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </div>
    </div>
  );
}