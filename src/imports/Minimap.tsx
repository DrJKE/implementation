/*조민정 미니맵 전체수정- 피그마ui와 동일하게*/
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
      style={{
        display: 'flex',
        width: '240px',
        height: '160px',
        paddingBottom: '16px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed', // absolute에서 fixed로 변경
        right: '319px',
        bottom: '40px',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        background: 'rgba(255, 255, 255, 0.85)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(3px)',
        zIndex: 95,
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={minimapRef}
        className="relative cursor-pointer select-none overflow-hidden rounded-[4px]"
        style={{
          width: minimapWidth,
          height: minimapHeight,
          background: 'transparent',
          marginTop: '12px',
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
              className="absolute rounded"
              style={{
                left: x,
                top: y,
                width,
                height,
                minWidth: 3,
                minHeight: 3,
                backgroundColor: '#9ca3af', // 회색 노드로 변경
              }}
            />
          );
        })}

        {/* 뷰포트 사각형 */}
        <div
          className="absolute border-[1.5px] border-blue-500 bg-blue-100/40 pointer-events-none rounded-sm"
          style={{
            left: viewportX,
            top: viewportY,
            width: viewportWidth,
            height: viewportHeight,
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          width: '240px',
          height: '25px',
          padding: '0 16px',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          background: 'rgba(243, 244, 246, 0.90)',
          boxSizing: 'border-box',
        }}
      >
        <p className="text-[13px] text-gray-600 font-medium">로직 미리보기</p>
      </div>
    </div>
  );
}