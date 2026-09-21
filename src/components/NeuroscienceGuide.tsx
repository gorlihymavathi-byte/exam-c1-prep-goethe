import React from 'react';
import { Brain, Zap, Layers, AlertTriangle, CheckCircle2, Flame, ArrowRight, ExternalLink } from 'lucide-react';

interface NeuroscienceGuideProps {
  onStartActiveRecall: () => void;
  onOpenMistakeQueue: () => void;
  mistakesCount: number;
}

export const NeuroscienceGuide: React.FC<NeuroscienceGuideProps> = ({
  onStartActiveRecall,
  onOpenMistakeQueue,
  mistakesCount
}) => {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header Hero */}
        <div className="bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-900 border border-amber-500/30 p-8 rounded-3xl space-y-4 shadow-2xl">
          <div className="flex items-center gap-3 text-amber-400">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 border border-amber-500/30">
              <Brain className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Wissenschaftlich fundiert
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Die Neurowissenschaft von Active Recall
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            Inspiriert vom Referenz-Video <em>„Give me 7 Minutes You will ❤️ Active Recall after this | using Neuroscience“</em>. 
            Erfahren Sie, warum passives Vokabellernen eine Illusion ist und wie gezielte kognitive Anstrengung das Goethe C1 Vokabular dauerhaft im Langzeitgedächtnis verankert.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onStartActiveRecall}
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-amber-600/20 transition-all"
            >
              <span>Active Recall Training starten</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {mistakesCount > 0 && (
              <button
                onClick={onOpenMistakeQueue}
                className="px-5 py-2.5 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 hover:bg-rose-900/60 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Flame className="w-4 h-4 text-rose-400" />
                <span>Fehler wiederholen ({mistakesCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pillar 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100">Hebb's Law & Synapsen</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              <em>„Neurons that fire together, wire together.“</em> Wenn Sie sich aktiv anstrengen, das C1-Wort aus dem Gedächtnis abzurufen, feuern die zugehörigen Neuronen synchron und vertiefen die synaptische Bahn.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100">Myelinisierung</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Die Myelinscheide isoliert den Nervenstrang und beschleunigt die Signalübertragung um das bis zu 100-fache. Myelin wächst nur durch Wiederholung nach vorangegangener Anstrengung!
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100">Fehler-basierte Plastizität</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fehler im Quiz sind das stärkste Lernsignal für das Gehirn. Unser <strong>Wiederholungsstapel</strong> fängt falsche Antworten ab und zwingt zur erneuten Konsolidierung.
            </p>
          </div>
        </div>

        {/* 4-Step Method */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold text-slate-100">
            Die 4-Stufen-Methode für maximalen Wortschatzerfolg (Goethe C1):
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300 font-mono font-bold">
                Schritt 1: Kontext & Priming
              </span>
              <h4 className="font-semibold text-slate-200">Authentischer Mustersatz</h4>
              <p className="text-slate-400">
                Keine isolierten Wörter lernen! Jeder C1-Ausdruck wird in einem gehobenen Satzkontext mit Lücke (Cloze) präsentiert.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 font-mono font-bold">
                Schritt 2: Effortful Retrieval
              </span>
              <h4 className="font-semibold text-slate-200">Denkpause vor dem Umdrehen</h4>
              <p className="text-slate-400">
                Widerstehen Sie dem Drang, sofort aufzulösen. Die kurze kognitive Reibung ist der biologische Auslöser für die Myelinbildung.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 font-mono font-bold">
                Schritt 3: Rektion & Kollokation
              </span>
              <h4 className="font-semibold text-slate-200">Feste Verbindungen (NVV)</h4>
              <p className="text-slate-400">
                Auf C1-Niveau punkten Sie durch feste Nomen-Verb-Verbindungen (z.B. <em>zur Sprache bringen</em>, <em>in Betracht ziehen</em>).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300 font-mono font-bold">
                Schritt 4: Spaced Mistake Loop
              </span>
              <h4 className="font-semibold text-slate-200">Automatischer Wiederholungsstapel</h4>
              <p className="text-slate-400">
                Falsch beantwortete Quizfragen bleiben so lange im Wiederholungsordner, bis sie zweifach hintereinander fehlerfrei abgerufen werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
