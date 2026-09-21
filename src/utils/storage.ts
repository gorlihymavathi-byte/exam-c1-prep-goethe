import { VocabularyItem, QuizResultRecord } from '../types';
import { INITIAL_GOETHE_C1_VOCABULARY } from '../data/goetheC1Data';

const STORAGE_KEY_VOCAB = 'goethe_c1_wortschatz_items_v1';
const STORAGE_KEY_RESULTS = 'goethe_c1_quiz_history_v1';

export function loadVocabularyData(): VocabularyItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_VOCAB);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_VOCAB, JSON.stringify(INITIAL_GOETHE_C1_VOCABULARY));
      return INITIAL_GOETHE_C1_VOCABULARY;
    }
    const parsed: VocabularyItem[] = JSON.parse(raw);
    // Merge any missing initial items while preserving existing user progress
    const map = new Map<string, VocabularyItem>(parsed.map(item => [item.id, item]));
    let hasNew = false;
    INITIAL_GOETHE_C1_VOCABULARY.forEach(initItem => {
      if (!map.has(initItem.id)) {
        map.set(initItem.id, initItem);
        hasNew = true;
      }
    });
    const merged = Array.from(map.values());
    if (hasNew) {
      localStorage.setItem(STORAGE_KEY_VOCAB, JSON.stringify(merged));
    }
    return merged;
  } catch (err) {
    console.error('Failed to load vocabulary data:', err);
    return INITIAL_GOETHE_C1_VOCABULARY;
  }
}

export function saveVocabularyData(items: VocabularyItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_VOCAB, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to save vocabulary data:', err);
  }
}

export function loadQuizHistory(): QuizResultRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RESULTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizResult(record: QuizResultRecord): void {
  try {
    const existing = loadQuizHistory();
    existing.unshift(record);
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.error('Failed to save quiz result:', err);
  }
}
