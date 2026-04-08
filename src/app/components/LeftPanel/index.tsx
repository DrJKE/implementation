import React, { useState, useRef, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { SurveyFieldsSection } from './SurveyFieldsSection';
import { Divider } from './Divider';
import { EndingFieldsSection } from './EndingFieldsSection';

interface Node {
  id: number;
  x: number;
  y: number;
  badge: string;
  type: string;
  title: string;
  options: string[];
  conditions: Array<{
    tags: string[];
    or: boolean;
    next: string;
  }>;
}

interface LeftPanelProps {
  nodes: Node[];
  onDeleteNode?: (id: number) => void;
  selectedNodeId?: number | null;
  onSelectNode?: (id: number) => void;
}

export default function LeftPanel({ nodes, onDeleteNode, selectedNodeId, onSelectNode }: LeftPanelProps) {
  const [surveyHeight, setSurveyHeight] = useState(60); // percentage
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeY = e.clientY - containerRect.top;
      const percentage = (relativeY / containerRect.height) * 100;

      // Limit between 20% and 80%
      const clampedPercentage = Math.max(20, Math.min(80, percentage));
      setSurveyHeight(clampedPercentage);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div
      ref={containerRef}
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="div.flex-1"
    >
      <SectionHeader title="설문 필드" />

      <SurveyFieldsSection nodes={nodes} height={surveyHeight} onDeleteNode={onDeleteNode} selectedNodeId={selectedNodeId} onSelectNode={onSelectNode} />

      <Divider isResizing={isResizing} onMouseDown={handleMouseDown} />

      <EndingFieldsSection />
    </div>
  );
}
