import { Paragraph, Question, QuestionTip, HeadingOption, QuestionOption } from '../types';

export const PASSAGE_TITLE = "Making Documentary Films";
export const PASSAGE_SUBTITLE = "You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.";

export interface ReviewItem {
  id: number;
  question: string;
  answer: string;
}

export const EXAM_REVIEW_ITEMS: ReviewItem[] = [
  { id: 1, question: "What is Reading Passage 2?", answer: "A text of up to 900 words, labelled with letters A, B, C, etc., with 3 different tasks and a total of 13 questions." },
  { id: 2, question: "How many questions do you have to answer?", answer: "13 (Questions 14–26)" },
  { id: 3, question: "Does each task have the same number of questions?", answer: "No (Matching Headings: 6 questions [14–19]; Matching Statements with People: 4 questions [20–23]; Summary Completion: 3 questions [24–26])" },
  { id: 4, question: "How long should you spend on this section?", answer: "About 20 minutes" }
];

export const GENERAL_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'Test Tip: Reading Passage 2 Strategy',
  content: "Scan the title and opening paragraphs to understand the overall progression of 'Making Documentary Films': from early twentieth-century skepticism and criticisms (Para A), through disputes over historical origins (1895 vs. 1922 Nanook of the North in Para B), the contrast between Grierson's staged tripod methods and Direct Cinema's handheld authenticity (Para C), the 1980s–2000s video/digital revolution enabling amateur filmmakers (Para D), the subjective, emotionally focused shift led by Catfish (Para E), to the modern explosion of international film festivals promoting short documentaries and animations (Para F)."
};

export const HEADINGS_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'Action plan for Matching headings (Questions 14–19)',
  content: `1 Before you read the passage, read the list of headings and underline the key words.
2 Read the passage quickly to get a general idea of its content and structure.
3 Now read each paragraph carefully. Identify the writer's main point in each paragraph.
4 Look at the list of headings and choose the one that summarises the main idea.

Key Tips:
• If there is a Matching headings task, it comes before the passage to encourage you to read the headings first.
• The headings in the list are in a random order. There are more headings than paragraphs (8 headings for 6 paragraphs).
• A heading can be used once only.
• The language used in the headings and in the passage may not be the same. Look for synonyms and paraphrases.
• The heading refers to the main idea throughout the paragraph, not minor details.`
};

export const MATCHING_PEOPLE_TIP: QuestionTip = {
  type: 'test',
  title: 'Action plan for Matching statements with people (Questions 20–23)',
  content: `1 Look at the list of names and locate them in the text.
2 For each name, read all the things that person said. This may be in direct or reported speech.
3 Match the statement with the correct person. Look for synonyms and paraphrases.

Key Tips:
• Sometimes the names will appear in more than one place.
• There may be more people than statements and one or more of the names will not be used (e.g. Anthony Berwick is not used).
• It is possible that one person will make two different statements in some test formats.
• Sometimes the statements will be listed in the box and the names will be next to the question numbers. Follow the same action plan in both cases.`
};

export const SUMMARY_COMPLETION_TIP: QuestionTip = {
  type: 'test',
  title: 'Action plan for Summary completion (Questions 24–26)',
  content: `1 Read the instructions carefully. How many words and / or numbers can you use to fill each space? (NO MORE THAN TWO WORDS AND A NUMBER).
2 Look at the title of the summary ("Film Festivals"). This will help you locate the relevant part of the passage (Paragraph F).
3 Underline the locating words in the summary. They will help you find exactly the right part of the passage to read in detail.
4 Compare the language around each space in the summary with the language in the passage. Look for synonyms and paraphrases.
5 Transfer the relevant information from the passage into each space and then read the summary again. It should make sense and summarise the passage.

Key Tips:
• Write the words exactly as they appear in the passage. Check for singular or plural.
• Don't leave any spaces blank. You don't lose marks for wrong answers.`
};

export const LIST_OF_HEADINGS: HeadingOption[] = [
  { id: 'i', title: 'A contrast between two historic approaches to documentary filmmaking' },
  { id: 'ii', title: 'Disagreement between two individual documentary makers' },
  { id: 'iii', title: 'A wide range of opportunities to promote documentary films' },
  { id: 'iv', title: 'A number of criticisms about all documentary filmmaking in the past' },
  { id: 'v', title: 'One film that represented a fresh approach to documentary filmmaking' },
  { id: 'vi', title: 'Some probable future trends in documentary filmmaking' },
  { id: 'vii', title: 'The debate about the origins of documentary filmmaking' },
  { id: 'viii', title: 'The ability of ordinary people to create documentary films for the first time' },
];

export const HEADING_DISTRACTOR_NOTES = [
  {
    id: 'ii',
    heading: 'Disagreement between two individual documentary makers',
    explanation: "Provides distraction. Different approaches to filmmaking by groups is mentioned (e.g. John Grierson's group versus the Direct Cinema movement in Paragraph C), but not a disagreement between two individual documentary makers."
  },
  {
    id: 'vi',
    heading: 'Some probable future trends in documentary filmmaking',
    explanation: "Provides distraction. None of the paragraphs outline possible future trends. Paragraph D discusses the video/digital revolution since the 1980s, and Paragraph F discusses current film festivals, not future predictions."
  }
];

export const PEOPLE_OPTIONS: QuestionOption[] = [
  { id: 'A', text: 'Dr Helmut Fischer' },
  { id: 'B', text: 'Anthony Berwick' },
  { id: 'C', text: 'Paula Murphy' },
  { id: 'D', text: 'Maria Fiala' },
  { id: 'E', text: 'Josh Camberwell' },
];

export const PEOPLE_DISTRACTOR_NOTES = [
  {
    id: 'B',
    name: 'Anthony Berwick',
    explanation: "Anthony Berwick is cited in Paragraph B regarding the debate over origins ('the genre can be traced back as early as 1895, when similar films started to appear'). However, none of the statements in Questions 20–23 match his chronological perspective."
  }
];

export const PARAGRAPHS: Paragraph[] = [
  {
    id: 'A',
    text: "For much of the twentieth century, documentary films were overshadowed by their more successful Hollywood counterparts. For a number of reasons, documentaries were frequently ignored by critics and film studies courses at universities. Firstly, the very idea of a documentary film made some people suspicious. As the critic Dr Helmut Fischer put it, 'Documentary makers might have ambitions to tell the \"truth\" and show only \"facts\" but there is no such thing as a non-fiction film. That's because, as soon as you record an incident on camera, you are altering its reality in a fundamental way'. Secondly, even supporters of documentaries could not agree on a precise definition, which did little to improve the reputation of the genre. Lastly, there were also concerns about the ethics of filming subjects without their consent, which is a necessity in many documentary films."
  },
  {
    id: 'B',
    text: "None of this prevented documentaries from being produced, though exactly when the process started is open to question. It is often claimed that Nanook of the North was the first documentary. Made by the American filmmaker Robert J. Flaherty in 1922, the film depicts the hard, sometimes heroic lives of native American peoples in the Canadian Arctic. Nanook of the North is said to have set off a trend that continued through the 1920s with the films of Dziga Vertov in the Soviet Union and works by other filmmakers around the world. However, that 1922 starting point has been disputed by supporters of an earlier date. Among this group is film historian Anthony Berwick, who argues that the genre can be traced back as early as 1895, when similar films started to appear, including newsreels, scientific films and accounts of journeys of exploration."
  },
  {
    id: 'C',
    text: "In the years following 1922, one particular style of documentary started to appear. These films adopted a serious tone while depicting the lives of actual people. Cameras were mounted on tripods and subjects rehearsed and repeated activities for the purposes of the film. British filmmaker John Grierson was an important member of this group. Grierson's career lasted nearly 40 years, beginning with Drifters (1929) and culminating with I Remember, I Remember (1968). However, by the 1960s Grierson's style of film was being rejected by the Direct Cinema movement, which wanted to produce more natural and authentic films: cameras were hand-held; no additional lighting or sound was used; and the subjects did not rehearse. According to film writer Paula Murphy, the principles and methods of Direct Cinema brought documentaries to the attention of universities and film historians as never before. Documentaries started to be recognised as a distinct genre worthy of serious scholarly analysis."
  },
  {
    id: 'D',
    text: "Starting in the 1980s, the widespread availability of first video and then digital cameras transformed filmmaking. The flexibility and low cost of these devices meant that anyone could now be a filmmaker. Amateurs working from home could compete with professionals in ways never possible before. The appearance of online film-sharing platforms in the early 2000s only increased the new possibilities for amateur filmmakers. Nonetheless, while countless amateur documentaries were being made, perhaps the most popular documentary of 2006 was still the professionally made An Inconvenient Truth. New cameras and digital platforms revolutionised the making of films. But as critic Maria Fiala has pointed out, 'The argument sometimes put forward that these innovations immediately transformed what the public expected to see in a documentary isn't entirely accurate.'"
  },
  {
    id: 'E',
    text: "However, a new generation of documentary filmmakers then emerged, and with them came a new philosophy of the genre. These filmmakers moved away from highlighting political themes or urgent social issues. Instead the focus moved inwards, exploring personal lives, relationships and emotions. It could be argued that Catfish (2010) was a perfect example of this new trend. The film chronicles the everyday lives and interactions of the social media generation and was both a commercial and critical success. Filmmaker Josh Camberwell maintains that Catfish embodies a new realisation that documentaries are inherently subjective and that this should be celebrated. Says Camberwell, 'It is a requirement for documentary makers to express a particular viewpoint and give personal responses to the material they are recording.'"
  },
  {
    id: 'F',
    text: "The popularity and variety of documentaries today is illustrated by the large number of film festivals focusing on the genre around the world. The biggest of all must be the Hot Docs Festival in Canada, which over the years has showcased hundreds of documentaries from more than 50 different countries. Even older is the Hamburg International Short Film Festival. As its name suggests, Hamburg specialises in short films, but one category takes this to its limits – entries may not exceed three minutes in duration. The Short and Sweet Festival is a slightly smaller event held in Utah, USA. The small size of the festival means that for first timers this is the ideal venue to try to get some recognition for their films. Then there is the Atlanta Shortsfest, which is a great event for a wide variety of filmmakers. Atlanta welcomes all established types of documentaries and recognises the growing popularity of animations, with a category specifically for films of this type. These are just a few of the scores of film festivals on offer, and there are more being established every year. All in all, it has never been easier for documentary makers to get their films in front of an audience."
  }
];

export const FOOTNOTES: { symbol: string; text: string }[] = [];

export const QUESTIONS: Question[] = [
  // =========================================================================
  // Questions 14–19: Matching Headings
  // =========================================================================
  {
    id: 14,
    section: 'matching-headings',
    prompt: "Paragraph A",
    correctAnswers: ["iv", "4", "a number of criticisms about all documentary filmmaking in the past"],
    displayAnswer: "iv",
    paragraphRef: 'A',
    quote: "For a number of reasons, documentaries were frequently ignored by critics and film studies courses at universities. Firstly, the very idea of a documentary film made some people suspicious... Secondly, even supporters of documentaries could not agree on a precise definition... Lastly, there were also concerns about the ethics of filming subjects without their consent...",
    explanation: "The headings refer to a 'number of criticisms'. Three criticisms are identified in paragraph A: Dr Fischer's argument that recording fundamentally alters reality; the fact that supporters could not agree on a definition; and ethical concerns about filming without consent. These criticisms apply broadly to all documentary filmmaking in the 20th century. (Note: Criticisms are also mentioned in C regarding Direct Cinema rejecting Grierson, but that applies to only one style, not all documentaries).",
    tips: [
      {
        id: 'advice-14',
        type: 'study',
        title: 'Advice: Question 14',
        content: 'Pay particular attention to the paragraph structure: Firstly, Secondly, Lastly. Notice how these three sequential points enumerate criticisms that undermined the whole genre in the 20th century.'
      }
    ]
  },
  {
    id: 15,
    section: 'matching-headings',
    prompt: "Paragraph B",
    correctAnswers: ["vii", "7", "the debate about the origins of documentary filmmaking"],
    displayAnswer: "vii",
    paragraphRef: 'B',
    quote: "None of this prevented documentaries from being produced, though exactly when the process started is open to question. It is often claimed that Nanook of the North was the first documentary... However, that 1922 starting point has been disputed by supporters of an earlier date. Among this group is film historian Anthony Berwick, who argues that the genre can be traced back as early as 1895...",
    explanation: "When the first documentary was produced is 'open to question' – hence there is a 'debate'. One claim is Robert J. Flaherty's Nanook of the North (1922); however, that starting point has been disputed by Anthony Berwick and others who argue the genre traces back to 1895 with early newsreels and scientific films.",
    tips: [
      {
        id: 'advice-15',
        type: 'study',
        title: 'Advice: Question 15',
        content: 'What is the significance of the dates in this paragraph? 1922 vs. 1895 represent opposing viewpoints on when the genre of documentary filmmaking first originated.'
      }
    ]
  },
  {
    id: 16,
    section: 'matching-headings',
    prompt: "Paragraph C",
    correctAnswers: ["i", "1", "a contrast between two historic approaches to documentary filmmaking"],
    displayAnswer: "i",
    paragraphRef: 'C',
    quote: "Cameras were mounted on tripods and subjects rehearsed and repeated activities for the purposes of the film. British filmmaker John Grierson was an important member of this group... However, by the 1960s Grierson's style of film was being rejected by the Direct Cinema movement, which wanted to produce more natural and authentic films: cameras were hand-held; no additional lighting or sound was used; and the subjects did not rehearse.",
    explanation: "Two historic approaches to filmmaking are contrasted in C: John Grierson's group (serious tone, tripod-mounted cameras, rehearsed repeated actions) versus the 1960s Direct Cinema movement (natural, handheld cameras, no extra lighting/sound, unrehearsed subjects). Both approaches belong to the past ('historic').",
    tips: [
      {
        id: 'advice-16',
        type: 'study',
        title: 'Advice: Question 16',
        content: "What is the significance of the word 'However' in the middle of this paragraph? It marks the sharp contrast between Grierson's rehearsed, tripod method and the Direct Cinema movement's spontaneous, handheld style."
      }
    ]
  },
  {
    id: 17,
    section: 'matching-headings',
    prompt: "Paragraph D",
    correctAnswers: ["viii", "8", "the ability of ordinary people to create documentary films for the first time"],
    displayAnswer: "viii",
    paragraphRef: 'D',
    quote: "The flexibility and low cost of these devices meant that anyone could now be a filmmaker. Amateurs working from home could compete with professionals in ways never possible before. The appearance of online film-sharing platforms in the early 2000s only increased the new possibilities for amateur filmmakers.",
    explanation: "Paragraph D outlines how new video and digital technologies made it possible for 'anyone could now be a filmmaker' and 'amateurs working from home could compete with professionals in ways never possible before'. This directly matches 'the ability of ordinary people to create documentary films for the first time'. (Paragraph F provides distraction, but F is about promoting films, not creating them).",
    tips: []
  },
  {
    id: 18,
    section: 'matching-headings',
    prompt: "Paragraph E",
    correctAnswers: ["v", "5", "one film that represented a fresh approach to documentary filmmaking"],
    displayAnswer: "v",
    paragraphRef: 'E',
    quote: "It could be argued that Catfish (2010) was a perfect example of this new trend. The film chronicles the everyday lives and interactions of the social media generation and was both a commercial and critical success. Filmmaker Josh Camberwell maintains that Catfish embodies a new realisation that documentaries are inherently subjective...",
    explanation: "The central focus of Paragraph E is on 'one film' (Catfish, 2010) that exemplifies a 'fresh approach' (a 'new generation', 'new philosophy', 'new trend', 'new realisation', moving away from political themes to personal, subjective experiences). While films are mentioned in other paragraphs, Catfish is the only one framed as representing this fresh approach.",
    tips: [
      {
        id: 'advice-18',
        type: 'study',
        title: 'Advice: Question 18',
        content: 'Why is the film Catfish important? It is held up as the perfect embodiment of a fresh, subjective philosophy in modern documentary filmmaking.'
      }
    ]
  },
  {
    id: 19,
    section: 'matching-headings',
    prompt: "Paragraph F",
    correctAnswers: ["iii", "3", "a wide range of opportunities to promote documentary films"],
    displayAnswer: "iii",
    paragraphRef: 'F',
    quote: "The popularity and variety of documentaries today is illustrated by the large number of film festivals focusing on the genre around the world... These are just a few of the scores of film festivals on offer, and there are more being established every year. All in all, it has never been easier for documentary makers to get their films in front of an audience.",
    explanation: "Paragraph F focuses on 'a wide range of opportunities to promote documentary films', detailing multiple festivals worldwide (Hot Docs in Canada, Hamburg International Short Film Festival, Short and Sweet in Utah, Atlanta Shortsfest) that allow documentary makers to 'get their films in front of an audience'.",
    tips: []
  },

  // =========================================================================
  // Questions 20–23: Matching Statements with People
  // =========================================================================
  {
    id: 20,
    section: 'matching-people',
    prompt: "The creation of some new technologies did not change viewers' attitudes towards documentaries as quickly as is sometimes proposed.",
    correctAnswers: ["d", "maria fiala"],
    displayAnswer: "D",
    paragraphRef: 'D',
    quote: "But as critic Maria Fiala has pointed out, 'The argument sometimes put forward that these innovations immediately transformed what the public expected to see in a documentary isn't entirely accurate.'",
    explanation: "Compare with Maria Fiala's quote in Paragraph D: 'these innovations' = the creation of some new technologies; 'transformed what the public expected to see' = change viewers' attitudes; 'isn't entirely accurate' = did not change ... as quickly as is sometimes proposed.",
    tips: [
      {
        id: 'advice-20',
        type: 'study',
        title: 'Advice: Question 20',
        content: "This statement is about a change in the attitudes of viewers ('what the public expected to see'), not about the mechanics of how documentaries were made. Scan Paragraph D for who speaks about public expectations."
      }
    ]
  },
  {
    id: 21,
    section: 'matching-people',
    prompt: "One set of beliefs and techniques helped to make documentary films academically respectable.",
    correctAnswers: ["c", "paula murphy"],
    displayAnswer: "C",
    paragraphRef: 'C',
    quote: "According to film writer Paula Murphy, the principles and methods of Direct Cinema brought documentaries to the attention of universities and film historians as never before. Documentaries started to be recognised as a distinct genre worthy of serious scholarly analysis.",
    explanation: "Compare with Paula Murphy's reported speech in Paragraph C: 'the principles and methods' = beliefs and techniques; 'brought documentaries to the attention of universities and film historians as never before' / 'worthy of serious scholarly analysis' = helped to make documentary films academically respectable.",
    tips: []
  },
  {
    id: 22,
    section: 'matching-people',
    prompt: "The action of putting material on film essentially changes the nature of the original material.",
    correctAnswers: ["a", "dr helmut fischer", "helmut fischer"],
    displayAnswer: "A",
    paragraphRef: 'A',
    quote: "As the critic Dr Helmut Fischer put it, 'Documentary makers might have ambitions to tell the \"truth\" and show only \"facts\" but there is no such thing as a non-fiction film. That's because, as soon as you record an incident on camera, you are altering its reality in a fundamental way'.",
    explanation: "Compare with Dr Helmut Fischer's quote in Paragraph A: 'record an incident on camera' = putting material on film; 'altering its reality' = changes the nature of the original material; 'in a fundamental way' = essentially.",
    tips: [
      {
        id: 'advice-22',
        type: 'study',
        title: 'Advice: Question 22',
        content: 'Look for a person who challenges the whole concept and reality of a documentary film. Notice Dr Helmut Fischer in Paragraph A arguing that recording an event alters its fundamental reality.'
      }
    ]
  },
  {
    id: 23,
    section: 'matching-people',
    prompt: "Documentary filmmakers have an obligation to include their own opinions about and analysis of the real events that they show in their films.",
    correctAnswers: ["e", "josh camberwell"],
    displayAnswer: "E",
    paragraphRef: 'E',
    quote: "Says Camberwell, 'It is a requirement for documentary makers to express a particular viewpoint and give personal responses to the material they are recording.'",
    explanation: "Compare with Josh Camberwell's quote in Paragraph E: 'it is a requirement' = have an obligation; 'express a particular viewpoint and give personal responses' = include their own opinions about and analysis of; 'the material they are recording' = the real events that they show in their films.",
    tips: []
  },

  // =========================================================================
  // Questions 24–26: Summary Completion (Film Festivals)
  // Choose NO MORE THAN TWO WORDS AND A NUMBER from the passage
  // =========================================================================
  {
    id: 24,
    section: 'summary-completion',
    prompt: "Meanwhile, the Hamburg Short Film Festival lives up to its name by accepting films no more than ............ long in one of its categories.",
    preText: "Meanwhile, the Hamburg Short Film Festival lives up to its name by accepting films no more than",
    postText: "long in one of its categories.",
    correctAnswers: ["three minutes", "3 minutes"],
    displayAnswer: "three minutes",
    paragraphRef: 'F',
    quote: "As its name suggests, Hamburg specialises in short films, but one category takes this to its limits – entries may not exceed three minutes in duration.",
    explanation: "Locator words: 'Hamburg Short Film Festival' and 'category'. The text states: 'entries may not exceed three minutes in duration', which paraphrases 'accepting films no more than three minutes / 3 minutes long'.",
    tips: [
      {
        id: 'advice-24',
        type: 'study',
        title: 'Advice: Question 24',
        content: 'The focus here is not just short films, but extremely short films. Look at how long entries are permitted to run in that special category.'
      }
    ]
  },
  {
    id: 25,
    section: 'summary-completion',
    prompt: "The Short and Sweet Film Festival is especially good for documentary makers who are ............",
    preText: "The Short and Sweet Film Festival is especially good for documentary makers who are",
    postText: ".",
    correctAnswers: ["first timers", "1st timers", "first-timers"],
    displayAnswer: "first timers",
    paragraphRef: 'F',
    quote: "The Short and Sweet Festival is a slightly smaller event held in Utah, USA. The small size of the festival means that for first timers this is the ideal venue to try to get some recognition for their films.",
    explanation: "Locator words: 'Short and Sweet Film Festival'. The text states: 'The small size of the festival means that for first timers this is the ideal venue [= especially good] to try to get some recognition for their films'.",
    tips: [
      {
        id: 'advice-25',
        type: 'study',
        title: 'Advice: Question 25',
        content: 'Who / What is this festival especially good for? Look for the exact phrase in Paragraph F describing the group of filmmakers for whom this is an ideal venue.'
      }
    ]
  },
  {
    id: 26,
    section: 'summary-completion',
    prompt: "And the Atlanta Shortsfest accepts numerous forms of documentaries including ............, which are becoming more common.",
    preText: "And the Atlanta Shortsfest accepts numerous forms of documentaries including",
    postText: ", which are becoming more common.",
    correctAnswers: ["animations", "animation"],
    displayAnswer: "animations",
    paragraphRef: 'F',
    quote: "Atlanta welcomes all established types of documentaries and recognises the growing popularity of animations, with a category specifically for films of this type.",
    explanation: "Locator words: 'Atlanta Shortsfest'. 'welcomes all established types of documentaries' matches 'accepts numerous forms of documentaries', and 'recognises the growing popularity of animations' matches 'including animations, which are becoming more common'.",
    tips: [
      {
        id: 'advice-26',
        type: 'study',
        title: 'Advice: Question 26',
        content: 'Look for one type of film among many other types mentioned in connection with Atlanta Shortsfest.'
      }
    ]
  }
];

export function calculateBandScore(score: number): string {
  if (score === 13) return "9.0";
  if (score === 12) return "8.5";
  if (score === 11) return "8.0";
  if (score === 10) return "7.5";
  if (score === 9) return "7.0";
  if (score === 8) return "6.5";
  if (score === 7) return "6.0";
  if (score === 6) return "5.5";
  if (score === 5) return "5.0";
  if (score === 4) return "4.5";
  if (score === 3) return "4.0";
  if (score >= 2) return "3.5";
  return "3.0";
}

// =========================================================================
// TRAINING & STRATEGY MODULE DATA (From Training Section of PDFs)
// =========================================================================

export interface KeyWordStrategyItem {
  id: string;
  heading: string;
  analysis: {
    phrase: string;
    deduction: string;
  }[];
}

export const TRAINING_KEYWORD_HEADINGS: KeyWordStrategyItem[] = [
  {
    id: 'i',
    heading: 'A number of health problems associated with reading from screens',
    analysis: [
      { phrase: 'a number of', deduction: 'so, there will be three or more' },
      { phrase: 'health problems', deduction: 'so, some different health problems will be identified' },
      { phrase: 'reading from screens', deduction: 'so, the cause of the problem will be reading from screens' }
    ]
  },
  {
    id: 'ii',
    heading: 'A survey investigating the reading preferences of a range of subjects',
    analysis: [
      { phrase: 'a survey', deduction: 'so, not an experiment or other form of research' },
      { phrase: 'reading preferences', deduction: 'so, how people like to read' },
      { phrase: 'a range of subjects', deduction: 'so, different types of people, perhaps of different ages' }
    ]
  },
  {
    id: 'iii',
    heading: 'Two research experiments that reached contrasting conclusions',
    analysis: [
      { phrase: 'Two', deduction: 'so, not one or three, etc.' },
      { phrase: 'experiments', deduction: 'so, not a survey or other form of research' },
      { phrase: 'contrasting', deduction: 'so, different or opposing' },
      { phrase: 'conclusions', deduction: 'so, not methodology or other aspect of research' }
    ]
  },
  {
    id: 'iv',
    heading: 'Viewpoints of companies that manufacture electronic screens',
    analysis: [
      { phrase: 'Viewpoints', deduction: 'so, more than one view or opinion' },
      { phrase: 'companies that manufacture', deduction: 'so, people working in industry, not academics' },
      { phrase: 'electronic screens', deduction: 'so, the makers of these items' }
    ]
  },
  {
    id: 'v',
    heading: 'One academic who is campaigning for screens to be redesigned',
    analysis: [
      { phrase: 'one', deduction: 'so, not two or three, etc.' },
      { phrase: 'academic', deduction: 'so, not someone working in industry' },
      { phrase: 'campaigning', deduction: 'so, someone who is trying to change things' },
      { phrase: 'screens to be redesigned', deduction: 'so, a modification to the design of screens' }
    ]
  },
  {
    id: 'vi',
    heading: 'The way the eye gathers information and transmits it to the brain',
    analysis: [
      { phrase: 'the way', deduction: 'so, how something happens' },
      { phrase: 'the eye gathers information', deduction: 'so, the process by which the eye collects information' },
      { phrase: 'transmits it to the brain', deduction: 'so, the process by which information goes from eye to brain' }
    ]
  }
];

export interface SimilarMeaningExerciseItem {
  id: number;
  statement: string;
  optionA: string;
  optionB: string;
  correctOption: 'A' | 'B';
  paraphraseMatches: { target: string; passage: string }[];
  distractorReason: string;
}

export const TRAINING_SIMILAR_MEANING_ITEMS: SimilarMeaningExerciseItem[] = [
  {
    id: 1,
    statement: "Our company has spent large sums of money investigating safety and cannot find any evidence that using our products is harmful to health.",
    optionA: "According to Olivia Downey, her laboratory has conducted extensive research and concluded that reading from screens may cause headaches and eye problems in some people.",
    optionB: "James Rawlings says, 'Here at Household Electronics we have invested heavily in research; this shows no connection between the screens we manufacture and headaches, eye problems or other such issues.'",
    correctOption: 'B',
    paraphraseMatches: [
      { target: 'Our company', passage: 'Here at Household Electronics' },
      { target: 'spent large sums of money', passage: 'invested heavily' },
      { target: 'cannot find any evidence', passage: 'shows no connection between' },
      { target: 'our products', passage: 'the screens we manufacture' },
      { target: 'harmful to health', passage: 'headaches, eye problems or other such issues' }
    ],
    distractorReason: "A is wrong because Olivia Downey works at a laboratory, not a company, and her research has found some evidence that screens may cause health problems."
  },
  {
    id: 2,
    statement: "The results of the research are not reliable because the sample size used in the study was too small.",
    optionA: "Dr Aliya Hassan argues that because so few subjects took part in the experiment, the findings are invalid.",
    optionB: "'It was difficult to find a large group of research subjects because the experiment required them to spend a long period away from their families,' said Professor Hamish Lannighan.",
    correctOption: 'A',
    paraphraseMatches: [
      { target: 'The results of the research', passage: 'the findings' },
      { target: 'not reliable', passage: 'invalid' },
      { target: 'sample', passage: 'subjects' },
      { target: 'the study', passage: 'the experiment' },
      { target: 'too small', passage: 'so few' }
    ],
    distractorReason: "B is wrong because Professor Lannighan explains why a small sample size was used, but does not mention the results of the research."
  },
  {
    id: 3,
    statement: "It is possible to change public opinion but it will only happen as the result of making the facts and statistics widely available.",
    optionA: "If we release the data via a broad range of different media then we will be able to alter the views of ordinary people, said eye specialist Daniel Monkman.",
    optionB: "Industry spokesperson Mei Tan claimed, 'Despite a concerted campaign using both social and print media, the attempt to influence the views of ordinary people has met with limited success.'",
    correctOption: 'A',
    paraphraseMatches: [
      { target: 'possible to change', passage: 'be able to alter' },
      { target: 'public opinion', passage: 'the views of ordinary people' },
      { target: 'but it will only happen', passage: 'If' },
      { target: 'facts and statistics', passage: 'data' },
      { target: 'widely available', passage: 'broad range of different media' }
    ],
    distractorReason: "B is wrong because Mei Tan is talking about a past event, not a future possibility."
  },
  {
    id: 4,
    statement: "The research done so far has been encouraging but it is still too early in the research process to draw any firm conclusions.",
    optionA: "According to Marie Dubois, the studies that she is aware of have produced a variety of results and scientists may need to find an alternative approach.",
    optionB: "Peter Triel, a lecturer at the University of Hamilton, said, 'We won't know for sure until more work has been completed but the studies to date have returned some very positive results.'",
    correctOption: 'B',
    paraphraseMatches: [
      { target: 'The research done so far', passage: 'the studies to date' },
      { target: 'encouraging', passage: 'some very positive results' },
      { target: 'too early', passage: 'until more work has been completed' },
      { target: 'firm conclusions', passage: 'know for sure' }
    ],
    distractorReason: "A is wrong because Marie Dubois talks about a 'variety of results', not 'encouraging' results, and she speculates that future research may require an 'alternative approach'."
  }
];

export interface MissingInfoSummaryItem {
  id: number;
  gapNumber: number;
  beforeText: string;
  afterText: string;
  correctWord: string;
  typeClue: string;
  distractorCaution: string;
}

export const TRAINING_EYE_STRAIN_WORDS = [
  'shoulders',
  'head',
  'black',
  'glasses',
  'prescription',
  'yellow',
  'light',
  'workstation',
  'examination'
];

export const TRAINING_EYE_STRAIN_ITEMS: MissingInfoSummaryItem[] = [
  {
    id: 1,
    gapNumber: 1,
    beforeText: "First of all, try to reduce the amount of",
    afterText: "around your computer screen that might distract your eyes.",
    correctWord: "light",
    typeClue: "reduce the amount: so, this must be something that can be reduced or increased easily • around your computer screen: so, this must be a common object in homes/offices • distract your eyes: so, this must be a possible distraction.",
    distractorCaution: "'black' might be tempting but it would not distract the eye."
  },
  {
    id: 2,
    gapNumber: 2,
    beforeText: "On the screen itself, the best colour combination is",
    afterText: "text on a white background to provide a strong contrast.",
    correctWord: "black",
    typeClue: "on the screen itself: so, not in the room around the screen • colour combination: so, this is a colour or shade • a strong contrast: so, this must be contrasting with white.",
    distractorCaution: "'yellow' might be tempting but it would not provide a contrast with white."
  },
  {
    id: 3,
    gapNumber: 3,
    beforeText: "It's also important to take regular breaks and stretch your",
    afterText: "to reduce fatigue.",
    correctWord: "shoulders",
    typeClue: "regular breaks: so, this must be something you do on a break • stretch: so, this must be a body part you can stretch • reduce fatigue: so, this activity must help reduce tiredness.",
    distractorCaution: "'head' might be tempting but you cannot stretch it."
  },
  {
    id: 4,
    gapNumber: 4,
    beforeText: "Furthermore, research has shown that having a",
    afterText: "that is properly designed helps your posture and reduces stress-related problems such as eye strain.",
    correctWord: "workstation",
    typeClue: "having: so, this is something you have or own • properly designed: so, this is something that can be designed well or badly • posture: so, this must relate to how you stand or sit.",
    distractorCaution: "'glasses' might be tempting but doesn't fit the grammar ('having a...')."
  },
  {
    id: 5,
    gapNumber: 5,
    beforeText: "And finally, if you wear glasses or contact lenses, make sure your",
    afterText: "is correct by visiting your optometrist regularly.",
    correctWord: "prescription",
    typeClue: "glasses or contact lenses: so, this must relate to these items • correct: so, this must be something that can be incorrect • optometrist: so, this must relate to the work of an optometrist.",
    distractorCaution: "'examination' might be tempting but doesn't fit the grammar."
  }
];
