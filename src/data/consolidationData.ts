import {
  LanguageItem,
  GrammarStructureItem,
  ParaphraseTaskItem,
  CollocationQuizItem,
  SentenceScrambleItem,
  AuthorStanceItem,
  DistractorTrapItem,
  MatchingPeopleInsightItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: LanguageItem[] = [
  {
    id: 'vocab-1',
    term: 'overshadow',
    partOfSpeech: 'verb (transitive)',
    phonetic: '/ˌəʊ.vəˈʃæd.əʊ/',
    bandLevel: 'Band 7.5',
    definition: 'To appear much more prominent, important, or successful than something else, causing the latter to receive less attention.',
    definitionVi: 'Làm lu mờ, che khuất hoặc vượt trội hơn hẳn một thứ khác, khiến thứ kia ít được công chúng chú ý hơn.',
    passageQuote: "For much of the twentieth century, documentary films were overshadowed by their more successful Hollywood counterparts.",
    paragraphRef: 'A',
    collocations: [
      'be overshadowed by',
      'overshadowed by events',
      'completely overshadow'
    ],
    collocationsVi: [
      'bị lu mờ bởi...',
      'bị phủ bóng bởi các biến cố',
      'hoàn toàn làm lu mờ'
    ],
    ieltsTip: 'Commonly used in IELTS Reading and Writing Task 2 to contrast two competing entities where one dominates the public or commercial spotlight.',
    ieltsTipVi: 'Rất thường gặp trong IELTS Reading và Writing Task 2 để đối chiếu hai thực thể cạnh tranh mà một bên áp đảo hoàn toàn sự chú ý.',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-2',
    term: 'alter reality / fundamental way',
    partOfSpeech: 'collocation / verb phrase',
    phonetic: '/ˈɔːl.tər riˈæl.ə.ti / ˌfʌn.dəˈmen.təl weɪ/',
    bandLevel: 'Band 8.0',
    definition: 'To substantially change the true, objective state or essence of an event or phenomenon rather than merely recording it.',
    definitionVi: 'Làm biến đổi căn bản trạng thái khách quan hoặc bản chất cốt lõi của một sự vật/sự việc thay vì chỉ ghi lại nó.',
    passageQuote: "That's because, as soon as you record an incident on camera, you are altering its reality in a fundamental way.",
    paragraphRef: 'A',
    collocations: [
      'alter reality in a fundamental way',
      'fundamental alteration of facts',
      'alter the nature of the original material'
    ],
    collocationsVi: [
      'làm thay đổi thực tại một cách căn bản',
      'sự biến đổi căn bản của các sự kiện',
      'thay đổi bản chất của tài liệu gốc'
    ],
    ieltsTip: 'Key paraphrase in Question 22 (Dr Helmut Fischer): "putting material on film [= record an incident on camera] essentially [= fundamental way] changes the nature of the original material [= altering its reality]".',
    ieltsTipVi: 'Paraphrase then chốt trong Câu 22 (Dr Helmut Fischer): "putting material on film" [= record on camera] "essentially" [= fundamental way] "changes the nature" [= altering reality].',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-3',
    term: 'ethics of filming / consent',
    partOfSpeech: 'noun phrase / collocation',
    phonetic: '/ˈeθ.ɪks əv ˈfɪl.mɪŋ / kənˈsent/',
    bandLevel: 'Band 8.0',
    definition: 'The moral principles governing whether subjects can be recorded without their explicit permission or voluntary agreement.',
    definitionVi: 'Các chuẩn mực đạo đức chi phối việc quay phim các đối tượng mà không có sự đồng ý hoặc cho phép rõ ràng từ họ.',
    passageQuote: "Lastly, there were also concerns about the ethics of filming subjects without their consent, which is a necessity in many documentary films.",
    paragraphRef: 'A',
    collocations: [
      'film subjects without consent',
      'informed consent',
      'ethical concerns surrounding filming'
    ],
    collocationsVi: [
      'quay phim đối tượng khi chưa được đồng ý',
      'sự đồng thuận tự nguyện có hiểu biết',
      'các lo ngại về mặt đạo đức khi ghi hình'
    ],
    ieltsTip: 'Forms the third core criticism in Paragraph A for Heading iv ("A number of criticisms about all documentary filmmaking in the past").',
    ieltsTipVi: 'Tạo nên luận điểm chỉ trích thứ ba ở Đoạn A cho Heading iv ("Một số chỉ trích về phim tài liệu trong quá khứ").',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-4',
    term: 'open to question / dispute',
    partOfSpeech: 'idiomatic phrase / verb',
    phonetic: '/ˈəʊ.pən tuː ˈkwes.tʃən / dɪˈspjuːt/',
    bandLevel: 'Band 7.5',
    definition: 'Not yet certain or agreed upon; subjected to scholarly disagreement or differing viewpoints.',
    definitionVi: 'Chưa rõ ràng, chưa ngã ngũ hoặc còn gây tranh cãi giữa các nhà học giả.',
    passageQuote: "...though exactly when the process started is open to question... However, that 1922 starting point has been disputed by supporters of an earlier date.",
    paragraphRef: 'B',
    collocations: [
      'open to question',
      'dispute a starting point',
      'disputed origins of a genre'
    ],
    collocationsVi: [
      'còn là một dấu hỏi bỏ ngỏ',
      'tranh cãi về cột mốc bắt đầu',
      'nguồn gốc gây tranh cãi của một thể loại'
    ],
    ieltsTip: 'Direct lexical signal for Heading vii ("The debate about the origins of documentary filmmaking"). "Open to question" signals an ongoing scholarly debate.',
    ieltsTipVi: 'Tín hiệu trực tiếp cho Heading vii ("Cuộc tranh luận về nguồn gốc phim tài liệu"). Cụm từ báo hiệu một cuộc tranh luận học thuật.',
    category: 'idiomatic-phrase'
  },
  {
    id: 'vocab-5',
    term: 'culminate with',
    partOfSpeech: 'phrasal verb',
    phonetic: '/ˈkʌl.mɪ.neɪt wɪð/',
    bandLevel: 'Band 8.0',
    definition: 'To reach a final or climactic point, especially after a prolonged period of artistic or professional development.',
    definitionVi: 'Đạt tới đỉnh cao hoặc điểm kết thúc vinh quang, đặc biệt sau một giai đoạn dài phát triển nghệ thuật.',
    passageQuote: "Grierson's career lasted nearly 40 years, beginning with Drifters (1929) and culminating with I Remember, I Remember (1968).",
    paragraphRef: 'C',
    collocations: [
      'culminate in/with',
      'culmination of a career',
      'culminating event'
    ],
    collocationsVi: [
      'lên tới đỉnh điểm với/ở...',
      'đỉnh cao của một sự nghiệp',
      'sự kiện mang tính đỉnh điểm'
    ],
    ieltsTip: 'Frequently tested in chronological passages to mark the final phase or crowning achievement of an individual’s historical work.',
    ieltsTipVi: 'Thường được hỏi trong các bài đọc lịch sử để đánh dấu giai đoạn đỉnh cao hoặc thành tựu rực rỡ nhất trong sự nghiệp.',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-6',
    term: 'scholarly analysis / academic respectability',
    partOfSpeech: 'noun phrase',
    phonetic: '/ˈskɒl.ə.li əˈnæl.ə.sɪs/',
    bandLevel: 'Band 8.5+',
    definition: 'Rigorous, critical intellectual examination carried out by university researchers and academic historians.',
    definitionVi: 'Sự nghiên cứu, phân tích học thuật chuyên sâu và nghiêm túc được thực hiện bởi các trường đại học và sử gia.',
    passageQuote: "Documentaries started to be recognised as a distinct genre worthy of serious scholarly analysis.",
    paragraphRef: 'C',
    collocations: [
      'worthy of serious scholarly analysis',
      'rigorous scholarly analysis',
      'academic respectability'
    ],
    collocationsVi: [
      'xứng đáng được phân tích học thuật nghiêm túc',
      'nghiên cứu học thuật khắt khe',
      'vị thế / uy tín học thuật'
    ],
    ieltsTip: 'Key locator for Question 21 (Paula Murphy): "One set of beliefs and techniques helped to make documentary films academically respectable".',
    ieltsTipVi: 'Dấu hiệu then chốt cho Câu 21 (Paula Murphy): "One set of beliefs and techniques helped to make documentary films academically respectable".',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-7',
    term: 'revolutionise / democratise',
    partOfSpeech: 'verb (transitive)',
    phonetic: '/ˌrev.əˈluː.ʃən.aɪz/',
    bandLevel: 'Band 7.5',
    definition: 'To completely change the way that something is done, produced, or made accessible to the wider public.',
    definitionVi: 'Tạo ra cuộc cách mạng làm thay đổi hoàn toàn cách thức sản xuất và mở rộng khả năng tiếp cận cho công chúng.',
    passageQuote: "New cameras and digital platforms revolutionised the making of films.",
    paragraphRef: 'D',
    collocations: [
      'revolutionise the making of films',
      'revolutionise an industry',
      'technological revolution'
    ],
    collocationsVi: [
      'cách mạng hóa ngành làm phim',
      'cách mạng hóa một ngành công nghiệp',
      'cuộc cách mạng công nghệ'
    ],
    ieltsTip: 'Directly relates to Heading viii: "The ability of ordinary people to create documentary films for the first time".',
    ieltsTipVi: 'Liên hệ trực tiếp đến Heading viii: "Khả năng tự làm phim tài liệu của những người bình thường lần đầu tiên xuất hiện".',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-8',
    term: 'inherently subjective',
    partOfSpeech: 'collocation / adjective phrase',
    phonetic: '/ɪnˈher.ənt.li səbˈdʒek.tɪv/',
    bandLevel: 'Band 8.5+',
    definition: 'Existing as an inseparable natural characteristic based on personal feelings, perspectives, or opinions rather than neutral facts.',
    definitionVi: 'Bản chất cố hữu mang tính chủ quan, dựa trên cảm xúc, góc nhìn cá nhân thay vì sự thật trung lập hoàn toàn.',
    passageQuote: "Filmmaker Josh Camberwell maintains that Catfish embodies a new realisation that documentaries are inherently subjective and that this should be celebrated.",
    paragraphRef: 'E',
    collocations: [
      'inherently subjective nature',
      'subjective viewpoint',
      'embody a new realisation'
    ],
    collocationsVi: [
      'bản chất cố hữu mang tính chủ quan',
      'quan điểm chủ quan',
      'hiện thân cho một nhận thức mới'
    ],
    ieltsTip: 'Matches Question 23 (Josh Camberwell): requirement to "express a particular viewpoint and give personal responses".',
    ieltsTipVi: 'Khớp với Câu 23 (Josh Camberwell): yêu cầu các nhà làm phim phải "thể hiện góc nhìn cá nhân và đưa ra phản hồi mang tính chủ quan".',
    category: 'collocation'
  },
  {
    id: 'vocab-9',
    term: 'showcase',
    partOfSpeech: 'verb (transitive) / noun',
    phonetic: '/ˈʃəʊ.keɪs/',
    bandLevel: 'Band 7.5',
    definition: 'To present, exhibit, or display the best qualities of films, artistic works, or achievements for public appreciation.',
    definitionVi: 'Trưng bày, giới thiệu hoặc quảng bá những tác phẩm nghệ thuật, phẩm chất tốt nhất cho công chúng thưởng thức.',
    passageQuote: "The biggest of all must be the Hot Docs Festival in Canada, which over the years has showcased hundreds of documentaries from more than 50 different countries.",
    paragraphRef: 'F',
    collocations: [
      'showcase hundreds of documentaries',
      'showcase talent',
      'a showcase for new filmmakers'
    ],
    collocationsVi: [
      'quảng bá hàng trăm bộ phim tài liệu',
      'giới thiệu tài năng',
      'sân chơi phô diễn cho các nhà làm phim mới'
    ],
    ieltsTip: 'Used in Paragraph F to illustrate "A wide range of opportunities to promote documentary films" (Heading iii).',
    ieltsTipVi: 'Dùng trong Đoạn F để minh họa "Rất nhiều cơ hội để quảng bá phim tài liệu" (Heading iii).',
    category: 'academic-vocab'
  },
  {
    id: 'vocab-10',
    term: 'first timers',
    partOfSpeech: 'noun phrase (informal/academic context)',
    phonetic: '/ˌfɜːst ˈtaɪ.məz/',
    bandLevel: 'Band 7.0',
    definition: 'People who are doing something or presenting their work for the very first time; novices or beginners.',
    definitionVi: 'Những người mới bắt đầu tham gia hoặc lần đầu tiên giới thiệu tác phẩm của mình ra công chúng; người mới vào nghề.',
    passageQuote: "The small size of the festival means that for first timers this is the ideal venue to try to get some recognition for their films.",
    paragraphRef: 'F',
    collocations: [
      'ideal venue for first timers',
      'recognition for first timers',
      'opportunities for first-time directors'
    ],
    collocationsVi: [
      'địa điểm lý tưởng cho người mới bắt đầu',
      'sự công nhận cho các đạo diễn tay ngang lần đầu thử sức',
      'cơ hội cho các nhà làm phim lần đầu sản xuất'
    ],
    ieltsTip: 'Target answer for Question 25 in the summary completion task: "The Short and Sweet Film Festival is especially good for documentary makers who are first timers / 1st timers".',
    ieltsTipVi: 'Đáp án trực tiếp cho Câu 25 trong bài Summary Completion: "The Short and Sweet Film Festival is especially good for documentary makers who are first timers / 1st timers".',
    category: 'academic-vocab'
  }
];

export const CONSOLIDATION_GRAMMAR_STRUCTURES: GrammarStructureItem[] = [
  {
    id: 'struct-1',
    title: 'Sequential Rhetorical Structuring (Firstly, Secondly, Lastly)',
    titleVi: 'Cấu Trúc Liệt Kê Luận Điểm Tuần Tự (Firstly, Secondly, Lastly)',
    structurePattern: 'Adverbial sequencing markers introducing distinct coordinated sub-claims',
    structurePatternVi: 'Các từ nối thứ tự giới thiệu từng luận điểm chỉ trích độc lập nhưng có liên kết bổ sung',
    passageExample: "Firstly, the very idea of a documentary film made some people suspicious... Secondly, even supporters of documentaries could not agree on a precise definition... Lastly, there were also concerns about the ethics of filming subjects without their consent...",
    paragraphRef: 'A',
    simplifiedParaphrase: "The writer presents three distinct criticisms in order: skepticism of non-fiction truth, lack of an agreed definition, and filming ethics without consent.",
    simplifiedParaphraseVi: "Tác giả nêu ra ba luận điểm chỉ trích nối tiếp nhau: sự nghi ngờ về tính chân thực, thiếu một định nghĩa thống nhất, và vấn đề đạo đức khi ghi hình không xin phép.",
    ieltsReadingFunction: 'Crucial for matching headings: recognizing that the paragraph is an enumeration of multiple criticisms ("A number of criticisms about all documentary filmmaking in the past").',
    ieltsReadingFunctionVi: 'Cực kỳ quan trọng để chọn Heading: nhận ra đoạn văn là sự liệt kê nhiều luận điểm chỉ trích ("A number of criticisms about all documentary filmmaking in the past").',
    practiceTip: 'When you see sequential discourse markers (Firstly, Secondly, Finally/Lastly), look for a plural noun in the heading such as "criticisms", "reasons", "factors", or "challenges".',
    practiceTipVi: 'Khi thấy các từ nối thứ tự (Firstly, Secondly, Finally/Lastly), hãy tìm danh từ số nhiều trong tiêu đề như "criticisms", "reasons", "factors", hoặc "challenges".'
  },
  {
    id: 'struct-2',
    title: 'Concession Followed by Inverted Contrast (Nonetheless, while... was still...)',
    titleVi: 'Cấu Trúc Nhượng Bộ Kèm Phản Đề Đối Nghịch (Nonetheless, while... was still...)',
    structurePattern: 'Nonetheless + subordinate concessive clause (while X was occurring) + main contrastive clause (Y was still the case)',
    structurePatternVi: 'Từ nối tương phản Nonetheless + mệnh đề phụ nhượng bộ (while X) + mệnh đề chính nêu thực tế chiếm ưu thế (Y was still)',
    passageExample: "Nonetheless, while countless amateur documentaries were being made, perhaps the most popular documentary of 2006 was still the professionally made An Inconvenient Truth.",
    paragraphRef: 'D',
    simplifiedParaphrase: "Even though millions of amateurs were making films with cheap cameras, a high-budget professional production remained the biggest hit.",
    simplifiedParaphraseVi: "Dù hàng triệu người nghiệp dư có thể tự quay phim bằng máy quay giá rẻ, một bộ phim được đầu tư chuyên nghiệp vẫn là tác phẩm ăn khách nhất.",
    ieltsReadingFunction: 'Prevents overgeneralization: tests whether the candidate realizes technology democratized creation without eliminating the dominance of professional work.',
    ieltsReadingFunctionVi: 'Tránh bẫy khái quát hóa quá mức: kiểm tra xem thí sinh có nhận ra công nghệ dân chủ hóa việc làm phim nhưng không xóa bỏ hoàn toàn ưu thế của phim chuyên nghiệp.',
    practiceTip: 'Watch out for "while" used as a concessive conjunction meaning "although". The main clause following the comma carries the author’s primary claim.',
    practiceTipVi: 'Cảnh giác với "while" dùng với nghĩa nhượng bộ "mặc dù" (= although). Mệnh đề chính đứng sau dấu phẩy mới là quan điểm trọng tâm của tác giả.'
  },
  {
    id: 'struct-3',
    title: 'Reported Speech of Expert Attribution (As critic X has pointed out, ...)',
    titleVi: 'Cấu Trúc Dẫn Lời Chuyên Gia & Trích Dẫn Ý Kiến (As critic X has pointed out, ...)',
    structurePattern: 'Attributive reporting phrase + quoted / paraphrased counter-claim',
    structurePatternVi: 'Cụm từ dẫn nguồn người phát ngôn + luận điểm đối nghịch được trích dẫn trực tiếp hoặc gián tiếp',
    passageExample: "But as critic Maria Fiala has pointed out, 'The argument sometimes put forward that these innovations immediately transformed what the public expected to see in a documentary isn't entirely accurate.'",
    paragraphRef: 'D',
    simplifiedParaphrase: "Maria Fiala states that the claim that new digital tools quickly changed audience expectations is not completely true.",
    simplifiedParaphraseVi: "Nhà phê bình Maria Fiala chỉ ra rằng lập luận cho rằng các công nghệ mới lập tức làm thay đổi kỳ vọng của công chúng là chưa chính xác.",
    ieltsReadingFunction: 'Core skill for "Matching statements with people" tasks: attributing precise claims and counter-arguments to named figures.',
    ieltsReadingFunctionVi: 'Kỹ năng cốt lõi cho dạng "Matching statements with people": quy gán chuẩn xác ý kiến phản biện cho đúng nhân vật được nêu tên.',
    practiceTip: 'Identify the exact scope of the speaker’s statement: Fiala is discussing audience expectations/attitudes, not the technical production of films.',
    practiceTipVi: 'Xác định chính xác phạm vi phát biểu của nhân vật: Fiala đang bàn về kỳ vọng/thái độ của khán giả, chứ không phải về quy trình kỹ thuật làm phim.'
  },
  {
    id: 'struct-4',
    title: 'Contrastive Semi-Colon and Parallel Clausal Balancing',
    titleVi: 'Cấu Trúc Song Hành Đối Chiếu Sử Dụng Dấu Chấm Phẩy (;)',
    structurePattern: 'Two contrasting independent clauses linked by semi-colons and coordinating conjunctions',
    structurePatternVi: 'Các mệnh đề độc lập song hành được nối bằng dấu chấm phẩy và liên từ để liệt kê các đặc điểm đối lập',
    passageExample: "cameras were hand-held; no additional lighting or sound was used; and the subjects did not rehearse.",
    paragraphRef: 'C',
    simplifiedParaphrase: "Direct Cinema contrasted with Grierson by using hand-held cameras, natural ambient lighting/sound, and completely unprompted subjects.",
    simplifiedParaphraseVi: "Trường phái Direct Cinema đối lập với phong cách của Grierson bằng việc dùng máy quay cầm tay, ánh sáng/âm thanh tự nhiên và nhân vật hoàn toàn không tập dượt.",
    ieltsReadingFunction: 'Provides dense descriptive criteria contrasting two historical movements (Heading i).',
    ieltsReadingFunctionVi: 'Cung cấp danh mục các tiêu chí đối chiếu dày đặc giữa hai phong trào điện ảnh lịch sử (Heading i).',
    practiceTip: 'Rapidly parse multi-clause lists separated by semi-colons to extract the defining attributes of a method or technique.',
    practiceTipVi: 'Quét nhanh các vế câu ngăn cách bằng dấu chấm phẩy để trích xuất các thuộc tính định nghĩa của một phương pháp hoặc kỹ thuật.'
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

export interface StrategyStep {
  stepNumber: number;
  titleEn: string;
  titleVi: string;
  timeGuidanceEn: string;
  timeGuidanceVi: string;
  actionEn: string;
  actionVi: string;
  proTipEn: string;
  proTipVi: string;
  iconType: 'scan' | 'decode' | 'zone' | 'matrix' | 'eliminate';
}

export interface CommonTrap {
  trapNumber: number;
  nameEn: string;
  nameVi: string;
  archetypeEn: string;
  archetypeVi: string;
  dangerEn: string;
  dangerVi: string;
  exampleInPassageEn: string;
  exampleInPassageVi: string;
  countermeasureEn: string;
  countermeasureVi: string;
}

export const MATCHING_PEOPLE_STRATEGY_STEPS: StrategyStep[] = [
  {
    stepNumber: 1,
    titleEn: 'Rapid Pre-Scan & Map All Names Across the Passage',
    titleVi: 'Quét Nhanh & Đánh Dấu Tất Cả Tên Riêng Trên Toàn Bài Đọc',
    timeGuidanceEn: '30–45 seconds',
    timeGuidanceVi: '30–45 giây',
    actionEn: 'Do NOT start by reading the questions and re-reading the whole passage 4 times! Instead, take the list of names (Box of People) and scan the text for capital letters to locate and bracket EVERY occurrence of each name. Note whether any name appears more than once.',
    actionVi: 'ĐỪNG bắt đầu bằng việc đọc câu hỏi rồi đọc đi đọc lại cả bài 4 lần! Hãy nhìn danh sách tên riêng trong khung, lướt mắt tìm chữ hoa và đánh dấu TẤT CẢ các vị trí xuất hiện của từng nhân vật. Kiểm tra xem có ai xuất hiện ở nhiều hơn 1 đoạn văn không.',
    proTipEn: 'Names stand out visually due to capital letters (Dr Helmut Fischer, Anthony Berwick, Paula Murphy, Maria Fiala, Josh Camberwell). This instant mapping gives you the exact geographical anchors of the test.',
    proTipVi: 'Tên riêng rất nổi bật nhờ chữ hoa đầu từ. Việc đánh dấu trước này tạo cho bạn bản đồ định vị chính xác tuyệt đối mà không mất công tìm kiếm lại.',
    iconType: 'scan'
  },
  {
    stepNumber: 2,
    titleEn: 'Deconstruct Question Statements & Isolate the Proposition Core',
    titleVi: 'Mổ Xẻ Từng Nhận Định & Cô Lập "Lõi Mệnh Đề"',
    timeGuidanceEn: '60 seconds',
    timeGuidanceVi: '60 giây',
    actionEn: 'Analyze each statement (Q20–23) to identify two distinct elements: (1) Unchangeable topical context words, and (2) The core evaluative claim or predicate (e.g. "did not change attitudes as quickly", "helped make academically respectable", "essentially changes reality", "have an obligation to include opinions").',
    actionVi: 'Phân tích từng nhận định (Câu 20–23) để tách biệt 2 thành phần: (1) Bối cảnh đề tài chung, và (2) Lõi nhận định mang tính đánh giá hoặc vị ngữ hành động (ví dụ: "không làm đổi thái độ nhanh như nghĩ", "giúp nâng cao vị thế học thuật", "làm biến đổi căn bản thực tại", "có nghĩa vụ bắt buộc đưa quan điểm riêng").',
    proTipEn: 'Underline the verbs and qualifying adjectives in the statement. Examiners rarely paraphrase proper names, but they ALWAYS heavily paraphrase the predicate assertion.',
    proTipVi: 'Hãy gạch chân động từ chính và tính từ chỉ sắc thái trong câu hỏi. Người ra đề hầu như luôn paraphrase vị ngữ và luận điểm thay vì từ khóa bề mặt.',
    iconType: 'decode'
  },
  {
    stepNumber: 3,
    titleEn: 'Target the "Zone of Influence" Around Each Person',
    titleVi: 'Khoanh Vùng "Vùng Ảnh Hưởng" & Động Từ Tường Thuật',
    timeGuidanceEn: '90–120 seconds',
    timeGuidanceVi: '90–120 giây',
    actionEn: 'Read the 1–2 sentences immediately surrounding the person\'s name. Look for two grammatical indicators: (A) Direct Quotation Marks (\'...\') where the person\'s exact words appear, and (B) Reporting Verbs of Attribution (e.g. "argues that", "maintains that", "pointed out that", "according to").',
    actionVi: 'Đọc kỹ 1–2 câu ngay trước và sau tên nhân vật. Chú ý 2 dấu hiệu ngữ pháp: (A) Dấu ngoặc kép trích dẫn trực tiếp (\'...\') chứa nguyên văn lời nói, và (B) Các động từ tường thuật dẫn ý kiến (ví dụ: "argues that", "maintains that", "pointed out that", "according to").',
    proTipEn: 'Do not confuse the passage author\'s narrative with the quoted expert\'s opinion. The question tests ONLY what the named person asserted, not the surrounding historical background.',
    proTipVi: 'Đừng nhầm lẫn giữa lời kể của tác giả bài viết với ý kiến của chuyên gia được trích dẫn. Câu hỏi CHỈ hỏi về nhận định do chính nhân vật đó đưa ra.',
    iconType: 'zone'
  },
  {
    stepNumber: 4,
    titleEn: 'Execute 1-to-1 Paraphrase Alignment Verification',
    titleVi: 'Đối Chiếu & Xác Thực Ma Trận Paraphrase 1-Kèm-1',
    timeGuidanceEn: '60–90 seconds',
    timeGuidanceVi: '60–90 giây',
    actionEn: 'Match the statement to the person ONLY when at least 2 to 3 lexical components form a direct synonymous bridge. If only one superficial word matches, it is almost certainly a trap.',
    actionVi: 'Chỉ chọn đáp án khi có ít nhất 2 đến 3 thành phần ngữ nghĩa tạo thành cầu nối đồng nghĩa trực tiếp. Nếu chỉ có một từ vựng bề mặt trùng lặp, đó gần như chắc chắn là bẫy dụ.',
    proTipEn: 'Verify all three legs of the tripod: (1) Subject/Actor, (2) Action/Verb modality, (3) Object/Outcome. If any leg contradicts or lacks evidence, look at another person.',
    proTipVi: 'Kiểm tra đủ 3 chân kiềng: (1) Chủ thể, (2) Động từ/Sắc thái bắt buộc, (3) Kết quả/Đối tượng. Nếu thiếu bất kỳ vế nào, đó chưa phải là đáp án đúng.',
    iconType: 'matrix'
  },
  {
    stepNumber: 5,
    titleEn: 'Distractor Elimination & "NB" Rule Awareness',
    titleVi: 'Loại Bỏ Kẻ Tung Hỏa Mù & Cảnh Giác Với Quy Tắc "NB"',
    timeGuidanceEn: '30 seconds',
    timeGuidanceVi: '30 giây',
    actionEn: 'Notice that there are 5 people (A to E) but only 4 questions (20–23). One person is an intentional distractor who is never matched (Anthony Berwick). Quickly summarize their topic (chronological origins) to confirm they have no matching prompt, then discard them safely.',
    actionVi: 'Lưu ý rằng có 5 nhân vật (A đến E) nhưng chỉ có 4 câu hỏi (20–23). Một nhân vật là kẻ tung hỏa mù không bao giờ được chọn (Anthony Berwick). Tóm tắt nhanh ý của người này (mốc lịch sử 1895) để xác nhận không có câu nào hỏi về đề tài này, rồi tự tin loại bỏ.',
    proTipEn: 'If the instructions say "NB: You may use any letter more than once", one person will be used twice and TWO people might be distractors! In this test, each letter is used at most once.',
    proTipVi: 'Nếu đề bài ghi "NB: You may use any letter more than once", một người sẽ được chọn 2 lần. Nhưng trong đề này không có dòng NB, mỗi chữ cái chỉ dùng tối đa 1 lần.',
    iconType: 'eliminate'
  }
];

export const MATCHING_PEOPLE_COMMON_TRAPS: CommonTrap[] = [
  {
    trapNumber: 1,
    nameEn: 'The Proximity Trap (Superficial Neighbor Fallacy)',
    nameVi: 'Bẫy Gần Nhất (Ngộ Nhận Vị Trí Kề Cận)',
    archetypeEn: 'Attributing the surrounding sentence content to the nearest named person without checking reporting syntax.',
    archetypeVi: 'Gán ghép nội dung của câu văn xung quanh cho nhân vật gần nhất mà không kiểm tra cấu trúc động từ tường thuật.',
    dangerEn: 'Students read Paragraph D about "amateurs working from home with video cameras" and see Maria Fiala\'s name nearby. They wrongly think Fiala invented video cameras or praised amateurs.',
    dangerVi: 'Thí sinh đọc Đoạn D thấy nhắc đến "người nghiệp dư làm phim tại nhà" và thấy tên Maria Fiala ở gần, liền suy diễn sai rằng Fiala ca ngợi người nghiệp dư.',
    exampleInPassageEn: 'Paragraph D: Video and digital cameras enabled amateurs. Maria Fiala\'s actual quote ONLY addresses the velocity of public expectations: "isn\'t entirely accurate" that innovations immediately transformed expectations.',
    exampleInPassageVi: 'Đoạn D: Máy quay số giúp người nghiệp dư làm phim. Nhưng lời nói thực sự của Fiala CHỈ bàn về tốc độ thay đổi kỳ vọng của khán giả.',
    countermeasureEn: 'Always bracket the reporting verb ("as critic Maria Fiala pointed out, \'...\'") and confine your match STRICTLY to the clause governed by that verb.',
    countermeasureVi: 'Luôn đóng khung mệnh đề dẫn lời ("as critic Maria Fiala pointed out, \'...\'") và CHỈ đối chiếu thông tin nằm bên trong mệnh đề đó.'
  },
  {
    trapNumber: 2,
    nameEn: 'The Exact Keyword Echo Trap',
    nameVi: 'Bẫy Từ Khóa Trùng Lặp Y Hệt',
    archetypeEn: 'Luring students to match an option because it shares an identical word with the passage, whereas the actual answer is 100% paraphrased.',
    archetypeVi: 'Dụ thí sinh chọn nhân vật vì có từ vựng giống hệt câu hỏi, trong khi đáp án đúng thực sự lại được diễn đạt hoàn toàn bằng từ đồng nghĩa.',
    dangerEn: 'Students see "film historian" Anthony Berwick in Para B and look at Q21 "academically respectable". Because historians work in academics, students fall for the keyword trap without checking the assertion.',
    dangerVi: 'Thí sinh thấy "film historian" Anthony Berwick ở Đoạn B và thấy Câu 21 có "academically respectable". Vì tưởng sử gia là giới học thuật nên chọn nhầm Berwick, dù Berwick chỉ nói về mốc năm 1895.',
    exampleInPassageEn: 'Berwick discusses 1895 origins, NOT academic analysis. Paula Murphy in Para C is the one who discusses "universities and film historians" and "serious scholarly analysis" (Q21).',
    exampleInPassageVi: 'Berwick bàn về nguồn gốc năm 1895, không bàn về học thuật. Paula Murphy ở Đoạn C mới là người nói về sự công nhận của đại học và phân tích học thuật (Câu 21).',
    countermeasureEn: 'Remember the golden IELTS rule: Real answers are built on PARAPHRASES, not verbatim word repetition. If a word repeats exactly without synonymous support, be doubly cautious.',
    countermeasureVi: 'Ghi nhớ nguyên tắc vàng IELTS: Đáp án đúng được xây dựng từ TỪ ĐỒNG NGHĨA (paraphrase). Nếu từ vựng lặp lại y hệt mà thiếu sự tương đồng về nghĩa cả câu, hãy hết sức cảnh giác.'
  },
  {
    trapNumber: 3,
    nameEn: 'The Distractor Paralysis Trap',
    nameVi: 'Bẫy Bối Rối Vì Nhân Vật Dư Thừa',
    archetypeEn: 'Spending 5 minutes repeatedly re-reading a distractor name trying to force-fit them into an unassigned question.',
    archetypeVi: 'Mất 5 phút đọc đi đọc lại tên một nhân vật dư thừa và cố gượng ép ghép họ vào một câu hỏi chưa chắc chắn.',
    dangerEn: 'Students have answered Q20 (Fiala), Q21 (Murphy), Q22 (Fischer), and have Q23 left. They see Anthony Berwick and Josh Camberwell, and spend excessive time trying to make Berwick fit Q23.',
    dangerVi: 'Thí sinh đã làm được Câu 20, 21, 22 và còn Câu 23. Thấy còn Berwick và Camberwell, thí sinh mất quá nhiều thời gian cố gượng ép Berwick vào Câu 23.',
    exampleInPassageEn: 'Anthony Berwick\'s single contribution is arguing documentary started in 1895. Q23 demands an "obligation to include opinions". Berwick has zero overlap with obligation or opinions.',
    exampleInPassageVi: 'Đóng góp duy nhất của Anthony Berwick là luận điểm phim tài liệu bắt đầu từ năm 1895. Câu 23 đòi hỏi "nghĩa vụ đưa quan điểm cá nhân". Berwick hoàn toàn không liên quan gì đến nghĩa vụ này.',
    countermeasureEn: 'When evaluating a candidate name, state their central idea in 3–5 words. If no question matches that core thesis, label them "DISTRACTOR" and move on with conviction.',
    countermeasureVi: 'Tóm tắt ý của nhân vật trong 3–5 từ. Nếu không câu hỏi nào khớp với luận điểm đó, hãy mạnh dạn gắn nhãn "KẺ TUNG HỎA MÙ" và bỏ qua.'
  },
  {
    trapNumber: 4,
    nameEn: 'Modal & Attitudinal Distortion Trap',
    nameVi: 'Bẫy Bóp Méo Sắc Thái Động Từ Tình Thái (Modality)',
    archetypeEn: 'Confusing an optional artistic possibility or preference with a strict moral or professional obligation.',
    archetypeVi: 'Nhầm lẫn giữa một khả năng/sở thích nghệ thuật tự do với một nghĩa vụ nghề nghiệp mang tính bắt buộc.',
    dangerEn: 'In Q23, the statement specifies "have an obligation to include their own opinions". If an expert only said "filmmakers can express opinions", that would NOT match.',
    dangerVi: 'Ở Câu 23, đề bài nêu rõ "have an obligation" (có nghĩa vụ bắt buộc). Nếu nhân vật trong bài chỉ nói "có thể đưa quan điểm" (can/might), câu đó sẽ không được coi là đúng.',
    exampleInPassageEn: 'Josh Camberwell explicitly uses deontic modal force: "It is a requirement for documentary makers to express a particular viewpoint...". The noun "requirement" directly justifies "obligation".',
    exampleInPassageVi: 'Josh Camberwell dùng cấu trúc bắt buộc mạnh: "It is a requirement for documentary makers...". Danh từ "requirement" (yêu cầu bắt buộc) chính là bằng chứng xác thực cho "obligation".',
    countermeasureEn: 'Pay rigorous attention to modal verbs and nouns: "obligation", "requirement", "essential", "must" vs "can", "tend to", "suggest". Matches must align in modal intensity.',
    countermeasureVi: 'Luôn chú ý cường độ tình thái: "obligation", "requirement", "must" hoàn toàn khác với "can", "may", "suggest". Hai vế phải tương đồng tuyệt đối về mức độ bắt buộc.'
  }
];

export const MATCHING_PEOPLE_INSIGHT: MatchingPeopleInsightItem[] = [
  {
    id: 'person-A',
    personLetter: 'A',
    personName: 'Dr Helmut Fischer',
    role: 'Film Critic & Theorist',
    roleVi: 'Nhà phê bình & Lý luận điện ảnh',
    paragraphRef: 'A',
    isDistractor: false,
    matchedQuestionId: 22,
    statementEn: "The action of putting material on film essentially changes the nature of the original material.",
    statementVi: "Hành động ghi lại sự việc lên phim về bản chất làm thay đổi bản chất của sự việc gốc ban đầu.",
    exactQuoteEn: "As the critic Dr Helmut Fischer put it, 'Documentary makers might have ambitions to tell the \"truth\" and show only \"facts\" but there is no such thing as a non-fiction film. That's because, as soon as you record an incident on camera, you are altering its reality in a fundamental way'.",
    exactQuoteVi: "Như nhà phê bình Dr Helmut Fischer từng phát biểu: 'Các nhà làm phim tài liệu có thể ôm tham vọng kể \"sự thật\" và chỉ đưa ra \"sự kiện\", nhưng không có cái gọi là phim phi hư cấu. Đó là bởi vì ngay khi bạn ghi lại một sự việc trước ống kính máy quay, bạn đã làm biến đổi thực tại của nó một cách căn bản'.",
    reportingStyle: 'Direct Quote',
    reportingStyleVi: 'Trích dẫn trực tiếp trong ngoặc kép (\'...\')',
    paraphrasePairs: [
      {
        statementChunkEn: "putting material on film",
        statementChunkVi: "ghi lại chất liệu lên phim",
        passageChunkEn: "record an incident on camera",
        passageChunkVi: "ghi lại một sự việc trước máy quay",
        linguisticType: "Verb-Object Nominalization to Active Gerund",
        linguisticTypeVi: "Danh từ hóa cụm hành động sang cụm động từ tương đương"
      },
      {
        statementChunkEn: "changes the nature of the original material",
        statementChunkVi: "làm thay đổi bản chất của sự việc gốc",
        passageChunkEn: "altering its reality",
        passageChunkVi: "làm biến đổi thực tại của nó",
        linguisticType: "Semantic Paraphrase (Altering Reality = Changing Nature)",
        linguisticTypeVi: "Diễn giải đồng nghĩa (Biến đổi thực tại = Đổi thay bản chất)"
      },
      {
        statementChunkEn: "essentially",
        statementChunkVi: "về bản chất / một cách tất yếu",
        passageChunkEn: "in a fundamental way",
        passageChunkVi: "một cách căn bản / cốt lõi",
        linguisticType: "Adverb to Prepositional Manner Phrase",
        linguisticTypeVi: "Trạng từ chuyển hóa thành cụm giới từ chỉ thể cách"
      }
    ],
    examinerLogicEn: "Examiners target the philosophical core of Paragraph A. Dr Fischer rejects the idea of objective non-fiction: the mere act of framing reality through a camera fundamentally alters that reality. Notice the tight conditional clause 'as soon as you record... you are altering...'.",
    examinerLogicVi: "Giám khảo nhắm vào luận điểm triết học cốt lõi ở Đoạn A. Dr Fischer bác bỏ tính phi hư cấu tuyệt đối: chính hành động quay phim đã làm thay đổi hiện thực tự nhiên. Mệnh đề điều kiện 'as soon as you record... you are altering...' chứng minh quan hệ nguyên nhân - kết quả này.",
    masterStrategyTipEn: "Notice the discourse marker 'That's because, as soon as you...'. Cause-and-effect explanatory clauses after a quote are prime hunting grounds for IELTS matching statements.",
    masterStrategyTipVi: "Chú ý từ nối giải thích nguyên nhân 'That's because, as soon as you...'. Các mệnh đề nguyên nhân - hệ quả đứng ngay sau lời trích dẫn chính là nơi chứa đáp án đối chiếu.",
    trapAlertEn: "Candidates often get distracted by the surrounding discussion of Hollywood movies or ethical consent in Paragraph A. Keep your eyes strictly locked on Fischer's quoted words.",
    trapAlertVi: "Thí sinh dễ bị phân tâm bởi đoạn nói về phim Hollywood hay vấn đề đạo đức trong Đoạn A. Hãy khóa chặt mục tiêu vào lời trích dẫn của riêng Fischer."
  },
  {
    id: 'person-B',
    personLetter: 'B',
    personName: 'Anthony Berwick',
    role: 'Film Historian',
    roleVi: 'Nhà sử học điện ảnh',
    paragraphRef: 'B',
    isDistractor: true,
    exactQuoteEn: "Among this group is film historian Anthony Berwick, who argues that the genre can be traced back as early as 1895, when similar films started to appear, including newsreels, scientific films and accounts of journeys of exploration.",
    exactQuoteVi: "Trong nhóm này có nhà sử học điện ảnh Anthony Berwick, người lập luận rằng thể loại này có thể bắt nguồn từ tận năm 1895, khi những bộ phim tương tự bắt đầu xuất hiện, bao gồm phim thời sự, phim khoa học và phóng sự thám hiểm.",
    reportingStyle: 'Reported Speech',
    reportingStyleVi: 'Tường thuật gián tiếp với mệnh đề quan hệ (who argues that...)',
    distractorTrapAnalysis: {
      whyDistractorEn: "Anthony Berwick was deliberately placed in Passage 2 as a foil. His entire comment is restricted to historical chronology: arguing whether documentary origins started in 1895 vs 1922. Because none of the 4 test statements (Q20–23) ask about origins, dates, or exploration reels, he has NO valid match.",
      whyDistractorVi: "Anthony Berwick được cố tình cài cắm vào bài như một kẻ tung hỏa mù. Ý kiến của ông hoàn toàn giới hạn trong mốc thời gian lịch sử: lập luận nguồn gốc phim tài liệu bắt đầu từ 1895 thay vì 1922. Vì cả 4 câu hỏi (20–23) không câu nào hỏi về mốc nguồn gốc hay ngày tháng, ông KHÔNG có câu ghép nào.",
      temptingMisconceptionEn: "Students see 'film historian' and assume he must match Question 21 ('academically respectable'). However, being a historian does not mean his statement is about academic respectability—Paula Murphy is the one who discussed university recognition!",
      temptingMisconceptionVi: "Thí sinh thấy chức danh 'film historian' liền nghĩ ngay đến Câu 21 ('academically respectable'). Nhưng việc bản thân là sử gia không có nghĩa là nhận định của ông nói về vị thế học thuật—chính Paula Murphy mới là người nhận định về sự công nhận của trường đại học!"
    },
    paraphrasePairs: [],
    examinerLogicEn: "In almost every IELTS 'Matching Statements with People' task featuring 5 names and 4 questions, examiners create exactly ONE unassigned distractor name. Recognizing distractors early saves 3 to 4 precious test minutes.",
    examinerLogicVi: "Trong hầu hết các bài thi IELTS dạng nối tên người có 5 tên và 4 câu hỏi, giám khảo luôn tạo ra đúng 1 nhân vật bẫy không khớp với câu nào. Nhận diện sớm kẻ tung hỏa mù giúp bạn tiết kiệm 3 đến 4 phút quý báu.",
    masterStrategyTipEn: "Summarize Berwick in 3 words: 'Origin in 1895'. Check the 4 questions: does any question mention dates, origins, newsreels, or 1895? No. Discard immediately.",
    masterStrategyTipVi: "Tóm tắt ý của Berwick trong 3 từ: 'Nguồn gốc năm 1895'. Quét nhanh 4 câu hỏi: có câu nào hỏi về ngày tháng hay nguồn gốc không? Không hề. Hãy loại bỏ ông ấy ngay lập tức.",
    trapAlertEn: "Do NOT force-fit a person into an answer just because their name is left over. Trust your paraphrase analysis and leave the distractor letter unselected.",
    trapAlertVi: "ĐỪNG gượng ép ghép một nhân vật chỉ vì tên họ còn sót lại. Hãy tin vào phân tích paraphrase của mình và tự tin loại trừ nhân vật bẫy."
  },
  {
    id: 'person-C',
    personLetter: 'C',
    personName: 'Paula Murphy',
    role: 'Film Writer & Academic Analyst',
    roleVi: 'Nhà nghiên cứu & Phê bình điện ảnh',
    paragraphRef: 'C',
    isDistractor: false,
    matchedQuestionId: 21,
    statementEn: "One set of beliefs and techniques helped to make documentary films academically respectable.",
    statementVi: "Một tập hợp các niềm tin và kỹ thuật đã giúp phim tài liệu được công nhận xứng đáng trong giới học thuật.",
    exactQuoteEn: "According to film writer Paula Murphy, the principles and methods of Direct Cinema brought documentaries to the attention of universities and film historians as never before. Documentaries started to be recognised as a distinct genre worthy of serious scholarly analysis.",
    exactQuoteVi: "Theo nhà viết phê bình điện ảnh Paula Murphy, những nguyên tắc và phương pháp của trường phái Direct Cinema đã đưa phim tài liệu đến với sự chú ý của các trường đại học và các nhà sử học điện ảnh hơn bao giờ hết. Phim tài liệu bắt đầu được công nhận là một thể loại riêng biệt xứng đáng được phân tích học thuật nghiêm túc.",
    reportingStyle: 'Reported Speech',
    reportingStyleVi: 'Dẫn lời theo cấu trúc danh từ (According to film writer Paula Murphy...)',
    paraphrasePairs: [
      {
        statementChunkEn: "One set of beliefs and techniques",
        statementChunkVi: "Một tập hợp các niềm tin và kỹ thuật",
        passageChunkEn: "the principles and methods of Direct Cinema",
        passageChunkVi: "những nguyên tắc và phương pháp của Direct Cinema",
        linguisticType: "Abstract Categorical Synthesis (Principles = Beliefs; Methods = Techniques)",
        linguisticTypeVi: "Khái quát hóa từ vựng học thuật (Principles = Niềm tin; Methods = Kỹ thuật)"
      },
      {
        statementChunkEn: "helped to make documentary films academically respectable",
        statementChunkVi: "giúp phim tài liệu được công nhận trong giới học thuật",
        passageChunkEn: "brought documentaries to the attention of universities... worthy of serious scholarly analysis",
        passageChunkVi: "đưa phim tài liệu đến sự chú ý của đại học... xứng đáng được phân tích học thuật",
        linguisticType: "Adjectival Synthesis from Institutional & Analytical Nouns",
        linguisticTypeVi: "Tính từ hóa từ các danh từ viện nghiên cứu và phân tích học thuật"
      }
    ],
    examinerLogicEn: "Examiners craft a sophisticated conceptual bridge. 'Direct Cinema's principles and methods' becomes 'one set of beliefs and techniques'. The phrase 'brought to the attention of universities' and 'worthy of serious scholarly analysis' is distilled into the elegant adjective 'academically respectable'.",
    examinerLogicVi: "Giám khảo xây dựng cầu nối khái niệm tinh tế: 'các nguyên tắc và phương pháp của Direct Cinema' được tóm gọn thành 'một tập hợp niềm tin và kỹ thuật'. Cụm 'thu hút sự chú ý của các trường đại học' và 'xứng đáng được phân tích học thuật' được cô đọng thành tính từ đắt giá 'academically respectable'.",
    masterStrategyTipEn: "Focus on the institutional keywords: 'universities', 'scholarly analysis', and 'historians'. These academic nouns are unmistakable signals for 'academically respectable'.",
    masterStrategyTipVi: "Tập trung vào các danh từ tổ chức: 'universities' (đại học), 'scholarly analysis' (phân tích học thuật), 'historians' (sử gia). Các danh từ này là chỉ dấu trực diện cho 'academically respectable'.",
    trapAlertEn: "Don't confuse Paula Murphy with John Grierson. Grierson is the filmmaker being compared, whereas Murphy is the analytical author delivering the evaluation of Direct Cinema's impact.",
    trapAlertVi: "Đừng nhầm lẫn Paula Murphy với John Grierson. Grierson là đối tượng lịch sử được đem ra so sánh, còn Murphy mới là nhà nghiên cứu đưa ra nhận định đánh giá."
  },
  {
    id: 'person-D',
    personLetter: 'D',
    personName: 'Maria Fiala',
    role: 'Film Critic',
    roleVi: 'Nhà phê bình điện ảnh',
    paragraphRef: 'D',
    isDistractor: false,
    matchedQuestionId: 20,
    statementEn: "The creation of some new technologies did not change viewers' attitudes towards documentaries as quickly as is sometimes proposed.",
    statementVi: "Sự ra đời của một số công nghệ mới đã không làm thay đổi thái độ của khán giả đối với phim tài liệu nhanh như nhiều người vẫn nghĩ.",
    exactQuoteEn: "But as critic Maria Fiala has pointed out, 'The argument sometimes put forward that these innovations immediately transformed what the public expected to see in a documentary isn't entirely accurate.'",
    exactQuoteVi: "Nhưng như nhà phê bình Maria Fiala đã chỉ ra: 'Lập luận đôi khi được đưa ra rằng những đổi mới này ngay lập tức làm thay đổi những gì công chúng kỳ vọng được thấy ở một bộ phim tài liệu là không hoàn toàn chính xác'.",
    reportingStyle: 'Direct Quote',
    reportingStyleVi: 'Trích dẫn trực tiếp sau động từ tường thuật (\'...\')',
    paraphrasePairs: [
      {
        statementChunkEn: "The creation of some new technologies",
        statementChunkVi: "Sự ra đời của một số công nghệ mới",
        passageChunkEn: "these innovations [video and digital cameras]",
        passageChunkVi: "những đổi mới sáng tạo này [máy quay video và kỹ thuật số]",
        linguisticType: "Anaphoric Reference to Preceding Concrete Inventions",
        linguisticTypeVi: "Đại từ chỉ định quy chiếu về các phát minh cụ thể ở câu trước"
      },
      {
        statementChunkEn: "did not change ... as quickly as is sometimes proposed",
        statementChunkVi: "không thay đổi nhanh như nhiều người từng đề xuất",
        passageChunkEn: "argument sometimes put forward that these innovations immediately transformed... isn't entirely accurate",
        passageChunkVi: "lập luận cho rằng ngay lập tức biến đổi là không hoàn toàn chính xác",
        linguisticType: "Hedging Rebuttal (Immediately Transformed isn't accurate = Did not change as quickly)",
        linguisticTypeVi: "Phản biện nói giảm nói tránh (Biến đổi ngay lập tức là không đúng = Không đổi nhanh như nghĩ)"
      },
      {
        statementChunkEn: "viewers' attitudes towards documentaries",
        statementChunkVi: "thái độ của khán giả đối với phim tài liệu",
        passageChunkEn: "what the public expected to see in a documentary",
        passageChunkVi: "những gì công chúng kỳ vọng được thấy ở phim tài liệu",
        linguisticType: "Mental Expectation Nominalization to Attitudinal Clause",
        linguisticTypeVi: "Chuyển đổi từ mệnh đề kỳ vọng tâm lý sang danh từ thái độ người xem"
      }
    ],
    examinerLogicEn: "Fiala refutes an extreme temporal claim ('immediately transformed') with critical caution ('isn't entirely accurate'). The test designers rephrase this nuanced negation into a comparative statement: 'did not change... as quickly as is sometimes proposed'.",
    examinerLogicVi: "Fiala phản biện một khẳng định mang tính tuyệt đối về thời gian ('immediately transformed') bằng sự thận trọng ('isn't entirely accurate'). Người ra đề đã chuyển hóa lời phủ định tinh tế này thành câu so sánh giảm tốc độ: 'did not change... as quickly as is sometimes proposed'.",
    masterStrategyTipEn: "Watch out for contrasting connectors like 'But as critic X has pointed out'. The conjunction 'But' signals a corrective pivot that overturns the conventional wisdom expressed earlier in the paragraph.",
    masterStrategyTipVi: "Cực kỳ chú ý các liên từ đảo hướng như 'But as critic X has pointed out'. Từ 'But' báo hiệu một quan điểm phản biện nhằm uốn nắn lại nhận thức phổ biến trước đó.",
    trapAlertEn: "Paragraph D is packed with exciting facts about digital cameras and amateur filmmakers sharing movies online. Do not link Fiala to amateur film production; her quote focuses STRICTLY on audience expectations.",
    trapAlertVi: "Đoạn D ngập tràn thông tin về máy quay số và người nghiệp dư đăng phim lên mạng. Đừng gán Fiala với việc sản xuất phim nghiệp dư; ý kiến của bà CHỈ nói về kỳ vọng của công chúng."
  },
  {
    id: 'person-E',
    personLetter: 'E',
    personName: 'Josh Camberwell',
    role: 'Documentary Filmmaker',
    roleVi: 'Đạo diễn phim tài liệu',
    paragraphRef: 'E',
    isDistractor: false,
    matchedQuestionId: 23,
    statementEn: "Documentary filmmakers have an obligation to include their own opinions about and analysis of the real events that they show in their films.",
    statementVi: "Các nhà làm phim tài liệu có nghĩa vụ phải đưa vào những quan điểm và phân tích cá nhân của riêng mình về các sự kiện có thật mà họ quay.",
    exactQuoteEn: "Filmmaker Josh Camberwell maintains that Catfish embodies a new realisation that documentaries are inherently subjective and that this should be celebrated. Says Camberwell, 'It is a requirement for documentary makers to express a particular viewpoint and give personal responses to the material they are recording.'",
    exactQuoteVi: "Nhà làm phim Josh Camberwell khẳng định rằng bộ phim Catfish hiện thân cho một nhận thức mới: phim tài liệu vốn dĩ mang tính chủ quan và điều này đáng được tôn vinh. Camberwell nói: 'Đó là một yêu cầu bắt buộc đối với các nhà làm phim tài liệu là phải thể hiện một quan điểm cụ thể và đưa ra những phản hồi mang tính cá nhân đối với chất liệu mà họ đang ghi lại'.",
    reportingStyle: 'Direct Quote',
    reportingStyleVi: 'Trích dẫn trực tiếp sau động từ trần thuật (\'...\')',
    paraphrasePairs: [
      {
        statementChunkEn: "have an obligation",
        statementChunkVi: "có nghĩa vụ / bắt buộc",
        passageChunkEn: "It is a requirement for documentary makers",
        passageChunkVi: "Đó là một yêu cầu bắt buộc đối với các nhà làm phim tài liệu",
        linguisticType: "Deontic Modality (Obligation = Requirement)",
        linguisticTypeVi: "Phương thức tình thái bắt buộc (Obligation = Requirement)"
      },
      {
        statementChunkEn: "include their own opinions about and analysis of",
        statementChunkVi: "đưa vào quan điểm và phân tích cá nhân của riêng mình",
        passageChunkEn: "express a particular viewpoint and give personal responses",
        passageChunkVi: "thể hiện một góc nhìn cụ thể và đưa ra phản hồi mang tính cá nhân",
        linguisticType: "Subjective Stance Expression Paraphrase",
        linguisticTypeVi: "Diễn giải tương đương về biểu đạt lập trường chủ quan"
      },
      {
        statementChunkEn: "the real events that they show in their films",
        statementChunkVi: "các sự kiện có thật mà họ chiếu trong phim",
        passageChunkEn: "the material they are recording",
        passageChunkVi: "chất liệu mà họ đang ghi hình",
        linguisticType: "Materialization Paraphrase (Real Events = Material Recorded)",
        linguisticTypeVi: "Cụ thể hóa danh từ (Sự kiện thực tế = Chất liệu ghi hình)"
      }
    ],
    examinerLogicEn: "The linguistic match hinges on deontic obligation: 'have an obligation' = 'it is a requirement'. Camberwell embraces subjectivity not as a flaw, but as a mandatory artistic duty of modern documentarians.",
    examinerLogicVi: "Điểm chốt hạ ngôn ngữ nằm ở sắc thái mệnh lệnh: 'have an obligation' = 'it is a requirement'. Camberwell đón nhận tính chủ quan không phải như một khuyết điểm, mà như một nghĩa vụ nghệ thuật bắt buộc của người làm phim hiện đại.",
    masterStrategyTipEn: "Check modal strength! If the question says 'have an obligation', you MUST find strong mandatory language in the text ('requirement', 'must', 'compulsory', 'essential'). Weak modals like 'can' or 'suggest' would not qualify.",
    masterStrategyTipVi: "Kiểm tra cường độ tình thái! Khi câu hỏi có 'have an obligation', bạn BẮT BUỘC phải tìm từ ngữ mang tính ràng buộc mạnh trong bài ('requirement', 'must', 'compulsory'). Những từ nhẹ như 'can' hay 'may' sẽ không đạt yêu cầu.",
    trapAlertEn: "Do not search for the movie 'Catfish' in the question. The question abstracts Camberwell's philosophy into a universal imperative for ALL documentary makers.",
    trapAlertVi: "Đừng mải tìm kiếm tên phim 'Catfish' trong câu hỏi. Câu hỏi đã trừu tượng hóa triết lý của Camberwell thành một nguyên tắc phổ quát cho TẤT CẢ các nhà làm phim tài liệu."
  }
];

