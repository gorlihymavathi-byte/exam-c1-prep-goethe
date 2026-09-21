import React, { useState } from 'react';
import { 
  Volume2, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Search,
  BookOpen,
  Split,
  Eye,
  EyeOff,
  Filter,
  Brain,
  RotateCw,
  HelpCircle,
  FolderClosed
} from 'lucide-react';
import { VocabularyItem, PolysemyMeaning } from '../types';
import { playGermanPronunciation } from '../utils/audio';

interface PolysemyVerbsFolderProps {
  vocabulary: VocabularyItem[];
  onUpdateItem: (item: VocabularyItem) => void;
  onOpenQuizWithPolysemy: () => void;
  soundEnabled: boolean;
}

export const PolysemyVerbsFolder: React.FC<PolysemyVerbsFolderProps> = ({
  vocabulary,
  onUpdateItem,
  onOpenQuizWithPolysemy,
  soundEnabled
}) => {
  // Filter only verbs with polysemous meanings
  const polysemousVerbs = vocabulary.filter(
    v => v.wordClass === 'Verb' && v.isPolysemous && v.polysemyMeanings && v.polysemyMeanings.length > 0
  );

  const [selectedVerbId, setSelectedVerbId] = useState<string>(
    polysemousVerbs[0]?.id || ''
  );
  const [searchFilter, setSearchFilter] = useState('');
  const [activeFolderView, setActiveFolderView] = useState<'cards' | 'trainer' | 'table'>('cards');
  const [showClozeMode, setShowClozeMode] = useState(false);

  // Active verb
  const currentVerb = polysemousVerbs.find(v => v.id === selectedVerbId) || polysemousVerbs[0];

  // Mini-challenge state for current verb
  const [challengeTargetMeaningIdx, setChallengeTargetMeaningIdx] = useState<number | null>(null);
  const [userSelectedMeaningId, setUserSelectedMeaningId] = useState<string | null>(null);
  const [isChallengeSubmitted, setIsChallengeSubmitted] = useState(false);

  // AI Nuance Explanation state
  const [aiNuanceLoading, setAiNuanceLoading] = useState(false);
  const [aiNuanceData, setAiNuanceData] = useState<any | null>(null);

  // Filter verbs based on search term (German word, German definition, or English meaning)
  const filteredVerbs = polysemousVerbs.filter(v => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    const matchesWord = v.word.toLowerCase().includes(q);
    const matchesDe = v.definitionDe.toLowerCase().includes(q);
    const matchesEn = v.definitionEn.toLowerCase().includes(q);
    const matchesMeanings = v.polysemyMeanings?.some(
      m => m.definitionDe.toLowerCase().includes(q) || 
           m.definitionEn.toLowerCase().includes(q) ||
           m.exampleSentence.toLowerCase().includes(q) ||
           m.translationEn.toLowerCase().includes(q)
    );
    return matchesWord || matchesDe || matchesEn || matchesMeanings;
  });

  const handleStartChallenge = (meaningIdx: number) => {
    setChallengeTargetMeaningIdx(meaningIdx);
    setUserSelectedMeaningId(null);
    setIsChallengeSubmitted(false);
  };

  const handleSelectMeaningAnswer = (meaningId: string) => {
    setUserSelectedMeaningId(meaningId);
    setIsChallengeSubmitted(true);
  };

  const handleRequestAiNuances = async () => {
    if (!currentVerb) return;
    setAiNuanceLoading(true);
    setAiNuanceData(null);

    try {
      const res = await fetch('/api/c1/explain-polysemy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: currentVerb.word })
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
    <div className="flex-1 flex flex-col h-full bg-slate-950 p-4 sm:p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        {/* FOLDER TOP BANNER */}
        <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/70 p-5 sm:p-6 rounded-2xl border border-purple-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-purple-900/60 border border-purple-700/50 text-purple-300 text-[11px] font-mono uppercase font-bold tracking-wider flex items-center gap-1.5">
                <FolderClosed className="w-3.5 h-3.5" />
                <span>Ordner 3</span>
              </span>
              <span className="text-xs text-slate-400">
                Goethe C1 Kernkompetenz
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5">
              <span>Verben mit mehreren Bedeutungen</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-700/60 text-purple-300 font-mono font-normal">
                {polysemousVerbs.length} C1-Verben
              </span>
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Jedes Verb enthält alle differenzierten Bedeutungen, Rektionen, <strong>deutsche C1-Beispielsätze</strong> und die dazugehörigen <strong>englischen Übersetzungen</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* Toggle Cloze Mode */}
            <button
              onClick={() => setShowClozeMode(prev => !prev)}
              className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
                showClozeMode 
                  ? 'bg-amber-950/60 border-amber-600 text-amber-300 shadow-sm' 
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title="Lückentext-Modus zum Selbsttesten aktivieren"
            >
              {showClozeMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showClozeMode ? 'Lückentext aktiv' : 'Lückentext-Modus'}</span>
            </button>

            {/* Launch Polysemy Quiz */}
            <button
              onClick={onOpenQuizWithPolysemy}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/20 transition-all"
            >
              <span>Prüfungs-Quiz starten</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* VERB SELECTOR BAR & SEARCH */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Verb, deutsche oder englische Bedeutung suchen..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Sub-View Tabs: Cards vs Table vs Trainer */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs self-start sm:self-auto">
              <button
                onClick={() => setActiveFolderView('cards')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeFolderView === 'cards' 
                    ? 'bg-purple-600 text-white font-medium shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Bedeutungskarten</span>
              </button>
              <button
                onClick={() => setActiveFolderView('table')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeFolderView === 'table' 
                    ? 'bg-purple-600 text-white font-medium shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Gesamt-Tabelle</span>
              </button>
            </div>
          </div>

          {/* Horizontal Verb Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {filteredVerbs.map(v => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVerbId(v.id);
                  setChallengeTargetMeaningIdx(null);
                  setIsChallengeSubmitted(false);
                  setAiNuanceData(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  v.id === currentVerb?.id
                    ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                    : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border-slate-800/80'
                }`}
              >
                <span>{v.word}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  v.id === currentVerb?.id ? 'bg-black/30 text-purple-200' : 'bg-slate-800 text-slate-400'
                }`}>
                  {v.polysemyMeanings?.length || 2} Bed.
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE VERB CONTAINER */}
        {currentVerb && activeFolderView === 'cards' && (
          <div className="space-y-6">
            {/* Verb Hero Card */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2.5">
                      <span>{currentVerb.word}</span>
                      <button
                        onClick={() => playGermanPronunciation(currentVerb.word)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-400 transition-colors"
                        title="Aussprache anhören"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-purple-300 font-mono">
                      {currentVerb.wordClass} • {currentVerb.level}
                    </span>
                    <span className="text-xs text-slate-400">
                      {currentVerb.register}
                    </span>
                  </div>

                  {/* Overarching English definition */}
                  <p className="text-sm text-purple-300/90 font-medium">
                    <span className="text-slate-400 font-normal mr-1.5">🇬🇧 EN Overview:</span>
                    {currentVerb.definitionEn}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRequestAiNuances}
                    disabled={aiNuanceLoading}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{aiNuanceLoading ? 'Lade Nuancen...' : 'KI-Prüfungstipp'}</span>
                  </button>
                </div>
              </div>

              {/* Collocation / Rektion note */}
              {currentVerb.collocation && (
                <div className="text-xs text-slate-300 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 flex items-center gap-2">
                  <span className="text-purple-400 font-semibold shrink-0">Wichtige Kollokationen / Rektionen:</span>
                  <span className="font-mono text-slate-200">{currentVerb.collocation}</span>
                </div>
              )}

              {/* COMPARATIVE MEANING CARDS: GERMAN & ENGLISH DEFINITIONS & SENTENCES */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
                  <span>Differenzierte Bedeutungen & Kontexte ({currentVerb.polysemyMeanings?.length || 0}):</span>
                  <span className="text-purple-400 font-normal">Alle Beispielsätze mit englischer Übersetzung</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentVerb.polysemyMeanings?.map((meaning, idx) => (
                    <div
                      key={meaning.id}
                      className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
                    >
                      <div className="space-y-3">
                        {/* Meaning Header: Number + Nuance */}
                        <div className="flex items-center justify-between border-b border-slate-900 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-700 text-purple-300 text-xs font-bold flex items-center justify-center font-mono">
                              {meaning.number}
                            </span>
                            <span className="text-xs font-bold text-slate-200">
                              Bedeutung {meaning.number}
                            </span>
                          </div>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 text-purple-300 border border-slate-700 font-medium">
                            {meaning.nuance}
                          </span>
                        </div>

                        {/* German Definition */}
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                            🇩🇪 Deutsche Definition:
                          </span>
                          <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                            {meaning.definitionDe}
                          </h4>
                        </div>

                        {/* English Definition */}
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-blue-400/90 tracking-wider block">
                            🇬🇧 English Meaning:
                          </span>
                          <p className="text-xs text-blue-200 font-medium leading-snug">
                            {meaning.definitionEn}
                          </p>
                        </div>

                        {/* Grammar / Rektion */}
                        {meaning.grammarInfo && (
                          <div className="text-[11px] text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-500 text-[10px]">Rektion:</span>
                            <span className="text-purple-300 font-semibold">{meaning.grammarInfo}</span>
                          </div>
                        )}

                        {/* EXAMPLE SENTENCE BOX: GERMAN & ENGLISH */}
                        <div className="pt-2 border-t border-slate-900 space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                              <span>Beispielsatz (Goethe C1):</span>
                            </span>
                            <button
                              onClick={() => playGermanPronunciation(meaning.exampleSentence)}
                              className="text-purple-400 hover:text-purple-300 p-1 rounded hover:bg-slate-900 transition-colors"
                              title="Satz auf Deutsch anhören"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* German Sentence */}
                          <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-850">
                            <p className="text-xs text-slate-100 font-serif leading-relaxed italic">
                              {showClozeMode ? `„${meaning.clozeSentence}“` : `„${meaning.exampleSentence}“`}
                            </p>
                          </div>

                          {/* English Sentence Translation */}
                          <div className="bg-blue-950/20 p-2.5 rounded-xl border border-blue-900/30 space-y-0.5">
                            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider block">
                              🇬🇧 Englische Übersetzung:
                            </span>
                            <p className="text-xs text-blue-200/90 font-sans leading-relaxed">
                              {meaning.translationEn}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mini-Quiz Trigger for this meaning */}
                      <button
                        onClick={() => handleStartChallenge(idx)}
                        className="w-full py-2 rounded-xl bg-slate-900 hover:bg-purple-900/40 text-purple-300 text-xs font-medium border border-slate-800 hover:border-purple-700/50 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                        <span>Satz-Zuordnungs-Challenge</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MINI-CHALLENGE / SENTENCE-TO-MEANING MATCHER */}
            {challengeTargetMeaningIdx !== null && currentVerb.polysemyMeanings && (
              <div className="bg-slate-900 border border-purple-500/50 rounded-2xl p-6 space-y-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-xs uppercase font-bold text-purple-300 tracking-wider">
                      Bedeutungs-Zuordnungs-Challenge: „{currentVerb.word}“
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Welche Bedeutung passt zu folgendem C1-Satz?
                  </span>
                </div>

                {/* Question Sentence Box with both German and English */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase">
                      Kontextsatz:
                    </span>
                    <button
                      onClick={() => playGermanPronunciation(currentVerb.polysemyMeanings![challengeTargetMeaningIdx].exampleSentence)}
                      className="p-1 rounded text-purple-400 hover:bg-slate-850"
                      title="Satz anhören"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-base sm:text-lg text-slate-100 font-serif leading-relaxed">
                    „{currentVerb.polysemyMeanings[challengeTargetMeaningIdx].exampleSentence}“
                  </p>
                  <p className="text-xs text-blue-300 italic border-t border-slate-900 pt-2 flex items-center gap-1.5">
                    <span className="font-semibold text-blue-400 not-italic">🇬🇧 English:</span>
                    <span>{currentVerb.polysemyMeanings[challengeTargetMeaningIdx].translationEn}</span>
                  </p>
                </div>

                {/* Multiple Choice Meaning Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {currentVerb.polysemyMeanings.map((m) => {
                    const isTarget = m.id === currentVerb.polysemyMeanings![challengeTargetMeaningIdx].id;
                    const isSelected = userSelectedMeaningId === m.id;

                    let btnStyle = 'bg-slate-950 hover:bg-slate-850 border-slate-800 text-slate-200';
                    if (isChallengeSubmitted) {
                      if (isTarget) {
                        btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold shadow-md shadow-emerald-500/10';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                      } else {
                        btnStyle = 'bg-slate-950/40 border-slate-800/40 text-slate-500 opacity-50';
                      }
                    }

                    return (
                      <button
                        key={m.id}
                        onClick={() => handleSelectMeaningAnswer(m.id)}
                        disabled={isChallengeSubmitted}
                        className={`p-4 rounded-xl border text-left text-xs transition-all flex flex-col justify-between space-y-2 ${btnStyle}`}
                      >
                        <div>
                          <span className="font-bold text-purple-300 block mb-1">
                            Bedeutung {m.number}: {m.nuance}
                          </span>
                          <span className="font-medium text-slate-200 block">{m.definitionDe}</span>
                          <span className="text-[11px] text-blue-300/80 mt-1 block">EN: {m.definitionEn}</span>
                        </div>
                        {isChallengeSubmitted && isTarget && (
                          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs pt-1">
                            <Check className="w-4 h-4" />
                            <span>Korrekt zugeordnet!</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Reset or try another meaning */}
                {isChallengeSubmitted && (
                  <div className="flex items-center justify-end pt-2">
                    <button
                      onClick={() => {
                        const nextIdx = (challengeTargetMeaningIdx + 1) % currentVerb.polysemyMeanings!.length;
                        handleStartChallenge(nextIdx);
                      }}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
                    >
                      <span>Nächste Bedeutung von „{currentVerb.word}“ testen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* AI GEMINI NUANCES & EXAM TRAPS */}
            {aiNuanceData && (
              <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-sm font-bold">Goethe C1 Prüfungscoach: Nuancen zu „{aiNuanceData.word}“</h4>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-200/90 leading-relaxed space-y-2">
                  <div className="font-semibold text-amber-300">💡 Wichtig für die C1-Prüfung:</div>
                  <p>{aiNuanceData.examTip || 'Achten Sie besonders auf die begleitende Präposition und den syntaktischen Rahmen (transitiv vs. reflexiv).'}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBVIEW 2: FULL COMPARATIVE TABLE FOR ALL POLYSEMOUS VERBS */}
        {activeFolderView === 'table' && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-slate-100">
                Gesamttabelle aller C1-Verben mit verschiedenen Bedeutungen
              </h3>
              <p className="text-xs text-slate-400">
                Alle {polysemousVerbs.length} mehrdeutigen C1-Verben mit ihren jeweiligen Bedeutungen, Rektionen, deutschen Beispielsätzen und englischen Übersetzungen.
              </p>
            </div>

            <div className="space-y-6">
              {filteredVerbs.map(verb => (
                <div key={verb.id} className="bg-slate-950 rounded-xl border border-slate-800/80 p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-bold text-purple-300">{verb.word}</h4>
                      <button
                        onClick={() => playGermanPronunciation(verb.word)}
                        className="text-purple-400 hover:text-purple-300 p-1"
                        title="Aussprache"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs text-slate-400">({verb.definitionEn})</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                      {verb.polysemyMeanings?.length || 0} Bedeutungen
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {verb.polysemyMeanings?.map(m => (
                      <div key={m.id} className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-purple-300">
                            Bedeutung {m.number}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                            {m.nuance}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-200">{m.definitionDe}</p>
                        <p className="text-xs text-blue-300">🇬🇧 {m.definitionEn}</p>
                        {m.grammarInfo && (
                          <div className="text-[10px] font-mono text-slate-400">{m.grammarInfo}</div>
                        )}
                        <div className="pt-2 border-t border-slate-800/80 space-y-1">
                          <p className="text-xs text-slate-300 font-serif italic">„{m.exampleSentence}“</p>
                          <p className="text-[11px] text-blue-200/80 font-sans">En: {m.translationEn}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
