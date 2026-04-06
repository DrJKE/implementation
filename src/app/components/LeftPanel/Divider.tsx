import React from 'react';
import svgPaths from '../../../imports/svg-t2rohp9ghw';

function Frame14() {
  return (
    <div className="col-1 relative row-1 shrink-0 size-[11.526px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5261 11.5261">
        <g id="Frame">
          <path d={svgPaths.p187ce480} fill="var(--fill-0, #D9D9D9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

interface DividerProps {
  isResizing: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
}

export function Divider({ isResizing, onMouseDown }: DividerProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        width: '100%',
        height: '12px',
        cursor: 'ns-resize',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isResizing ? '#f0f0f0' : 'transparent',
        position: 'relative',
        flexShrink: 0,
        userSelect: 'none'
      }}
    >
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="col-1 h-0 ml-0 mt-[5.76px] relative row-1 w-[267.407px]">
          <div className="absolute inset-[-0.58px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267.407 1.15261">
              <path d="M0 0.576307H267.407" id="Vector 609" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="1.15261" />
            </svg>
          </div>
        </div>
        <Frame14 />
      </div>
    </div>
  );
}
