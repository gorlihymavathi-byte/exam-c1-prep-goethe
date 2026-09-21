import React from 'react';
import { Volume2, VolumeX, Sparkles, BrainCircuit, RotateCcw, Download, Share2 } from 'lucide-react';

interface MacTitleBarProps {
  activeTabTitle: string;
  totalWords: number;
  masteredCount: number;
  mistakesCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetProgress?: () => void;
  onOpenInstallShare?: () => void;
}

export const MacTitleBar: React.FC<MacTitleBarProps> = ({
  activeTabTitle,
  totalWords,
  masteredCount,
  mistakesCount,
  soundEnabled,
  onToggleSound,
  onResetProgress,
  onOpenInstallShare
}) => {
  const myelinationPercent = totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0;

  return (
    <header className="h-12 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 flex items-center justify-between select-none z-30 shrink-0">
      {/* macOS Traffic Lights */}
      <div className="flex items-center gap-2 w-52">
        <div className="flex items-center gap-2 group">
          <span 
            className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-600 transition-colors shadow-sm flex items-center justify-center cursor-pointer text-[8px] text-red-950 font-bold opacity-80 group-hover:opacity-100"
            title="Schließen"
          >
            ×
          </span>
          <span 
            className="w-3 h-3 rounded-full bg-amber-500/90 hover:bg-amber-600 transition-colors shadow-sm flex items-center justify-center cursor-pointer text-[8px] text-amber-950 font-bold opacity-80 group-hover:opacity-100"
            title="Minimieren"
          >
            –
          </span>
          <span 
            className="w-3 h-3 rounded-full bg-emerald-500/90 hover:bg-emerald-600 transition-colors shadow-sm flex items-center justify-center cursor-pointer text-[8px] text-emerald-950 font-bold opacity-80 group-hover:opacity-100"
            title="Vollbild"
          >
            +
          </span>
        </div>
        <span className="text-xs font-semibold text-slate-400 tracking-wide ml-2 hidden sm:inline">
          Goethe C1 Studio
        </span>
      </div>

      {/* Center Title */}
      <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-slate-300 font-semibold">{activeTabTitle}</span>
      </div>

      {/* Right Controls: Install/Share Button, Neural Status, Sound, Reset */}
      <div className="flex items-center justify-end gap-2.5 w-80 text-xs">
        {/* Install / Share Across Devices Button */}
        {onOpenInstallShare && (
          <button
            onClick={onOpenInstallShare}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 font-medium transition-all shadow-sm"
            title="Als Desktop-App installieren & mit anderen Geräten teilen"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">App installieren / Teilen</span>
            <span className="md:hidden">App</span>
          </button>
        )}

        {/* Retention / Myelination Progress Gauge */}
        <div 
          className="flex items-center gap-2 bg-slate-800/70 border border-slate-700/60 rounded-full px-2.5 py-1 text-slate-300"
          title="Neuronale Myelinisierung (Gemeisterte Vokabeln)"
        >
          <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-mono text-slate-200">{myelinationPercent}%</span>
          <div className="w-10 h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${myelinationPercent}%` }}
            />
          </div>
        </div>

        {/* Mistake Queue Counter Badge */}
        {mistakesCount > 0 && (
          <div 
            className="flex items-center gap-1.5 bg-rose-950/70 border border-rose-800/60 text-rose-300 rounded-full px-2 py-0.5"
            title={`${mistakesCount} Vokabeln im Wiederholungsstapel`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="font-mono font-medium">{mistakesCount}</span>
          </div>
        )}

        {/* Audio Toggle */}
        <button
          onClick={onToggleSound}
          className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          title={soundEnabled ? 'Aussprache aktiviert' : 'Aussprache stummgeschaltet'}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
        </button>

        {onResetProgress && (
          <button
            onClick={onResetProgress}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Lernfortschritt zurücksetzen"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </header>
  );
};
