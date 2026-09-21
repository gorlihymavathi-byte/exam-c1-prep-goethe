import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Volume2, 
  ArrowRight, 
  Flame, 
  Brain, 
  Repeat, 
  Sparkles,
  Trophy,
  Check
} from 'lucide-react';
import { VocabularyItem, QuizQuestion, QuizMode, QuizResultRecord } from '../types';
import { generateQuizQuestions } from '../utils/quizEngine';
import { playGermanPronunciation } from '../utils/audio';

interface TestingFolderProps {
  vocabulary: VocabularyItem[];
  currentTab: 'folder_testing' | 'mistake_queue';
  onUpdateItem: (updated: VocabularyItem) => void;
  onRecordResult: (record: QuizResultRecord) => void;
  onSwitchToMistakeQueue: () => void;
}

export const TestingFolder: React.FC<TestingFolderProps> = ({
  vocabulary,
  currentTab,
  onUpdateItem,
  onRecordResult,
  onSwitchToMistakeQueue
}) => {
  const [quizMode, setQuizMode] = useState<QuizMode>(
    currentTab === 'mistake_queue' ? 'mistake_repetition' : 'active_recall_mixed'
  );

  useEffect(() => {
    if (currentTab === 'mistake_queue') {
      setQuizMode('mistake_repetition');
    }
  }, [currentTab]);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionMistakes, setSessionMistakes] = useState<QuizQuestion[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Start / restart quiz
  const startQuiz = (mode: QuizMode = quizMode) => {
    const qList = generateQuizQuestions(vocabulary, mode, 8);
    setQuestions(qList);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setSessionScore(0);
    setSessionMistakes([]);
    setIsFinished(false);
    setQuizMode(mode);
  };

  useEffect(() => {
    startQuiz(quizMode);
  }, [quizMode, vocabulary.length]);

  const currentQ: QuizQuestion | undefined = questions[currentQIndex];

  // Keyboard shortcuts 1-4 to pick option, Enter/Space to next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentQ || isFinished) return;

      if (!isAnswerSubmitted) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const optIdx = parseInt(e.key, 10) - 1;
          if (currentQ.options[optIdx]) {
            handleSelectOption(currentQ.options[optIdx]);
          }
        }
      } else {
        if (e.key === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, isAnswerSubmitted, isFinished]);

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted || !currentQ) return;

    setSelectedOption(option);
    setIsAnswerSubmitted(true);

    const isCorrect = option === currentQ.correctAnswer;
    const targetItem = vocabulary.find(v => v.id === currentQ.targetWordId);

    if (isCorrect) {
      setSessionScore(prev => prev + 1);

      if (targetItem) {
        const nextConsecutive = targetItem.consecutiveCorrect + 1;
        // If answered correctly in mistake repetition twice, clear from mistake queue!
        const clearMistake = quizMode === 'mistake_repetition' && nextConsecutive >= 2;
        const newLevel = Math.min(3, targetItem.myelinationLevel + 1) as 0 | 1 | 2 | 3;

        onUpdateItem({
          ...targetItem,
          consecutiveCorrect: nextConsecutive,
          timesReviewed: targetItem.timesReviewed + 1,
          myelinationLevel: newLevel,
          inMistakeQueue: clearMistake ? false : targetItem.inMistakeQueue,
          lastReviewedAt: new Date().toISOString()
        });
      }
    } else {
      // User answered wrong!
      setSessionMistakes(prev => [...prev, currentQ]);

      // CRITICAL REQUIREMENT: "repeat the vocab if i have answered wrong in the quiz"
      // Automatically route to Mistake Repetition Queue!
      if (targetItem) {
        onUpdateItem({
          ...targetItem,
          inMistakeQueue: true,
          timesIncorrect: targetItem.timesIncorrect + 1,
          consecutiveCorrect: 0,
          myelinationLevel: 0, // Reset to unsolidified
          timesReviewed: targetItem.timesReviewed + 1,
          lastReviewedAt: new Date().toISOString()
        });
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Finished quiz!
      setIsFinished(true);
      onRecordResult({
        timestamp: new Date().toISOString(),
        totalQuestions: questions.length,
        correctAnswers: sessionScore + (selectedOption === currentQ?.correctAnswer ? 1 : 0),
        mistakesCount: sessionMistakes.length,
        mode: quizMode
      });
    }
  };

  const mistakeQueueCount = vocabulary.filter(v => v.inMistakeQueue).length;

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Header & Mode Switcher */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Prüfungsordner & Active Recall Test
              </span>
              <h2 className="text-lg font-bold text-slate-100">
                {quizMode === 'mistake_repetition' 
                  ? '⚡ Fehler-Wiederholungsstapel (Gezielter Abruf)' 
                  : quizMode === 'polysemy_special'
                  ? '🔀 Mehrdeutige Wörter: Bedeutungs-Zuordnung'
                  : '🎯 C1 Goethe Wortschatz-Prüfung'}
              </h2>
            </div>

            {/* Mode Toggle Pills */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => startQuiz('active_recall_mixed')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  quizMode === 'active_recall_mixed'
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Gemischter C1-Test
              </button>
              <button
                onClick={() => startQuiz('polysemy_special')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  quizMode === 'polysemy_special'
                    ? 'bg-purple-600 text-white font-medium shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Mehrdeutigkeit
              </button>
              <button
                onClick={() => startQuiz('mistake_repetition')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  quizMode === 'mistake_repetition'
                    ? 'bg-rose-600 text-white font-medium shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Repeat className="w-3.5 h-3.5" />
                <span>Wiederholungsstapel</span>
                {mistakeQueueCount > 0 && (
                  <span className="px-1 py-0.2 rounded-full bg-rose-950 text-rose-300 font-mono text-[10px]">
                    {mistakeQueueCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Progress Bar in Quiz */}
          {!isFinished && questions.length > 0 && (
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Frage {currentQIndex + 1} von {questions.length}</span>
              <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${((currentQIndex) / questions.length) * 100}%` }}
                />
              </div>
              <span className="font-mono text-emerald-400 font-bold">{sessionScore} Richtig</span>
            </div>
          )}
        </div>

        {/* ACTIVE QUESTION VIEW */}
        {!isFinished && currentQ ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {currentQ.questionTitle}
                </span>

                <button
                  onClick={() => playGermanPronunciation(currentQ.contextSentence || currentQ.targetWord)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 transition-colors flex items-center gap-1 text-xs"
                  title="Satz anhören"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Anhören</span>
                </button>
              </div>

              {/* Prompt */}
              <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                {currentQ.prompt}
              </h3>

              {/* Context Sentence */}
              {currentQ.contextSentence && (
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 text-left space-y-2">
                  <p className="text-base sm:text-lg text-slate-200 font-serif leading-relaxed">
                    „{currentQ.contextSentence}“
                  </p>
                  {currentQ.contextSentenceTranslationEn && (
                    <p className="text-xs text-blue-300/90 font-sans italic border-t border-slate-900 pt-2 flex items-center gap-1.5">
                      <span className="font-semibold text-blue-400 not-italic">🇬🇧 English:</span>
                      <span>{currentQ.contextSentenceTranslationEn}</span>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentQ.correctAnswer;

                let btnStyles = 'bg-slate-850 hover:bg-slate-800/80 border-slate-800 text-slate-200';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold shadow-emerald-500/10 shadow-lg';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-950/70 border-rose-500 text-rose-200 font-semibold';
                  } else {
                    btnStyles = 'bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between group ${btnStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-400 flex items-center justify-center font-mono text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswerSubmitted && (
                      <div>
                        {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                        {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Feedback */}
            {isAnswerSubmitted && (
              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className={`p-4 rounded-xl text-xs space-y-1 ${
                  selectedOption === currentQ.correctAnswer 
                    ? 'bg-emerald-950/40 border border-emerald-800/50 text-emerald-200' 
                    : 'bg-rose-950/40 border border-rose-800/50 text-rose-200'
                }`}>
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    {selectedOption === currentQ.correctAnswer ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Hervorragend! Richtige neuronale Assoziation.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-400" />
                        <span>Falsche Antwort: Automatisch in den Wiederholungsstapel aufgenommen!</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">
                    {currentQ.explanation}
                  </p>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <span>{currentQIndex + 1 < questions.length ? 'Nächste Frage (Enter)' : 'Ergebnisse anzeigen (Enter)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : isFinished ? (
          /* QUIZ SUMMARY & REPEAT ACTIONS */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-100">Prüfung abgeschlossen!</h3>
              <p className="text-slate-400 text-sm">
                Sie haben <strong className="text-emerald-400 font-mono text-base">{sessionScore}</strong> von{' '}
                <strong className="text-slate-200 font-mono">{questions.length}</strong> Fragen richtig beantwortet.
              </p>
            </div>

            {/* Error Queue Alert if user missed questions */}
            {sessionMistakes.length > 0 ? (
              <div className="bg-rose-950/40 border border-rose-800/60 rounded-xl p-5 text-left space-y-3">
                <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span>{sessionMistakes.length} Vokabeln im Wiederholungsstapel vorgemerkt</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gemäß der Neurobiologie des Lernens (aus dem Video) ist der Moment des Scheiterns die wichtigste Chance: Wiederholen Sie diese Wörter sofort, um die Myelinisierung der Synapsen abzuschließen.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {sessionMistakes.map((m, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-rose-900/60 text-rose-200 text-xs font-mono border border-rose-700/50">
                      {m.targetWord}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-5 text-emerald-200 text-sm">
                🎉 Perfekte Runde! Keine Vokabeln im Wiederholungsstapel gelandet. Ihre neuronalen Pfade sind gefestigt.
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {sessionMistakes.length > 0 && (
                <button
                  onClick={() => startQuiz('mistake_repetition')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2"
                >
                  <Repeat className="w-4 h-4" />
                  <span>Fehler jetzt wiederholen ({sessionMistakes.length})</span>
                </button>
              )}

              <button
                onClick={() => startQuiz('active_recall_mixed')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Neuen Test starten</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-4">
            <p>Der Wiederholungsstapel ist aktuell leer! Keine falsch beantworteten Vokabeln vorhanden.</p>
            <button
              onClick={() => startQuiz('active_recall_mixed')}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
            >
              C1 Goethe Prüfung starten
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
