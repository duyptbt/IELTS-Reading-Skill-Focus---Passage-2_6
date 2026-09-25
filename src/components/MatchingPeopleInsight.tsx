import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Compass,
  ArrowRight,
  Bookmark,
  Check,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Target,
  Clock,
  ShieldAlert,
  Search,
  BookOpen,
} from 'lucide-react';
import {
  MATCHING_PEOPLE_INSIGHT,
  MATCHING_PEOPLE_STRATEGY_STEPS,
  MATCHING_PEOPLE_COMMON_TRAPS,
} from '../data/consolidationData';

interface MatchingPeopleInsightProps {
  language: 'en' | 'vi';
  onAddNote: (snippet: string) => void;
}

export const MatchingPeopleInsight: React.FC<MatchingPeopleInsightProps> = ({
  language,
  onAddNote,
}) => {
  const [activeSubView, setActiveSubView] = useState<'people' | 'steps' | 'traps' | 'diagnostic'>('people');
  const [selectedPersonId, setSelectedPersonId] = useState<string>('person-A');
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);

  // Diagnostic Test State
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<number, string>>({});
  const [diagnosticChecked, setDiagnosticChecked] = useState<boolean>(false);

  const selectedPerson = MATCHING_PEOPLE_INSIGHT.find((p) => p.id === selectedPersonId) || MATCHING_PEOPLE_INSIGHT[0];

  const handleSaveToNotes = (person: typeof selectedPerson) => {
    const isVi = language === 'vi';
    let snippet = isVi
      ? `[Chiến Lược Nối Người] ${person.personName} (${person.roleVi}) - Đoạn ${person.paragraphRef}\n`
      : `[Matching People Insight] ${person.personName} (${person.role}) - Para ${person.paragraphRef}\n`;

    if (person.isDistractor) {
      snippet += isVi
        ? `• VAI TRÒ BẪY: Kẻ tung hỏa mù (Distractor) - Không khớp với câu hỏi nào.\n• Bằng chứng: "${person.exactQuoteVi}"\n• Lý do bẫy: ${person.distractorTrapAnalysis?.whyDistractorVi}\n• Lời khuyên: ${person.masterStrategyTipVi}\n\n`
        : `• FOIL TRAP: Deliberate Distractor - Never matched to Q20-23.\n• Text Quote: "${person.exactQuoteEn}"\n• Why Distractor: ${person.distractorTrapAnalysis?.whyDistractorEn}\n• Pro Tip: ${person.masterStrategyTipEn}\n\n`;
    } else {
      snippet += isVi
        ? `• Khớp với: Câu ${person.matchedQuestionId}\n• Nhận định trong đề: "${person.statementVi}"\n• Trích dẫn nguyên văn: "${person.exactQuoteVi}"\n• Logic người ra đề: ${person.examinerLogicVi}\n• Chiến lược: ${person.masterStrategyTipVi}\n\n`
        : `• Matched Question: Question ${person.matchedQuestionId}\n• Test Statement: "${person.statementEn}"\n• Exact Quote: "${person.exactQuoteEn}"\n• Examiner Logic: ${person.examinerLogicEn}\n• Master Strategy: ${person.masterStrategyTipEn}\n\n`;
    }

    onAddNote(snippet);
    setCopiedNoteId(person.id);
    setTimeout(() => setCopiedNoteId(null), 2000);
  };

  const isVi = language === 'vi';

  // Questions for Diagnostic
  const diagnosticQuestions = [
    {
      id: 20,
      statementEn: "The creation of some new technologies did not change viewers' attitudes towards documentaries as quickly as is sometimes proposed.",
      statementVi: "Sự ra đời của một số công nghệ mới đã không làm thay đổi thái độ của khán giả đối với phim tài liệu nhanh như nhiều người vẫn nghĩ.",
      correctPerson: 'D', // Maria Fiala
      personName: 'Maria Fiala',
      paragraph: 'D',
    },
    {
      id: 21,
      statementEn: "One set of beliefs and techniques helped to make documentary films academically respectable.",
      statementVi: "Một tập hợp các niềm tin và kỹ thuật đã giúp phim tài liệu được công nhận xứng đáng trong giới học thuật.",
      correctPerson: 'C', // Paula Murphy
      personName: 'Paula Murphy',
      paragraph: 'C',
    },
    {
      id: 22,
      statementEn: "The action of putting material on film essentially changes the nature of the original material.",
      statementVi: "Hành động ghi lại sự việc lên phim về bản chất làm thay đổi bản chất của sự việc gốc ban đầu.",
      correctPerson: 'A', // Dr Helmut Fischer
      personName: 'Dr Helmut Fischer',
      paragraph: 'A',
    },
    {
      id: 23,
      statementEn: "Documentary filmmakers have an obligation to include their own opinions about and analysis of the real events that they show in their films.",
      statementVi: "Các nhà làm phim tài liệu có nghĩa vụ phải đưa vào những quan điểm và phân tích cá nhân của riêng mình về các sự kiện có thật mà họ quay.",
      correctPerson: 'E', // Josh Camberwell
      personName: 'Josh Camberwell',
      paragraph: 'E',
    },
  ];

  const diagnosticScore = diagnosticQuestions.filter(
    (q) => diagnosticAnswers[q.id]?.toUpperCase() === q.correctPerson
  ).length;

  return (
    <div className="space-y-6">
      {/* Strategic Header & Examiner Philosophy Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 -mt-6 -mr-6 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs border border-blue-400/30">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>{isVi ? 'IELTS Reading Passage 2 Masterclass' : 'IELTS Reading Passage 2 Masterclass'}</span>
            </span>
            <span className="text-xs text-slate-300 font-medium">
              {isVi ? 'Questions 20–23 (Passage 2)' : 'Questions 20–23 (Passage 2)'}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {isVi
              ? 'Chiến Thuật Chinh Phục Dạng Bài: Nối Nhận Định Với Nhân Vật'
              : 'Mastering "Matching Statements with People"'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {isVi
              ? 'Dạng bài "Matching Statements with People" trong IELTS Reading Passage 2 là bài kiểm tra khả năng phân biệt giữa lời kể của tác giả và quan điểm chuyên gia được trích dẫn. Khác với trật tự đoạn văn, câu hỏi luôn bị xáo trộn ngẫu nhiên và giám khảo luôn cài cắm 1 kẻ tung hỏa mù (distractor) để bẫy thí sinh đọc lướt hời hợt.'
              : 'Matching Statements with People in IELTS Reading Passage 2 tests your ability to separate factual narrative from attributed expert opinion. Unlike headings, statements appear in random sequence, and examiners deliberately engineer 1 unassigned distractor to punish superficial keyword matching.'}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-700/60">
            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-lg border border-slate-700/50">
              <div className="text-[10px] uppercase font-bold text-slate-400">
                {isVi ? 'Số Câu Hỏi' : 'Questions'}
              </div>
              <div className="text-base font-black text-amber-400">4 Items (Q20–23)</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-lg border border-slate-700/50">
              <div className="text-[10px] uppercase font-bold text-slate-400">
                {isVi ? 'Số Nhân Vật' : 'Total Candidates'}
              </div>
              <div className="text-base font-black text-blue-400">5 People (A–E)</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-lg border border-slate-700/50">
              <div className="text-[10px] uppercase font-bold text-slate-400">
                {isVi ? 'Bẫy Kẻ Dư Thừa' : 'Planted Distractor'}
              </div>
              <div className="text-base font-black text-rose-400">Anthony Berwick</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-lg border border-slate-700/50">
              <div className="text-[10px] uppercase font-bold text-slate-400">
                {isVi ? 'Thời Gian Chuẩn' : 'Target Speed'}
              </div>
              <div className="text-base font-black text-emerald-400">4–5 Minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-view Navigation Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto">
        <button
          onClick={() => setActiveSubView('people')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
            activeSubView === 'people'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{isVi ? '1. Phân Tích Chi Tiết 5 Nhân Vật' : '1. Forensic Breakdown of All 5 People'}</span>
        </button>

        <button
          onClick={() => setActiveSubView('steps')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
            activeSubView === 'steps'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>{isVi ? '2. Quy Trình 5 Bước Bất Bại' : '2. The 5-Step Master Protocol'}</span>
        </button>

        <button
          onClick={() => setActiveSubView('traps')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
            activeSubView === 'traps'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{isVi ? '3. 4 Cạm Bẫy Phổ Biến & Tâm Lý Giám Khảo' : '3. 4 Deadly Traps & Examiner Psychology'}</span>
        </button>

        <button
          onClick={() => setActiveSubView('diagnostic')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
            activeSubView === 'diagnostic'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>{isVi ? '4. Luyện Tập Chẩn Đoán & Nối Nhanh' : '4. Diagnostic Matching Challenge'}</span>
        </button>
      </div>

      {/* SUBVIEW 1: PEOPLE DEEP DIVE */}
      {activeSubView === 'people' && (
        <div className="space-y-6">
          {/* People Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {MATCHING_PEOPLE_INSIGHT.map((p) => {
              const isSelected = selectedPersonId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPersonId(p.id)}
                  className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300'
                      : p.isDistractor
                      ? 'bg-rose-50/70 border-rose-200 text-slate-800 hover:bg-rose-100/70'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                          isSelected
                            ? 'bg-white text-blue-700'
                            : p.isDistractor
                            ? 'bg-rose-200 text-rose-800'
                            : 'bg-slate-200 text-slate-800'
                        }`}
                      >
                        {p.personLetter}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                          isSelected
                            ? 'bg-blue-800 text-blue-100'
                            : p.isDistractor
                            ? 'bg-rose-100 text-rose-800 border border-rose-300'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        Para {p.paragraphRef}
                      </span>
                    </div>

                    <div className="font-bold text-xs sm:text-sm line-clamp-1">
                      {p.personName}
                    </div>
                  </div>

                  <div className="mt-2 pt-1 border-t border-current/10 text-[10px] font-semibold opacity-90">
                    {p.isDistractor ? (
                      <span className={isSelected ? 'text-rose-200' : 'text-rose-700'}>
                        ⚠️ {isVi ? 'Kẻ Tung Hỏa Mù' : 'Distractor (Unused)'}
                      </span>
                    ) : (
                      <span className={isSelected ? 'text-emerald-200' : 'text-emerald-700'}>
                        ✓ {isVi ? `Khớp Câu ${p.matchedQuestionId}` : `Matched: Q${p.matchedQuestionId}`}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Person Comprehensive Breakdown Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header: Name, Role, Status, Save Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-base flex items-center justify-center">
                    {selectedPerson.personLetter}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {selectedPerson.personName}
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    ({isVi ? selectedPerson.roleVi : selectedPerson.role})
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {isVi ? `Đoạn ${selectedPerson.paragraphRef}` : `Paragraph ${selectedPerson.paragraphRef}`}
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {isVi ? 'Hình thức diễn đạt:' : 'Reporting Style:'}
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    {isVi ? selectedPerson.reportingStyleVi : selectedPerson.reportingStyle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto">
                {selectedPerson.isDistractor ? (
                  <span className="px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 font-bold text-xs border border-rose-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    <span>{isVi ? 'Kẻ Tung Hỏa Mù (Không Có Đáp Án)' : 'Planted Distractor (Not Used)'}</span>
                  </span>
                ) : (
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isVi ? `Đáp Án Chính Thức: Câu ${selectedPerson.matchedQuestionId}` : `Official Match: Question ${selectedPerson.matchedQuestionId}`}</span>
                  </span>
                )}

                <button
                  onClick={() => handleSaveToNotes(selectedPerson)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition flex items-center gap-1.5"
                >
                  {copiedNoteId === selectedPerson.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{isVi ? 'Đã Lưu Vào Vở!' : 'Saved to Notes!'}</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5 text-slate-600" />
                      <span>{isVi ? 'Lưu Phân Tích' : 'Save Insight'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Test Statement (if matched) */}
            {!selectedPerson.isDistractor && (
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-blue-700 mb-1 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isVi ? `Nhận Định Được Kiểm Tra (Question ${selectedPerson.matchedQuestionId}):` : `Test Statement to Match (Question ${selectedPerson.matchedQuestionId}):`}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  "{isVi ? selectedPerson.statementVi : selectedPerson.statementEn}"
                </p>
                {isVi && (
                  <p className="text-xs text-slate-500 italic mt-1 font-serif">
                    En: "{selectedPerson.statementEn}"
                  </p>
                )}
              </div>
            )}

            {/* Authentic Passage Evidence */}
            <div className="bg-slate-50 border-l-4 border-indigo-600 p-4 sm:p-5 rounded-r-xl">
              <div className="text-[11px] uppercase tracking-wider font-extrabold text-slate-500 mb-1.5 flex items-center justify-between">
                <span>{isVi ? `Nguyên Văn Trong Bài Đọc (Đoạn ${selectedPerson.paragraphRef}):` : `Authentic Passage Citation (Paragraph ${selectedPerson.paragraphRef}):`}</span>
                <span className="text-[10px] font-mono text-slate-400">Verbatim Context</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 italic font-serif leading-relaxed">
                "{isVi ? selectedPerson.exactQuoteVi : selectedPerson.exactQuoteEn}"
              </p>
              {isVi && (
                <p className="text-xs text-slate-500 italic mt-2 pt-2 border-t border-slate-200/60 font-serif">
                  En: "{selectedPerson.exactQuoteEn}"
                </p>
              )}
            </div>

            {/* 1-to-1 Paraphrase Alignment Matrix */}
            {!selectedPerson.isDistractor && selectedPerson.paraphrasePairs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {isVi ? 'Ma Trận Đối Chiếu Paraphrase 1-Kèm-1' : '1-to-1 Paraphrase Alignment Matrix'}
                  </h4>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-1/3">{isVi ? 'Từ/Cụm Trong Đề (Statement)' : 'Statement Lexicon'}</th>
                        <th className="p-3 w-1/3">{isVi ? 'Từ/Cụm Trong Bài (Passage)' : 'Passage Evidence'}</th>
                        <th className="p-3 w-1/3">{isVi ? 'Cơ Chế Biến Đổi Ngôn Ngữ' : 'Linguistic Transformation'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedPerson.paraphrasePairs.map((pair, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition">
                          <td className="p-3 font-semibold text-blue-900 bg-blue-50/30">
                            <div>{pair.statementChunkEn}</div>
                            {isVi && <div className="text-[11px] font-normal text-slate-600 mt-0.5">{pair.statementChunkVi}</div>}
                          </td>
                          <td className="p-3 font-semibold text-emerald-900 bg-emerald-50/30">
                            <div>{pair.passageChunkEn}</div>
                            {isVi && <div className="text-[11px] font-normal text-slate-600 mt-0.5">{pair.passageChunkVi}</div>}
                          </td>
                          <td className="p-3 text-xs text-slate-700">
                            <span className="font-medium text-slate-800 block">
                              {isVi ? pair.linguisticTypeVi : pair.linguisticType}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Special Forensic Section for Anthony Berwick (The Distractor) */}
            {selectedPerson.isDistractor && selectedPerson.distractorTrapAnalysis && (
              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>{isVi ? 'Bóc Mẽ Thủ Đoạn Gài Bẫy Kẻ Tung Hỏa Mù' : 'Forensic Deconstruction of the Distractor Trap'}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white p-4 rounded-lg border border-rose-200/80">
                    <div className="font-bold text-rose-950 mb-1">
                      {isVi ? 'Tại sao người này là bẫy (Why Distractor)?' : 'Why is Anthony Berwick a Distractor?'}
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {isVi
                        ? selectedPerson.distractorTrapAnalysis.whyDistractorVi
                        : selectedPerson.distractorTrapAnalysis.whyDistractorEn}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-amber-200/80">
                    <div className="font-bold text-amber-950 mb-1">
                      {isVi ? 'Ảo tưởng khiến thí sinh sập bẫy (Tempting Trap):' : 'The Fatal Student Misconception:'}
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {isVi
                        ? selectedPerson.distractorTrapAnalysis.temptingMisconceptionVi
                        : selectedPerson.distractorTrapAnalysis.temptingMisconceptionEn}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Examiner Logic & Pro Strategy Dual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left: Examiner Logic */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isVi ? 'Tư Duy & Ý Đồ Của Giám Khảo' : 'Examiner Logic & Blueprint'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {isVi ? selectedPerson.examinerLogicVi : selectedPerson.examinerLogicEn}
                </p>
              </div>

              {/* Right: Master Strategy Tip */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isVi ? 'Bí Quyết Làm Bài Thực Chiến' : 'Master Test Strategy Tip'}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                  {isVi ? selectedPerson.masterStrategyTipVi : selectedPerson.masterStrategyTipEn}
                </p>
              </div>
            </div>

            {/* Trap Warning Alert */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>{isVi ? 'CẢNH BÁO BẪY THƯỜNG GẶP: ' : 'TRAP ALERT: '}</strong>
                <span>{isVi ? selectedPerson.trapAlertVi : selectedPerson.trapAlertEn}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBVIEW 2: 5-STEP PROTOCOL */}
      {activeSubView === 'steps' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              {isVi
                ? 'Chiến Thuật 5 Bước Đạt Điểm Tuyệt Đối Trong Dạng Bài Nối Người'
                : 'The 5-Step Battle-Tested Protocol for 100% Accuracy'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {isVi
                ? 'Hầu hết thí sinh mất điểm hoặc quá tải thời gian ở dạng bài này vì làm theo cách truyền thống: đọc từng câu hỏi rồi quay lại đọc bài từ đầu. Quy trình 5 bước đảo ngược dưới đây giúp bạn tiết kiệm 50% thời gian và triệt tiêu hoàn toàn các bẫy distractors.'
                : 'Most candidates lose marks or run out of time because they read Question 20, scan from top to bottom, read Question 21, and scan again. The reversed 5-step workflow maps the terrain first and verifies paraphrases with sniper precision.'}
            </p>

            <div className="space-y-4">
              {MATCHING_PEOPLE_STRATEGY_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-slate-50/80 rounded-xl border border-slate-200 p-5 hover:border-blue-300 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200/60">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                        {step.stepNumber}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {isVi ? step.titleVi : step.titleEn}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isVi ? step.timeGuidanceVi : step.timeGuidanceEn}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    {isVi ? step.actionVi : step.actionEn}
                  </p>

                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isVi ? 'Mẹo Thực Chiến: ' : 'Examiner Pro Tip: '}</strong>
                      <span>{isVi ? step.proTipVi : step.proTipEn}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBVIEW 3: 4 DEADLY TRAPS */}
      {activeSubView === 'traps' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              {isVi
                ? 'Giải Mã 4 Cạm Bẫy Chết Người Trong Dạng Bài Nối Tên Người'
                : 'Deconstructing the 4 Deadliest IELTS Traps in Matching People'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {isVi
                ? 'Đề thi Cambridge Passage 2 luôn được thiết kế để phân loại thí sinh từ Band 6.0 lên Band 8.0+. Nắm rõ 4 archetype bẫy tâm lý này sẽ giúp bạn nhận diện tức thì đâu là câu trả lời thật và đâu là đòn tung hỏa mù.'
                : 'Passage 2 is deliberately engineered to separate Band 6.0 candidates from Band 8.0+ readers. Recognizing these 4 deceptive psychological patterns will immunize you against false answers.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATCHING_PEOPLE_COMMON_TRAPS.map((trap) => (
                <div
                  key={trap.trapNumber}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-rose-600 text-white font-black text-xs flex items-center justify-center">
                        {trap.trapNumber}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {isVi ? trap.nameVi : trap.nameEn}
                      </h4>
                    </div>

                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-200 text-xs text-rose-950">
                      <strong>{isVi ? 'Bản chất cạm bẫy: ' : 'The Deceptive Trap: '}</strong>
                      <span>{isVi ? trap.archetypeVi : trap.archetypeEn}</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
                      <div className="font-bold text-slate-900 mb-1">
                        {isVi ? 'Ví Dụ Cụ Thể Trong Bài Đọc:' : 'Authentic Passage 2 Evidence:'}
                      </div>
                      <p className="italic font-serif">
                        {isVi ? trap.exampleInPassageVi : trap.exampleInPassageEn}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 bg-emerald-50/70 p-3 rounded-lg border border-emerald-200 text-xs text-emerald-950 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isVi ? 'Chiến thuật phòng ngừa: ' : 'Countermeasure: '}</strong>
                      <span>{isVi ? trap.countermeasureVi : trap.countermeasureEn}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBVIEW 4: DIAGNOSTIC MATCHING CHALLENGE */}
      {activeSubView === 'diagnostic' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {isVi
                    ? 'Thử Thách Chẩn Đoán Kỹ Năng Nối Nhận Định'
                    : 'Interactive Diagnostic Matching Challenge'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {isVi
                    ? 'Hãy thử tài áp dụng chiến thuật để ghép 4 nhận định (Câu 20–23) với 5 nhân vật (A–E). Nhớ rằng 1 nhân vật là kẻ tung hỏa mù!'
                    : 'Test your mastery by matching the 4 statements (Q20–23) with the 5 people (A–E). Remember: exactly one person is a distractor!'}
                </p>
              </div>

              {diagnosticChecked && (
                <div className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold">
                  <span>Score:</span>
                  <span className="text-base font-black text-amber-400">{diagnosticScore} / 4</span>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-4 mb-6">
              {diagnosticQuestions.map((q) => {
                const userChoice = diagnosticAnswers[q.id];
                const isCorrect = userChoice?.toUpperCase() === q.correctPerson;

                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-xs shrink-0 mt-0.5">
                        Q{q.id}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        "{isVi ? q.statementVi : q.statementEn}"
                      </p>
                    </div>

                    {/* Candidate Choice Selector */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-bold text-slate-500 mr-1">
                        {isVi ? 'Chọn nhân vật:' : 'Select Person:'}
                      </span>
                      {['A', 'B', 'C', 'D', 'E'].map((letter) => {
                        const personObj = MATCHING_PEOPLE_INSIGHT.find((p) => p.personLetter === letter)!;
                        const isChosen = userChoice === letter;

                        return (
                          <button
                            key={letter}
                            onClick={() => {
                              setDiagnosticAnswers((prev) => ({ ...prev, [q.id]: letter }));
                              setDiagnosticChecked(false);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                              isChosen
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span>{letter}</span>
                            <span className="text-[10px] font-normal opacity-80 truncate max-w-[80px]">
                              {personObj.personName.split(' ')[personObj.personName.split(' ').length - 1]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback if checked */}
                    {diagnosticChecked && (
                      <div
                        className={`p-3 rounded-lg border text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50 border-rose-200 text-rose-950'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{isVi ? 'Chính xác!' : 'Correct!'}</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                              <span>
                                {isVi
                                  ? `Chưa đúng. Đáp án chính xác là ${q.correctPerson} (${q.personName}) ở Đoạn ${q.paragraph}.`
                                  : `Incorrect. Correct answer is ${q.correctPerson} (${q.personName}) in Paragraph ${q.paragraph}.`}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="text-[11px] opacity-90">
                          {isVi
                            ? MATCHING_PEOPLE_INSIGHT.find((p) => p.personLetter === q.correctPerson)?.examinerLogicVi
                            : MATCHING_PEOPLE_INSIGHT.find((p) => p.personLetter === q.correctPerson)?.examinerLogicEn}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Check / Reset Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setDiagnosticAnswers({});
                  setDiagnosticChecked(false);
                }}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isVi ? 'Làm Lại' : 'Reset All'}</span>
              </button>

              <button
                onClick={() => setDiagnosticChecked(true)}
                disabled={Object.keys(diagnosticAnswers).length < 4}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                  Object.keys(diagnosticAnswers).length >= 4
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isVi ? 'Kiểm Tra Đáp Án' : 'Verify Matching'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
