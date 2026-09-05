import React, { useState, useRef } from 'react';
import { Question, HighlightRange } from '../types';
import {
  HEADINGS_TEST_TIP,
  MATCHING_PEOPLE_TIP,
  SUMMARY_COMPLETION_TIP,
  LIST_OF_HEADINGS,
  HEADING_DISTRACTOR_NOTES,
  PEOPLE_OPTIONS,
  PEOPLE_DISTRACTOR_NOTES,
  EXAM_REVIEW_ITEMS,
  TRAINING_KEYWORD_HEADINGS,
  TRAINING_SIMILAR_MEANING_ITEMS,
  TRAINING_EYE_STRAIN_WORDS,
  TRAINING_EYE_STRAIN_ITEMS,
} from '../data/ieltsData';
import { CollapsibleNotes } from './CollapsibleNotes';
import { HighlighterToolbar, HighlightColor } from './HighlighterToolbar';
import { HighlightableText } from './HighlightableText';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Lightbulb,
  X,
  GripVertical,
  MousePointerClick,
  ArrowRight,
  Sparkles,
  Check,
  Info,
  Layers,
  GraduationCap,
  BookOpen,
  Send,
  RotateCcw,
  ArrowDownCircle,
} from 'lucide-react';

const PARAGRAPH_QUESTION_MAP: Record<string, number> = {
  A: 14,
  B: 15,
  C: 16,
  D: 17,
  E: 18,
  F: 19,
};

interface QuestionsPanelProps {
  questions: Question[];
  userAnswers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
  isPracticeMode: boolean;
  showPracticeAnswers: boolean;
  onLocateParagraph: (paragraphId: string, quote?: string) => void;
  notes: string;
  onNotesChange: (val: string) => void;
  isNotesOpen: boolean;
  onToggleNotes: () => void;
  flaggedQuestions: Set<number>;
  onToggleFlag: (questionId: number) => void;
  onSubmitTest?: () => void;
  highlightColor?: HighlightColor;
  onSelectHighlightColor?: (color: HighlightColor) => void;
  isHighlighterActive?: boolean;
  onToggleHighlighter?: () => void;
  highlights?: HighlightRange[];
  onAddHighlight?: (text: string, color: HighlightColor) => void;
  onRemoveHighlight?: (id: string) => void;
  onClearAllHighlights?: () => void;
  selectedHeadingForAssign: string | null;
  onSelectHeadingForAssign: (headingId: string | null) => void;
  onGoToConsolidation?: () => void;
}

export const QuestionsPanel: React.FC<QuestionsPanelProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  isPracticeMode,
  showPracticeAnswers,
  onLocateParagraph,
  notes,
  onNotesChange,
  isNotesOpen,
  onToggleNotes,
  flaggedQuestions,
  onToggleFlag,
  onSubmitTest,
  highlightColor: currentHighlightColor = 'yellow' as HighlightColor,
  onSelectHighlightColor = (_color: HighlightColor) => {},
  isHighlighterActive = false,
  onToggleHighlighter = () => {},
  highlights = [],
  onAddHighlight = (_text: string, _color: HighlightColor) => {},
  onRemoveHighlight = (_id: string) => {},
  onClearAllHighlights = () => {},
  selectedHeadingForAssign,
  onSelectHeadingForAssign,
  onGoToConsolidation,
}) => {
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});
  const [expandedTips, setExpandedTips] = useState<Record<string, boolean>>({
    review: false,
    headings: true,
    matchingPeople: true,
    summary: true,
    distractors: false,
    trainingStrategies: false,
  });

  // Training / Strategy interactive state
  const [activeStrategyTab, setActiveStrategyTab] = useState<'keywords' | 'similar' | 'missing'>('keywords');
  const [similarAnswers, setSimilarAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [similarChecked, setSimilarChecked] = useState<Record<number, boolean>>({});
  const [eyeStrainAnswers, setEyeStrainAnswers] = useState<Record<number, string>>({});
  const [showEyeStrainResults, setShowEyeStrainResults] = useState(false);

  const [selectionPopup, setSelectionPopup] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const questionsScrollRef = useRef<HTMLDivElement>(null);

  const toggleExplanation = (id: number) => {
    setExpandedExplanations((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTipSection = (section: string) => {
    setExpandedTips((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const headingQuestions = questions.filter((q) => q.section === 'matching-headings');
  const peopleQuestions = questions.filter((q) => q.section === 'matching-people');
  const summaryQuestions = questions.filter((q) => q.section === 'summary-completion');

  // Check correctness helper
  const isQuestionCorrect = (q: Question) => {
    const rawAnswer = (userAnswers[q.id] || '')
      .trim()
      .toLowerCase()
      .replace(/^[."']+|[."']+$/g, '')
      .replace(/\s+/g, ' ');
    if (!rawAnswer) return false;

    return q.correctAnswers.some((ans) => {
      const cleanExpected = ans
        .trim()
        .toLowerCase()
        .replace(/^[."']+|[."']+$/g, '')
        .replace(/\s+/g, ' ');
      return rawAnswer === cleanExpected;
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Handle text selection in questions
  const handleMouseUp = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('input') || target.closest('select') || target.closest('button')) {
      setSelectionPopup(null);
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setSelectionPopup(null);
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) {
      setSelectionPopup(null);
      return;
    }

    if (!questionsScrollRef.current || !questionsScrollRef.current.contains(selection.anchorNode)) {
      setSelectionPopup(null);
      return;
    }

    if (isHighlighterActive) {
      onAddHighlight(selectedText, currentHighlightColor);
      selection.removeAllRanges();
      setSelectionPopup(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    setSelectionPopup({
      text: selectedText,
      x: Math.min(window.innerWidth - 180, Math.max(10, rect.left + rect.width / 2 - 80)),
      y: Math.max(10, rect.top - 42),
    });
  };

  const applyHighlightFromPopup = (color: HighlightColor) => {
    if (selectionPopup) {
      onAddHighlight(selectionPopup.text, color);
      window.getSelection()?.removeAllRanges();
      setSelectionPopup(null);
    }
  };

  // Find which paragraph a heading is currently assigned to (if any)
  const getAssignedParagraphForHeading = (headingId: string): string | null => {
    for (const [para, qId] of Object.entries(PARAGRAPH_QUESTION_MAP)) {
      if ((userAnswers[qId] || '').toLowerCase() === headingId.toLowerCase()) {
        return para;
      }
    }
    return null;
  };

  return (
    <div
      className="h-full flex flex-col bg-slate-50 relative overflow-hidden select-text"
      onMouseUp={handleMouseUp}
    >
      {/* Top Floating Highlight Action Popup */}
      {selectionPopup && (
        <div
          id="question-selection-highlighter-popup"
          className="fixed z-50 bg-slate-900/95 backdrop-blur-xs text-white p-1 rounded-lg shadow-xl border border-slate-700 flex items-center gap-1 animate-in fade-in zoom-in-95 duration-100"
          style={{ left: `${selectionPopup.x}px`, top: `${selectionPopup.y}px` }}
        >
          {(['yellow', 'emerald', 'sky', 'rose', 'purple'] as HighlightColor[]).map((c) => {
            const colorClass =
              c === 'yellow'
                ? 'bg-amber-400 hover:bg-amber-300'
                : c === 'emerald'
                ? 'bg-emerald-400 hover:bg-emerald-300'
                : c === 'sky'
                ? 'bg-sky-400 hover:bg-sky-300'
                : c === 'rose'
                ? 'bg-rose-400 hover:bg-rose-300'
                : 'bg-purple-400 hover:bg-purple-300';
            return (
              <button
                key={c}
                id={`q-popup-color-${c}`}
                onClick={() => applyHighlightFromPopup(c)}
                className={`w-5 h-5 rounded-full ${colorClass} transition-transform hover:scale-110 active:scale-95`}
                title={`Highlight in ${c}`}
              />
            );
          })}
          <button
            onClick={() => setSelectionPopup(null)}
            className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Toolbar & Quick Jump Bar */}
      <div className="bg-white border-b border-slate-200 px-3 py-2 shrink-0 flex flex-col gap-2 z-10 shadow-xs">
        <div className="flex items-center justify-between gap-2">
          {/* Quick Section Anchor Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-0.5 no-scrollbar">
            <span className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              Sections:
            </span>
            <button
              onClick={() => scrollToSection('sec-headings')}
              className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-medium whitespace-nowrap transition-colors"
            >
              Q14–19 Headings
            </button>
            <button
              onClick={() => scrollToSection('sec-people')}
              className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-medium whitespace-nowrap transition-colors"
            >
              Q20–23 People
            </button>
            <button
              onClick={() => scrollToSection('sec-summary')}
              className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-medium whitespace-nowrap transition-colors"
            >
              Q24–26 Summary
            </button>
            {isPracticeMode && (
              <button
                onClick={() => scrollToSection('sec-training')}
                className="px-2 py-1 rounded bg-amber-50 hover:bg-amber-100 text-amber-800 font-medium whitespace-nowrap transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-amber-600" />
                Useful Strategies
              </button>
            )}
          </div>

          {/* Right Tools: Highlighter & Notes */}
          <div className="flex items-center gap-1.5 shrink-0">
            <HighlighterToolbar
              activeColor={currentHighlightColor}
              onSelectColor={onSelectHighlightColor}
              isHighlighterActive={isHighlighterActive}
              onToggleHighlighter={onToggleHighlighter}
              highlightCount={highlights.length}
              onClearAll={onClearAllHighlights}
            />
            <button
              id="questions-scratchpad-btn"
              onClick={onToggleNotes}
              className={`p-1.5 rounded transition-all text-xs flex items-center gap-1 font-medium ${
                isNotesOpen
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Toggle Questions Notes Scratchpad"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Notes</span>
            </button>
          </div>
        </div>

        {/* Question Grid Bar (14 to 26) */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 no-scrollbar border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-medium shrink-0 mr-1">Questions:</span>
          {questions.map((q) => {
            const hasAnswer = Boolean((userAnswers[q.id] || '').trim());
            const isFlagged = flaggedQuestions.has(q.id);
            const isCorrect = isQuestionCorrect(q);

            let statusBg = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
            if (hasAnswer) {
              statusBg = 'bg-blue-600 text-white font-semibold';
            }
            if (isPracticeMode && showPracticeAnswers) {
              if (isCorrect) {
                statusBg = 'bg-emerald-600 text-white font-semibold';
              } else if (hasAnswer) {
                statusBg = 'bg-rose-500 text-white font-semibold';
              } else {
                statusBg = 'bg-slate-200 text-slate-700 border border-rose-300';
              }
            }

            return (
              <button
                key={q.id}
                id={`q-grid-indicator-${q.id}`}
                onClick={() => {
                  const el = document.getElementById(`question-card-${q.id}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`relative w-7 h-7 shrink-0 rounded text-xs flex items-center justify-center transition-all ${statusBg}`}
                title={`Question ${q.id} - ${hasAnswer ? 'Answered' : 'Unanswered'}`}
              >
                {q.id}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scrollable Questions Body */}
      <div
        ref={questionsScrollRef}
        className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-6"
      >
        {/* EXAM REVIEW ACCORDION (Practice Mode Only) */}
        {isPracticeMode && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleTipSection('review')}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-50/80 hover:bg-slate-100/80 transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-xs sm:text-sm text-slate-800">
                  Exam Information: Reading Passage 2 Overview
                </span>
              </div>
              {expandedTips.review ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {expandedTips.review && (
              <div className="p-4 border-t border-slate-100 space-y-3 text-xs sm:text-sm text-slate-700 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXAM_REVIEW_ITEMS.map((item) => (
                    <div key={item.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="font-semibold text-blue-900 mb-1">{item.question}</p>
                      <p className="text-slate-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* SECTION 1: QUESTIONS 14–19 MATCHING HEADINGS                         */}
        {/* ==================================================================== */}
        <div id="sec-headings" className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded font-bold">
                  Questions 14–19
                </span>
                Matching Headings
              </h2>
              {isPracticeMode && (
                <button
                  onClick={() => toggleTipSection('headings')}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  {expandedTips.headings ? 'Hide Action Plan' : 'Action Plan'}
                </button>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Reading Passage 2 has six paragraphs, <strong>A–F</strong>. Choose the correct heading
              for each paragraph from the list of headings below.
            </p>
          </div>

          {/* Headings Action Plan Card (Practice Mode Only) */}
          {isPracticeMode && expandedTips.headings && (
            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-2">
              <div className="font-semibold flex items-center gap-1.5 text-amber-950">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                {HEADINGS_TEST_TIP.title}
              </div>
              <div className="whitespace-pre-line text-amber-900 leading-relaxed">
                {HEADINGS_TEST_TIP.content}
              </div>
            </div>
          )}

          {/* List of Headings Reference Box */}
          <div className="bg-white rounded-xl border-2 border-slate-200 shadow-xs p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span>List of Headings (i–viii)</span>
                <span className="text-[11px] font-normal text-slate-500 lowercase">
                  (drag or tag to assign)
                </span>
              </h3>
              {isPracticeMode && (
                <button
                  onClick={() => toggleTipSection('distractors')}
                  className="text-[11px] text-purple-700 hover:text-purple-900 font-medium flex items-center gap-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  {expandedTips.distractors ? 'Hide Distractor Notes' : 'Distractor Notes (ii, vi)'}
                </button>
              )}
            </div>

            {/* Distractor notes (Practice Mode Only) */}
            {isPracticeMode && expandedTips.distractors && (
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-xs space-y-2 text-purple-900">
                <p className="font-bold">Why headings ii and vi are distractors:</p>
                {HEADING_DISTRACTOR_NOTES.map((d) => (
                  <div key={d.id} className="pl-2 border-l-2 border-purple-400">
                    <span className="font-semibold">{d.id}. {d.heading}:</span> {d.explanation}
                  </div>
                ))}
              </div>
            )}

            {/* List items */}
            <div className="grid grid-cols-1 gap-2">
              {LIST_OF_HEADINGS.map((h) => {
                const assignedPara = getAssignedParagraphForHeading(h.id);
                const isSelectedForTap = selectedHeadingForAssign === h.id;

                return (
                  <div
                    key={h.id}
                    id={`heading-item-${h.id}`}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData('headingId', h.id);
                      e.dataTransfer.setData('text/plain', h.id);
                    }}
                    onClick={() => {
                      if (selectedHeadingForAssign === h.id) {
                        onSelectHeadingForAssign(null);
                      } else {
                        onSelectHeadingForAssign(h.id);
                      }
                    }}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                      isSelectedForTap
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-300'
                        : assignedPara
                        ? 'border-slate-200 bg-slate-50/70 text-slate-500'
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/90 text-slate-800'
                    }`}
                  >
                    <div className="cursor-grab active:cursor-grabbing text-slate-400 mt-0.5">
                      <GripVertical className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-blue-700 shrink-0 w-7 uppercase">{h.id}</span>
                    <span className="flex-1 font-medium leading-snug">{h.title}</span>
                    {assignedPara && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-semibold text-xs shrink-0">
                        Para {assignedPara}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Heading Questions 14–19 list */}
          <div className="space-y-3">
            {headingQuestions.map((q) => {
              const paraId = q.paragraphRef;
              const currentVal = userAnswers[q.id] || '';
              const isCorrect = isQuestionCorrect(q);
              const assignedHeadingObj = LIST_OF_HEADINGS.find(
                (h) => h.id.toLowerCase() === currentVal.toLowerCase()
              );

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`bg-white rounded-xl border p-3.5 sm:p-4 shadow-xs transition-all ${
                    isPracticeMode && showPracticeAnswers
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                        {q.id}
                      </span>
                      <span className="font-bold text-sm text-slate-900">
                        Paragraph {paraId}
                      </span>
                      {isPracticeMode && (
                        <button
                          onClick={() => onLocateParagraph(paraId)}
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium ml-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Locate in passage
                        </button>
                      )}
                    </div>

                    {/* Flag button */}
                    <button
                      onClick={() => onToggleFlag(q.id)}
                      className={`text-xs p-1 rounded flex items-center gap-1 ${
                        flaggedQuestions.has(q.id)
                          ? 'text-amber-600 font-semibold'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      {flaggedQuestions.has(q.id) ? 'Flagged' : 'Flag'}
                    </button>
                  </div>

                  {/* PURE DRAG OR TAG INTERFACE (No dropdown list) */}
                  <div className="space-y-2 mt-2">
                    {/* Assigned Heading Display vs Drop Target */}
                    {assignedHeadingObj ? (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-950 font-medium text-xs sm:text-sm">
                        <div
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('text/plain', assignedHeadingObj.id);
                            e.dataTransfer.setData('headingId', assignedHeadingObj.id);
                          }}
                          className="flex items-center gap-2 flex-1 cursor-grab active:cursor-grabbing min-w-0"
                          title="Drag to reassign heading"
                        >
                          <GripVertical className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="w-5 h-5 rounded bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 uppercase">
                            {assignedHeadingObj.id}
                          </span>
                          <span className="truncate">{assignedHeadingObj.title}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onAnswerChange(q.id, '')}
                          className="text-slate-400 hover:text-rose-600 p-1 transition cursor-pointer shrink-0"
                          title="Clear assigned heading"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.dataTransfer.dropEffect = 'copy';
                        }}
                        onDrop={(e) => {
                          e.preventDefault();
                          const headingId = e.dataTransfer.getData('headingId') || e.dataTransfer.getData('text/plain');
                          if (headingId) {
                            onAnswerChange(q.id, headingId);
                            if (selectedHeadingForAssign) onSelectHeadingForAssign(null);
                          }
                        }}
                        onClick={() => {
                          if (selectedHeadingForAssign) {
                            onAnswerChange(q.id, selectedHeadingForAssign);
                            onSelectHeadingForAssign(null);
                          }
                        }}
                        className={`p-2.5 rounded-lg border-2 border-dashed transition-all flex items-center justify-between gap-2 text-xs ${
                          selectedHeadingForAssign
                            ? 'border-blue-400 bg-blue-50/70 text-blue-800 cursor-pointer animate-pulse'
                            : 'border-slate-300 bg-slate-50/70 text-slate-500'
                        }`}
                      >
                        {selectedHeadingForAssign ? (
                          <span className="font-semibold flex items-center gap-1.5">
                            <ArrowDownCircle className="w-4 h-4 text-blue-600" />
                            Tap here to assign selected heading [{selectedHeadingForAssign.toUpperCase()}]
                          </span>
                        ) : (
                          <span className="italic">Drag a heading here, or tag using the buttons below:</span>
                        )}
                      </div>
                    )}

                    {/* Direct Tag Buttons (i–viii) */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-1">
                        Tag:
                      </span>
                      {LIST_OF_HEADINGS.map((h) => {
                        const isSelected = currentVal.toLowerCase() === h.id.toLowerCase();
                        return (
                          <button
                            key={h.id}
                            type="button"
                            onClick={() => onAnswerChange(q.id, isSelected ? '' : h.id)}
                            className={`px-2 py-1 rounded text-xs font-bold transition uppercase cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                            title={`Tag heading ${h.id.toUpperCase()}: ${h.title}`}
                          >
                            {h.id}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Practice Feedback / Explanation */}
                  {isPracticeMode && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                      {q.tips && q.tips.length > 0 && (
                        <div className="p-2.5 bg-amber-50 rounded-lg text-xs text-amber-900 border border-amber-200">
                          <span className="font-semibold text-amber-950">
                            {q.tips[0].title}:
                          </span>{' '}
                          {q.tips[0].content}
                        </div>
                      )}

                      {showPracticeAnswers && (
                        <div
                          className={`p-3 rounded-lg text-xs sm:text-sm ${
                            isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-rose-50 text-rose-950 border border-rose-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5 font-bold">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Correct: {q.displayAnswer.toUpperCase()}</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  <span>Correct Answer: {q.displayAnswer.toUpperCase()}</span>
                                </>
                              )}
                            </div>
                            <button
                              onClick={() => toggleExplanation(q.id)}
                              className="text-xs underline font-medium text-slate-600 hover:text-slate-900"
                            >
                              {expandedExplanations[q.id] ? 'Hide Details' : 'View Explanation'}
                            </button>
                          </div>

                          {expandedExplanations[q.id] && (
                            <div className="mt-2 pt-2 border-t border-slate-200/60 space-y-2">
                              <p className="text-xs leading-relaxed text-slate-700">
                                {q.explanation}
                              </p>
                              {q.quote && (
                                <div className="p-2 bg-white/70 rounded border border-slate-200/80 text-xs italic text-slate-600">
                                  <strong>Key Quote:</strong> "{q.quote}"
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 2: QUESTIONS 20–23 MATCHING STATEMENTS WITH PEOPLE           */}
        {/* ==================================================================== */}
        <div id="sec-people" className="space-y-4 pt-4 border-t border-slate-200">
          <div className="border-b border-slate-200 pb-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded font-bold">
                  Questions 20–23
                </span>
                Matching Statements with People
              </h2>
              {isPracticeMode && (
                <button
                  onClick={() => toggleTipSection('matchingPeople')}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  {expandedTips.matchingPeople ? 'Hide Action Plan' : 'Action Plan'}
                </button>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Look at the statements (Questions 20–23) and the list of people below. Match each
              statement with the correct person, <strong>A–E</strong>.
            </p>
          </div>

          {/* Action Plan Tip (Practice Mode Only) */}
          {isPracticeMode && expandedTips.matchingPeople && (
            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-2">
              <div className="font-semibold flex items-center gap-1.5 text-amber-950">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                {MATCHING_PEOPLE_TIP.title}
              </div>
              <div className="whitespace-pre-line text-amber-900 leading-relaxed">
                {MATCHING_PEOPLE_TIP.content}
              </div>
            </div>
          )}

          {/* List of People Box */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2">
            <h3 className="font-bold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">
              List of People (A–E)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs sm:text-sm">
              {PEOPLE_OPTIONS.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <span className="font-bold text-blue-700 bg-blue-100 w-5 h-5 rounded flex items-center justify-center text-xs">
                    {p.id}
                  </span>
                  <span className="font-medium text-slate-800">{p.text}</span>
                </div>
              ))}
            </div>
            {isPracticeMode && (
              <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <strong>Distractor Note:</strong> {PEOPLE_DISTRACTOR_NOTES[0].explanation}
              </div>
            )}
          </div>

          {/* Questions 20–23 list */}
          <div className="space-y-3">
            {peopleQuestions.map((q) => {
              const currentVal = (userAnswers[q.id] || '').toUpperCase();
              const isCorrect = isQuestionCorrect(q);

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`bg-white rounded-xl border p-4 shadow-xs transition-all ${
                    isPracticeMode && showPracticeAnswers
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {q.id}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {q.prompt}
                      </p>
                    </div>
                    <button
                      onClick={() => onToggleFlag(q.id)}
                      className={`text-xs p-1 rounded shrink-0 ${
                        flaggedQuestions.has(q.id)
                          ? 'text-amber-600 font-semibold'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Person Choice Pills (A–E) */}
                  <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Select Person:</span>
                    {PEOPLE_OPTIONS.map((person) => {
                      const isSelected = currentVal === person.id;
                      return (
                        <button
                          key={person.id}
                          id={`btn-q${q.id}-opt-${person.id}`}
                          onClick={() => onAnswerChange(q.id, person.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-xs scale-[1.02]'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          <span className="font-bold">{person.id}</span>
                          <span className="hidden sm:inline font-normal">({person.text})</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Practice Feedback */}
                  {isPracticeMode && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                      {q.tips && q.tips.length > 0 && (
                        <div className="p-2.5 bg-amber-50 rounded-lg text-xs text-amber-900 border border-amber-200">
                          <span className="font-semibold text-amber-950">
                            {q.tips[0].title}:
                          </span>{' '}
                          {q.tips[0].content}
                        </div>
                      )}

                      {showPracticeAnswers && (
                        <div
                          className={`p-3 rounded-lg text-xs sm:text-sm ${
                            isCorrect
                              ? 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                              : 'bg-rose-50 text-rose-950 border border-rose-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5 font-bold">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>
                                    Correct: {q.displayAnswer} ({PEOPLE_OPTIONS.find((p) => p.id === q.displayAnswer)?.text})
                                  </span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  <span>
                                    Correct Answer: {q.displayAnswer} ({PEOPLE_OPTIONS.find((p) => p.id === q.displayAnswer)?.text})
                                  </span>
                                </>
                              )}
                            </div>
                            <button
                              onClick={() => toggleExplanation(q.id)}
                              className="text-xs underline font-medium text-slate-600 hover:text-slate-900"
                            >
                              {expandedExplanations[q.id] ? 'Hide Details' : 'View Explanation'}
                            </button>
                          </div>

                          {expandedExplanations[q.id] && (
                            <div className="mt-2 pt-2 border-t border-slate-200/60 space-y-2">
                              <p className="text-xs leading-relaxed text-slate-700">
                                {q.explanation}
                              </p>
                              {q.quote && (
                                <div className="p-2 bg-white/70 rounded border border-slate-200/80 text-xs italic text-slate-600">
                                  <strong>Passage Evidence:</strong> "{q.quote}"
                                </div>
                              )}
                              <button
                                onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium mt-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Locate quote in Paragraph {q.paragraphRef}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 3: QUESTIONS 24–26 SUMMARY COMPLETION                        */}
        {/* ==================================================================== */}
        <div id="sec-summary" className="space-y-4 pt-4 border-t border-slate-200">
          <div className="border-b border-slate-200 pb-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded font-bold">
                  Questions 24–26
                </span>
                Summary Completion
              </h2>
              {isPracticeMode && (
                <button
                  onClick={() => toggleTipSection('summary')}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  {expandedTips.summary ? 'Hide Action Plan' : 'Action Plan'}
                </button>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complete the summary below. Choose <strong>NO MORE THAN TWO WORDS AND A NUMBER</strong> from
              the passage for each answer. Write your answers in boxes 24–26.
            </p>
          </div>

          {/* Action Plan Tip (Practice Mode Only) */}
          {isPracticeMode && expandedTips.summary && (
            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-2">
              <div className="font-semibold flex items-center gap-1.5 text-amber-950">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                {SUMMARY_COMPLETION_TIP.title}
              </div>
              <div className="whitespace-pre-line text-amber-900 leading-relaxed">
                {SUMMARY_COMPLETION_TIP.content}
              </div>
            </div>
          )}

          {/* Continuous Summary Card with Embedded Inputs */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
              <h3 className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                Film Festivals
              </h3>
              {isPracticeMode && <span className="text-xs text-slate-500 font-medium">Paragraph F focus</span>}
            </div>

            {/* Naturally flowing continuous paragraph */}
            <p className="text-sm sm:text-base leading-loose sm:leading-[2.5rem] text-slate-800 font-normal">
              There are many festivals for documentary makers. For example, Canada's Hot Docs festival
              has screened documentaries from more than 50 countries. Meanwhile, the Hamburg Short Film
              Festival lives up to its name by accepting films no more than{' '}
              <span className="inline-flex items-center align-middle mx-1 gap-1.5 bg-slate-50 hover:bg-slate-100/80 px-2 py-0.5 rounded-lg border border-slate-200 transition-colors">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  24
                </span>
                <input
                  id="input-summary-24"
                  type="text"
                  value={userAnswers[24] || ''}
                  onChange={(e) => onAnswerChange(24, e.target.value)}
                  placeholder=""
                  className={`px-2.5 py-1 text-xs sm:text-sm rounded font-semibold text-blue-900 bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-hidden w-28 sm:w-36 transition-all ${
                    isPracticeMode && showPracticeAnswers
                      ? isQuestionCorrect(questions.find((q) => q.id === 24)!)
                        ? 'border-emerald-500 bg-emerald-50/50 text-emerald-900'
                        : 'border-rose-500 bg-rose-50/50 text-rose-900'
                      : 'border-slate-300'
                  }`}
                />
              </span>{' '}
              long in one of its categories. The Short and Sweet Film Festival is especially good for
              documentary makers who are{' '}
              <span className="inline-flex items-center align-middle mx-1 gap-1.5 bg-slate-50 hover:bg-slate-100/80 px-2 py-0.5 rounded-lg border border-slate-200 transition-colors">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  25
                </span>
                <input
                  id="input-summary-25"
                  type="text"
                  value={userAnswers[25] || ''}
                  onChange={(e) => onAnswerChange(25, e.target.value)}
                  placeholder=""
                  className={`px-2.5 py-1 text-xs sm:text-sm rounded font-semibold text-blue-900 bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-hidden w-28 sm:w-36 transition-all ${
                    isPracticeMode && showPracticeAnswers
                      ? isQuestionCorrect(questions.find((q) => q.id === 25)!)
                        ? 'border-emerald-500 bg-emerald-50/50 text-emerald-900'
                        : 'border-rose-500 bg-rose-50/50 text-rose-900'
                      : 'border-slate-300'
                  }`}
                />
              </span>
              . And the Atlanta Shortsfest accepts numerous forms of documentaries including{' '}
              <span className="inline-flex items-center align-middle mx-1 gap-1.5 bg-slate-50 hover:bg-slate-100/80 px-2 py-0.5 rounded-lg border border-slate-200 transition-colors">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  26
                </span>
                <input
                  id="input-summary-26"
                  type="text"
                  value={userAnswers[26] || ''}
                  onChange={(e) => onAnswerChange(26, e.target.value)}
                  placeholder=""
                  className={`px-2.5 py-1 text-xs sm:text-sm rounded font-semibold text-blue-900 bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-hidden w-28 sm:w-36 transition-all ${
                    isPracticeMode && showPracticeAnswers
                      ? isQuestionCorrect(questions.find((q) => q.id === 26)!)
                        ? 'border-emerald-500 bg-emerald-50/50 text-emerald-900'
                        : 'border-rose-500 bg-rose-50/50 text-rose-900'
                      : 'border-slate-300'
                  }`}
                />
              </span>
              , which are becoming more common.
            </p>

            {/* Practice Clues & Answer Verification (Practice Mode Only) */}
            {isPracticeMode && (
              <div className="mt-5 pt-4 border-t border-slate-200 space-y-2 text-xs">
                <div className="font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                  <Info className="w-3.5 h-3.5 text-blue-600" />
                  <span>Practice Clues & Solutions (Q24–26):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Q24 */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-900">Question 24</span>
                      <button
                        onClick={() => onLocateParagraph('F')}
                        className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <ExternalLink className="w-2.5 h-2.5" /> Locate in Para F
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Advice: The focus is not just short films, but extremely short films.
                    </p>
                    {showPracticeAnswers && (
                      <div className="font-semibold pt-1 border-t border-slate-200/60">
                        {isQuestionCorrect(questions.find((q) => q.id === 24)!) ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct: three minutes / 3 minutes
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Answer: three minutes (or 3 minutes)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Q25 */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-900">Question 25</span>
                      <button
                        onClick={() => onLocateParagraph('F')}
                        className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <ExternalLink className="w-2.5 h-2.5" /> Locate in Para F
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Advice: Who or what is this festival especially good for?
                    </p>
                    {showPracticeAnswers && (
                      <div className="font-semibold pt-1 border-t border-slate-200/60">
                        {isQuestionCorrect(questions.find((q) => q.id === 25)!) ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct: first timers / 1st timers
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Answer: first timers (or 1st timers)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Q26 */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-900">Question 26</span>
                      <button
                        onClick={() => onLocateParagraph('F')}
                        className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <ExternalLink className="w-2.5 h-2.5" /> Locate in Para F
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Advice: Look for one specific category of film among many types.
                    </p>
                    {showPracticeAnswers && (
                      <div className="font-semibold pt-1 border-t border-slate-200/60">
                        {isQuestionCorrect(questions.find((q) => q.id === 26)!) ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct: animations
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Answer: animations
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 4: USEFUL STRATEGIES & SKILLS TRAINING (Practice Mode Only) */}
        {/* ==================================================================== */}
        {isPracticeMode && (
          <div id="sec-training" className="space-y-4 pt-4 border-t border-slate-200">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-sm sm:text-base text-amber-950">
                  Useful Strategies & Skills Training
                </h3>
              </div>
              <button
                onClick={() => toggleTipSection('trainingStrategies')}
                className="text-xs text-amber-800 font-semibold underline flex items-center gap-1"
              >
                {expandedTips.trainingStrategies ? 'Collapse Strategies' : 'Expand Training Exercises'}
              </button>
            </div>
            <p className="text-xs text-amber-800 mt-1">
              Master the 3 core IELTS Reading strategies directly from the official teacher notes.
            </p>

            {expandedTips.trainingStrategies && (
              <div className="mt-4 pt-3 border-t border-amber-200/60 space-y-4">
                {/* Sub-tabs for Strategies */}
                <div className="flex items-center gap-2 bg-amber-100/70 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveStrategyTab('keywords')}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                      activeStrategyTab === 'keywords'
                        ? 'bg-white text-amber-950 shadow-xs'
                        : 'text-amber-800 hover:text-amber-950'
                    }`}
                  >
                    1. Identifying Key Words & Phrases
                  </button>
                  <button
                    onClick={() => setActiveStrategyTab('similar')}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                      activeStrategyTab === 'similar'
                        ? 'bg-white text-amber-950 shadow-xs'
                        : 'text-amber-800 hover:text-amber-950'
                    }`}
                  >
                    2. Identifying Similar Meaning
                  </button>
                  <button
                    onClick={() => setActiveStrategyTab('missing')}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                      activeStrategyTab === 'missing'
                        ? 'bg-white text-amber-950 shadow-xs'
                        : 'text-amber-800 hover:text-amber-950'
                    }`}
                  >
                    3. What Type of Info is Missing
                  </button>
                </div>

                {/* TAB 1: Keywords Strategy */}
                {activeStrategyTab === 'keywords' && (
                  <div className="bg-white p-4 rounded-lg border border-amber-200 text-xs space-y-3">
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">
                      Strategy 1: What do these key words tell you about the information in the paragraph?
                    </p>
                    <div className="space-y-2.5">
                      {TRAINING_KEYWORD_HEADINGS.map((item) => (
                        <div key={item.id} className="p-2.5 bg-slate-50 rounded border border-slate-200">
                          <p className="font-semibold text-blue-900 mb-1.5">
                            {item.id}. {item.heading}
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-slate-700">
                            {item.analysis.map((a, idx) => (
                              <li key={idx}>
                                <strong>{a.phrase}</strong>: {a.deduction}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: Similar Meaning Strategy */}
                {activeStrategyTab === 'similar' && (
                  <div className="bg-white p-4 rounded-lg border border-amber-200 text-xs space-y-4">
                    <div>
                      <p className="font-bold text-slate-800 text-xs sm:text-sm">
                        Strategy 2: Which quotation (A or B) has a similar meaning to each statement?
                      </p>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        Test your synonym-recognition and distractor-spotting skills.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {TRAINING_SIMILAR_MEANING_ITEMS.map((item) => {
                        const selected = similarAnswers[item.id];
                        const isChecked = similarChecked[item.id];
                        const isCorrect = selected === item.correctOption;

                        return (
                          <div key={item.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                            <p className="font-semibold text-slate-900">
                              {item.id}. "{item.statement}"
                            </p>

                            <div className="space-y-1.5 pl-2">
                              <label
                                className={`flex items-start gap-2 p-2 rounded cursor-pointer border transition-colors ${
                                  selected === 'A'
                                    ? 'bg-blue-50 border-blue-300'
                                    : 'bg-white border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`sim-meaning-${item.id}`}
                                  checked={selected === 'A'}
                                  onChange={() => {
                                    setSimilarAnswers((prev) => ({ ...prev, [item.id]: 'A' }));
                                    setSimilarChecked((prev) => ({ ...prev, [item.id]: true }));
                                  }}
                                  className="mt-0.5"
                                />
                                <span className="text-slate-800 leading-snug">
                                  <strong>A:</strong> {item.optionA}
                                </span>
                              </label>

                              <label
                                className={`flex items-start gap-2 p-2 rounded cursor-pointer border transition-colors ${
                                  selected === 'B'
                                    ? 'bg-blue-50 border-blue-300'
                                    : 'bg-white border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`sim-meaning-${item.id}`}
                                  checked={selected === 'B'}
                                  onChange={() => {
                                    setSimilarAnswers((prev) => ({ ...prev, [item.id]: 'B' }));
                                    setSimilarChecked((prev) => ({ ...prev, [item.id]: true }));
                                  }}
                                  className="mt-0.5"
                                />
                                <span className="text-slate-800 leading-snug">
                                  <strong>B:</strong> {item.optionB}
                                </span>
                              </label>
                            </div>

                            {isChecked && (
                              <div
                                className={`p-2.5 rounded text-xs space-y-1.5 ${
                                  isCorrect
                                    ? 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                                    : 'bg-rose-50 text-rose-950 border border-rose-200'
                                }`}
                              >
                                <p className="font-bold flex items-center gap-1">
                                  {isCorrect ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  ) : (
                                    <X className="w-3.5 h-3.5 text-rose-600" />
                                  )}
                                  Correct Choice: {item.correctOption}
                                </p>
                                <div className="text-[11px] text-slate-700">
                                  <strong>Paraphrase Matches:</strong>
                                  <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                                    {item.paraphraseMatches.map((p, idx) => (
                                      <li key={idx}>
                                        "{p.target}" = <em>"{p.passage}"</em>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p className="text-[11px] text-slate-600">
                                  <strong>Distractor analysis:</strong> {item.distractorReason}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* TAB 3: Missing Info Strategy */}
                {activeStrategyTab === 'missing' && (
                  <div className="bg-white p-4 rounded-lg border border-amber-200 text-xs space-y-4">
                    <div>
                      <p className="font-bold text-slate-800 text-xs sm:text-sm">
                        Strategy 3: How To Avoid Eye Strain (Gap-Fill Word Bank)
                      </p>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        Read the summary and decide what type of information is missing from each space.
                      </p>
                    </div>

                    {/* Word Box */}
                    <div className="p-3 bg-slate-100 rounded-lg border border-slate-300">
                      <p className="font-bold text-slate-700 text-xs mb-2">Word Box:</p>
                      <div className="flex flex-wrap gap-2">
                        {TRAINING_EYE_STRAIN_WORDS.map((w) => (
                          <span
                            key={w}
                            className="px-2.5 py-1 bg-white border border-slate-300 rounded font-medium text-slate-800 text-xs shadow-2xs"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Gaps */}
                    <div className="space-y-3">
                      {TRAINING_EYE_STRAIN_ITEMS.map((item) => (
                        <div key={item.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                          <div className="flex flex-wrap items-center gap-1.5 font-medium text-slate-800">
                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                              {item.gapNumber}
                            </span>
                            <span>{item.beforeText}</span>
                            <select
                              value={eyeStrainAnswers[item.id] || ''}
                              onChange={(e) =>
                                setEyeStrainAnswers((prev) => ({
                                  ...prev,
                                  [item.id]: e.target.value,
                                }))
                              }
                              className="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-semibold text-blue-900"
                            >
                              <option value="">-- Choose Word --</option>
                              {TRAINING_EYE_STRAIN_WORDS.map((w) => (
                                <option key={w} value={w}>
                                  {w}
                                </option>
                              ))}
                            </select>
                            <span>{item.afterText}</span>
                          </div>

                          {showEyeStrainResults && (
                            <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-xs space-y-1 text-emerald-950">
                              <p className="font-bold">
                                Correct Word: {item.correctWord}{' '}
                                {eyeStrainAnswers[item.id]?.toLowerCase() === item.correctWord ? '✓' : '✗'}
                              </p>
                              <p className="text-[11px] text-slate-600">
                                <strong>Clues:</strong> {item.typeClue}
                              </p>
                              <p className="text-[11px] text-slate-500">
                                <strong>Caution:</strong> {item.distractorCaution}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowEyeStrainResults(!showEyeStrainResults)}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700"
                      >
                        {showEyeStrainResults ? 'Hide Clues & Answers' : 'Check Answers & Clues'}
                      </button>
                      {showEyeStrainResults && (
                        <button
                          onClick={() => {
                            setEyeStrainAnswers({});
                            setShowEyeStrainResults(false);
                          }}
                          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        )}

        {/* Test Mode Submit CTA */}
        {!isPracticeMode && onSubmitTest && (
          <div className="pt-6 pb-4">
            <button
              id="submit-test-mode-btn"
              onClick={onSubmitTest}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              Submit Test & View Results
            </button>
          </div>
        )}

        {/* Consolidation shortcut in Practice mode */}
        {isPracticeMode && onGoToConsolidation && (
          <div className="pt-4 pb-2 text-center">
            <button
              onClick={onGoToConsolidation}
              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Go to Language & Discourse Consolidation Panel
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Floating Notes Scratchpad Drawer for Questions Panel */}
      <CollapsibleNotes
        isOpen={isNotesOpen}
        onClose={onToggleNotes}
        notes={notes}
        onNotesChange={onNotesChange}
        title="Questions Scratchpad"
        storageKey="ielts_question_notes"
      />
    </div>
  );
};
