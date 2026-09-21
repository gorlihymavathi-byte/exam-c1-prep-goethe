/**
 * High-fidelity Web Speech API synthesizer for authentic German pronunciation
 */

let selectedVoice: SpeechSynthesisVoice | null = null;

function loadGermanVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  // Prefer high quality German voices (e.g., Anna, Google Deutsch, Petra, Stefan, de-DE)
  const deVoices = voices.filter(v => v.lang.startsWith('de') || v.lang.includes('DE'));
  if (deVoices.length > 0) {
    // Prefer natural / premium voices if available
    const premium = deVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Siri') || v.name.includes('Anna'));
    selectedVoice = premium || deVoices[0];
    return selectedVoice;
  }
  return null;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    loadGermanVoice();
  };
}

export function playGermanPronunciation(text: string, rate: number = 0.9): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis is not supported in this environment');
    return;
  }

  window.speechSynthesis.cancel(); // Stop any pending speech

  // Clean text from articles or extra symbols for clean pronunciation
  const cleanText = text
    .replace(/^das\s+|^der\s+|^die\s+/, '')
    .replace(/\[\.\.\.\]/g, '')
    .replace(/,\s*-\w+/g, '')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'de-DE';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  if (!selectedVoice) {
    loadGermanVoice();
  }
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  window.speechSynthesis.speak(utterance);
}
