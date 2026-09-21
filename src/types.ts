export type WordClass = 
  | 'Verb' 
  | 'Nomen' 
  | 'Adjektiv' 
  | 'Nomen-Verb-Verbindung' 
  | 'Redewendung';

export type VocabularyCategory = 
  | 'Wissenschaft & Forschung'
  | 'Gesellschaft & Politik'
  | 'Wirtschaft & Arbeit'
  | 'Psychologie & Kognition'
  | 'Umwelt & Technologie'
  | 'Recht & Verwaltung'
  | 'Kommunikation & Diskurs'
  | 'Nomen-Verb-Verbindungen'
  | 'Mehrdeutige Wörter';

export interface ExampleSentence {
  sentence: string;
  clozeSentence: string;
  translationEn: string;
  context?: string;
}

export interface PolysemyMeaning {
  id: string;
  number: number;
  definitionDe: string;
  definitionEn: string;
  nuance: string;
  grammarInfo?: string;
  exampleSentence: string;
  clozeSentence: string;
  translationEn: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  article?: 'der' | 'die' | 'das' | '-';
  wordClass: WordClass;
  category: VocabularyCategory;
  level: 'C1' | 'C2';
  definitionDe: string;
  definitionEn: string;
  register: 'Gehoben' | 'Bildungssprachlich' | 'Formell' | 'Fachsprachlich';
  collocation?: string;
  synonyms: string[];
  antonyms?: string[];
  examples: ExampleSentence[];
  activeRecallPrompt: string;
  isPolysemous?: boolean;
  polysemyMeanings?: PolysemyMeaning[];
  // User Active Recall & Progress Metrics
  myelinationLevel: 0 | 1 | 2 | 3; // 0=Neu, 1=Angestoßen, 2=Konsolidiert, 3=Myelinisiert
  consecutiveCorrect: number;
  timesReviewed: number;
  timesIncorrect: number;
  lastReviewedAt: string | null;
  inMistakeQueue: boolean; // Flagged when wrong in quiz -> must repeat!
  isBookmarked: boolean;
  customAdded?: boolean;
}

export type DesktopNavTab = 
  | 'folder_active_learning' 
  | 'folder_testing' 
  | 'folder_polysemy_verbs'
  | 'folder_prefix_families'
  | 'mistake_queue' 
  | 'polysemy_hub' 
  | 'neuroscience_hub';

export interface PrefixVerbMeaning {
  meaningNumber: number;
  definitionDe: string;
  definitionEn: string;
  nuance?: string;
  grammarInfo?: string; // e.g. "transitiv + Akk", "sich einsetzen für + Akk"
  exampleSentence: string;
  clozeSentence: string;
  translationEn: string;
}

export interface PrefixVerbItem {
  id: string;
  word: string;
  baseRootVerb: string; // e.g. "setzen", "stellen", "legen", "ziehen", etc.
  prefix: string; // e.g. "ein-", "aus-", "um-", etc.
  isSeparable: boolean; // trennbar vs untrennbar
  prefixTypeLabel: 'trennbar' | 'untrennbar' | 'variabel';
  level: 'C1' | 'B2/C1';
  register: string;
  primaryDefinitionDe: string;
  primaryDefinitionEn: string;
  collocation: string;
  meanings: PrefixVerbMeaning[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface PrefixFamily {
  rootVerb: string;
  rootMeaningDe: string;
  rootMeaningEn: string;
  descriptionDe: string;
  descriptionEn: string;
  verbsCount: number;
  verbs: PrefixVerbItem[];
}

export type ActiveLearningView = 'flashcards' | 'sentence_trainer' | 'word_lexicon' | 'ai_generator';

export type QuizMode = 'active_recall_mixed' | 'polysemy_special' | 'mistake_repetition';

export interface QuizQuestion {
  id: string;
  type: 'cloze_sentence' | 'definition_match' | 'polysemy_choice' | 'collocation_match';
  questionTitle: string;
  prompt: string;
  contextSentence?: string;
  contextSentenceTranslationEn?: string;
  targetWordId: string;
  targetWord: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  polysemyContext?: {
    meaningNumber: number;
    nuance: string;
  };
}

export interface QuizResultRecord {
  timestamp: string;
  totalQuestions: number;
  correctAnswers: number;
  mistakesCount: number;
  mode: QuizMode;
}
