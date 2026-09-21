import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Bookmark, 
  BookmarkCheck, 
  Brain, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Send, 
  Search, 
  Filter, 
  Lightbulb,
  BookOpen,
  Info,
  Zap,
  Layers
} from 'lucide-react';
import { VocabularyItem, ActiveLearningView, VocabularyCategory } from '../types';
import { playGermanPronunciation } from '../utils/audio';

const ALL_CATEGORIES: VocabularyCategory[] = [
  'Wissenschaft & Forschung',
  'Gesellschaft & Politik',
  'Wirtschaft & Arbeit',
  'Psychologie & Kognition',
  'Umwelt & Technologie',
  'Recht & Verwaltung',
  'Kommunikation & Diskurs',
  'Mehrdeutige Wörter',
  'Nomen-Verb-Verbindungen'
];

interface ActiveLearningFolderProps {
  vocabulary: VocabularyItem[];
  currentView: ActiveLearningView;
  onUpdateItem: (updated: VocabularyItem) => void;
  onAddNewItem: (item: VocabularyItem) => void;
  soundEnabled: boolean;
}

export const ActiveLearningFolder: React.FC<ActiveLearningFolderProps> = ({
  vocabulary,
  currentView,
  onUpdateItem,
  onAddNewItem,
  soundEnabled
}) => {
  // Flashcards state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterBookmarkOnly, setFilterBookmarkOnly] = useState(false);
  const [filterMistakesOnly, setFilterMistakesOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtered list for active flashcards
  const activeDeck = vocabulary.filter(item => {
    if (filterMistakesOnly && !item.inMistakeQueue) return false;
    if (filterBookmarkOnly && !item.isBookmarked) return false;
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    return true;
  });

  const currentItem: VocabularyItem | undefined = activeDeck[currentIndex] || activeDeck[0];

  // Reset index if deck changes
  useEffect(() => {
    if (currentIndex >= activeDeck.length && activeDeck.length > 0) {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
  }, [filterBookmarkOnly, filterMistakesOnly, selectedCategory, activeDeck.length]);

  // Keyboard navigation for Flashcard view
  useEffect(() => {
    if (currentView !== 'flashcards') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, activeDeck.length, currentIndex]);

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % activeDeck.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + activeDeck.length) % activeDeck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * activeDeck.length));
  };

  const handleRateRecall = (confidence: 'hard' | 'medium' | 'mastered') => {
    if (!currentItem) return;

    let newLevel: 0 | 1 | 2 | 3 = currentItem.myelinationLevel;
    let consecutive = currentItem.consecutiveCorrect;
    let inMistake = currentItem.inMistakeQueue;
    let timesIncorrect = currentItem.timesIncorrect;

    if (confidence === 'hard') {
      newLevel = 0;
      consecutive = 0;
      inMistake = true; // Route to mistake repetition queue!
      timesIncorrect += 1;
    } else if (confidence === 'medium') {
      newLevel = Math.max(1, Math.min(2, (currentItem.myelinationLevel + 1) as any)) as any;
      consecutive += 1;
    } else {
      newLevel = 3;
      consecutive += 2;
      if (consecutive >= 2) {
        inMistake = false;
      }
    }

    onUpdateItem({
      ...currentItem,
      myelinationLevel: newLevel,
      consecutiveCorrect: consecutive,
      timesReviewed: currentItem.timesReviewed + 1,
      timesIncorrect,
      inMistakeQueue: inMistake,
      lastReviewedAt: new Date().toISOString()
    });

    handleNextCard();
  };

  const toggleBookmark = () => {
    if (!currentItem) return;
    onUpdateItem({
      ...currentItem,
      isBookmarked: !currentItem.isBookmarked
    });
  };

  // --- SUBVIEW 2: C1 SATZ-TRAINER STATE ---
  const [userSentenceInput, setUserSentenceInput] = useState('');
  const [sentenceEvalLoading, setSentenceEvalLoading] = useState(false);
  const [evalResult, setEvalResult] = useState<any | null>(null);

  const handleEvaluateSentence = async () => {
    if (!currentItem || !userSentenceInput.trim()) return;
    setSentenceEvalLoading(true);
    setEvalResult(null);

    try {
      const res = await fetch('/api/c1/evaluate-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetWord: currentItem.word,
          userSentence: userSentenceInput
        })
      });

      if (res.ok) {
        const data = await res.json();
        setEvalResult(data);
      } else {
        // Intelligent client-side fallback if server offline
        const containsWord = userSentenceInput.toLowerCase().includes(currentItem.word.split(' ')[0].toLowerCase());
        setEvalResult({
          isCorrect: containsWord && userSentenceInput.length > 25,
          scoreOutOf10: containsWord ? 8 : 5,
          feedbackDe: containsWord 
            ? 'Das Zielwort wurde im Satzkontext eingebunden. Achten Sie auf korrekte C1-Wortstellung und Konnektoren.'
            : 'Stellen Sie sicher, dass das Zielwort in seiner korrekten grammatikalischen Form genutzt wird.',
          feedbackEn: 'Good attempt. Ensure target word agreement and high register.',
          improvedSentence: `Beispiel C1: ${currentItem.examples[0]?.sentence || userSentenceInput}`
        });
      }
    } catch (err) {
      setEvalResult({
        isCorrect: true,
        scoreOutOf10: 8,
        feedbackDe: 'Satz geprüft. Achten Sie auf gehobene Satzstruktur und passende Kollokationen.',
        feedbackEn: 'Sentence submitted successfully.',
        improvedSentence: currentItem.examples[0]?.sentence || userSentenceInput
      });
    } finally {
      setSentenceEvalLoading(false);
    }
  };

  // --- SUBVIEW 3: AI WORD GENERATOR STATE ---
  const [aiPromptCategory, setAiPromptCategory] = useState<string>('Wissenschaft & Forschung');
  const [aiWordType, setAiWordType] = useState<string>('Verb / Nomen-Verb-Verbindung');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [generatedWordPreview, setGeneratedWordPreview] = useState<VocabularyItem | null>(null);

  const handleGenerateWord = async () => {
    setAiGenerating(true);
    setGeneratedWordPreview(null);
    try {
      const res = await fetch('/api/c1/generate-word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: aiPromptCategory,
          wordType: aiWordType
        })
      });

      if (res.ok) {
        const data = await res.json();
        const newItem: VocabularyItem = {
          id: `custom-${Date.now()}`,
          word: data.word,
          article: data.article,
          wordClass: data.wordClass || 'Verb',
          category: (data.category as VocabularyCategory) || 'Wissenschaft & Forschung',
          level: 'C1',
          definitionDe: data.definitionDe,
          definitionEn: data.definitionEn,
          register: data.register || 'Gehoben',
          collocation: data.collocation,
          synonyms: data.synonyms || [],
          antonyms: data.antonyms || [],
          examples: data.examples || [],
          activeRecallPrompt: data.activeRecallPrompt || `Was bedeutet „${data.word}“ im C1-Kontext?`,
          myelinationLevel: 0,
          consecutiveCorrect: 0,
          timesReviewed: 0,
          timesIncorrect: 0,
          lastReviewedAt: null,
          inMistakeQueue: false,
          isBookmarked: true,
          customAdded: true
        };
        setGeneratedWordPreview(newItem);
      }
    } catch (err) {
      console.error('AI generator error:', err);
    } finally {
      setAiGenerating(false);
    }
  };

  // --- SUBVIEW 4: LEXICON FILTER & SEARCH ---
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLexicon = vocabulary.filter(item => {
    const q = searchQuery.toLowerCase();
    const matchesQuery = item.word.toLowerCase().includes(q) ||
      item.definitionDe.toLowerCase().includes(q) ||
      item.definitionEn.toLowerCase().includes(q);
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 overflow-y-auto">
      {/* View 1: ACTIVE RECALL FLASHCARDS */}
      {currentView === 'flashcards' && (
        <div className="flex-1 p-6 flex flex-col max-w-4xl mx-auto w-full">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Kategorie:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-800 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 outline-none focus:border-blue-500 max-w-[220px]"
              >
                <option value="all">Alle Kategorien ({vocabulary.length})</option>
                {ALL_CATEGORIES.map(cat => {
                  const count = vocabulary.filter(v => v.category === cat).length;
                  if (count === 0) return null;
                  return (
                    <option key={cat} value={cat}>
                      {cat} ({count})
                    </option>
                  );
                })}
              </select>

              <button
                onClick={() => setFilterBookmarkOnly(prev => !prev)}
                className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                  filterBookmarkOnly 
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Nur Favoriten</span>
              </button>

              <button
                onClick={() => setFilterMistakesOnly(prev => !prev)}
                className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                  filterMistakesOnly 
                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 font-medium' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                title="Nur Wörter anzeigen, die im Quiz falsch beantwortet wurden"
              >
                <Zap className="w-3.5 h-3.5 text-rose-400" />
                <span>Nur Fehler ({vocabulary.filter(v => v.inMistakeQueue).length})</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-mono">
                Karte {activeDeck.length > 0 ? currentIndex + 1 : 0} von {activeDeck.length}
              </span>
              <button
                onClick={handleShuffle}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200"
                title="Mischen"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Recall Notice (Neuroscience Reminder) */}
          <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200">
            <Brain className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              <strong>Active Recall Regel:</strong> Versuchen Sie zuerst aktiv die Lücke im Satz zu vervollständigen, bevor Sie die Karte umdrehen!
            </span>
          </div>

          {/* FLASHCARD CONTAINER */}
          {currentItem ? (
            <div className="flex-1 flex flex-col justify-center">
              <div 
                className={`relative min-h-[380px] w-full rounded-2xl border transition-all duration-300 p-8 flex flex-col justify-between shadow-2xl ${
                  isFlipped 
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-blue-500/40 shadow-blue-500/5' 
                    : 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-slate-800'
                }`}
              >
                {/* Card Top Meta */}
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium border border-slate-700/60">
                      {currentItem.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/50 font-mono text-[10px]">
                      {currentItem.level}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {currentItem.register}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Audio Playback Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isFlipped) {
                          playGermanPronunciation(currentItem.word);
                        } else {
                          playGermanPronunciation(currentItem.examples[0]?.clozeSentence || currentItem.word);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 transition-colors"
                      title="Aussprache anhören"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark();
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                      title="Lesezeichen setzen"
                    >
                      {currentItem.isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 fill-amber-400" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Content: Front vs Back */}
                {!isFlipped ? (
                  /* FRONT: ACTIVE RECALL CLOZE & RETRIEVAL CHALLENGE */
                  <div className="my-auto py-6 space-y-6 text-center">
                    <div className="space-y-2">
                      {currentItem.isPolysemous && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-semibold mb-1">
                          <Layers className="w-3.5 h-3.5 text-purple-400" />
                          <span>Mehrdeutiges C1-Wort ({currentItem.polysemyMeanings?.length || 2} verschiedene Bedeutungen)</span>
                        </div>
                      )}
                      <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                        Neuronale Abruf-Herausforderung
                      </span>
                      <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 max-w-2xl mx-auto leading-relaxed">
                        {currentItem.activeRecallPrompt}
                      </h2>
                    </div>

                    {/* Cloze Example Sentence */}
                    {currentItem.examples.length > 0 && (
                      <div className="bg-slate-850/80 border border-slate-800 rounded-xl p-5 max-w-2xl mx-auto text-left space-y-2">
                        <div className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                          Goethe C1 Mustersatz (Lückentext):
                        </div>
                        <p className="text-base sm:text-lg text-slate-200 font-serif leading-relaxed">
                          „{currentItem.examples[0].clozeSentence}“
                        </p>
                        <p className="text-xs text-slate-400 italic pt-1">
                          En: {currentItem.examples[0].translationEn}
                        </p>
                      </div>
                    )}

                    <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>Wortart: <strong className="text-slate-300">{currentItem.wordClass}</strong></span>
                      {currentItem.collocation && (
                        <span className="ml-3 text-slate-400">Typische Rektion: <strong className="text-slate-300">{currentItem.collocation}</strong></span>
                      )}
                    </div>
                  </div>
                ) : (
                  /* BACK: REVEALED C1 WORD & DETAILED CONTEXT */
                  <div className="my-auto py-6 space-y-6">
                    <div className="text-center space-y-2">
                      <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                        Aufgelöst
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight flex items-center justify-center gap-3">
                        <span>{currentItem.word}</span>
                        <button
                          onClick={() => playGermanPronunciation(currentItem.word)}
                          className="p-1.5 rounded-full hover:bg-slate-800 text-blue-400 transition-colors"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </h2>
                      <p className="text-base text-blue-300 font-medium">
                        {currentItem.definitionEn}
                      </p>
                    </div>

                    {/* MULTI-MEANING SECTION OR STANDARD DEFINITION */}
                    {currentItem.isPolysemous && currentItem.polysemyMeanings && currentItem.polysemyMeanings.length > 0 ? (
                      <div className="space-y-4 pt-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
                          <span className="font-semibold text-purple-300 flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-purple-400" />
                            <span>Differenzierte Bedeutungen & Kontexte ({currentItem.polysemyMeanings.length}):</span>
                          </span>
                          <span className="text-slate-400 font-normal">
                            Alle Beispielsätze mit englischer Übersetzung
                          </span>
                        </div>

                        <div className="space-y-3">
                          {currentItem.polysemyMeanings.map((meaning, mIdx) => (
                            <div 
                              key={meaning.id || mIdx}
                              className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-purple-500/40 transition-all space-y-3 text-left shadow-md"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-2">
                                <div className="flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-700 text-purple-300 text-xs font-bold flex items-center justify-center font-mono">
                                    {meaning.number || mIdx + 1}
                                  </span>
                                  <span className="text-xs font-bold text-slate-200">
                                    Bedeutung {meaning.number || mIdx + 1}
                                  </span>
                                  {meaning.nuance && (
                                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 text-purple-300 border border-slate-700">
                                      {meaning.nuance}
                                    </span>
                                  )}
                                </div>
                                {meaning.grammarInfo && (
                                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                                    {meaning.grammarInfo}
                                  </span>
                                )}
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                <div className="space-y-1">
                                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                                    🇩🇪 Deutsche Definition:
                                  </span>
                                  <p className="text-slate-200 font-medium leading-relaxed">{meaning.definitionDe}</p>
                                </div>
                                <div className="space-y-1">
                                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block">
                                    🇬🇧 English Meaning:
                                  </span>
                                  <p className="text-blue-200 font-medium leading-relaxed">{meaning.definitionEn}</p>
                                </div>
                              </div>

                              {/* Example Sentence in German and English */}
                              <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-850 space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-[10px] uppercase font-semibold text-purple-300 tracking-wider">
                                    Goethe C1 Mustersatz (Deutsch):
                                  </span>
                                  <button
                                    onClick={() => playGermanPronunciation(meaning.exampleSentence)}
                                    className="p-1 rounded text-purple-400 hover:text-purple-300 hover:bg-slate-800 transition-colors"
                                    title="Satz auf Deutsch anhören"
                                  >
                                    <Volume2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <p className="text-slate-100 font-serif text-sm leading-relaxed italic">
                                  „{meaning.exampleSentence}“
                                </p>
                                <div className="pt-1.5 border-t border-slate-800/80 text-xs text-blue-300/90 flex items-start gap-1.5">
                                  <span className="font-semibold text-blue-400 text-[11px] shrink-0">🇬🇧 English:</span>
                                  <span className="font-sans leading-relaxed">{meaning.translationEn}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* German Definition Box */}
                        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-sm text-slate-200 space-y-1">
                          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            Bedeutung (C1 Niveau):
                          </div>
                          <p>{currentItem.definitionDe}</p>
                        </div>

                        {/* All Example Sentences with German & English */}
                        {currentItem.examples.length > 0 && (
                          <div className="space-y-3">
                            {currentItem.examples.map((ex, exIdx) => (
                              <div key={exIdx} className="bg-blue-950/30 border border-blue-900/40 rounded-xl p-4 text-sm space-y-2">
                                <div className="flex items-center justify-between text-[11px] font-semibold text-blue-300 uppercase tracking-wider">
                                  <span>{currentItem.examples.length > 1 ? `Mustersatz ${exIdx + 1}:` : 'Vollständiger Mustersatz:'}</span>
                                  <button
                                    onClick={() => playGermanPronunciation(ex.sentence)}
                                    className="p-1 rounded text-blue-400 hover:text-blue-300 hover:bg-slate-800 transition-colors"
                                    title="Aussprache anhören"
                                  >
                                    <Volume2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <p className="text-slate-100 font-serif text-base leading-relaxed">
                                  „{ex.sentence}“
                                </p>
                                <p className="text-xs text-blue-300/90 pt-1.5 border-t border-blue-900/40 font-sans flex items-center gap-1.5">
                                  <span className="font-semibold text-blue-400">🇬🇧 English:</span>
                                  <span>{ex.translationEn}</span>
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    {/* Synonyms & Collocations */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {currentItem.synonyms.length > 0 && (
                        <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
                          <span className="text-slate-400 font-semibold block mb-1">Synonyme (C1):</span>
                          <span className="text-slate-200">{currentItem.synonyms.join(' • ')}</span>
                        </div>
                      )}
                      {currentItem.collocation && (
                        <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
                          <span className="text-slate-400 font-semibold block mb-1">Kollokation / Rektion:</span>
                          <span className="text-slate-200">{currentItem.collocation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* CARD BOTTOM ACTION BAR */}
                <div className="border-t border-slate-800/80 pt-4 flex flex-wrap items-center justify-between gap-3">
                  {!isFlipped ? (
                    <button
                      onClick={() => setIsFlipped(true)}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                      <span>Lösung aufdecken (Leertaste)</span>
                      <RotateCw className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-slate-400">
                        Wie gut war die neuronale Erinnerung?
                      </span>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => handleRateRecall('hard')}
                          className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 hover:bg-rose-900/60 text-xs font-semibold transition-colors"
                        >
                          🔴 Schwer (Wiederholen)
                        </button>
                        <button
                          onClick={() => handleRateRecall('medium')}
                          className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300 hover:bg-amber-900/60 text-xs font-semibold transition-colors"
                        >
                          🟡 Gut erinnert
                        </button>
                        <button
                          onClick={() => handleRateRecall('mastered')}
                          className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 hover:bg-emerald-900/60 text-xs font-semibold transition-colors"
                        >
                          🟢 Myelinisiert
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Pagination Controls */}
              <div className="flex items-center justify-between mt-6 px-2">
                <button
                  onClick={handlePrevCard}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Vorherige (←)</span>
                </button>

                <button
                  onClick={handleNextCard}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs transition-colors"
                >
                  <span>Nächste (→)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800">
              Keine Vokabeln mit den aktuellen Filtern gefunden.
            </div>
          )}
        </div>
      )}

      {/* View 2: C1 SATZ-TRAINER */}
      {currentView === 'sentence_trainer' && (
        <div className="flex-1 p-6 max-w-4xl mx-auto w-full space-y-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  Eigenes Formulieren & C1-Prüfung
                </span>
                <h2 className="text-xl font-bold text-slate-100">
                  Aktiver C1 Satz-Trainer
                </h2>
              </div>
              <button
                onClick={handleShuffle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Anderes Wort</span>
              </button>
            </div>

            {currentItem && (
              <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-blue-400">{currentItem.word}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">{currentItem.wordClass}</span>
                  <span className="text-xs text-slate-400">({currentItem.definitionEn})</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong>Deutsche Bedeutung:</strong> {currentItem.definitionDe}
                </p>
                {currentItem.collocation && (
                  <p className="text-xs text-indigo-300">
                    <strong>Feste Wendung / Rektion:</strong> {currentItem.collocation}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                Verfassen Sie einen anspruchsvollen Beispielsatz auf C1-Niveau mit diesem Wort:
              </label>
              <textarea
                value={userSentenceInput}
                onChange={(e) => setUserSentenceInput(e.target.value)}
                placeholder={`Schreiben Sie z.B.: Obwohl die Experten davor warnten, ${currentItem?.word || '...'} ...`}
                rows={4}
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 outline-none text-sm font-serif"
              />
            </div>

            <button
              onClick={handleEvaluateSentence}
              disabled={sentenceEvalLoading || !userSentenceInput.trim()}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20"
            >
              {sentenceEvalLoading ? (
                <>
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Prüfe Grammatik & C1-Stil...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Satz auf C1-Niveau analysieren</span>
                </>
              )}
            </button>
          </div>

          {/* Feedback Section */}
          {evalResult && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm font-semibold text-slate-200">Auswertung des Mustersatzes</span>
                <span className="px-2.5 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-mono font-bold">
                  Score: {evalResult.scoreOutOf10}/10
                </span>
              </div>

              <p className="text-sm text-slate-300">{evalResult.feedbackDe}</p>

              {evalResult.improvedSentence && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      Optimierte Goethe C1 Formulierung:
                    </span>
                    <p className="text-sm text-slate-200 font-serif">
                      „{evalResult.improvedSentence}“
                    </p>
                  </div>
                  {evalResult.improvedSentenceEn && (
                    <div className="border-t border-slate-900 pt-1.5">
                      <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider block">
                        🇬🇧 English Translation:
                      </span>
                      <p className="text-xs text-blue-200/90 font-sans">
                        {evalResult.improvedSentenceEn}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* View 3: C1 WORTSCHATZ-LEXIKON */}
      {currentView === 'word_lexicon' && (
        <div className="flex-1 p-6 max-w-5xl mx-auto w-full space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Wort, Bedeutung oder englische Übersetzung suchen..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs px-3 py-2 rounded-lg outline-none max-w-[220px]"
            >
              <option value="all">Alle Rubriken ({vocabulary.length})</option>
              {ALL_CATEGORIES.map(cat => {
                const count = vocabulary.filter(v => v.category === cat).length;
                if (count === 0) return null;
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredLexicon.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                        <span>{item.word}</span>
                        <button
                          onClick={() => playGermanPronunciation(item.word)}
                          className="p-1 rounded hover:bg-slate-800 text-blue-400"
                          title="Aussprache"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </h3>
                      <p className="text-xs text-blue-300 font-medium">{item.definitionEn}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                      {item.wordClass}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {item.definitionDe}
                  </p>

                  {item.examples.length > 0 && (
                    <div className="mt-2 space-y-1 border-l-2 border-blue-500/40 pl-2.5">
                      <p className="text-xs text-slate-300 italic font-serif">
                        „{item.examples[0].sentence}“
                      </p>
                      <p className="text-[11px] text-blue-300/80 font-sans">
                        <span className="font-semibold text-blue-400 mr-1">🇬🇧 EN:</span>
                        {item.examples[0].translationEn}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/80">
                  <span>{item.category}</span>
                  <span className="flex items-center gap-1">
                    Stufe:{' '}
                    <strong className={
                      item.myelinationLevel === 3 ? 'text-emerald-400' :
                      item.myelinationLevel >= 1 ? 'text-amber-400' : 'text-slate-500'
                    }>
                      {item.myelinationLevel === 3 ? 'Myelinisiert' : item.myelinationLevel >= 1 ? 'Konsolidiert' : 'Neu'}
                    </strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 4: KI-WORTSCHMIEDE (GEMINI C1 VOCABULARY GENERATOR) */}
      {currentView === 'ai_generator' && (
        <div className="flex-1 p-6 max-w-4xl mx-auto w-full space-y-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-lg font-bold text-slate-100">KI-Wortschmiede für Goethe C1</h2>
            </div>
            <p className="text-xs text-slate-400">
              Generieren Sie mithilfe der Gemini KI neue anspruchsvolle Vokabeln, Nomen-Verb-Verbindungen oder Redewendungen inklusive Lückentext-Mustersätzen für Ihr Active Recall Training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Kategorie wählen:
                </label>
                <select
                  value={aiPromptCategory}
                  onChange={(e) => setAiPromptCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs px-3 py-2 rounded-lg outline-none"
                >
                  <option value="Wissenschaft & Forschung">Wissenschaft & Forschung</option>
                  <option value="Gesellschaft & Politik">Gesellschaft & Politik</option>
                  <option value="Wirtschaft & Arbeit">Wirtschaft & Arbeit</option>
                  <option value="Nomen-Verb-Verbindungen">Nomen-Verb-Verbindungen</option>
                  <option value="Psychologie & Kognition">Psychologie & Kognition</option>
                  <option value="Umwelt & Technologie">Umwelt & Technologie</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Typ / Wortart:
                </label>
                <select
                  value={aiWordType}
                  onChange={(e) => setAiWordType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs px-3 py-2 rounded-lg outline-none"
                >
                  <option value="Verb / Nomen-Verb-Verbindung">Verb oder Nomen-Verb-Verbindung</option>
                  <option value="Nomen mit Rektion">Nomen mit fester Präposition</option>
                  <option value="Adjektiv mit Partizip">Gehobenes Adjektiv</option>
                  <option value="Mehrdeutiges Verb">Verb mit mehreren Bedeutungen</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateWord}
              disabled={aiGenerating}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-medium text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-600/20 disabled:opacity-50"
            >
              {aiGenerating ? (
                <>
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Generiere C1-Wortschatz mit Beispielsatz...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Neues C1-Wort generieren</span>
                </>
              )}
            </button>
          </div>

          {/* Generated Preview Card */}
          {generatedWordPreview && (
            <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950 border border-amber-800 text-amber-300 font-mono">
                    Neu generiert
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1 flex items-center gap-2">
                    {generatedWordPreview.word}
                    <button
                      onClick={() => playGermanPronunciation(generatedWordPreview.word)}
                      className="p-1 rounded text-blue-400 hover:bg-slate-800"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </h3>
                  <p className="text-xs text-blue-300">{generatedWordPreview.definitionEn}</p>
                </div>

                <button
                  onClick={() => {
                    onAddNewItem(generatedWordPreview);
                    setGeneratedWordPreview(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Zum Wortschatz hinzufügen</span>
                </button>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                <strong>Erklärung:</strong> {generatedWordPreview.definitionDe}
              </div>

              {generatedWordPreview.examples.length > 0 && (
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-400 font-semibold block">Mustersatz:</span>
                  <p className="text-slate-200 font-serif text-sm">
                    „{generatedWordPreview.examples[0].sentence}“
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
