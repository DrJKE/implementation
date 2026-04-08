/*조민정 미니맵 전체수정- 피그마ui와 동일하게*/
import { useEffect, useRef, useState } from 'react';

interface MinimapNode {
  id: number;
  x: number;
  y: number;
  badge: string;
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
  const minimapWidth = 240;
  const minimapHeight = 135;

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

  const padding = 300;
  const initialBounds = nodes.length > 0 
    ? { minX: nodes[0].x, minY: nodes[0].y, maxX: nodes[0].x + 400, maxY: nodes[0].y + 200 }
    : { minX: 0, minY: 0, maxX: 1000, maxY: 600 };

  // 전체 캔버스 영역 계산 (모든 노드를 포함)
  const bounds = nodes.reduce(
    (acc, node) => {
      const nodeRight = node.x + 400; // 카드 너비 (미니맵 표시 용)
      const nodeBottom = node.y + 200; // 카드 높이
      return {
        minX: Math.min(acc.minX, node.x),
        minY: Math.min(acc.minY, node.y),
        maxX: Math.max(acc.maxX, nodeRight),
        maxY: Math.max(acc.maxY, nodeBottom),
      };
    },
    initialBounds
  );

  bounds.minX -= padding;
  bounds.minY -= padding;
  bounds.maxX += padding;
  bounds.maxY += padding;

  const contentWidth = Math.max(bounds.maxX - bounds.minX, 100);
  const contentHeight = Math.max(bounds.maxY - bounds.minY, 100);

  // 미니맵 스케일 계산
  const minimapScale = Math.min(
    minimapWidth / contentWidth,
    minimapHeight / contentHeight
  );

  const drawnWidth = contentWidth * minimapScale;
  const drawnHeight = contentHeight * minimapScale;
  
  const alignX = (minimapWidth - drawnWidth) / 2;
  const alignY = (minimapHeight - drawnHeight) / 2;

  // 뷰포트 사각형 계산
  const viewportWidth = (effectiveCanvasSize.width / scale) * minimapScale;
  const viewportHeight = (effectiveCanvasSize.height / scale) * minimapScale;
  const viewportX = (-offset.x / scale - bounds.minX) * minimapScale + alignX;
  const viewportY = (-offset.y / scale - bounds.minY) * minimapScale + alignY;

  const handleMinimapClick = (e: React.MouseEvent) => {
    if (!minimapRef.current) return;

    const rect = minimapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 미니맵 좌표를 캔버스 좌표로 변환
    const canvasX = (x - alignX) / minimapScale + bounds.minX;
    const canvasY = (y - alignY) / minimapScale + bounds.minY;

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
        flexDirection: 'column',
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
        overflow: 'hidden',
      }}
    >
      <div
        ref={minimapRef}
        className="relative cursor-pointer select-none overflow-hidden"
        style={{
          width: minimapWidth,
          height: minimapHeight,
          background: 'transparent',
        }}
        onMouseDown={handleMinimapMouseDown}
        onMouseMove={handleMinimapMouseMove}
      >
        {/* 미니맵 노드들 */}
        {nodes.map((node) => {
          const x = (node.x - bounds.minX) * minimapScale + alignX;
          const y = (node.y - bounds.minY) * minimapScale + alignY;
          const width = 400 * minimapScale;
          const height = 200 * minimapScale;

          return (
            <div
              key={node.id}
              className="absolute rounded flex items-center justify-center font-bold"
              style={{
                left: x,
                top: y,
                width,
                height,
                minWidth: 3,
                minHeight: 3,
                backgroundColor: '#9ca3af', // 회색 노드로 변경
                color: '#fff',
                fontSize: `${Math.max(8, height * 0.4)}px`, // 노드 높이에 맞춰 폰트 크기 조절
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {node.badge}
            </div>
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