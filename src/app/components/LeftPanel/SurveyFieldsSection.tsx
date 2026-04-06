import React from 'react';
import { NodeItem } from './NodeItem';

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

interface SurveyFieldsSectionProps {
  nodes: Node[];
  height: number;
  onDeleteNode?: (id: number) => void;
}

export function SurveyFieldsSection({ nodes, height, onDeleteNode }: SurveyFieldsSectionProps) {
  return (
    <div 
      style={{ 
        height: `${height}%`,
        overflow: 'auto',
        width: '100%',
        position: 'relative'
      }}
    >
      <div className="content-stretch flex flex-col items-start px-[13.831px] py-[9.221px] relative w-full">
        <div className="content-stretch flex flex-col gap-[4.61px] items-center relative shrink-0 w-full">
          {nodes.map((node, index) => (
            <NodeItem key={node.id} node={node} isFirst={index === 0} onDeleteNode={onDeleteNode} />
          ))}
        </div>
      </div>
    </div>
  );
}
