import svgPaths from "./svg-t2rohp9ghw";
import React, { useState, useRef, useEffect } from 'react';

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

interface DivFlex1Props {
  nodes: Node[];
}

function LabelTextSm() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="label.text-sm">
      <div className="content-stretch flex flex-col items-start pl-[4.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.137px] text-[rgba(33,33,33,0.7)] w-full">
          <p className="leading-[16.137px]">설문 필드</p>
        </div>
      </div>
    </div>
  );
}

function DivFlex() {
  return (
    <div className="min-h-[46.10458755493164px] relative shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pb-[19.594px] pt-[10.374px] px-[9.221px] relative w-full">
          <LabelTextSm />
        </div>
      </div>
    </div>
  );
}

function DivFlexMargin() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64.54642486572266px] py-[9.221px] relative shrink-0 w-full" data-name="div.flex:margin">
      <DivFlex />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p187ce480} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">1</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame />
      <SpanTextXs />
    </div>
  );
}

function DivBorderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder />
    </div>
  );
}

function DivTextSm() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">평소 작업 시 AI 도구를 활용하시나요?</p>
      </div>
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm />
    </div>
  );
}

function DivOverflowHidden() {
  return (
    <div className="bg-[#eaf2ff] h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin />
          <DivFlex2 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p39e3a100} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs1() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">2</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder1() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame1 />
      <SpanTextXs1 />
    </div>
  );
}

function DivBorderMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder1 />
    </div>
  );
}

function DivTextSm1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">AI 기능을 통해 가장 해결을</p>
      </div>
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm1 />
    </div>
  );
}

function DivOverflowHidden1() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin1 />
          <DivFlex3 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p1612fd80} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs2() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">3-1</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder2() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame2 />
      <SpanTextXs2 />
    </div>
  );
}

function DivBorderMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder2 />
    </div>
  );
}

function DivTextSm2() {
  return (
    <div className="flex-[1_0_0] max-w-[144.7568817138672px] min-h-px min-w-px relative self-stretch" data-name="div.text-sm">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] pr-[4.61px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
            <p className="leading-[23.052px] overflow-hidden text-ellipsis">가장 선호하는 AI 아이콘 생성 스타일은</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm2 />
    </div>
  );
}

function DivOverflowHidden2() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin2 />
          <DivFlex4 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent2F9B5102E89E4821A6C123Eea666D() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_2f9b5102-e89e-4821-a6c1-23eea666d892">
      <DivOverflowHidden2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p1cf0eb00} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs3() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">3-2</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder3() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame3 />
      <SpanTextXs3 />
    </div>
  );
}

function DivBorderMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder3 />
    </div>
  );
}

function DivTextSm3() {
  return (
    <div className="flex-[1_0_0] max-w-[142.3824920654297px] min-h-px min-w-px relative self-stretch" data-name="div.text-sm">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] pr-[4.61px] relative size-full">
          <div className="flex flex-col font-['Inter:Italic','Noto_Sans_KR:Regular',sans-serif] font-normal italic justify-center leading-[0] overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
            <p className="leading-[23.052px] overflow-hidden text-ellipsis whitespace-pre">{`선택하신 스타일의 '입체감'이나 '그림자' `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm3 />
    </div>
  );
}

function DivOverflowHidden3() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin3 />
          <DivFlex5 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent7Fcbf493F2F441079Be0Ae9E9Dc0A58B() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_7fcbf493-f2f4-4107-9be0-ae9e9dc0a58b">
      <DivOverflowHidden3 />
    </div>
  );
}

function DivSpaceY1() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[14.753px] shrink-0 w-full" data-name="div.space-y-1">
      <div className="content-stretch flex flex-col gap-[4.61px] items-start p-[9.221px] relative w-full">
        <DivFieldDraggableContent2F9B5102E89E4821A6C123Eea666D />
        <DivFieldDraggableContent7Fcbf493F2F441079Be0Ae9E9Dc0A58B />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p2e898780} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs4() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">4</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder4() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame4 />
      <SpanTextXs4 />
    </div>
  );
}

function DivBorderMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder4 />
    </div>
  );
}

function DivTextSm4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis whitespace-pre">{`AI 기능을 도입한다면, 어떤 '디자인 단계'에서 `}</p>
      </div>
    </div>
  );
}

function DivFlex6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm4 />
    </div>
  );
}

function DivOverflowHidden4() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin4 />
          <DivFlex6 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p338d4a00} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs5() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">5</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder5() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame5 />
      <SpanTextXs5 />
    </div>
  );
}

function DivBorderMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder5 />
    </div>
  );
}

function DivTextSm5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">어떤 방식의 레퍼런스 수집을 선호하시나요?</p>
      </div>
    </div>
  );
}

function DivFlex7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm5 />
    </div>
  );
}

function DivOverflowHidden5() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin5 />
          <DivFlex7 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p1e05b700} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs6() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">6</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder6() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame6 />
      <SpanTextXs6 />
    </div>
  );
}

function DivBorderMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder6 />
    </div>
  );
}

function DivTextSm6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">가장 자동화가 시급한 반복 작업은 무엇인가</p>
      </div>
    </div>
  );
}

function DivFlex8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm6 />
    </div>
  );
}

function DivOverflowHidden6() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin6 />
          <DivFlex8 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.pd74bd80} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs7() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">7</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder7() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame7 />
      <SpanTextXs7 />
    </div>
  );
}

function DivBorderMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder7 />
    </div>
  );
}

function DivTextSm7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">AI가 검수해주길 바라는 항목을 선택해 주세요</p>
      </div>
    </div>
  );
}

function DivFlex9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm7 />
    </div>
  );
}

function DivOverflowHidden7() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin7 />
          <DivFlex9 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p1b44de00} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs8() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">8</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder8() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame8 />
      <SpanTextXs8 />
    </div>
  );
}

function DivBorderMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder8 />
    </div>
  );
}

function DivTextSm8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">유료 플랜 도입 시, 팀 단위 결제와</p>
      </div>
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm8 />
    </div>
  );
}

function DivOverflowHidden8() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin8 />
          <DivFlex10 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p1d90bf80} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs9() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">9</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder9() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame9 />
      <SpanTextXs9 />
    </div>
  );
}

function DivBorderMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder9 />
    </div>
  );
}

function DivTextSm9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis">AI 기능 도입과 관련하여 보안상 가장</p>
      </div>
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm9 />
    </div>
  );
}

function DivOverflowHidden9() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin9 />
          <DivFlex11 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[18.442px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
        <g id="Frame">
          <path d={svgPaths.p37201080} fill="var(--fill-0, #304EB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanTextXs10() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
          <p className="leading-[18.442px]">10</p>
        </div>
      </div>
    </div>
  );
}

function DivBorder10() {
  return (
    <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0" data-name="div.border">
      <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
      <Frame10 />
      <SpanTextXs10 />
    </div>
  );
}

function DivBorderMargin10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0" data-name="div.border:margin">
      <DivBorder10 />
    </div>
  );
}

function DivTextSm10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch" data-name="div.text-sm">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[23.052px] overflow-hidden text-ellipsis whitespace-pre">{`AI 도구 도입을 주저하게 만드는 가장 큰 `}</p>
      </div>
    </div>
  );
}

function DivFlex12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative" data-name="div.flex">
      <DivTextSm10 />
    </div>
  );
}

function DivOverflowHidden10() {
  return (
    <div className="bg-white h-[55.326px] relative rounded-[14.753px] shrink-0 w-full" data-name="div.overflow-hidden">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9.221px] relative size-full">
          <DivBorderMargin10 />
          <DivFlex12 />
        </div>
      </div>
    </div>
  );
}

function DivFieldDraggableContent8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#field_draggable_content_3389432730">
      <DivOverflowHidden10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[1.153px] items-center relative shrink-0 w-full">
      <div className="bg-[#212121] rounded-[2.305px] shrink-0 size-[1.153px]" />
      <div className="bg-[#212121] rounded-[2.305px] shrink-0 size-[1.153px]" />
      <div className="bg-[#212121] rounded-[2.305px] shrink-0 size-[1.153px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[1.153px] items-center relative shrink-0 w-full">
      <div className="bg-[#212121] rounded-[2.305px] shrink-0 size-[1.153px]" />
      <div className="bg-[#212121] rounded-[2.305px] shrink-0 size-[1.153px]" />
      <div className="bg-[#212121] rounded-[2.305px] shrink-0 size-[1.153px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[1.153px] items-start relative shrink-0 w-[5.763px]">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#e1e1e1] col-1 content-stretch flex flex-col h-[10.374px] items-center justify-center ml-[126.21px] mt-0 px-[4.61px] py-[3.458px] relative rounded-[5.187px] row-1 w-[14.984px]">
      <Frame13 />
    </div>
  );
}

function Group() {
  return (
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
  );
}

function LabelTextSm1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="label.text-sm">
      <div className="content-stretch flex flex-col items-start pl-[4.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.137px] text-[rgba(33,33,33,0.7)] w-full">
          <p className="leading-[16.137px]">엔딩 필드</p>
        </div>
      </div>
    </div>
  );
}

function DivFlex13() {
  return (
    <div className="min-h-[46.10458755493164px] relative shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pb-[19.594px] pt-[10.374px] px-[9.221px] relative w-full">
          <LabelTextSm1 />
        </div>
      </div>
    </div>
  );
}

function DivFlexMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64.54642486572266px] py-[9.221px] relative shrink-0 w-full" data-name="div.flex:margin">
      <DivFlex13 />
    </div>
  );
}

export default function DivFlex1({ nodes }: DivFlex1Props) {
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
      <DivFlexMargin />
      
      {/* Survey Fields Section with Scroll */}
      <div 
        style={{ 
          height: `${surveyHeight}%`,
          overflow: 'auto',
          width: '100%',
          position: 'relative'
        }}
      >
        <div className="content-stretch flex flex-col items-start px-[13.831px] py-[9.221px] relative w-full">
          <div className="content-stretch flex flex-col gap-[4.61px] items-center relative shrink-0 w-full">
            {nodes.map((node, index) => (
              <div 
                key={node.id} 
                className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full"
              >
                <div 
                  className={`${index === 0 ? 'bg-[#eaf2ff]' : 'bg-white'} h-[55.326px] relative rounded-[14.753px] shrink-0 w-full`}
                >
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center px-[9.221px] relative size-full">
                      {/* Badge */}
                      <div className="content-stretch flex flex-col items-start pr-[13.831px] relative shrink-0">
                        <div className="bg-[#eaedf8] content-stretch flex gap-[4.61px] items-center px-[8.069px] py-[5.763px] relative rounded-[12.448px] shrink-0">
                          <div aria-hidden="true" className="absolute border-[1.153px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.448px]" />
                          <div className="relative shrink-0 size-[18.442px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4418 18.4418">
                              <g id="Frame">
                                <path d={svgPaths.p187ce480} fill="var(--fill-0, #304EB8)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#304eb8] text-[13.831px] whitespace-nowrap">
                                <p className="leading-[18.442px]">{node.badge.replace('E ', '')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Title */}
                      <div className="content-stretch flex flex-[1_0_0] h-[23.052px] items-start min-h-px min-w-px overflow-clip relative">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[178.6783447265625px] min-h-px min-w-px overflow-clip relative self-stretch">
                          <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[16.137px] text-ellipsis w-full whitespace-nowrap">
                            <p className="leading-[23.052px] overflow-hidden text-ellipsis">{node.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resizer */}
      <div
        onMouseDown={handleMouseDown}
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
        <Group />
      </div>

      {/* Ending Fields Section */}
      <div 
        style={{ 
          flex: 1,
          overflow: 'auto',
          width: '100%'
        }}
      >
        <DivFlexMargin1 />
      </div>
    </div>
  );
}