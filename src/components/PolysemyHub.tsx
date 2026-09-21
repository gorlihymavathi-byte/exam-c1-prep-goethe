import React, { useState } from 'react';
import { 
  Volume2, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Check, 
  X, 
  RotateCw, 
  BookOpen,
  Split
} from 'lucide-react';
import { VocabularyItem, PolysemyMeaning } from '../types';
import { playGermanPronunciation } from '../utils/audio';

interface PolysemyHubProps {
  vocabulary: VocabularyItem[];
  onUpdateItem: (item: VocabularyItem) => void;
  onOpenQuizWithPolysemy: () => void;
}

export const PolysemyHub: React.FC<PolysemyHubProps> = ({
  vocabulary,
  onUpdateItem,
  onOpenQuizWithPolysemy
}) => {
  const polysemousWords = vocabulary.filter(v => v.isPolysemous && v.polysemyMeanings && v.polysemyMeanings.length > 0);

  const [selectedWordId, setSelectedWordId] = useState<string>(
    polysemousWords[0]?.id || ''
  );

  const currentWord = polysemousWords.find(w => w.id === selectedWordId) || polysemousWords[0];

  // Quick Mini-Challenge state for the active polysemous word
  const [activeChallengeIndex, setActiveChallengeIndex] = useState<number | null>(null);
  const [selectedAnswerMeaningId, setSelectedAnswerMeaningId] = useState<string | null>(null);
  const [challengeSubmitted, setChallengeSubmitted] = useState(false);

  // Gemini AI Nuance State
  const [aiNuanceLoading, setAiNuanceLoading] = useState(false);
  const [aiNuanceData, setAiNuanceData] = useState<any | null>(null);

  const handleStartChallenge = (meaningIndex: number) => {
    setActiveChallengeIndex(meaningIndex);
    setSelectedAnswerMeaningId(null);
    setChallengeSubmitted(false);
  };

  const handleEvaluateChallenge = (meaningId: string) => {
    setSelectedAnswerMeaningId(meaningId);
    setChallengeSubmitted(true);
  };

  const handleRequestAiNuance = async () => {
    if (!currentWord) return;
    setAiNuanceLoading(true);
    setAiNuanceData(null);

    try {
      const res = await fetch('/api/c1/explain-polysemy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: currentWord.word })
      });

      if (res.ok) {
        const data = await res.json();
        setAiNuanceData(data);
      }
    } catch (err) {
      console.error('Failed to fetch AI polysemy explanation:', err);
    } finally {
      setAiNuanceLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 p-6 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-purple-950/70 via-slate-900 to-slate-900 p-6 rounded-2xl border border-purple-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔀</span>
              <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">
                Goethe C1 Spezialmodul
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">
              Mehrdeutige Wörter (Polysemie)
            </h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Im Goethe-Zertifikat C1 entscheiden oft winzige Kontextunterschiede darüber, welche Bedeutung ein deutsches Verb (z.B. <em>einstellen</em>, <em>absetzen</em>, <em>aufheben</em>) hat.
            </p>
          </div>

          <button
            onClick={onOpenQuizWithPolysemy}
            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/20 self-start sm:self-auto transition-all"
          >
            <span>Mehrdeutigkeits-Quiz starten</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Word Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {polysemousWords.map(wordItem => (
            <button
              key={wordItem.id}
              onClick={() => {
                setSelectedWordId(wordItem.id);
                setActiveChallengeIndex(null);
                setChallengeSubmitted(false);
                setAiNuanceData(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                wordItem.id === currentWord?.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
              }`}
            >
              <span>{wordItem.word}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-black/30 text-[10px] font-mono">
                {wordItem.polysemyMeanings?.length || 2} Bed.
              </span>
            </button>
          ))}
        </div>

        {/* ACTIVE WORD VIEW: COMPARATIVE MEANING CARDS */}
        {currentWord && (
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                    <span>{currentWord.word}</span>
                    <button
                      onClick={() => playGermanPronunciation(currentWord.word)}
                      className="p-1 rounded text-purple-400 hover:bg-slate-800"
                      title="Aussprache anhören"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </h3>
                  <p className="text-xs text-purple-300 mt-0.5">
                    {currentWord.definitionEn}
                  </p>
                </div>

                <button
                  onClick={handleRequestAiNuance}
                  disabled={aiNuanceLoading}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-800/40 text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{aiNuanceLoading ? 'Lade Nuancen...' : 'KI-Prüfungstipp & Nuancen'}</span>
                </button>
              </div>

              {/* Comparative Grid of Meanings */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentWord.polysemyMeanings?.map((meaning, idx) => (
                  <div 
                    key={meaning.id}
                    className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-xs font-bold flex items-center justify-center font-mono">
                          {meaning.number}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                          {meaning.nuance}
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-slate-200">
                        {meaning.definitionDe}
                      </h4>
                      <p className="text-xs text-purple-300">
                        En: {meaning.definitionEn}
                      </p>

                      {meaning.grammarInfo && (
                        <div className="text-[11px] text-slate-400 font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">
                          {meaning.grammarInfo}
                        </div>
                      )}

                      <div className="pt-2 border-t border-slate-850 space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="font-semibold">Beispielsatz (C1):</span>
                          <button
                            onClick={() => playGermanPronunciation(meaning.exampleSentence)}
                            className="text-purple-400 hover:text-purple-300 p-0.5"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 font-serif leading-relaxed italic">
                          „{meaning.exampleSentence}“
                        </p>
                        <p className="text-[11px] text-blue-300/90 font-sans pt-1">
                          <span className="font-semibold text-blue-400 mr-1">🇬🇧 EN:</span>
                          {meaning.translationEn}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartChallenge(idx)}
                      className="w-full py-2 rounded-lg bg-slate-800 hover:bg-purple-900/40 text-purple-300 text-xs font-medium border border-slate-700/60 transition-colors"
                    >
                      Mini-Quiz zu dieser Bedeutung
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* MINI-CHALLENGE SECTION IF TRIGGERED */}
            {activeChallengeIndex !== null && currentWord.polysemyMeanings && (
              <div className="bg-slate-900 border border-purple-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs uppercase font-bold text-purple-400">
                    Bedeutungs-Zuordnungs-Challenge
                  </span>
                  <span className="text-xs text-slate-400">
                    Wählen Sie die treffende Bedeutung für diesen Satz:
                  </span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left space-y-1.5">
                  <p className="text-base text-slate-100 font-serif leading-relaxed">
                    „{currentWord.polysemyMeanings[activeChallengeIndex].exampleSentence}“
                  </p>
                  <p className="text-xs text-blue-300 italic border-t border-slate-900 pt-1.5 flex items-center gap-1.5">
                    <span className="font-semibold text-blue-400 not-italic">🇬🇧 English:</span>
                    <span>{currentWord.polysemyMeanings[activeChallengeIndex].translationEn}</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentWord.polysemyMeanings.map((m) => {
                    const isTarget = m.id === currentWord.polysemyMeanings![activeChallengeIndex].id;
                    const isSelected = selectedAnswerMeaningId === m.id;

                    let style = 'bg-slate-850 hover:bg-slate-800 border-slate-800 text-slate-200';
                    if (challengeSubmitted) {
                      if (isTarget) {
                        style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold';
                      } else if (isSelected) {
                        style = 'bg-rose-950/80 border-rose-500 text-rose-200';
                      } else {
                        style = 'bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-50';
                      }
                    }

                    return (
                      <button
                        key={m.id}
                        onClick={() => handleEvaluateChallenge(m.id)}
                        disabled={challengeSubmitted}
                        className={`p-3.5 rounded-xl border text-left text-xs transition-all flex flex-col justify-between space-y-2 ${style}`}
                      >
                        <div>
                          <span className="font-bold text-purple-300 block mb-1">
                            Bedeutung {m.number}: {m.nuance}
                          </span>
                          <span className="line-clamp-2">{m.definitionDe}</span>
                        </div>
                        {challengeSubmitted && isTarget && (
                          <div className="flex items-center gap-1 text-emerald-400 font-bold text-[11px]">
                            <Check className="w-3.5 h-3.5" />
                            <span>Richtig!</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* AI NUANCE CARD IF GENERATED */}
            {aiNuanceData && (
              <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-sm font-bold">Goethe C1 Prüfungstipp zu „{aiNuanceData.word}“</h4>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-200/90 leading-relaxed">
                  💡 {aiNuanceData.examTip || 'Achten Sie besonders auf die begleitende Präposition und den syntaktischen Rahmen (transitiv vs. reflexiv).'}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
