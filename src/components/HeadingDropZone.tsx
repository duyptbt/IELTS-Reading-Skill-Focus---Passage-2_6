import React, { useState } from 'react';
import { Question } from '../types';
import { LIST_OF_HEADINGS } from '../data/ieltsData';
import { CheckCircle2, XCircle, X, GripVertical, HelpCircle, ArrowDownCircle } from 'lucide-react';

interface HeadingDropZoneProps {
  paragraphId: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  questionId: number;
  assignedHeadingId?: string;
  onAssignHeading: (questionId: number, headingId: string) => void;
  onClearHeading: (questionId: number) => void;
  selectedHeadingForAssign: string | null;
  onSelectHeadingForAssign: (headingId: string | null) => void;
  isPracticeMode: boolean;
  showPracticeAnswers: boolean;
  question?: Question;
}

export const HeadingDropZone: React.FC<HeadingDropZoneProps> = ({
  paragraphId,
  questionId,
  assignedHeadingId,
  onAssignHeading,
  onClearHeading,
  selectedHeadingForAssign,
  onSelectHeadingForAssign,
  isPracticeMode,
  showPracticeAnswers,
  question,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const assignedHeading = LIST_OF_HEADINGS.find(
    (h) => h.id.toLowerCase() === (assignedHeadingId || '').toLowerCase()
  );

  const isCorrect = question
    ? question.correctAnswers.some(
        (ans) => ans.toLowerCase() === (assignedHeadingId || '').trim().toLowerCase()
      )
    : false;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    if (!isDragOver) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const headingId = e.dataTransfer.getData('headingId') || e.dataTransfer.getData('text/plain');
    if (headingId) {
      onAssignHeading(questionId, headingId);
      if (selectedHeadingForAssign) {
        onSelectHeadingForAssign(null);
      }
    }
  };

  const handleClickZone = () => {
    if (selectedHeadingForAssign) {
      onAssignHeading(questionId, selectedHeadingForAssign);
      onSelectHeadingForAssign(null);
    }
  };

  return (
    <div className="w-full my-2 select-none">
      {/* Drop Target Container */}
      <div
        id={`drop-zone-para-${paragraphId}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClickZone}
        className={`relative rounded-lg border-2 transition-all p-2.5 sm:p-3 text-xs ${
          isDragOver
            ? 'border-blue-500 bg-blue-50 ring-3 ring-blue-300 scale-[1.01]'
            : selectedHeadingForAssign
            ? 'border-blue-400 bg-blue-50/60 ring-2 ring-blue-300 ring-offset-1 cursor-pointer animate-pulse'
            : assignedHeading
            ? showPracticeAnswers
              ? isCorrect
                ? 'border-emerald-400 bg-emerald-50/80 text-emerald-950'
                : 'border-rose-400 bg-rose-50/80 text-rose-950'
              : 'border-blue-300 bg-blue-50/40 text-slate-800 hover:border-blue-400'
            : 'border-dashed border-slate-300 bg-slate-50/80 hover:border-blue-400 hover:bg-slate-100/70 text-slate-500'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Left Label & Question indicator */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold uppercase text-[10px] tracking-wider px-2 py-0.5 rounded bg-slate-800 text-white shrink-0">
              Q{questionId} Heading
            </span>
            <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
              for Paragraph {paragraphId}:
            </span>
          </div>

          {/* Center / Right Content: Filled vs Empty */}
          {assignedHeading ? (
            <div className="flex items-center gap-2 flex-1 justify-between min-w-[200px]">
              <div
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', assignedHeading.id);
                  e.dataTransfer.setData('headingId', assignedHeading.id);
                }}
                className="flex items-center gap-2 cursor-grab active:cursor-grabbing flex-1"
                title="Drag to reassign heading to another paragraph"
              >
                <GripVertical className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="w-5 h-5 rounded bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 uppercase">
                  {assignedHeading.id}
                </span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm line-clamp-1">
                  {assignedHeading.title}
                </span>
              </div>

              {/* Action Buttons: Status in Practice mode & Clear button */}
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                {showPracticeAnswers && (
                  <span
                    className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" /> Expected: {question?.displayAnswer}
                      </>
                    )}
                  </span>
                )}

                {/* Clear / Unassign Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClearHeading(questionId);
                  }}
                  className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                  title="Remove heading"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* EMPTY DROP ZONE: Pure Drag or Tag (No dropdowns) */
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1 justify-between min-w-[200px]">
              <div className="flex items-center gap-2 text-slate-500">
                {selectedHeadingForAssign ? (
                  <span className="font-bold text-blue-700 flex items-center gap-1.5 animate-pulse">
                    <ArrowDownCircle className="w-4 h-4 text-blue-600" />
                    Tap here to place selected heading [{selectedHeadingForAssign.toUpperCase()}]
                  </span>
                ) : (
                  <span className="italic text-[11px] sm:text-xs">
                    Drag heading here or tap a tag:
                  </span>
                )}
              </div>

              {/* Direct Quick-Tag Pills (No dropdown) */}
              <div className="flex items-center gap-1 flex-wrap">
                {LIST_OF_HEADINGS.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAssignHeading(questionId, h.id);
                      if (selectedHeadingForAssign) onSelectHeadingForAssign(null);
                    }}
                    className="w-5 h-5 rounded bg-white hover:bg-blue-600 hover:text-white border border-slate-300 text-slate-700 font-bold text-[10px] flex items-center justify-center transition cursor-pointer uppercase shadow-2xs"
                    title={`Tag heading ${h.id.toUpperCase()}: ${h.title}`}
                  >
                    {h.id}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Practice Mode In-Place Explanation Toggle */}
        {showPracticeAnswers && question && (
          <div className="mt-2 pt-2 border-t border-slate-200/60 flex flex-col gap-1.5 text-xs">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExplanation(!showExplanation);
                }}
                className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 text-[11px] cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                <span>{showExplanation ? 'Hide Explanation' : 'Why this heading?'}</span>
              </button>
              <span className="text-[11px] text-slate-500">
                Key Quote in Paragraph {paragraphId}
              </span>
            </div>

            {showExplanation && (
              <div className="p-2.5 rounded bg-white/90 border border-slate-200 text-slate-800 space-y-1.5 text-[11px]">
                <div className="italic text-slate-700 font-serif border-l-2 border-blue-400 pl-2">
                  "{question.quote}"
                </div>
                <div className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">Explanation: </span>
                  {question.explanation}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
