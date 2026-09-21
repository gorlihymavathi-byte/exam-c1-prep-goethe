import React from 'react';
import { 
  Folder, 
  FolderOpen, 
  Sparkles, 
  Layers, 
  FileQuestion, 
  Repeat, 
  Compass, 
  Brain, 
  BookOpen, 
  CheckCircle2, 
  Flame,
  Search,
  Download,
  Smartphone
} from 'lucide-react';
import { DesktopNavTab, ActiveLearningView } from '../types';

interface SidebarProps {
  currentTab: DesktopNavTab;
  currentLearningView: ActiveLearningView;
  onSelectTab: (tab: DesktopNavTab) => void;
  onSelectLearningView: (view: ActiveLearningView) => void;
  activeCount: number;
  mistakesCount: number;
  polysemyCount: number;
  masteredCount: number;
  onOpenInstallShare?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  currentLearningView,
  onSelectTab,
  onSelectLearningView,
  activeCount,
  mistakesCount,
  polysemyCount,
  masteredCount,
  onOpenInstallShare
}) => {
  return (
    <aside className="w-64 bg-slate-900/95 border-r border-slate-800/90 flex flex-col justify-between select-none shrink-0 h-full">
      {/* Top Section: App Header & Navigation */}
      <div className="p-3 space-y-4 overflow-y-auto">
        {/* App Title in Sidebar */}
        <div className="px-2 pt-1 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-100 tracking-tight">Goethe C1 Studio</h1>
              <p className="text-[11px] text-slate-400">Active Recall & Polysemie</p>
            </div>
          </div>
        </div>

        {/* FOLDER 1: AKTIVES LERNEN */}
        <div className="space-y-1">
          <div 
            onClick={() => onSelectTab('folder_active_learning')}
            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-all ${
              currentTab === 'folder_active_learning'
                ? 'bg-blue-600/20 border border-blue-500/40 text-blue-300 font-semibold'
                : 'hover:bg-slate-800/60 text-slate-300 font-medium'
            }`}
          >
            <div className="flex items-center gap-2">
              {currentTab === 'folder_active_learning' ? (
                <FolderOpen className="w-4 h-4 text-blue-400" />
              ) : (
                <Folder className="w-4 h-4 text-slate-400" />
              )}
              <span className="text-xs">Aktives Lernen</span>
            </div>
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
              {activeCount}
            </span>
          </div>

          {/* Sub-items for Active Learning */}
          {currentTab === 'folder_active_learning' && (
            <div className="ml-5 pl-2 border-l border-slate-800 space-y-0.5 py-1">
              <button
                onClick={() => onSelectLearningView('flashcards')}
                className={`w-full text-left px-2 py-1.5 rounded-md text-xs flex items-center gap-2 transition-colors ${
                  currentLearningView === 'flashcards'
                    ? 'bg-blue-500/20 text-blue-200 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Recall-Flashcards</span>
              </button>

              <button
                onClick={() => onSelectLearningView('sentence_trainer')}
                className={`w-full text-left px-2 py-1.5 rounded-md text-xs flex items-center gap-2 transition-colors ${
                  currentLearningView === 'sentence_trainer'
                    ? 'bg-blue-500/20 text-blue-200 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>C1 Satz-Trainer</span>
              </button>

              <button
                onClick={() => onSelectLearningView('word_lexicon')}
                className={`w-full text-left px-2 py-1.5 rounded-md text-xs flex items-center gap-2 transition-colors ${
                  currentLearningView === 'word_lexicon'
                    ? 'bg-blue-500/20 text-blue-200 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Wortschatz-Lexikon</span>
              </button>

              <button
                onClick={() => onSelectLearningView('ai_generator')}
                className={`w-full text-left px-2 py-1.5 rounded-md text-xs flex items-center gap-2 transition-colors ${
                  currentLearningView === 'ai_generator'
                    ? 'bg-blue-500/20 text-blue-200 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>KI-Wortschmiede</span>
              </button>
            </div>
          )}
        </div>

        {/* FOLDER 2: PRÜFUNG & WIEDERHOLUNG */}
        <div className="space-y-1">
          <div 
            onClick={() => onSelectTab('folder_testing')}
            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-all ${
              currentTab === 'folder_testing'
                ? 'bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold'
                : 'hover:bg-slate-800/60 text-slate-300 font-medium'
            }`}
          >
            <div className="flex items-center gap-2">
              {currentTab === 'folder_testing' ? (
                <FolderOpen className="w-4 h-4 text-emerald-400" />
              ) : (
                <Folder className="w-4 h-4 text-slate-400" />
              )}
              <span className="text-xs">Prüfung & Quiz</span>
            </div>
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
              Test
            </span>
          </div>

          {/* Sub-item: MISTAKE QUEUE (Wiederholungsstapel) */}
          <div className="ml-5 pl-2 border-l border-slate-800 space-y-0.5 py-1">
            <button
              onClick={() => onSelectTab('mistake_queue')}
              className={`w-full text-left px-2 py-1.5 rounded-md text-xs flex items-center justify-between transition-colors ${
                currentTab === 'mistake_queue'
                  ? 'bg-rose-500/20 text-rose-200 font-semibold border border-rose-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-2">
                <Repeat className={`w-3.5 h-3.5 ${mistakesCount > 0 ? 'text-rose-400' : 'text-slate-500'}`} />
                <span>Wiederholungsstapel</span>
              </div>
              {mistakesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-rose-900/80 text-rose-300 border border-rose-700/60 font-mono font-bold">
                  {mistakesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* FOLDER 3: MEHRDEUTIGE VERBEN (POLYSEMIE) */}
        <div className="space-y-1">
          <div 
            onClick={() => onSelectTab('folder_polysemy_verbs')}
            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-all ${
              currentTab === 'folder_polysemy_verbs' || currentTab === 'polysemy_hub'
                ? 'bg-purple-600/20 border border-purple-500/40 text-purple-300 font-semibold'
                : 'hover:bg-slate-800/60 text-slate-300 font-medium'
            }`}
          >
            <div className="flex items-center gap-2">
              {currentTab === 'folder_polysemy_verbs' || currentTab === 'polysemy_hub' ? (
                <FolderOpen className="w-4 h-4 text-purple-400" />
              ) : (
                <Folder className="w-4 h-4 text-purple-400/80" />
              )}
              <span className="text-xs">Mehrdeutige Verben</span>
            </div>
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 font-mono">
              {polysemyCount}
            </span>
          </div>
        </div>

        {/* SECTION: NEUROSCIENCE GUIDE */}
        <div>
          <button
            onClick={() => onSelectTab('neuroscience_hub')}
            className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2 transition-all ${
              currentTab === 'neuroscience_hub'
                ? 'bg-amber-600/20 border border-amber-500/40 text-amber-200 font-semibold'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brain className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Active Recall Guide (Video)</span>
          </button>
        </div>

        {/* SECTION: INSTALL AS DESKTOP & MOBILE APP */}
        {onOpenInstallShare && (
          <div className="pt-1">
            <button
              onClick={onOpenInstallShare}
              className="w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 text-blue-300 hover:bg-blue-900/40 transition-all font-medium group"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Auf Geräten installieren</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 border border-blue-700/50 text-blue-300 font-mono">
                App
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Section: Progress Snapshot & Neuroscience Pill */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40">
        <div className="bg-slate-850 rounded-lg p-2.5 border border-slate-800 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Gemeistert</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">{masteredCount}</span>
          </div>

          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Fehler-Puffer</span>
            </span>
            <span className="font-mono text-rose-400 font-bold">{mistakesCount}</span>
          </div>

          <div className="pt-1.5 border-t border-slate-800/80 text-[10px] text-slate-400 leading-tight">
            💡 <strong className="text-slate-300">Hebb's Law:</strong> Das Gehirn stärkt neuronale Pfade durch Anstrengung beim Erinnern, nicht durch passives Wiederlesen!
          </div>
        </div>
      </div>
    </aside>
  );
};
