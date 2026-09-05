import {
  LanguageItem,
  GrammarStructureItem,
  ParaphraseTaskItem,
  CollocationQuizItem,
  SentenceScrambleItem,
  AuthorStanceItem,
  DistractorTrapItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: LanguageItem[] = [
  {
    id: 'vocab-1',
    term: 'overshadow',
    partOfSpeech: 'verb (transitive)',
    phonetic: '/ˌəʊ.vəˈʃæd.əʊ/',
    bandLevel: 'Band 7.5',
    definition: 'To appear much more prominent, important, or successful than something else, causing the latter to receive less attention.',
    passageQuote: "For much of the twentieth century, documentary films were overshadowed by their more successful Hollywood counterparts.",
    paragraphRef: 'A',
    collocations: [
      'be overshadowed by',
      'overshadowed by events',
      'completely overshadow'
    ],
    ieltsTip: 'Commonly used in IELTS Reading and Writing Task 2 to contrast two competing entities where one dominates the public or commercial spotlight.',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-2',
    term: 'alter reality / fundamental way',
    partOfSpeech: 'collocation / verb phrase',
    phonetic: '/ˈɔːl.tər riˈæl.ə.ti / ˌfʌn.dəˈmen.təl weɪ/',
    bandLevel: 'Band 8.0',
    definition: 'To substantially change the true, objective state or essence of an event or phenomenon rather than merely recording it.',
    passageQuote: "That's because, as soon as you record an incident on camera, you are altering its reality in a fundamental way.",
    paragraphRef: 'A',
    collocations: [
      'alter reality in a fundamental way',
      'fundamental alteration of facts',
      'alter the nature of the original material'
    ],
    ieltsTip: 'Key paraphrase in Question 22 (Dr Helmut Fischer): "putting material on film [= record an incident on camera] essentially [= fundamental way] changes the nature of the original material [= altering its reality]".',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-3',
    term: 'ethics of filming / consent',
    partOfSpeech: 'noun phrase / collocation',
    phonetic: '/ˈeθ.ɪks əv ˈfɪl.mɪŋ / kənˈsent/',
    bandLevel: 'Band 8.0',
    definition: 'The moral principles governing whether subjects can be recorded without their explicit permission or voluntary agreement.',
    passageQuote: "Lastly, there were also concerns about the ethics of filming subjects without their consent, which is a necessity in many documentary films.",
    paragraphRef: 'A',
    collocations: [
      'film subjects without consent',
      'informed consent',
      'ethical concerns surrounding filming'
    ],
    ieltsTip: 'Forms the third core criticism in Paragraph A for Heading iv ("A number of criticisms about all documentary filmmaking in the past").',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-4',
    term: 'open to question / dispute',
    partOfSpeech: 'idiomatic phrase / verb',
    phonetic: '/ˈəʊ.pən tuː ˈkwes.tʃən / dɪˈspjuːt/',
    bandLevel: 'Band 7.5',
    definition: 'Not yet certain or agreed upon; subjected to scholarly disagreement or differing viewpoints.',
    passageQuote: "...though exactly when the process started is open to question... However, that 1922 starting point has been disputed by supporters of an earlier date.",
    paragraphRef: 'B',
    collocations: [
      'open to question',
      'dispute a starting point',
      'disputed origins of a genre'
    ],
    ieltsTip: 'Direct lexical signal for Heading vii ("The debate about the origins of documentary filmmaking"). "Open to question" signals an ongoing scholarly debate.',
    category: 'idiomatic-phrase'
  },
  {
    id: 'vocab-5',
    term: 'culminate with',
    partOfSpeech: 'phrasal verb',
    phonetic: '/ˈkʌl.mɪ.neɪt wɪð/',
    bandLevel: 'Band 8.0',
    definition: 'To reach a final or climactic point, especially after a prolonged period of artistic or professional development.',
    passageQuote: "Grierson's career lasted nearly 40 years, beginning with Drifters (1929) and culminating with I Remember, I Remember (1968).",
    paragraphRef: 'C',
    collocations: [
      'culminate in/with',
      'culmination of a career',
      'culminating event'
    ],
    ieltsTip: 'Frequently tested in chronological passages to mark the final phase or crowning achievement of an individual’s historical work.',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-6',
    term: 'scholarly analysis / academic respectability',
    partOfSpeech: 'noun phrase',
    phonetic: '/ˈskɒl.ə.li əˈnæl.ə.sɪs/',
    bandLevel: 'Band 8.5+',
    definition: 'Rigorous, critical intellectual examination carried out by university researchers and academic historians.',
    passageQuote: "Documentaries started to be recognised as a distinct genre worthy of serious scholarly analysis.",
    paragraphRef: 'C',
    collocations: [
      'worthy of serious scholarly analysis',
      'rigorous scholarly analysis',
      'academic respectability'
    ],
    ieltsTip: 'Key locator for Question 21 (Paula Murphy): "One set of beliefs and techniques helped to make documentary films academically respectable".',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-7',
    term: 'revolutionise / democratise',
    partOfSpeech: 'verb (transitive)',
    phonetic: '/ˌrev.əˈluː.ʃən.aɪz/',
    bandLevel: 'Band 7.5',
    definition: 'To completely change the way that something is done, produced, or made accessible to the wider public.',
    passageQuote: "New cameras and digital platforms revolutionised the making of films.",
    paragraphRef: 'D',
    collocations: [
      'revolutionise the making of films',
      'revolutionise an industry',
      'technological revolution'
    ],
    ieltsTip: 'Directly relates to Heading viii: "The ability of ordinary people to create documentary films for the first time".',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-8',
    term: 'inherently subjective',
    partOfSpeech: 'collocation / adjective phrase',
    phonetic: '/ɪnˈher.ənt.li səbˈdʒek.tɪv/',
    bandLevel: 'Band 8.5+',
    definition: 'Existing as an inseparable natural characteristic based on personal feelings, perspectives, or opinions rather than neutral facts.',
    passageQuote: "Filmmaker Josh Camberwell maintains that Catfish embodies a new realisation that documentaries are inherently subjective and that this should be celebrated.",
    paragraphRef: 'E',
    collocations: [
      'inherently subjective nature',
      'subjective viewpoint',
      'embody a new realisation'
    ],
    ieltsTip: 'Matches Question 23 (Josh Camberwell): requirement to "express a particular viewpoint and give personal responses".',
    category: 'collocation'
  },
  {
    id: 'vocab-9',
    term: 'showcase',
    partOfSpeech: 'verb (transitive) / noun',
    phonetic: '/ˈʃəʊ.keɪs/',
    bandLevel: 'Band 7.5',
    definition: 'To present, exhibit, or display the best qualities of films, artistic works, or achievements for public appreciation.',
    passageQuote: "The biggest of all must be the Hot Docs Festival in Canada, which over the years has showcased hundreds of documentaries from more than 50 different countries.",
    paragraphRef: 'F',
    collocations: [
      'showcase hundreds of documentaries',
      'showcase talent',
      'a showcase for new filmmakers'
    ],
    ieltsTip: 'Used in Paragraph F to illustrate "A wide range of opportunities to promote documentary films" (Heading iii).',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-10',
    term: 'first timers',
    partOfSpeech: 'noun phrase (informal/academic context)',
    phonetic: '/ˌfɜːst ˈtaɪ.məz/',
    bandLevel: 'Band 7.0',
    definition: 'People who are doing something or presenting their work for the very first time; novices or beginners.',
    passageQuote: "The small size of the festival means that for first timers this is the ideal venue to try to get some recognition for their films.",
    paragraphRef: 'F',
    collocations: [
      'ideal venue for first timers',
      'recognition for first timers',
      'opportunities for first-time directors'
    ],
    ieltsTip: 'Target answer for Question 25 in the summary completion task: "The Short and Sweet Film Festival is especially good for documentary makers who are first timers / 1st timers".',
    category: 'academic-vocab'
  }
];

export const CONSOLIDATION_GRAMMAR_STRUCTURES: GrammarStructureItem[] = [
  {
    id: 'struct-1',
    title: 'Sequential Rhetorical Structuring (Firstly, Secondly, Lastly)',
    structurePattern: 'Adverbial sequencing markers introducing distinct coordinated sub-claims',
    passageExample: "Firstly, the very idea of a documentary film made some people suspicious... Secondly, even supporters of documentaries could not agree on a precise definition... Lastly, there were also concerns about the ethics of filming subjects without their consent...",
    paragraphRef: 'A',
    simplifiedParaphrase: "The writer presents three distinct criticisms in order: skepticism of non-fiction truth, lack of an agreed definition, and filming ethics without consent.",
    ieltsReadingFunction: 'Crucial for matching headings: recognizing that the paragraph is an enumeration of multiple criticisms ("A number of criticisms about all documentary filmmaking in the past").',
    practiceTip: 'When you see sequential discourse markers (Firstly, Secondly, Finally/Lastly), look for a plural noun in the heading such as "criticisms", "reasons", "factors", or "challenges".'
  },
  {
    id: 'struct-2',
    title: 'Concession Followed by Inverted Contrast (Nonetheless, while... was still...)',
    structurePattern: 'Nonetheless + subordinate concessive clause (while X was occurring) + main contrastive clause (Y was still the case)',
    passageExample: "Nonetheless, while countless amateur documentaries were being made, perhaps the most popular documentary of 2006 was still the professionally made An Inconvenient Truth.",
    paragraphRef: 'D',
    simplifiedParaphrase: "Even though millions of amateurs were making films with cheap cameras, a high-budget professional production remained the biggest hit.",
    ieltsReadingFunction: 'Prevents overgeneralization: tests whether the candidate realizes technology democratized creation without eliminating the dominance of professional work.',
    practiceTip: 'Watch out for "while" used as a concessive conjunction meaning "although". The main clause following the comma carries the author’s primary claim.'
  },
  {
    id: 'struct-3',
    title: 'Reported Speech of Expert Attribution (As critic X has pointed out, ...)',
    structurePattern: 'Attributive reporting phrase + quoted / paraphrased counter-claim',
    passageExample: "But as critic Maria Fiala has pointed out, 'The argument sometimes put forward that these innovations immediately transformed what the public expected to see in a documentary isn't entirely accurate.'",
    paragraphRef: 'D',
    simplifiedParaphrase: "Maria Fiala states that the claim that new digital tools quickly changed audience expectations is not completely true.",
    ieltsReadingFunction: 'Core skill for "Matching statements with people" tasks: attributing precise claims and counter-arguments to named figures.',
    practiceTip: 'Identify the exact scope of the speaker’s statement: Fiala is discussing audience expectations/attitudes, not the technical production of films.'
  },
  {
    id: 'struct-4',
    title: 'Contrastive Semi-Colon and Parallel Clausal Balancing',
    structurePattern: 'Two contrasting independent clauses linked by semi-colons and coordinating conjunctions',
    passageExample: "cameras were hand-held; no additional lighting or sound was used; and the subjects did not rehearse.",
    paragraphRef: 'C',
    simplifiedParaphrase: "Direct Cinema contrasted with Grierson by using hand-held cameras, natural ambient lighting/sound, and completely unprompted subjects.",
    ieltsReadingFunction: 'Provides dense descriptive criteria contrasting two historical movements (Heading i).',
    practiceTip: 'Rapidly parse multi-clause lists separated by semi-colons to extract the defining attributes of a method or technique.'
  }
];

export const CONSOLIDATION_PARAPHRASE_TASKS: ParaphraseTaskItem[] = [
  {
    id: 'para-task-1',
    questionOrHeading: 'Question 20: "The creation of some new technologies did not change viewers\' attitudes towards documentaries as quickly as is sometimes proposed."',
    sourceType: 'Sentence Completion',
    questionRef: 'Question 20 (Matched with Maria Fiala)',
    passageOriginal: "The argument sometimes put forward that these innovations immediately transformed what the public expected to see in a documentary isn't entirely accurate.",
    paragraphRef: 'D',
    options: [
      { id: 'a', text: 'these innovations = new technologies; what the public expected to see = viewers\' attitudes; isn\'t entirely accurate = did not change as quickly as proposed', isCorrect: true },
      { id: 'b', text: 'amateurs working from home = viewers; digital cameras = online platforms', isCorrect: false },
      { id: 'c', text: 'popular documentary = transformed attitudes; new cameras = 2006 film', isCorrect: false },
    ],
    explanation: "'These innovations' parallels 'the creation of some new technologies'; 'transformed what the public expected to see' parallels 'change viewers\' attitudes'; 'isn\'t entirely accurate' confirms that the claim of immediate transformation did not hold true."
  },
  {
    id: 'para-task-2',
    questionOrHeading: 'Question 21: "One set of beliefs and techniques helped to make documentary films academically respectable."',
    sourceType: 'Sentence Completion',
    questionRef: 'Question 21 (Matched with Paula Murphy)',
    passageOriginal: "According to film writer Paula Murphy, the principles and methods of Direct Cinema brought documentaries to the attention of universities and film historians as never before. Documentaries started to be recognised as a distinct genre worthy of serious scholarly analysis.",
    paragraphRef: 'C',
    options: [
      { id: 'a', text: 'British filmmaker John Grierson = academic respectability; tripods = beliefs and techniques', isCorrect: false },
      { id: 'b', text: 'principles and methods = beliefs and techniques; brought to universities / worthy of serious scholarly analysis = academically respectable', isCorrect: true },
      { id: 'c', text: 'hand-held cameras = distinct genre; 40 years = scholarly analysis', isCorrect: false },
    ],
    explanation: "'Principles and methods' directly paraphrases 'beliefs and techniques', while recognition from 'universities and film historians' and being 'worthy of serious scholarly analysis' expresses 'academically respectable'."
  },
  {
    id: 'para-task-3',
    questionOrHeading: 'Question 22: "The action of putting material on film essentially changes the nature of the original material."',
    sourceType: 'Sentence Completion',
    questionRef: 'Question 22 (Matched with Dr Helmut Fischer)',
    passageOriginal: "That's because, as soon as you record an incident on camera, you are altering its reality in a fundamental way.",
    paragraphRef: 'A',
    options: [
      { id: 'a', text: 'record an incident on camera = putting material on film; altering its reality = changes the nature of the original material; fundamental way = essentially', isCorrect: true },
      { id: 'b', text: 'Hollywood counterparts = original material; non-fiction = fundamental way', isCorrect: false },
      { id: 'c', text: 'tell the truth and show only facts = putting material on film; suspicious = altering reality', isCorrect: false },
    ],
    explanation: "'Record an incident on camera' equals 'putting material on film'; 'altering its reality' means 'changes the nature of the original material'; 'in a fundamental way' means 'essentially'."
  },
  {
    id: 'para-task-4',
    questionOrHeading: 'Question 23: "Documentary filmmakers have an obligation to include their own opinions about and analysis of the real events that they show in their films."',
    sourceType: 'Sentence Completion',
    questionRef: 'Question 23 (Matched with Josh Camberwell)',
    passageOriginal: "Says Camberwell, 'It is a requirement for documentary makers to express a particular viewpoint and give personal responses to the material they are recording.'",
    paragraphRef: 'E',
    options: [
      { id: 'a', text: 'everyday lives = real events; commercial success = obligation', isCorrect: false },
      { id: 'b', text: 'it is a requirement = have an obligation; express a particular viewpoint / personal responses = include their own opinions and analysis; material they are recording = real events shown', isCorrect: true },
      { id: 'c', text: 'inherently subjective = filmmakers; social media generation = real events', isCorrect: false },
    ],
    explanation: "'It is a requirement' expresses 'have an obligation'; 'express a particular viewpoint and give personal responses' paraphrases 'include their own opinions about and analysis of'; and 'the material they are recording' represents 'the real events that they show'."
  }
];

export const CONSOLIDATION_COLLOCATION_QUIZ: CollocationQuizItem[] = [
  {
    id: 'colloc-1',
    sentenceWithBlank: "Recording an event on camera is said to alter its reality in a ............ way.",
    targetCollocation: "fundamental",
    options: ["fundamental", "temporary", "frequent", "accidental"],
    correctAnswer: "fundamental",
    paragraphRef: 'A',
    explanation: "Dr Helmut Fischer argues in Paragraph A that camera recording alters reality 'in a fundamental way' (essentially changing its true nature)."
  },
  {
    id: 'colloc-2',
    sentenceWithBlank: "Direct Cinema established that documentaries were worthy of serious ............ analysis.",
    targetCollocation: "scholarly",
    options: ["scholarly", "financial", "casual", "amateur"],
    correctAnswer: "scholarly",
    paragraphRef: 'C',
    explanation: "Paula Murphy notes that documentaries came to be recognized as a distinct genre worthy of 'serious scholarly analysis' by universities."
  },
  {
    id: 'colloc-3',
    sentenceWithBlank: "The film Catfish chronicles the everyday lives of the ............ media generation.",
    targetCollocation: "social",
    options: ["social", "political", "traditional", "broadcast"],
    correctAnswer: "social",
    paragraphRef: 'E',
    explanation: "Paragraph E describes how Catfish chronicles the lives and interactions of the 'social media generation'."
  },
  {
    id: 'colloc-4',
    sentenceWithBlank: "In one category of the Hamburg Festival, entries may not ............ three minutes in duration.",
    targetCollocation: "exceed",
    options: ["exceed", "expand", "stretch", "prolong"],
    correctAnswer: "exceed",
    paragraphRef: 'F',
    explanation: "The text states: 'entries may not exceed three minutes in duration', which answers Question 24."
  }
];

export const CONSOLIDATION_SENTENCE_SCRAMBLE: SentenceScrambleItem[] = [
  {
    id: 'scramble-1',
    title: 'Fischer on Non-Fiction Reality (Paragraph A)',
    grammarNote: 'Temporal Conjunction + Gerund Object + Progressive Main Clause + Prepositional Adverbial',
    paragraphRef: 'A',
    chunks: [
      'as soon as you record an incident on camera,',
      'you are altering its reality',
      'in a fundamental way.'
    ],
    correctOrder: [
      'as soon as you record an incident on camera,',
      'you are altering its reality',
      'in a fundamental way.'
    ],
    fullSentence: "As soon as you record an incident on camera, you are altering its reality in a fundamental way."
  },
  {
    id: 'scramble-2',
    title: 'Murphy on Direct Cinema Academic Impact (Paragraph C)',
    grammarNote: 'Subject Noun Phrase + Phrasal Verb + Direct Object + Prepositional Comparison',
    paragraphRef: 'C',
    chunks: [
      'the principles and methods of Direct Cinema',
      'brought documentaries to the attention of universities and film historians',
      'as never before.'
    ],
    correctOrder: [
      'the principles and methods of Direct Cinema',
      'brought documentaries to the attention of universities and film historians',
      'as never before.'
    ],
    fullSentence: "The principles and methods of Direct Cinema brought documentaries to the attention of universities and film historians as never before."
  },
  {
    id: 'scramble-3',
    title: 'Camberwell on Documentary Obligation (Paragraph E)',
    grammarNote: 'Dummy It Construction + Infinitive Clause with Compound Coordinate Predicate',
    paragraphRef: 'E',
    chunks: [
      'It is a requirement for documentary makers',
      'to express a particular viewpoint',
      'and give personal responses to the material they are recording.'
    ],
    correctOrder: [
      'It is a requirement for documentary makers',
      'to express a particular viewpoint',
      'and give personal responses to the material they are recording.'
    ],
    fullSentence: "It is a requirement for documentary makers to express a particular viewpoint and give personal responses to the material they are recording."
  }
];

export const AUTHOR_ARGUMENT_FLOW: AuthorStanceItem[] = [
  {
    id: 'flow-A',
    paragraph: 'A',
    topic: 'Historical Skepticism & Triple Criticisms',
    rhetoricalPurpose: 'Explains why twentieth-century documentaries were neglected by critics and film academia.',
    discourseSignal: 'Firstly, Secondly, Lastly (enumerative critique)',
    keyConclusion: 'Recording fundamentally alters reality, definitions were lacking, and filming without consent raised serious ethics problems.'
  },
  {
    id: 'flow-B',
    paragraph: 'B',
    topic: 'Debate Over the Origins of the Genre',
    rhetoricalPurpose: 'Contrasts the accepted start (1922 Flaherty) with evidence of earlier beginnings (1895 newsreels).',
    discourseSignal: 'None of this prevented... However, that starting point has been disputed...',
    keyConclusion: 'Historians argue whether documentaries began in 1922 with Nanook of the North or as early as 1895 with newsreels and exploration films.'
  },
  {
    id: 'flow-C',
    paragraph: 'C',
    topic: 'Contrast Between Grierson and Direct Cinema',
    rhetoricalPurpose: 'Contrasts the formal, rehearsed tripod era with the spontaneous handheld Direct Cinema revolution.',
    discourseSignal: 'In the years following 1922... However, by the 1960s... being rejected by...',
    keyConclusion: 'Direct Cinema introduced natural authenticity without rehearsals or artificial lights, earning university and scholarly recognition.'
  },
  {
    id: 'flow-D',
    paragraph: 'D',
    topic: 'Video/Digital Revolution & Amateur Filmmaking',
    rhetoricalPurpose: 'Examines how cheap cameras and online platforms democratized documentary creation.',
    discourseSignal: 'Starting in the 1980s... Nonetheless, while... But as critic Maria Fiala pointed out...',
    keyConclusion: 'Anyone could make films from home, though viewers\' expectations did not immediately transform overnight.'
  },
  {
    id: 'flow-E',
    paragraph: 'E',
    topic: 'The Subjective, Personal Paradigm (Catfish)',
    rhetoricalPurpose: 'Highlights the shift from political/social issues toward personal lives, emotions, and open subjectivity.',
    discourseSignal: 'However, a new generation... moved away from... Instead the focus moved inwards...',
    keyConclusion: 'Documentaries are inherently subjective; directors are required to express personal viewpoints.'
  },
  {
    id: 'flow-F',
    paragraph: 'F',
    topic: 'Global Festivals & Promotional Opportunities',
    rhetoricalPurpose: 'Surveys modern avenues for screening and promoting diverse documentaries worldwide.',
    discourseSignal: 'The popularity and variety... The biggest of all... Even older is... Then there is... All in all...',
    keyConclusion: 'International film festivals offer unprecedented access for amateurs, first timers, short-film directors, and animators.'
  }
];

export const CONSOLIDATION_DISTRACTOR_TRAPS: DistractorTrapItem[] = [
  {
    id: 'trap-1',
    deceptiveClaim: "Heading vi ('A comparison between early and modern documentary styles') is the correct heading for Paragraph C because the opening lines contrast John Grierson's work with Direct Cinema in the 1960s.",
    sourceContext: "Questions 14–19 • Matching Headings (Paragraph C Distractor)",
    paragraphRef: 'C',
    trapOptions: [
      {
        id: 'opt-detail',
        label: 'Minor Detail vs Whole-Paragraph Gist',
        description: 'Focuses strictly on the opening introductory contrast while ignoring the paragraph’s decisive main achievement.'
      },
      {
        id: 'opt-reversal',
        label: 'Polar Direct Contradiction',
        description: 'Directly inverts a factual statement made by the author.'
      },
      {
        id: 'opt-extreme',
        label: 'Extreme / Unwarranted Generalization',
        description: 'Uses absolute language such as "all", "never", or "exclusively".'
      },
      {
        id: 'opt-notgiven',
        label: 'Unsupported Out-of-Scope Assumption',
        description: 'Introduces external historical facts not discussed in the reading text.'
      }
    ],
    correctTrapId: 'opt-detail',
    passageEvidence: "While Paragraph C mentions Grierson in 1929 and Direct Cinema in the 1960s, the entire second half and climax of the paragraph explains how Direct Cinema 'brought documentaries to the attention of universities and film historians as never before.' Thus, Heading i ('The arrival of academic respectability') is the true heading; Heading vi is merely a partial detail distractor.",
    explanation: "IELTS Heading distractors often accurately summarize the first 1–2 sentences of a paragraph. However, a valid heading must represent the communicative core of the entire paragraph rather than a transitional lead-in detail.",
    ieltsStrategyTip: "Never select a heading based solely on the first sentence. Always check if the second half of the paragraph pivots to an overriding theme or consequence."
  },
  {
    id: 'trap-2',
    deceptiveClaim: "Direct Cinema filmmakers in the 1960s insisted on heavily rehearsing scenes and using artificial studio lights to guarantee maximum dramatic tension.",
    sourceContext: "Questions 20–23 • Matching People & Ideas (Paragraph C)",
    paragraphRef: 'C',
    trapOptions: [
      {
        id: 'opt-reversal',
        label: 'Polar Reversal / Negative Inversion',
        description: 'Claims the filmmakers did the exact opposite of what the text explicitly states.'
      },
      {
        id: 'opt-detail',
        label: 'Minor Detail Distortion',
        description: 'Exaggerates a minor aesthetic recommendation.'
      },
      {
        id: 'opt-temporal',
        label: 'Chronological Misplacement',
        description: 'Swaps the 1960s with the late 1990s.'
      },
      {
        id: 'opt-source',
        label: 'Wrong Name Attribution',
        description: 'Attributes Maria Fiala’s statements to John Grierson.'
      }
    ],
    correctTrapId: 'opt-reversal',
    passageEvidence: "The passage states: 'Filmmakers rejected the use of tripods, rehearsals and artificial lights, preferring a more spontaneous approach.' The deceptive statement reverses 'rejected' into 'insisted on'.",
    explanation: "This is a classic IELTS Negative Polarity Trap. When authors describe what innovators rejected, abandoned, or avoided, test questions or distractors will assert that they adopted or required those very techniques.",
    ieltsStrategyTip: "Circle negative action verbs like 'rejected', 'abandoned', 'eschewed', or 'refrained from'—they are frequent targets for polar reversal traps."
  },
  {
    id: 'trap-3',
    deceptiveClaim: "The arrival of lightweight video cameras in the 1980s immediately transformed the standards and critical expectations of mainstream cinema audiences.",
    sourceContext: "Question 21 • Matching Statements to People (Maria Fiala, Paragraph D)",
    paragraphRef: 'D',
    trapOptions: [
      {
        id: 'opt-extreme',
        label: 'Extreme Modifier & False Immediacy',
        description: 'Inserts absolute temporal speed ("immediately transformed") when the text indicates gradual persistence of high standards.'
      },
      {
        id: 'opt-detail',
        label: 'Minor Technical Detail Trap',
        description: 'Confuses camera lens specifications.'
      },
      {
        id: 'opt-notgiven',
        label: 'Not Given / Fabricated Context',
        description: 'Fabricates film audience demographic data.'
      },
      {
        id: 'opt-reversal',
        label: 'Direct Reversal of Technology',
        description: 'Claims cameras became heavier rather than lighter.'
      }
    ],
    correctTrapId: 'opt-extreme',
    passageEvidence: "Paragraph D explicitly warns: 'Nonetheless, while technology made production accessible, audience expectations did not transform overnight... viewers still demanded compelling narrative structure.'",
    explanation: "The word 'immediately' injects an unjustified absolute pace. Question 21 tests Maria Fiala's observation that audience expectations remained high despite accessible technology.",
    ieltsStrategyTip: "Be suspicious of absolute words such as 'immediately', 'entirely', 'inevitably', or 'universally'. IELTS Academic texts typically employ cautious hedging ('did not transform overnight')."
  },
  {
    id: 'trap-4',
    deceptiveClaim: "The Hamburg International Short Film Festival strictly excludes experienced commercial directors and only accepts entries from first-time filmmakers.",
    sourceContext: "Questions 24–26 • Summary Completion (Film Festivals, Paragraph F)",
    paragraphRef: 'F',
    trapOptions: [
      {
        id: 'opt-extreme',
        label: 'Absolute Restriction / Exclusivity Fallacy',
        description: 'Turns a special sub-category for first-timers into an all-inclusive ban on every other filmmaker.'
      },
      {
        id: 'opt-temporal',
        label: 'Time Limit Distortion',
        description: 'Confuses 3-minute category durations with overall festival runtime.'
      },
      {
        id: 'opt-source',
        label: 'City Misidentification',
        description: 'Confuses Hamburg with Sheffield or Leipzig.'
      },
      {
        id: 'opt-reversal',
        label: 'Complete Denial of Categories',
        description: 'Denies the existence of short-film competitions.'
      }
    ],
    correctTrapId: 'opt-extreme',
    passageEvidence: "The text explains that the Hamburg festival features 'one category specifically aimed at first-time directors' (and another for films under 3 minutes). It does NOT bar established directors from other festival sections.",
    explanation: "Examiners often take a clause describing a specialized competition tier and generate a distractor claiming the entire event is exclusively restricted to that single demographic.",
    ieltsStrategyTip: "Pay close attention to 'one category' vs 'the entire event'. Never generalize a specialized subdivision into a universal rule for the whole institution."
  }
];
