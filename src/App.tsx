import React, { useState, useEffect } from 'react';
import { 
  DesktopNavTab, 
  ActiveLearningView, 
  VocabularyItem, 
  QuizResultRecord 
} from './types';
import { loadVocabularyData, saveVocabularyData, saveQuizResult } from './utils/storage';
import { MacTitleBar } from './components/MacTitleBar';
import { Sidebar } from './components/Sidebar';
import { ActiveLearningFolder } from './components/ActiveLearningFolder';
import { TestingFolder } from './components/TestingFolder';
import { PolysemyHub } from './components/PolysemyHub';
import { PolysemyVerbsFolder } from './components/PolysemyVerbsFolder';
import { NeuroscienceGuide } from './components/NeuroscienceGuide';
import { InstallShareModal } from './components/InstallShareModal';
import { INITIAL_GOETHE_C1_VOCABULARY } from './data/goetheC1Data';

export default function App() {
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>(() => loadVocabularyData());
  const [currentTab, setCurrentTab] = useState<DesktopNavTab>('folder_active_learning');
  const [currentLearningView, setCurrentLearningView] = useState<ActiveLearningView>('flashcards');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // PWA Install & Share state
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as installed standalone app
    const checkStandalone = 
      window.matchMedia('(display-mode: standalone)').matches || 
      (navigator as any).standalone === true;
    setIsStandalone(checkStandalone);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsInstallModalOpen(false);
      }
    } else {
      setIsInstallModalOpen(true);
    }
  };

  // Sync with local storage
  useEffect(() => {
    saveVocabularyData(vocabulary);
  }, [vocabulary]);

  const handleUpdateItem = (updated: VocabularyItem) => {
    setVocabulary(prev => prev.map(item => item.id === updated.id ? updated : item));
  };

  const handleAddNewItem = (newItem: VocabularyItem) => {
    setVocabulary(prev => [newItem, ...prev]);
  };

  const handleRecordResult = (record: QuizResultRecord) => {
    saveQuizResult(record);
  };

  const handleResetProgress = () => {
    if (window.confirm('Möchten Sie den Lernfortschritt wirklich auf den Ausgangszustand zurücksetzen?')) {
      const reset = INITIAL_GOETHE_C1_VOCABULARY.map(item => ({
        ...item,
        myelinationLevel: 0 as const,
        consecutiveCorrect: 0,
        timesReviewed: 0,
        timesIncorrect: 0,
        lastReviewedAt: null,
        inMistakeQueue: false
      }));
      setVocabulary(reset);
      saveVocabularyData(reset);
    }
  };

  // Metrics
  const activeCount = vocabulary.length;
  const mistakesCount = vocabulary.filter(v => v.inMistakeQueue).length;
  const polysemyCount = vocabulary.filter(v => v.isPolysemous).length;
  const masteredCount = vocabulary.filter(v => v.myelinationLevel === 3).length;

  const tabTitles: Record<DesktopNavTab, string> = {
    folder_active_learning: '📁 Ordner 1: Aktives Lernen (Active Recall & Satzbau)',
    folder_testing: '📁 Ordner 2: Prüfung & Fehler-Wiederholungsstapel',
    folder_polysemy_verbs: '📁 Ordner 3: Verben mit mehreren Bedeutungen (Polysemie)',
    mistake_queue: '⚡ Fehler-Wiederholungsstapel (Wiederholen bis gemeistert)',
    polysemy_hub: '📁 Ordner 3: Verben mit mehreren Bedeutungen (Polysemie)',
    neuroscience_hub: '🧠 Active Recall & Myelinisierung (Neuroscience)'
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* macOS Top Title Bar */}
      <MacTitleBar
        activeTabTitle={tabTitles[currentTab]}
        totalWords={activeCount}
        masteredCount={masteredCount}
        mistakesCount={mistakesCount}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        onResetProgress={handleResetProgress}
        onOpenInstallShare={() => setIsInstallModalOpen(true)}
      />

      {/* Main Window Frame: Sidebar + Active Desktop Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sleek macOS/iPadOS Style Sidebar */}
        <Sidebar
          currentTab={currentTab}
          currentLearningView={currentLearningView}
          onSelectTab={(tab) => setCurrentTab(tab)}
          onSelectLearningView={(view) => {
            setCurrentTab('folder_active_learning');
            setCurrentLearningView(view);
          }}
          activeCount={activeCount}
          mistakesCount={mistakesCount}
          polysemyCount={polysemyCount}
          masteredCount={masteredCount}
          onOpenInstallShare={() => setIsInstallModalOpen(true)}
        />

        {/* Center Canvas / Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          {currentTab === 'folder_active_learning' && (
            <ActiveLearningFolder
              vocabulary={vocabulary}
              currentView={currentLearningView}
              onUpdateItem={handleUpdateItem}
              onAddNewItem={handleAddNewItem}
              soundEnabled={soundEnabled}
            />
          )}

          {(currentTab === 'folder_testing' || currentTab === 'mistake_queue') && (
            <TestingFolder
              vocabulary={vocabulary}
              currentTab={currentTab}
              onUpdateItem={handleUpdateItem}
              onRecordResult={handleRecordResult}
              onSwitchToMistakeQueue={() => setCurrentTab('mistake_queue')}
            />
          )}

          {(currentTab === 'folder_polysemy_verbs' || currentTab === 'polysemy_hub') && (
            <PolysemyVerbsFolder
              vocabulary={vocabulary}
              onUpdateItem={handleUpdateItem}
              onOpenQuizWithPolysemy={() => setCurrentTab('folder_testing')}
              soundEnabled={soundEnabled}
            />
          )}

          {currentTab === 'neuroscience_hub' && (
            <NeuroscienceGuide
              onStartActiveRecall={() => {
                setCurrentTab('folder_active_learning');
                setCurrentLearningView('flashcards');
              }}
              onOpenMistakeQueue={() => setCurrentTab('mistake_queue')}
              mistakesCount={mistakesCount}
            />
          )}
        </main>
      </div>

      {/* App Installation & Multi-Device Sharing Modal */}
      <InstallShareModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onInstallClick={handleInstallApp}
        isStandalone={isStandalone}
      />
    </div>
  );
}
