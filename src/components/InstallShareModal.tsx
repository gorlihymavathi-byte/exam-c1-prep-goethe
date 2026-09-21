import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Smartphone, 
  Laptop, 
  Copy, 
  Check, 
  QrCode, 
  ExternalLink, 
  Apple, 
  CheckCircle2, 
  Sparkles,
  Monitor
} from 'lucide-react';

interface InstallShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onInstallClick: () => void;
  isStandalone: boolean;
}

export const InstallShareModal: React.FC<InstallShareModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstallClick,
  isStandalone
}) => {
  const [copied, setCopied] = useState(false);
  const [activeDeviceTab, setActiveDeviceTab] = useState<'desktop' | 'ios' | 'android' | 'export'>('desktop');

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-zdgfgnya2orwh6py3bcvbc-435858251623.europe-west2.run.app';

  // SVG QR Code generator or high quality QR API
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}&bgcolor=0f172a&color=60a5fa&margin=1`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-100">Als App installieren & auf Geräte teilen</h2>
              <p className="text-xs text-slate-400">Als native Desktop- & Mobile-App ohne Webbrowser-Leiste nutzen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Install Banner if available */}
          {deferredPrompt && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/30 to-indigo-600/20 border border-blue-500/40 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-Klick Desktop Installation bereit</span>
                </div>
                <p className="text-xs text-slate-200">
                  Installieren Sie Goethe C1 Studio jetzt direkt als eigenständige Desktop-App auf Ihrem Laptop.
                </p>
              </div>
              <button
                onClick={onInstallClick}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shrink-0 shadow-lg shadow-blue-600/30 transition-all"
              >
                Jetzt installieren
              </button>
            </div>
          )}

          {/* QR Code & Share Link Section for other devices */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            {/* QR Code */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 bg-slate-900 rounded-xl border border-slate-800">
              <img 
                src={qrApiUrl} 
                alt="QR Code to open on other devices"
                className="w-36 h-36 rounded-lg shadow-md"
              />
              <span className="text-[11px] text-slate-400 mt-2 text-center flex items-center gap-1">
                <QrCode className="w-3 h-3 text-blue-400" />
                <span>Mit Handy / iPad scannen</span>
              </span>
            </div>

            {/* Direct Link & Fast Actions */}
            <div className="sm:col-span-7 flex flex-col justify-between space-y-3 py-1">
              <div>
                <span className="text-xs font-bold text-slate-200 block mb-1">
                  Direkter App-Link für alle Geräte:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Öffnen Sie diesen Link auf Ihrem iPhone, iPad, Mac oder Zweit-Laptop, um die App dort zu installieren.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-slate-300 font-mono select-all outline-none"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Kopiert' : 'Kopieren'}</span>
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Fortschritt & Vokabeldaten werden automatisch synchron im lokalen Speicher behalten.</span>
              </div>
            </div>
          </div>

          {/* Device Specific Step-by-Step Instructions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Installations-Anleitung nach Gerät:
              </span>
            </div>

            {/* Device Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveDeviceTab('desktop')}
                className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeDeviceTab === 'desktop'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Laptop / Mac</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('ios')}
                className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeDeviceTab === 'ios'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Apple className="w-3.5 h-3.5" />
                <span>iPhone & iPad</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('android')}
                className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeDeviceTab === 'android'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Android</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('export')}
                className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeDeviceTab === 'export'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Source Export</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-3">
              {activeDeviceTab === 'desktop' && (
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-blue-400" />
                    <span>Auf dem Laptop als Desktop-App installieren:</span>
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed pl-1">
                    <li>
                      <strong>Google Chrome / Edge / Brave:</strong> Klicken Sie rechts in der Adresszeile auf das <strong>Installieren-Symbol</strong> (oder oben im Fenster auf „App installieren“).
                    </li>
                    <li>
                      <strong>Safari auf macOS (Sonoma/Sequoia):</strong> Klicken Sie in der Menüleiste auf <em>Ablage</em> → <strong>„Zum Dock hinzufügen“</strong>.
                    </li>
                    <li>
                      Die App startet ab sofort in einem eigenständigen, ablenkungsfreien Desktop-Fenster mit eigenem Icon im Dock / in der Taskleiste.
                    </li>
                  </ol>
                </div>
              )}

              {activeDeviceTab === 'ios' && (
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2">
                    <Apple className="w-4 h-4 text-blue-400" />
                    <span>Auf iPhone & iPad (iOS/iPadOS):</span>
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed pl-1">
                    <li>
                      Öffnen Sie den App-Link in <strong>Safari</strong> (oder scannen Sie den QR-Code oben mit der Kamera).
                    </li>
                    <li>
                      Tippen Sie unten auf das <strong>Teilen-Symbol</strong> (Quadrat mit Pfeil nach oben).
                    </li>
                    <li>
                      Scrollen Sie nach unten und wählen Sie <strong>„Zum Home-Bildschirm“</strong> (Add to Home Screen).
                    </li>
                    <li>
                      Tippen Sie auf „Hinzufügen“. Die App hat nun ein vollwertiges App-Icon auf Ihrem iPhone/iPad und öffnet im Vollbildmodus wie eine native iOS-App!
                    </li>
                  </ol>
                </div>
              )}

              {activeDeviceTab === 'android' && (
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Auf Android Handys & Tablets:</span>
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed pl-1">
                    <li>
                      Öffnen Sie den Link in Google Chrome auf Ihrem Android-Gerät.
                    </li>
                    <li>
                      Tippen Sie auf die drei Punkte oben rechts und wählen Sie <strong>„App installieren“</strong> oder <strong>„Zum Startbildschirm hinzufügen“</strong>.
                    </li>
                    <li>
                      Fertig! Die App ist auf Ihrem Gerät installiert.
                    </li>
                  </ol>
                </div>
              )}

              {activeDeviceTab === 'export' && (
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2">
                    <Download className="w-4 h-4 text-purple-400" />
                    <span>Vollständiger Quellcode & Offline-Nutzung:</span>
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Sie können den gesamten Quellcode dieser Anwendung jederzeit als ZIP-Datei herunterladen oder nach GitHub exportieren:
                  </p>
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed pl-1">
                    <li>
                      Klicken Sie oben rechts im AI Studio Menü auf <strong>„Export to ZIP“</strong> oder <strong>„Export to GitHub“</strong>.
                    </li>
                    <li>
                      Entpacken Sie den Ordner und führen Sie auf Ihrem Laptop <code className="bg-slate-900 px-1 py-0.5 rounded text-blue-300">npm install</code> und <code className="bg-slate-900 px-1 py-0.5 rounded text-blue-300">npm run dev</code> aus.
                    </li>
                    <li>
                      Optional: Sie können die App auch mit <strong>Electron</strong> oder <strong>Tauri</strong> in eine eigenständige <code className="bg-slate-900 px-1 py-0.5 rounded text-purple-300">.dmg</code> (Mac) oder <code className="bg-slate-900 px-1 py-0.5 rounded text-purple-300">.exe</code> (Windows) Datei verpacken.
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Goethe C1 Wortschatz Studio • PWA Standalone Ready
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
