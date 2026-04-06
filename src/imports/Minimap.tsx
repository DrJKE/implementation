import { useEffect, useRef, useState } from 'react';

interface MinimapNode {
  id: number;
  x: number;
  y: number;
}

interface MinimapProps {
  nodes: MinimapNode[];
  scale: number;
  offset: { x: number; y: number };
  canvasSize: { width: number; height: number };
  onViewportChange: (offset: { x: number; y: number }) => void;
}

export function Minimap({
  nodes,
  scale,
  offset,
  canvasSize,
  onViewportChange,
}: MinimapProps) {
  const minimapRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // 미니맵 크기 설정
  const minimapWidth = 200;
  const minimapHeight = 120;

  const handleMinimapMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMinimapMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleMinimapMouseUp);
      };
    }
  }, [isDragging]);

  // canvasSize가 유효하지 않으면 기본 크기로 렌더링
  const effectiveCanvasSize = canvasSize.width === 0 || canvasSize.height === 0
    ? { width: 1000, height: 600 }
    : canvasSize;

  // 전체 캔버스 영역 계산 (모든 노드를 포함)
  const bounds = nodes.reduce(
    (acc, node) => {
      const nodeRight = node.x + 280; // 카드 너비
      const nodeBottom = node.y + 200; // 카드 높이
      return {
        minX: Math.min(acc.minX, node.x),
        minY: Math.min(acc.minY, node.y),
        maxX: Math.max(acc.maxX, nodeRight),
        maxY: Math.max(acc.maxY, nodeBottom),
      };
    },
    { minX: 0, minY: 0, maxX: 1000, maxY: 1000 }
  );

  const contentWidth = Math.max(bounds.maxX - bounds.minX, 1000);
  const contentHeight = Math.max(bounds.maxY - bounds.minY, 1000);

  // 미니맵 스케일 계산
  const minimapScale = Math.min(
    minimapWidth / contentWidth,
    minimapHeight / contentHeight
  );

  // 뷰포트 사각형 계산
  const viewportWidth = (effectiveCanvasSize.width / scale) * minimapScale;
  const viewportHeight = (effectiveCanvasSize.height / scale) * minimapScale;
  const viewportX = (-offset.x / scale - bounds.minX) * minimapScale;
  const viewportY = (-offset.y / scale - bounds.minY) * minimapScale;

  const handleMinimapClick = (e: React.MouseEvent) => {
    if (!minimapRef.current) return;

    const rect = minimapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 미니맵 좌표를 캔버스 좌표로 변환
    const canvasX = x / minimapScale + bounds.minX;
    const canvasY = y / minimapScale + bounds.minY;

    // 뷰포트 중심을 클릭한 위치로 이동
    const newOffsetX = -(canvasX - effectiveCanvasSize.width / scale / 2) * scale;
    const newOffsetY = -(canvasY - effectiveCanvasSize.height / scale / 2) * scale;

    onViewportChange({ x: newOffsetX, y: newOffsetY });
  };

  const handleMinimapMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMinimapClick(e);
  };

  const handleMinimapMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMinimapClick(e);
  };

  return (
    <div
      className="fixed bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
      style={{
        right: '290px',
        bottom: '16px',
        zIndex: 95,
      }}
    >
      {/* 수정3. 김문주 미니맵 여백 */}
      <div className="px-8 py-1.5 bg-gray-50 border-b border-gray-200">
        <p className="text-xs text-gray-600 font-medium" style={{ marginLeft: '8px' }}>미니 맵</p>
      </div>
      {/* 수정3. 수정 끗~ */}
      <div
        ref={minimapRef}
        className="relative cursor-pointer select-none"
        style={{
          width: minimapWidth,
          height: minimapHeight,
          background: '#f9fafb',
        }}
        onMouseDown={handleMinimapMouseDown}
        onMouseMove={handleMinimapMouseMove}
      >
        {/* 미니맵 노드들 */}
        {nodes.map((node) => {
          const x = (node.x - bounds.minX) * minimapScale;
          const y = (node.y - bounds.minY) * minimapScale;
          const width = 280 * minimapScale;
          const height = 200 * minimapScale;

          return (
            <div
              key={node.id}
              className="absolute bg-blue-400 rounded"
              style={{
                left: x,
                top: y,
                width,
                height,
                minWidth: 3,
                minHeight: 3,
              }}
            />
          );
        })}

        {/* 뷰포트 사각형 */}
        <div
          className="absolute border-2 border-blue-600 bg-blue-500/10 pointer-events-none"
          style={{
            left: Math.max(0, viewportX),
            top: Math.max(0, viewportY),
            width: Math.min(viewportWidth, minimapWidth),
            height: Math.min(viewportHeight, minimapHeight),
          }}
        />
      </div>
    </div>
  );
}