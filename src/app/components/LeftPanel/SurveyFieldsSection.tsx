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
  selectedNodeId?: number | null;
  onSelectNode?: (id: number) => void;
}

export function SurveyFieldsSection({ nodes, height, onDeleteNode, selectedNodeId, onSelectNode }: SurveyFieldsSectionProps) {
  // 그룹핑 처리
  const groupedNodes: { isGroup: boolean; id: string; items: Node[] }[] = [];
  
  nodes.forEach(node => {
    const badgeStr = node.badge.replace('E ', '');
    const isSubNode = badgeStr.includes('-');
    const basePrefix = isSubNode ? badgeStr.split('-')[0] : badgeStr;

    if (isSubNode) {
      const lastGroup = groupedNodes[groupedNodes.length - 1];
      if (lastGroup && lastGroup.isGroup && lastGroup.id === basePrefix) {
        lastGroup.items.push(node);
      } else {
        groupedNodes.push({
          isGroup: true,
          id: basePrefix,
          items: [node]
        });
      }
    } else {
      groupedNodes.push({
        isGroup: false,
        id: node.id.toString(), // unique id
        items: [node]
      });
    }
  });

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
          {groupedNodes.map((group) => {
            if (group.isGroup) {
              return (
                <div 
                  key={`group-${group.id}`} 
                  className="w-full bg-[#F4F5F7] rounded-[16px] p-[8px] flex flex-col gap-[4.61px]"
                >
                  {group.items.map(node => (
                    <NodeItem 
                      key={node.id} 
                      node={node} 
                      isSelected={selectedNodeId === node.id}
                      onSelect={() => onSelectNode?.(node.id)}
                      onDeleteNode={onDeleteNode} 
                    />
                  ))}
                </div>
              );
            } else {
              return group.items.map(node => (
                <NodeItem 
                  key={node.id} 
                  node={node} 
                  isSelected={selectedNodeId === node.id}
                  onSelect={() => onSelectNode?.(node.id)}
                  onDeleteNode={onDeleteNode} 
                />
              ));
            }
          })}
        </div>
      </div>
    </div>
  );
}
