import { VocabularyItem, QuizQuestion, QuizMode } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateQuizQuestions(
  vocabPool: VocabularyItem[],
  mode: QuizMode,
  count: number = 8
): QuizQuestion[] {
  if (!vocabPool || vocabPool.length === 0) return [];

  const questions: QuizQuestion[] = [];
  let eligibleItems: VocabularyItem[] = [];

  if (mode === 'mistake_repetition') {
    eligibleItems = vocabPool.filter(item => item.inMistakeQueue);
    if (eligibleItems.length === 0) {
      // Fallback: items that were ever answered incorrectly or lowest myelination
      eligibleItems = vocabPool.filter(item => item.timesIncorrect > 0 || item.myelinationLevel < 2);
    }
  } else if (mode === 'polysemy_special') {
    eligibleItems = vocabPool.filter(item => item.isPolysemous && item.polysemyMeanings && item.polysemyMeanings.length > 0);
  } else {
    eligibleItems = [...vocabPool];
  }

  if (eligibleItems.length === 0) {
    eligibleItems = [...vocabPool];
  }

  const shuffledPool = shuffleArray(eligibleItems);
  const selectedItems = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  selectedItems.forEach((targetItem, index) => {
    // If polysemy mode or if item has polysemy meanings, generate polysemy choice
    if (mode === 'polysemy_special' && targetItem.polysemyMeanings && targetItem.polysemyMeanings.length > 0) {
      const meanings = targetItem.polysemyMeanings;
      const targetMeaning = meanings[Math.floor(Math.random() * meanings.length)];
      
      const otherMeanings = meanings.filter(m => m.id !== targetMeaning.id);
      const distractorOptions = otherMeanings.map(m => `${m.nuance}: ${m.definitionDe}`);
      
      // If we need more distractors, pull definitions from other words
      while (distractorOptions.length < 3) {
        const randomOther = vocabPool.find(v => v.id !== targetItem.id && !distractorOptions.includes(v.definitionDe));
        if (randomOther) {
          distractorOptions.push(`Kontext: ${randomOther.definitionDe}`);
        } else {
          distractorOptions.push(`Alternative Deutung ${distractorOptions.length + 1}`);
        }
      }

      const correctOption = `${targetMeaning.nuance}: ${targetMeaning.definitionDe}`;
      const allOptions = shuffleArray([correctOption, ...distractorOptions.slice(0, 3)]);

      questions.push({
        id: `q-poly-${targetItem.id}-${index}`,
        type: 'polysemy_choice',
        questionTitle: `Mehrdeutigkeit: „${targetItem.word}“`,
        prompt: `Welche spezifische Bedeutung hat das Wort „${targetItem.word}“ in diesem Satz?`,
        contextSentence: targetMeaning.exampleSentence,
        contextSentenceTranslationEn: targetMeaning.translationEn,
        targetWordId: targetItem.id,
        targetWord: targetItem.word,
        options: allOptions,
        correctAnswer: correctOption,
        explanation: `In diesem Kontext bedeutet „${targetItem.word}“: ${targetMeaning.definitionDe} (${targetMeaning.nuance}). EN: ${targetMeaning.translationEn}`,
        polysemyContext: {
          meaningNumber: targetMeaning.number,
          nuance: targetMeaning.nuance
        }
      });
      return;
    }

    // Standard Active Recall: Alternate between Cloze Sentence and Definition Match
    const isCloze = index % 2 === 0 && targetItem.examples.length > 0;

    if (isCloze) {
      const example = targetItem.examples[0];
      // Generate 3 distractor words of similar class
      const distractors = vocabPool
        .filter(v => v.id !== targetItem.id)
        .slice(0, 10);
      const chosenDistractors = shuffleArray(distractors)
        .slice(0, 3)
        .map(v => v.word);

      const allOptions = shuffleArray([targetItem.word, ...chosenDistractors]);

      questions.push({
        id: `q-cloze-${targetItem.id}-${index}`,
        type: 'cloze_sentence',
        questionTitle: 'Active Recall: Lückentext (C1-Kontext)',
        prompt: 'Welches gehobene C1-Wort vervollständigt den Satz semantisch und grammatikalisch korrekt?',
        contextSentence: example.clozeSentence,
        contextSentenceTranslationEn: example.translationEn,
        targetWordId: targetItem.id,
        targetWord: targetItem.word,
        options: allOptions,
        correctAnswer: targetItem.word,
        explanation: `Richtig: „${targetItem.word}“.\nVollständiger Satz: „${example.sentence}“\nEnglische Übersetzung: „${example.translationEn}“`
      });
    } else {
      // Definition & Collocation Match
      const distractors = vocabPool
        .filter(v => v.id !== targetItem.id)
        .slice(0, 10);
      const chosenDistractors = shuffleArray(distractors)
        .slice(0, 3)
        .map(v => v.definitionDe);

      const allOptions = shuffleArray([targetItem.definitionDe, ...chosenDistractors]);
      const primaryExample = targetItem.examples[0];

      questions.push({
        id: `q-def-${targetItem.id}-${index}`,
        type: 'definition_match',
        questionTitle: `Präzise C1-Bedeutung: „${targetItem.word}“`,
        prompt: `Was bedeutet der Ausdruck „${targetItem.word}“ auf C1-Niveau?`,
        contextSentence: targetItem.collocation ? `Typische Kollokation / Rektion: ${targetItem.collocation}` : (primaryExample ? primaryExample.sentence : undefined),
        contextSentenceTranslationEn: primaryExample ? primaryExample.translationEn : undefined,
        targetWordId: targetItem.id,
        targetWord: targetItem.word,
        options: allOptions,
        correctAnswer: targetItem.definitionDe,
        explanation: `„${targetItem.word}“ bedeutet: ${targetItem.definitionDe}.\nBedeutung (EN): ${targetItem.definitionEn}\nBeispielsatz: „${primaryExample?.sentence || ''}“\nEnglisch: „${primaryExample?.translationEn || ''}“`
      });
    }
  });

  return questions;
}
