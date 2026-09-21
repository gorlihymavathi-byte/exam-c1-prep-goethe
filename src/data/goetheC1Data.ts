import { VocabularyItem } from '../types';
import { C1VERBSBATCH1 } from './c1VerbsBatch1';
import { C1VERBSBATCH2 } from './c1VerbsBatch2';
import { C1VERBSBATCH3 } from './c1VerbsBatch3';

const POLYSEMOUS_AND_CORE_ITEMS: VocabularyItem[] = [
  // --- POLYSEMOUS WORDS (Mehrdeutige Wörter mit unterschiedlichen Bedeutungen) ---
  {
    id: 'poly-1',
    word: 'einstellen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Personal anstellen; 2) eine Tätigkeit/Zahlung beenden; 3) sich auf etwas vorbereiten/anpassen; 4) ein Gerät justieren.',
    definitionEn: '1) To hire/employ; 2) To cease/terminate; 3) sich einstellen auf = to adapt to; 4) To adjust/tune.',
    register: 'Bildungssprachlich',
    collocation: 'den Betrieb einstellen / sich auf den Klimawandel einstellen / qualifizierte Fachkräfte einstellen',
    synonyms: ['anwerben', 'abbrechen', 'anpassen', 'justieren'],
    antonyms: ['entlassen', 'fortsetzen'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-1-m1',
        number: 1,
        definitionDe: 'Jemanden als Arbeitskraft annehmen (Personal einstellen)',
        definitionEn: 'To hire or recruit personnel',
        nuance: 'Arbeitsmarkt & Unternehmen',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Trotz der wirtschaftlichen Stagnation beabsichtigt das Institut, renommierte Forscher einzustellen.',
        clozeSentence: 'Trotz der wirtschaftlichen Stagnation beabsichtigt das Institut, renommierte Forscher [...].',
        translationEn: 'Despite the economic stagnation, the institute intends to hire renowned researchers.'
      },
      {
        id: 'poly-1-m2',
        number: 2,
        definitionDe: 'Eine Handlung, Veröffentlichung oder Produktion beenden/stoppen',
        definitionEn: 'To cease, discontinue, or terminate an operation',
        nuance: 'Beendigung & Stilllegung',
        grammarInfo: 'transitiv + Akk (den Betrieb/Zahlungen einstellen)',
        exampleSentence: 'Aufgrund fehlender Subventionen musste das Verlagshaus die Druckausgabe der Fachzeitschrift einstellen.',
        clozeSentence: 'Aufgrund fehlender Subventionen musste das Verlagshaus die Druckausgabe der Fachzeitschrift [...].',
        translationEn: 'Due to a lack of subsidies, the publishing house had to discontinue the print edition of the journal.'
      },
      {
        id: 'poly-1-m3',
        number: 3,
        definitionDe: 'Sich mental oder organisatorisch an veränderte Umstände anpassen',
        definitionEn: 'To mentally adapt or prepare for changing circumstances',
        nuance: 'Mentale Anpassung & Vorausschau',
        grammarInfo: 'reflexiv: sich einstellen auf + Akk',
        exampleSentence: 'Die Kommunen müssen sich zeitnah auf extremere Wetterereignisse einstellen.',
        clozeSentence: 'Die Kommunen müssen sich zeitnah auf extremere Wetterereignisse [...].',
        translationEn: 'Municipalities must promptly prepare and adapt to more extreme weather events.'
      }
    ],
    examples: [
      {
        sentence: 'Aufgrund fehlender Subventionen musste das Verlagshaus die Druckausgabe der Fachzeitschrift einstellen.',
        clozeSentence: 'Aufgrund fehlender Subventionen musste das Verlagshaus die Druckausgabe der Fachzeitschrift [...].',
        translationEn: 'Due to a lack of subsidies, the publishing house had to discontinue the print edition of the journal.',
        context: 'Wirtschaft & Medien'
      }
    ],
    activeRecallPrompt: 'Welches vielseitige C1-Verb bedeutet sowohl „Personal rekrutieren“ als auch „einen Betrieb stoppen“ und reflexiv „sich adaptieren“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: true
  },
  {
    id: 'poly-2',
    word: 'absetzen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Steuerlich geltend machen; 2) eine Person aus einem Amt entheben; 3) Waren verkaufen; 4) ein Medikament abbrechen.',
    definitionEn: '1) To deduct (taxes); 2) To depose/dismiss from office; 3) To sell/market goods; 4) To discontinue medication.',
    register: 'Fachsprachlich',
    collocation: 'von der Steuer absetzen / einen Minister absetzen / Produkte auf dem Weltmarkt absetzen',
    synonyms: ['geltend machen', 'entmachten', 'vertreiben', 'abbrechen'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-2-m1',
        number: 1,
        definitionDe: 'Aufwendungen steuermindernd anrechnen lassen',
        definitionEn: 'To write off or deduct expenses against tax',
        nuance: 'Finanzen & Steuerrecht',
        grammarInfo: 'transitiv: von der Steuer absetzen',
        exampleSentence: 'Fortbildungskosten können Freiberufler in voller Höhe von der Steuer absetzen.',
        clozeSentence: 'Fortbildungskosten können Freiberufler in voller Höhe von der Steuer [...].',
        translationEn: 'Freelancers can deduct the full cost of further education from their taxes.'
      },
      {
        id: 'poly-2-m2',
        number: 2,
        definitionDe: 'Jemanden aus einer Führungsposition oder einem politischen Amt entlassen/stürzen',
        definitionEn: 'To depose, oust, or strip someone of political/executive office',
        nuance: 'Politik & Führungswechsel',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Nach anhaltenden Unruhen beschloss das Parlament, den amtierenden Premierminister abzusetzen.',
        clozeSentence: 'Nach anhaltenden Unruhen beschloss das Parlament, den amtierenden Premierminister [...].',
        translationEn: 'Following persistent unrest, parliament decided to depose the incumbent prime minister.'
      },
      {
        id: 'poly-2-m3',
        number: 3,
        definitionDe: 'Waren oder Produkte in großer Stückzahl am Markt verkaufen',
        definitionEn: 'To market, distribute or sell goods commercially',
        nuance: 'Handel & Ökonomie',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Dem Automobilkonzern gelang es nicht, die kalkulierte Menge an Elektrofahrzeugen abzusetzen.',
        clozeSentence: 'Dem Automobilkonzern gelang es nicht, die kalkulierte Menge an Elektrofahrzeugen [...].',
        translationEn: 'The automotive corporation failed to sell the anticipated volume of electric vehicles.'
      }
    ],
    examples: [
      {
        sentence: 'Fortbildungskosten können Freiberufler in voller Höhe von der Steuer absetzen.',
        clozeSentence: 'Fortbildungskosten können Freiberufler in voller Höhe von der Steuer [...].',
        translationEn: 'Freelancers can deduct the full cost of further education from their taxes.',
        context: 'Steuern & Beruf'
      }
    ],
    activeRecallPrompt: 'Welches C1-Verb verbindet das Abziehen von Werbungskosten bei der Steuer mit dem Amtsentheben eines Ministers?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-3',
    word: 'aufheben',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Ein Gesetz/Urteil für ungültig erklären; 2) etwas aufbewahren; 3) vom Boden hochheben; 4) sich neutralisieren.',
    definitionEn: '1) To repeal/annul a law; 2) To preserve/keep safe; 3) To pick up physically; 4) To cancel each other out.',
    register: 'Gehoben',
    collocation: 'ein Gesetz aufheben / die Quarantäne aufheben / Schriftstücke sorgfältig aufheben / sich gegenseitig aufheben',
    synonyms: ['annullieren', 'aufbewahren', 'kompensieren'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-3-m1',
        number: 1,
        definitionDe: 'Eine Rechtsnorm, Beschränkung oder Verordnung offiziell außer Kraft setzen',
        definitionEn: 'To repeal, abolish, or annul a legal regulation or ban',
        nuance: 'Recht & Gesetzgebung',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Das Bundesverfassungsgericht entschied, das umstrittene Gesetz rückwirkend aufzuheben.',
        clozeSentence: 'Das Bundesverfassungsgericht entschied, das umstrittene Gesetz rückwirkend [...].',
        translationEn: 'The Federal Constitutional Court decided to annul the controversial law retroactively.'
      },
      {
        id: 'poly-3-m2',
        number: 2,
        definitionDe: 'Wertvolle Gegenstände oder Dokumente für die Zukunft sicher verwahren',
        definitionEn: 'To keep, save, or store documents for future reference',
        nuance: 'Archivierung & Verwahrung',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Bitte heben Sie alle Quittungen mindestens zehn Jahre lang auf.',
        clozeSentence: 'Bitte [...] Sie alle Quittungen mindestens zehn Jahre lang [...].',
        translationEn: 'Please keep all receipts for at least ten years.'
      },
      {
        id: 'poly-3-m3',
        number: 3,
        definitionDe: 'Zwei gegensätzliche Wirkungen neutralisieren sich gegenseitig',
        definitionEn: 'Two opposing effects cancel out or neutralize one another',
        nuance: 'Logik & Physik / Wirkung',
        grammarInfo: 'reflexiv: sich aufheben',
        exampleSentence: 'Die positiven Anreize und die Steuererhöhungen heben sich in ihrer Wirkung gegenseitig auf.',
        clozeSentence: 'Die positiven Anreize und die Steuererhöhungen [...] sich in ihrer Wirkung gegenseitig [...].',
        translationEn: 'The positive incentives and tax increases cancel each other out in their overall effect.'
      }
    ],
    examples: [
      {
        sentence: 'Das Bundesverfassungsgericht entschied, das umstrittene Gesetz rückwirkend aufzuheben.',
        clozeSentence: 'Das Bundesverfassungsgericht entschied, das umstrittene Gesetz rückwirkend [...].',
        translationEn: 'The Federal Constitutional Court decided to annul the controversial law retroactively.',
        context: 'Jura & Verfassung'
      }
    ],
    activeRecallPrompt: 'Wie lautet das C1-Verb, das im juristischen Sinne „ein Gesetz annullieren“ bedeutet, im Alltag aber „etwas aufbewahren“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-4',
    word: 'vertreten',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Eine Ansicht/Position einnehmen; 2) jemanden stellvertretend repräsentieren; 3) sich das Gelenk verstauchen.',
    definitionEn: '1) To advocate/champion an opinion; 2) To stand in for / represent someone; 3) To sprain one\'s ankle.',
    register: 'Bildungssprachlich',
    collocation: 'einen Standpunkt vehement vertreten / einen kranken Kollegen vertreten / Interessen vertreten',
    synonyms: ['verfechten', 'repräsentieren', 'deputieren'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-4-m1',
        number: 1,
        definitionDe: 'Eine geistige oder politische Überzeugung öffentlich befürworten und verteidigen',
        definitionEn: 'To advocate, champion, or uphold an ideological viewpoint',
        nuance: 'Wissenschaft & Diskurs',
        grammarInfo: 'transitiv: eine Meinung / Auffassung vertreten',
        exampleSentence: 'In seiner Dissertation vertritt der Soziologe die These, dass Digitalisierung soziale Ungleichheit vertieft.',
        clozeSentence: 'In seiner Dissertation [...] der Soziologe die These, dass Digitalisierung soziale Ungleichheit vertieft.',
        translationEn: 'In his doctoral thesis, the sociologist advocates the thesis that digitalization deepens social inequality.'
      },
      {
        id: 'poly-4-m2',
        number: 2,
        definitionDe: 'In Abwesenheit oder im Auftrag einer anderen Person deren Aufgaben wahrnehmen',
        definitionEn: 'To stand in for, substitute, or legally represent a colleague or client',
        nuance: 'Arbeitswelt & Jurisprudenz',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Während des Mutterschutzes wird Frau Dr. Müller von einer qualifizierten Vertretung vertreten.',
        clozeSentence: 'Während des Mutterschutzes wird Frau Dr. Müller von einer qualifizierten Vertretung [...].',
        translationEn: 'During her maternity leave, Dr. Müller will be substituted by a qualified deputy.'
      }
    ],
    examples: [
      {
        sentence: 'In seiner Dissertation vertritt der Soziologe die These, dass Digitalisierung soziale Ungleichheit vertieft.',
        clozeSentence: 'In seiner Dissertation [...] der Soziologe die These, dass Digitalisierung soziale Ungleichheit vertieft.',
        translationEn: 'In his doctoral thesis, the sociologist advocates the thesis that digitalization deepens social inequality.',
        context: 'Wissenschaftlicher Diskurs'
      }
    ],
    activeRecallPrompt: 'Welches C1-Verb bedeutet bildungssprachlich „einen Standpunkt verfechten“ und im Berufsleben „für einen Kollegen einspringen“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-5',
    word: 'auslegen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Einen Text/ein Gesetz interpretieren; 2) Geld vorschießen; 3) Broschüren zur Ansicht hinlegen.',
    definitionEn: '1) To interpret/construe a text or law; 2) To advance/front money temporarily; 3) To display/lay out pamphlets.',
    register: 'Gehoben',
    collocation: 'ein Gesetz restriktiv auslegen / jmdm. Geld auslegen / Informationsmaterial auslegen',
    synonyms: ['interpretieren', 'deuten', 'vorstrecken', 'darbieten'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-5-m1',
        number: 1,
        definitionDe: 'Den Sinngehalt eines Textes, Gesetzes oder Verhaltens deuten',
        definitionEn: 'To interpret, construe, or expound a statute or statement',
        nuance: 'Hermeneutik & Jurisprudenz',
        grammarInfo: 'transitiv: als etwas auslegen',
        exampleSentence: 'Der Richter neigte dazu, die Klausel zugunsten des Verbrauchers auszulegen.',
        clozeSentence: 'Der Richter neigte dazu, die Klausel zugunsten des Verbrauchers [...].',
        translationEn: 'The judge was inclined to interpret the clause in favor of the consumer.'
      },
      {
        id: 'poly-5-m2',
        number: 2,
        definitionDe: 'Den fälligen Geldbetrag für jemanden vorläufig bezahlen (vorstrecken)',
        definitionEn: 'To front or advance money for someone temporarily',
        nuance: 'Alltag & Finanzen',
        grammarInfo: 'Dativ + Akkusativ: jmdm. das Geld auslegen',
        exampleSentence: 'Könntest du mir die Gebühren für den Kongress auslegen? Ich überweise es dir morgen.',
        clozeSentence: 'Könntest du mir die Gebühren für den Kongress [...]? Ich überweise es dir morgen.',
        translationEn: 'Could you advance the conference fees for me? I will wire it to you tomorrow.'
      }
    ],
    examples: [
      {
        sentence: 'Der Richter neigte dazu, die Klausel zugunsten des Verbrauchers auszulegen.',
        clozeSentence: 'Der Richter neigte dazu, die Klausel zugunsten des Verbrauchers [...].',
        translationEn: 'The judge was inclined to interpret the clause in favor of the consumer.',
        context: 'Recht & Interpretation'
      }
    ],
    activeRecallPrompt: 'Welches Verb bezeichnet sowohl das hermeneutische Deuten eines Gesetzestextes als auch das Vorstrecken von Geld?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-6',
    word: 'angehen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Ein Problem energisch anpacken; 2) jemanden betreffen/interessieren; 3) zu brennen/leuchten beginnen.',
    definitionEn: '1) To tackle/address a challenge; 2) To concern/pertain to someone; 3) To turn on / ignite.',
    register: 'Bildungssprachlich',
    collocation: 'ein drängendes Problem beherzt angehen / das geht die Allgemeinheit an',
    synonyms: ['anpacken', 'bewältigen', 'betreffen', 'tangieren'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-6-m1',
        number: 1,
        definitionDe: 'Eine schwierige Aufgabe oder Reform entschlossen in Angriff nehmen',
        definitionEn: 'To tackle or proactively resolve an urgent challenge or reform',
        nuance: 'Problemlösung & Handeln',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Die Bundesregierung muss den Sanierungsstau bei den Schulen endlich systematisch angehen.',
        clozeSentence: 'Die Bundesregierung muss den Sanierungsstau bei den Schulen endlich systematisch [...].',
        translationEn: 'The federal government must finally systematically tackle the backlog of school renovations.'
      },
      {
        id: 'poly-6-m2',
        number: 2,
        definitionDe: 'Für jemanden von Relevanz oder persönlicher Zuständigkeit sein',
        definitionEn: 'To concern, pertain to, or be the business of someone',
        nuance: 'Zuständigkeit & Relevanz',
        grammarInfo: 'transitiv + Akk (das geht mich nichts an)',
        exampleSentence: 'Der Schutz der Privatsphäre im Internet geht jeden einzelnen Bürger an.',
        clozeSentence: 'Der Schutz der Privatsphäre im Internet [...] jeden einzelnen Bürger [...].',
        translationEn: 'Protecting online privacy concerns every single citizen.'
      }
    ],
    examples: [
      {
        sentence: 'Die Bundesregierung muss den Sanierungsstau bei den Schulen endlich systematisch angehen.',
        clozeSentence: 'Die Bundesregierung muss den Sanierungsstau bei den Schulen endlich systematisch [...].',
        translationEn: 'The federal government must finally systematically tackle the backlog of school renovations.',
        context: 'Bildungspolitik'
      }
    ],
    activeRecallPrompt: 'Wie lautet das C1-Verb für „eine komplexe Herausforderung tatkräftig in Angriff nehmen“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },

  // --- ACADEMIC & DISCOURSE VOCABULARY (Wissenschaft & Forschung) ---
  {
    id: 'c1-wiss-1',
    word: 'plädieren für',
    wordClass: 'Verb',
    category: 'Wissenschaft & Forschung',
    level: 'C1',
    definitionDe: 'Sich mit Nachdruck, guten Argumenten und Überzeugung für eine Sache aussprechen.',
    definitionEn: 'To advocate passionately for, make a strong case in favor of.',
    register: 'Gehoben',
    collocation: 'plädieren für + Akkusativ (für eine Gesetzesänderung plädieren)',
    synonyms: ['sich einsetzen für', 'befürworten', 'eine Lanze brechen für', 'eintreten für'],
    antonyms: ['plädieren gegen', 'ablehnen', 'verwerfen'],
    examples: [
      {
        sentence: 'Führende Ökonomen plädieren für eine nachhaltige Reform des gegenwärtigen Steuersystems.',
        clozeSentence: 'Führende Ökonomen [...] für eine nachhaltige Reform des gegenwärtigen Steuersystems.',
        translationEn: 'Leading economists advocate for a sustainable reform of the current tax system.',
        context: 'Wirtschaftspolitischer Diskurs'
      },
      {
        sentence: 'Die Bildungswissenschaftlerin plädiert dafür, den Unterricht stärker an individuellen Stärken auszurichten.',
        clozeSentence: 'Die Bildungswissenschaftlerin [...] dafür, den Unterricht stärker an individuellen Stärken auszurichten.',
        translationEn: 'The educational scientist argues in favor of aligning instruction more closely with individual strengths.',
        context: 'Pädagogik & Akademie'
      }
    ],
    activeRecallPrompt: 'Welches gehobene C1-Verb mit der Präposition „für“ drückt aus, dass man sich öffentlich und argumentativ für etwas einsetzt?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: true
  },
  {
    id: 'c1-wiss-2',
    word: 'das Phänomen, -e',
    article: 'das',
    wordClass: 'Nomen',
    category: 'Wissenschaft & Forschung',
    level: 'C1',
    definitionDe: 'Eine bemerkenswerte Erscheinung oder Wahrnehmung, die wissenschaftlich untersucht werden kann.',
    definitionEn: 'A phenomenon; an observable occurrence or trend worthy of scientific inquiry.',
    register: 'Bildungssprachlich',
    collocation: 'ein Phänomen erforschen / einem Phänomen auf den Grund gehen / ein gesellschaftliches Phänomen',
    synonyms: ['die Erscheinung', 'das Faktum', 'das Vorkommnis'],
    examples: [
      {
        sentence: 'Das Phänomen der kollektiven Amnesie in digitalen Gemeinschaften ist Gegenstand neuester Studien.',
        clozeSentence: 'Das [...] der kollektiven Amnesie in digitalen Gemeinschaften ist Gegenstand neuester Studien.',
        translationEn: 'The phenomenon of collective amnesia in digital communities is the subject of recent studies.',
        context: 'Soziologie'
      }
    ],
    activeRecallPrompt: 'Welches Nomen (Neutrum) beschreibt in der Wissenschaft eine auffällige Beobachtung oder Erscheinung?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-wiss-3',
    word: 'hinterfragen',
    wordClass: 'Verb',
    category: 'Wissenschaft & Forschung',
    level: 'C1',
    definitionDe: 'Etwas nicht unkritisch hinnehmen, sondern die Grundlagen, Motive und Beweise methodisch anzweifeln und analysieren.',
    definitionEn: 'To scrutinize, critically question, or interrogate underlying assumptions.',
    register: 'Bildungssprachlich',
    collocation: 'etablierte Denkmuster hinterfragen / Quellen kritisch hinterfragen',
    synonyms: ['anzweifeln', 'problematisieren', 'infrage stellen', 'durchleuchten'],
    antonyms: ['hinnehmen', 'gutgläubig akzeptieren'],
    examples: [
      {
        sentence: 'Ein wesentliches Merkmal wissenschaftlichen Arbeitens besteht darin, scheinbare Gewissheiten grundlegend zu hinterfragen.',
        clozeSentence: 'Ein wesentliches Merkmal wissenschaftlichen Arbeitens besteht darin, scheinbare Gewissheiten grundlegend zu [...].',
        translationEn: 'An essential hallmark of scholarly work consists of fundamentally questioning apparent certainties.',
        context: 'Wissenschaftstheorie'
      }
    ],
    activeRecallPrompt: 'Welches untrennbare C1-Verb bezeichnet das methodische, tiefgehende Infragestellen von Annahmen?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-wiss-4',
    word: 'einhergehen mit',
    wordClass: 'Verb',
    category: 'Wissenschaft & Forschung',
    level: 'C1',
    definitionDe: 'Gleichzeitig mit etwas auftreten; als Begleiterscheinung oder Folge unvermeidlich mit etwas verbunden sein.',
    definitionEn: 'To be accompanied by; to go hand in hand with; to be concomitant with.',
    register: 'Gehoben',
    collocation: 'einhergehen mit + Dativ (mit gravierenden Risiken einhergehen)',
    synonyms: ['verbunden sein mit', 'begleitet werden von', 'Hand in Hand gehen mit'],
    examples: [
      {
        sentence: 'Der rasante technologische Fortschritt geht häufig mit ethischen Dilemmata einher.',
        clozeSentence: 'Der rasante technologische Fortschritt [...] häufig mit ethischen Dilemmata [...].',
        translationEn: 'Rapid technological progress often goes hand in hand with ethical dilemmas.',
        context: 'Technikphilosophie'
      }
    ],
    activeRecallPrompt: 'Welches gehobene Verb drückt mit der Präposition „mit“ aus, dass zwei Entwicklungen parallel und gekoppelt auftreten?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-wiss-5',
    word: 'die Diskrepanz, -en',
    article: 'die',
    wordClass: 'Nomen',
    category: 'Wissenschaft & Forschung',
    level: 'C1',
    definitionDe: 'Ein deutliches Missverhältnis, Widerspruch oder auffälliger Unterschied zwischen zwei Sachverhalten.',
    definitionEn: 'Discrepancy, divergence, noticeable inconsistency.',
    register: 'Bildungssprachlich',
    collocation: 'eine gravierende Diskrepanz zwischen Theorie und Praxis / eine Diskrepanz feststellen',
    synonyms: ['das Missverhältnis', 'die Kluft', 'die Divergenz', 'der Widerspruch'],
    antonyms: ['die Übereinstimmung', 'die Kongruenz'],
    examples: [
      {
        sentence: 'Zwischen den politischen Versprechen und den realen Maßnahmen klafft eine unübersehbare Diskrepanz.',
        clozeSentence: 'Zwischen den politischen Versprechen und den realen Maßnahmen klafft eine unübersehbare [...].',
        translationEn: 'There is an unmistakable discrepancy gaping between political promises and real measures.',
        context: 'Politikanalyse'
      }
    ],
    activeRecallPrompt: 'Welches C1-Fremdwort (Femininum) bezeichnet eine spürbare Kluft bzw. ein Missverhältnis zwischen zwei Dingen?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },

  // --- NOMEN-VERB-VERBINDUNGEN (Feste Wendungen für C1 schriftlich & mündlich) ---
  {
    id: 'nvv-1',
    word: 'zur Debatte stehen',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Gegenstand von Diskussionen, Verhandlungen oder Überlegungen sein; debattiert werden.',
    definitionEn: 'To be up for debate / discussion; to be under consideration.',
    register: 'Formell',
    collocation: 'etwas steht nicht zur Debatte / zur Debatte stehen',
    synonyms: ['diskutiert werden', 'erörtert werden', 'im Raum stehen'],
    examples: [
      {
        sentence: 'Eine Kürzung der Bildungsetats steht für den Ministerrat derzeit keineswegs zur Debatte.',
        clozeSentence: 'Eine Kürzung der Bildungsetats steht für den Ministerrat derzeit keineswegs [...].',
        translationEn: 'A cut in education budgets is currently by no means up for debate for the Council of Ministers.',
        context: 'Haushaltspolitik'
      }
    ],
    activeRecallPrompt: 'Welche C1 Nomen-Verb-Verbindung mit „stehen“ bedeutet „erörtert oder diskutiert werden“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: true
  },
  {
    id: 'nvv-2',
    word: 'in Betracht ziehen',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Einen Umstand oder eine Option gründlich bedenken und in die Entscheidungsfindung einbeziehen.',
    definitionEn: 'To take into consideration / account; to contemplate an option.',
    register: 'Formell',
    collocation: 'eine Alternative in Betracht ziehen / alle Faktoren in Betracht ziehen',
    synonyms: ['berücksichtigen', 'erwägen', 'in Erwägung ziehen'],
    antonyms: ['außer Acht lassen', 'ignorieren'],
    examples: [
      {
        sentence: 'Vor der Genehmigung des Großprojekts müssen die Planer ökologische Folgen zwingend in Betracht ziehen.',
        clozeSentence: 'Vor der Genehmigung des Großprojekts müssen die Planer ökologische Folgen zwingend [...].',
        translationEn: 'Before approving the major project, planners must imperatively take ecological consequences into consideration.',
        context: 'Stadtentwicklung'
      }
    ],
    activeRecallPrompt: 'Welche Nomen-Verb-Verbindung mit „ziehen“ bedeutet gehoben „etwas gründlich erwägen oder berücksichtigen“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'nvv-3',
    word: 'Aufschluss geben über',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Erhellende Informationen, Klarheit oder Erklärungen bezüglich einer unbekannten Frage liefern.',
    definitionEn: 'To provide illuminating insight / clarity regarding something.',
    register: 'Bildungssprachlich',
    collocation: 'Aufschluss geben über + Akkusativ',
    synonyms: ['erhellen', 'informieren über', 'Klarheit schaffen'],
    examples: [
      {
        sentence: 'Die Auswertung der repräsentativen Umfrage soll Aufschluss über das veränderte Konsumverhalten geben.',
        clozeSentence: 'Die Auswertung der repräsentativen Umfrage soll [...] über das veränderte Konsumverhalten geben.',
        translationEn: 'The evaluation of the representative survey is intended to provide insight into changing consumer behavior.',
        context: 'Empirische Sozialforschung'
      }
    ],
    activeRecallPrompt: 'Welches C1-Nomen verbindet sich mit „geben über + Akk“, um „aufklärende Erkenntnisse liefern“ auszudrücken?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'nvv-4',
    word: 'in Kraft treten',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Gültigkeit und rechtliche Wirksamkeit erlangen (von Verträgen, Bestimmungen, Gesetzen).',
    definitionEn: 'To come into effect / force (of legal statutes or treaties).',
    register: 'Fachsprachlich',
    collocation: 'ein Gesetz tritt in Kraft / das Abkommen tritt mit sofortiger Wirkung in Kraft',
    synonyms: ['gültig werden', 'wirksam werden'],
    antonyms: ['außer Kraft treten'],
    examples: [
      {
        sentence: 'Die neue Datenschutzverordnung der Europäischen Union wird zum Monatsende offiziell in Kraft treten.',
        clozeSentence: 'Die neue Datenschutzverordnung der Europäischen Union wird zum Monatsende offiziell [...].',
        translationEn: 'The new European Union Data Protection Regulation will officially come into effect at the end of the month.',
        context: 'Europarecht'
      }
    ],
    activeRecallPrompt: 'Welche juristische Nomen-Verb-Verbindung drückt aus, dass ein Gesetz verbindlich wirksam wird?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },

  // --- GESELLSCHAFT & POLITIK (Society, Politics, Debate) ---
  {
    id: 'c1-ges-1',
    word: 'die Polarisierung, -en',
    article: 'die',
    wordClass: 'Nomen',
    category: 'Gesellschaft & Politik',
    level: 'C1',
    definitionDe: 'Die Zuspitzung von Gegensätzen innerhalb einer Gruppe oder Gesellschaft zu unversöhnlichen Lagern.',
    definitionEn: 'Polarization; the divergence of social or political attitudes to ideological extremes.',
    register: 'Bildungssprachlich',
    collocation: 'die gesellschaftliche Polarisierung / einer Polarisierung entgegenwirken',
    synonyms: ['die Spaltung', 'die Lagerbildung', 'die Zerklüftung'],
    antonyms: ['der gesellschaftliche Konsens', 'die Einheit'],
    examples: [
      {
        sentence: 'Algorithmen sozialer Medien begünstigen zweifellos die Polarisierung des öffentlichen Diskurses.',
        clozeSentence: 'Algorithmen sozialer Medien begünstigen zweifellos die [...] des öffentlichen Diskurses.',
        translationEn: 'Social media algorithms undoubtedly foster the polarization of public discourse.',
        context: 'Mediensoziologie'
      }
    ],
    activeRecallPrompt: 'Wie nennt man die Zuspitzung einer Gesellschaft in zwei extrem gegensätzliche, unversöhnliche Lager?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-ges-2',
    word: 'verharmlosen',
    wordClass: 'Verb',
    category: 'Gesellschaft & Politik',
    level: 'C1',
    definitionDe: 'Eine ernste Gefahr, Straftat oder negative Entwicklung als harmlos und unbedeutend darstellen.',
    definitionEn: 'To downplay, trivialize, or minimize the gravity of a threat.',
    register: 'Gehoben',
    collocation: 'die Risiken der Erderwärmung verharmlosen / Verbrechen verharmlosen',
    synonyms: ['bagatellisieren', 'herunterspielen', 'schönfärben'],
    antonyms: ['dramatisieren', 'überspitzen'],
    examples: [
      {
        sentence: 'Es wäre fatal, die sozioökonomischen Langzeitfolgen der Pandemie leichtfertig zu verharmlosen.',
        clozeSentence: 'Es wäre fatal, die sozioökonomischen Langzeitfolgen der Pandemie leichtfertig zu [...].',
        translationEn: 'It would be fatal to recklessly trivialize the long-term socioeconomic fallout of the pandemic.',
        context: 'Krisenmanagement'
      }
    ],
    activeRecallPrompt: 'Welches Verb drückt aus, dass man eine bedrohliche Krise fälschlich als klein und harmlos abtut?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-ges-3',
    word: 'nachhaltig',
    wordClass: 'Adjektiv',
    category: 'Gesellschaft & Politik',
    level: 'C1',
    definitionDe: '1) So beschaffen, dass die Ressourcen geschont werden; 2) von dauerhafter, tiefgreifender Wirkung.',
    definitionEn: 'Sustainable; having a profound and enduring impact over time.',
    register: 'Bildungssprachlich',
    collocation: 'nachhaltig prägen / ein nachhaltiges Wirtschaftskonzept / nachhaltige Wirkung entfalten',
    synonyms: ['dauerhaft', 'zukunftsfähig', 'tiefgreifend', 'substanziell'],
    antonyms: ['kurzlebig', 'flüchtig'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-nachhaltig-m1',
        number: 1,
        definitionDe: 'Ökologisch und ökonomisch so beschaffen, dass Ressourcen langfristig geschont und erhalten werden',
        definitionEn: 'Sustainable, ecologically balanced and resource-conserving',
        nuance: 'Ökologie & Kreislaufwirtschaft',
        grammarInfo: 'Adjektiv / Adverb',
        exampleSentence: 'Die Europäische Union fördert vorrangig Projekte, die auf einer nachweisbar nachhaltigen Energiegewinnung basieren.',
        clozeSentence: 'Die Europäische Union fördert vorrangig Projekte, die auf einer nachweisbar [...] Energiegewinnung basieren.',
        translationEn: 'The European Union primarily funds projects based on verifiably sustainable energy generation.'
      },
      {
        id: 'poly-nachhaltig-m2',
        number: 2,
        definitionDe: 'Von anhaltender, tiefgreifender und prägender Wirkung auf Menschen oder gesellschaftliche Strukturen',
        definitionEn: 'Enduring, profound, with a deep and lasting impact over time',
        nuance: 'Wirkung, Transformation & Geschichte',
        grammarInfo: 'Adjektiv / Adverb (nachhaltig prägen / beeinflussen)',
        exampleSentence: 'Die historische Bildungsreform hat das akademische System des Landes über Generationen hinweg nachhaltig verändert.',
        clozeSentence: 'Die historische Bildungsreform hat das akademische System des Landes über Generationen hinweg [...] verändert.',
        translationEn: 'The historic educational reform profoundly and sustainably changed the country’s academic system across generations.'
      }
    ],
    examples: [
      {
        sentence: 'Die internationale Konferenz hat das Umweltbewusstsein einer ganzen Generation nachhaltig geprägt.',
        clozeSentence: 'Die internationale Konferenz hat das Umweltbewusstsein einer ganzen Generation [...] geprägt.',
        translationEn: 'The international conference sustainably shaped the environmental awareness of an entire generation.',
        context: 'Global Governance'
      },
      {
        sentence: 'Die Europäische Union fördert vorrangig Projekte, die auf einer nachweisbar nachhaltigen Energiegewinnung basieren.',
        clozeSentence: 'Die Europäische Union fördert vorrangig Projekte, die auf einer nachweisbar [...] Energiegewinnung basieren.',
        translationEn: 'The European Union primarily funds projects based on verifiably sustainable energy generation.',
        context: 'Ökologie & Wirtschaft'
      }
    ],
    activeRecallPrompt: 'Welches C1-Adjektiv bedeutet nicht nur ökologisch schonend, sondern auch „von anhaltender, tiefer Wirkung“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },

  // --- PSYCHOLOGIE & KOGNITION (Cognition & Mind) ---
  {
    id: 'c1-psy-1',
    word: 'kognitiv',
    wordClass: 'Adjektiv',
    category: 'Psychologie & Kognition',
    level: 'C1',
    definitionDe: 'Das Wahrnehmen, Denken, Erinnern und Erkennen betreffend.',
    definitionEn: 'Cognitive; relating to mental processes of perception, reasoning, and memory retrieval.',
    register: 'Fachsprachlich',
    collocation: 'kognitive Dissonanz / kognitive Leistungsfähigkeit / kognitiver Aufwand',
    synonyms: ['geistig', 'intellektuell', 'gedanklich'],
    examples: [
      {
        sentence: 'Active Recall erfordert bewussten kognitiven Aufwand, führt jedoch zu einer nachweislich stärkeren neuronalen Verankerung.',
        clozeSentence: 'Active Recall erfordert bewussten [...] Aufwand, führt jedoch zu einer nachweislich stärkeren neuronalen Verankerung.',
        translationEn: 'Active recall demands conscious cognitive effort, but leads to demonstrably stronger neural encoding.',
        context: 'Neurowissenschaft des Lernens'
      }
    ],
    activeRecallPrompt: 'Welches C1-Adjektiv bezeichnet alle Prozesse, die mit dem menschlichen Erkenntnis- und Denkvermögen zusammenhängen?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: true
  },
  {
    id: 'poly-7',
    word: 'nachlassen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) An Intensität oder Stärke verlieren; 2) bei Verhandlungen den Preis senken; 3) in der Leistungsfähigkeit abbauen.',
    definitionEn: '1) To abate, subside, diminish in intensity; 2) To reduce price / give a discount; 3) To deteriorate in performance or sharpness.',
    register: 'Bildungssprachlich',
    collocation: 'der Schmerz/Sturm lässt nach / vom geforderten Preis nachlassen / die Konzentration lässt nach',
    synonyms: ['abklingen', 'abebben', 'rabattieren', 'schwinden'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-7-m1',
        number: 1,
        definitionDe: 'Ein Unwetter, Schmerz oder Druck verliert allmählich an Heftigkeit',
        definitionEn: 'To abate or subside in intensity (of pressure, storm, pain)',
        nuance: 'Intensitätsabnahme',
        grammarInfo: 'intransitiv (hat nachgelassen)',
        exampleSentence: 'Erst gegen Abend begann der orkanartige Wind spürbar nachzulassen.',
        clozeSentence: 'Erst gegen Abend begann der orkanartige Wind spürbar [...].',
        translationEn: 'Only towards evening did the gale-force wind begin to noticeably subside.'
      },
      {
        id: 'poly-7-m2',
        number: 2,
        definitionDe: 'Bei einer kaufmännischen Preisverhandlung einen Rabatt gewähren',
        definitionEn: 'To lower price or concede a discount during negotiations',
        nuance: 'Handel & Feilschen',
        grammarInfo: 'vom Preis nachlassen',
        exampleSentence: 'Der Händler weigerte sich beharrlich, auch nur einen Cent vom ursprünglichen Angebotspreis nachzulassen.',
        clozeSentence: 'Der Händler weigerte sich beharrlich, auch nur einen Cent vom ursprünglichen Angebotspreis [...].',
        translationEn: 'The dealer persistently refused to concede even a single cent from the original asking price.'
      },
      {
        id: 'poly-7-m3',
        number: 3,
        definitionDe: 'Geistige oder physische Kräfte und Präzision nehmen im Alter oder bei Ermüdung ab',
        definitionEn: 'To flag or deteriorate in mental/physical capacity',
        nuance: 'Kognition & Alterung',
        grammarInfo: 'die Sehkraft / Aufmerksamkeit lässt nach',
        exampleSentence: 'Nach mehrstündiger intensiver Prüfungsvorbereitung lässt die kognitive Aufnahmefähigkeit unweigerlich nach.',
        clozeSentence: 'Nach mehrstündiger intensiver Prüfungsvorbereitung [...] die kognitive Aufnahmefähigkeit unweigerlich [...].',
        translationEn: 'After several hours of intensive exam preparation, cognitive absorption capacity inevitably flags.'
      }
    ],
    examples: [
      {
        sentence: 'Nach mehrstündiger intensiver Prüfungsvorbereitung lässt die kognitive Aufnahmefähigkeit unweigerlich nach.',
        clozeSentence: 'Nach mehrstündiger intensiver Prüfungsvorbereitung [...] die kognitive Aufnahmefähigkeit unweigerlich [...].',
        translationEn: 'After several hours of intensive exam preparation, cognitive absorption capacity inevitably flags.',
        context: 'Lernpsychologie'
      }
    ],
    activeRecallPrompt: 'Welches Verb beschreibt sowohl das Nachgeben beim Preis als auch das Abklingen eines Sturms oder der Konzentration?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-8',
    word: 'verlegen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Einen Gegenstand unauffindbar ablegen; 2) einen Termin zeitlich/örtlich verschieben; 3) Druckerzeugnisse publizieren; 4) Adjektiv: beschämt/unsicher.',
    definitionEn: '1) To misplace something; 2) To postpone or relocate an event; 3) To publish books/prints; 4) (adj.) embarrassed, bashful.',
    register: 'Bildungssprachlich',
    collocation: 'einen Termin auf nächste Woche verlegen / Dokumente verlegen / ein Werk im Eigenverlag verlegen',
    synonyms: ['verschieben', 'verbummeln', 'publizieren'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-8-m1',
        number: 1,
        definitionDe: 'Einen Termin auf einen späteren Zeitpunkt oder anderen Ort datieren',
        definitionEn: 'To postpone, reschedule or relocate an appointment',
        nuance: 'Organisation & Zeitplanung',
        grammarInfo: 'transitiv: auf + Akk verlegen',
        exampleSentence: 'Aufgrund der Erkrankung des Hauptreferenten musste das Symposium um zwei Wochen verlegt werden.',
        clozeSentence: 'Aufgrund der Erkrankung des Hauptreferenten musste das Symposium um zwei Wochen [...] werden.',
        translationEn: 'Due to the illness of the keynote speaker, the symposium had to be postponed by two weeks.'
      },
      {
        id: 'poly-8-m2',
        number: 2,
        definitionDe: 'Als Verleger Bücher, Zeitschriften oder Noten drucken und vertreiben',
        definitionEn: 'To publish or issue literary works',
        nuance: 'Verlagswesen & Literatur',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Der renommierte Universitätsverlag verlegt jährlich hunderte wegweisende Monografien.',
        clozeSentence: 'Der renommierte Universitätsverlag [...] jährlich hunderte wegweisende Monografien.',
        translationEn: 'The prestigious university press publishes hundreds of groundbreaking monographs every year.'
      }
    ],
    examples: [
      {
        sentence: 'Aufgrund der Erkrankung des Hauptreferenten musste das Symposium um zwei Wochen verlegt werden.',
        clozeSentence: 'Aufgrund der Erkrankung des Hauptreferenten musste das Symposium um zwei Wochen [...] werden.',
        translationEn: 'Due to the illness of the keynote speaker, the symposium had to be postponed by two weeks.',
        context: 'Akademisches Management'
      }
    ],
    activeRecallPrompt: 'Welches Verb bedeutet im Terminkalender „zeitlich verschieben“ und im Buchwesen „gedruckt herausbringen“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'nvv-5',
    word: 'zur Sprache bringen',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Ein heikles oder wichtiges Thema in einer Besprechung offiziell ansprechen und zur Diskussion stellen.',
    definitionEn: 'To bring up a topic for discussion, raise an issue.',
    register: 'Formell',
    collocation: 'Missstände im Betrieb offen zur Sprache bringen',
    synonyms: ['thematisieren', 'ansprechen', 'erwähnen'],
    examples: [
      {
        sentence: 'Der Betriebsrat zögerte nicht, die unhaltbaren Arbeitsbedingungen bei der Hauptversammlung zur Sprache zu bringen.',
        clozeSentence: 'Der Betriebsrat zögerte nicht, die unhaltbaren Arbeitsbedingungen bei der Hauptversammlung [...] zu bringen.',
        translationEn: 'The works council did not hesitate to bring the intolerable working conditions up for discussion at the general meeting.',
        context: 'Arbeitsrecht & Mitbestimmung'
      }
    ],
    activeRecallPrompt: 'Welche Nomen-Verb-Verbindung bedeutet formell „ein Problem in einer Sitzung aktiv ansprechen“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'nvv-6',
    word: 'Abschied nehmen von',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Sich von einer Person verabschieden; im übertragenen C1-Sinn: eine veraltete Illusion oder Praxis endgültig aufgeben.',
    definitionEn: 'To say farewell to someone; idiomatically: to renounce, discard or abandon a cherished idea/practice.',
    register: 'Gehoben',
    collocation: 'Abschied nehmen von + Dativ (von einer Illusion Abschied nehmen)',
    synonyms: ['aufgeben', 'sich lossagen von', 'hinter sich lassen'],
    examples: [
      {
        sentence: 'Die Industrienationen müssen schleunigst Abschied von der Illusion unbegrenzten Wachstums auf Kosten der Natur nehmen.',
        clozeSentence: 'Die Industrienationen müssen schleunigst [...] von der Illusion unbegrenzten Wachstums auf Kosten der Natur nehmen.',
        translationEn: 'Industrialized nations must hastily bid farewell to the illusion of unlimited growth at the expense of nature.',
        context: 'Ökologische Ökonomie'
      }
    ],
    activeRecallPrompt: 'Welche C1-Redewendung bedeutet gehoben „eine liebgewonnene Vorstellung oder Gewohnheit endgültig aufgeben“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'nvv-7',
    word: 'zur Verfügung stehen',
    wordClass: 'Nomen-Verb-Verbindung',
    category: 'Nomen-Verb-Verbindungen',
    level: 'C1',
    definitionDe: 'Vorhanden, abrufbereit und nutzbar sein (Passivbedeutung von zur Verfügung stellen).',
    definitionEn: 'To be available, at one\'s disposal.',
    register: 'Formell',
    collocation: 'jmdm. zur Verfügung stehen / finanzielle Mittel stehen zur Verfügung',
    synonyms: ['verfügbar sein', 'bereitstehen'],
    examples: [
      {
        sentence: 'Für die Erforschung seltener Krankheiten stehen derzeit nur limitierte Fördermittel zur Verfügung.',
        clozeSentence: 'Für die Erforschung seltener Krankheiten stehen derzeit nur limitierte Fördermittel [...].',
        translationEn: 'Only limited grants are currently available for research into rare diseases.',
        context: 'Forschungsförderung'
      }
    ],
    activeRecallPrompt: 'Welche feste Wendung mit „stehen“ bedeutet auf gehobenem C1-Niveau „vorhanden und nutzbar sein“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-wiss-6',
    word: 'gewährleisten',
    wordClass: 'Verb',
    category: 'Wissenschaft & Forschung',
    level: 'C1',
    definitionDe: 'Das sichere Eintreten, den Schutz oder die fehlerfreie Funktion einer Sache verbindlich sicherstellen.',
    definitionEn: 'To guarantee, ensure, safeguard or vouch for.',
    register: 'Bildungssprachlich',
    collocation: 'die Einhaltung von Standards gewährleisten / Sicherheit gewährleisten',
    synonyms: ['sicherstellen', 'garantieren', 'verbürgen'],
    antonyms: ['gefährden', 'untergraben'],
    examples: [
      {
        sentence: 'Strenge Qualitätskontrollen gewährleisten die Reproduzierbarkeit der experimentellen Resultate.',
        clozeSentence: 'Strenge Qualitätskontrollen [...] die Reproduzierbarkeit der experimentellen Resultate.',
        translationEn: 'Rigorous quality controls guarantee the reproducibility of experimental results.',
        context: 'Wissenschaftliche Methodik'
      }
    ],
    activeRecallPrompt: 'Welches untrennbare C1-Verb bedeutet „verbindlich sicherstellen und garantieren“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'c1-psy-2',
    word: 'die Resilienz',
    article: 'die',
    wordClass: 'Nomen',
    category: 'Psychologie & Kognition',
    level: 'C1',
    definitionDe: 'Die psychische Widerstandskraft, Krisen zu bewältigen und gestärkt daraus hervorzugehen.',
    definitionEn: 'Resilience; psychological fortitude to adapt and bounce back from adversity.',
    register: 'Bildungssprachlich',
    collocation: 'seelische Resilienz aufbauen / die Resilienz von Systemen stärken',
    synonyms: ['die Widerstandskraft', 'die Zähigkeit', 'die Belastbarkeit'],
    antonyms: ['die Vulnerabilität', 'die Anfälligkeit'],
    examples: [
      {
        sentence: 'In Zeiten anhaltender beruflicher Belastung erweist sich psychische Resilienz als Schlüsselkompetenz.',
        clozeSentence: 'In Zeiten anhaltender beruflicher Belastung erweist sich psychische [...] als Schlüsselkompetenz.',
        translationEn: 'In times of persistent occupational strain, psychological resilience proves to be a key competence.',
        context: 'Arbeitspsychologie'
      }
    ],
    activeRecallPrompt: 'Welches C1-Fachwort beschreibt die Fähigkeit des Menschen, Schicksalsschläge und Stress flexibel abzufedern?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  // Additional Polysemous Verbs
  {
    id: 'poly-9',
    word: 'ergeben',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Als Resultat hervorbringen/zeigen; 2) sich jemandem ergeben (kapitulieren); 3) sich ergeben aus (resultieren/hervorgehen).',
    definitionEn: '1) To yield/show as a result; 2) reflexiv: to surrender/yield; 3) sich ergeben aus = to result or arise from.',
    register: 'Bildungssprachlich',
    collocation: 'ein Resultat ergeben / sich aus den Umständen ergeben / sich dem Schicksal ergeben',
    synonyms: ['resultieren', 'kapitulieren', 'hervorgehen', 'einbringen'],
    antonyms: ['widerstehen'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-9-m1',
        number: 1,
        definitionDe: 'Als Resultat einer Untersuchung, Berechnung oder Analyse hervorbringen',
        definitionEn: 'To yield, demonstrate, or show as a result',
        nuance: 'Forschung & Statistik',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Die empirische Studie ergab eine signifikante Korrelation zwischen Schlafqualität und kognitiver Leistungsfähigkeit.',
        clozeSentence: 'Die empirische Studie [...] eine signifikante Korrelation zwischen Schlafqualität und kognitiver Leistungsfähigkeit.',
        translationEn: 'The empirical study revealed a significant correlation between sleep quality and cognitive performance.'
      },
      {
        id: 'poly-9-m2',
        number: 2,
        definitionDe: 'Aus einer Situation, Prämisse oder Tatsache logisch hervorgehen',
        definitionEn: 'To result from or arise logically from something',
        nuance: 'Logische Schlussfolgerung',
        grammarInfo: 'reflexiv: sich ergeben aus + Dat',
        exampleSentence: 'Aus den neuen gesetzlichen Vorgaben ergeben sich erhebliche finanzielle Mehrbelastungen für die Unternehmen.',
        clozeSentence: 'Aus den neuen gesetzlichen Vorgaben [...] erhebliche finanzielle Mehrbelastungen für die Unternehmen.',
        translationEn: 'Significant additional financial burdens for corporations result from the new statutory requirements.'
      },
      {
        id: 'poly-9-m3',
        number: 3,
        definitionDe: 'Den Widerstand aufgeben und kapitulieren',
        definitionEn: 'To surrender, capitulate, or yield to an opposing force',
        nuance: 'Konflikt & Kapitulation',
        grammarInfo: 'reflexiv: sich jemandem/etwas ergeben',
        exampleSentence: 'Angesichts der aussichtslosen militärischen Umzingelung beschlossen die Streitkräfte, sich bedingungslos zu ergeben.',
        clozeSentence: 'Angesichts der aussichtslosen militärischen Umzingelung beschlossen die Streitkräfte, sich bedingungslos zu [...].',
        translationEn: 'In light of the hopeless military encirclement, the armed forces decided to surrender unconditionally.'
      }
    ],
    examples: [
      {
        sentence: 'Die empirische Studie ergab eine signifikante Korrelation zwischen Schlafqualität und kognitiver Leistungsfähigkeit.',
        clozeSentence: 'Die empirische Studie [...] eine signifikante Korrelation zwischen Schlafqualität und kognitiver Leistungsfähigkeit.',
        translationEn: 'The empirical study revealed a significant correlation between sleep quality and cognitive performance.',
        context: 'Wissenschaftliche Methodik'
      }
    ],
    activeRecallPrompt: 'Welches C1-Verb bedeutet sowohl „als Ergebnis zeigen“ als auch reflexiv „daraus resultieren“ oder „kapitulieren“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-10',
    word: 'beziehen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Geldleistungen/Rente empfangen; 2) eine Wohnung/Räumlichkeit einziehen; 3) sich beziehen auf (Bezug nehmen); 4) mit Stoff überziehen.',
    definitionEn: '1) To draw/receive (income, pension, benefits); 2) To move into (premises); 3) sich beziehen auf = to refer/relate to; 4) To cover/upholster.',
    register: 'Formell',
    collocation: 'Gehalt beziehen / Stellung beziehen / eine Wohnung beziehen / sich auf Paragrafen beziehen',
    synonyms: ['empfangen', 'einziehen', 'verweisen', 'überziehen'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-10-m1',
        number: 1,
        definitionDe: 'Regelmäßige Zahlungen, Gehalt oder Sozialleistungen empfangen',
        definitionEn: 'To draw, collect, or receive regular income, pensions, or benefits',
        nuance: 'Finanzen & Arbeitsrecht',
        grammarInfo: 'transitiv + Akk (Rente/Gehalt beziehen)',
        exampleSentence: 'Bereits über zwei Millionen Bundesbürger beziehen derzeit eine staatliche Erwerbsminderungsrente.',
        clozeSentence: 'Bereits über zwei Millionen Bundesbürger [...] derzeit eine staatliche Erwerbsminderungsrente.',
        translationEn: 'Already over two million citizens currently receive a state disability pension.'
      },
      {
        id: 'poly-10-m2',
        number: 2,
        definitionDe: 'In eine Wohnung, ein Büro oder Gebäude einziehen',
        definitionEn: 'To move into or occupy a new residence or office',
        nuance: 'Wohnraum & Architektur',
        grammarInfo: 'transitiv + Akk (ein Gebäude beziehen)',
        exampleSentence: 'Nach mehrjähriger Renovierungsphase wird das Forschungszentrum im Herbst seinen Neubau beziehen.',
        clozeSentence: 'Nach mehrjähriger Renovierungsphase wird das Forschungszentrum im Herbst seinen Neubau [...].',
        translationEn: 'Following a multi-year renovation phase, the research center will move into its new building in the autumn.'
      },
      {
        id: 'poly-10-m3',
        number: 3,
        definitionDe: 'Auf einen Sachverhalt, eine Aussage oder Quelle Bezug nehmen',
        definitionEn: 'To refer, relate, or make reference to a statement or source',
        nuance: 'Wissenschaftlicher Diskurs',
        grammarInfo: 'reflexiv: sich beziehen auf + Akk',
        exampleSentence: 'Die Rechtsanwältin bezog sich in ihrem Plädoyer explizit auf ein Grundsatzurteil des Bundesverfassungsgerichts.',
        clozeSentence: 'Die Rechtsanwältin [...] sich in ihrem Plädoyer explizit auf ein Grundsatzurteil des Bundesverfassungsgerichts.',
        translationEn: 'In her closing argument, the attorney referred explicitly to a landmark ruling of the Federal Constitutional Court.'
      }
    ],
    examples: [
      {
        sentence: 'Die Rechtsanwältin bezog sich in ihrem Plädoyer explizit auf ein Grundsatzurteil des Bundesverfassungsgerichts.',
        clozeSentence: 'Die Rechtsanwältin [...] sich in ihrem Plädoyer explizit auf ein Grundsatzurteil des Bundesverfassungsgerichts.',
        translationEn: 'In her closing argument, the attorney referred explicitly to a landmark ruling of the Federal Constitutional Court.',
        context: 'Recht & Justiz'
      }
    ],
    activeRecallPrompt: 'Welches C1-Verb bedeutet sowohl „eine Rente empfangen“ als auch „in ein Gebäude einziehen“ und reflexiv „Bezug nehmen auf“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-11',
    word: 'anfallen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Kosten/Abfall/Aufgaben entstehen im Verlauf eines Prozesses; 2) jemanden aggressiv/körperlich angreifen.',
    definitionEn: '1) To accrue, accumulate, or arise (costs, waste, work); 2) To attack or assault physically.',
    register: 'Bildungssprachlich',
    collocation: 'Gebühren fallen an / Kosten fallen an / Sondermüll fällt an / vom Hund angefallen werden',
    synonyms: ['entstehen', 'aufkommen', 'angreifen', 'überfallen'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-11-m1',
        number: 1,
        definitionDe: 'Als Begleiterscheinung oder Notwendigkeit im Verlauf entstehen (Kosten, Abfälle, Arbeiten)',
        definitionEn: 'To accrue, accumulate, or be incurred during an operation',
        nuance: 'Wirtschaft & Projektmanagement',
        grammarInfo: 'intransitiv (etwas fällt an)',
        exampleSentence: 'Bei der Durchführung der klinischen Studien fallen unerwartet hohe Laborkosten an.',
        clozeSentence: 'Bei der Durchführung der klinischen Studien [...] unerwartet hohe Laborkosten [...].',
        translationEn: 'During the execution of clinical trials, unexpectedly high laboratory costs are incurred.'
      },
      {
        id: 'poly-11-m2',
        number: 2,
        definitionDe: 'Jemanden physisch mit Gewalt anspringen oder angreifen',
        definitionEn: 'To pounce upon, assault, or attack someone physically',
        nuance: 'Aggression & Übergriff',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Der Wachhund fiel den unbefugten Eindringling sofort an, als dieser den Zaun überwand.',
        clozeSentence: 'Der Wachhund [...] den unbefugten Eindringling sofort [...], als dieser den Zaun überwand.',
        translationEn: 'The guard dog immediately attacked the unauthorized intruder as he scaled the fence.'
      }
    ],
    examples: [
      {
        sentence: 'Bei der Durchführung der klinischen Studien fallen unerwartet hohe Laborkosten an.',
        clozeSentence: 'Bei der Durchführung der klinischen Studien [...] unerwartet hohe Laborkosten [...].',
        translationEn: 'During the execution of clinical trials, unexpectedly high laboratory costs are incurred.',
        context: 'Wirtschaft & Forschung'
      }
    ],
    activeRecallPrompt: 'Welches trennbare C1-Verb bedeutet sowohl „als Kosten oder Abfall entstehen“ als auch „jemanden körperlich attackieren“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  },
  {
    id: 'poly-12',
    word: 'ausmachen',
    wordClass: 'Verb',
    category: 'Mehrdeutige Wörter',
    level: 'C1',
    definitionDe: '1) Einen prozentualen Anteil bilden; 2) vereinbaren/absprechen; 3) stören/belasten (etwas macht jemandem etwas aus); 4) erkennen/orten; 5) ausschalten.',
    definitionEn: '1) To account for/constitute; 2) To agree upon; 3) To mind/matter; 4) To discern/spot; 5) To turn off.',
    register: 'Bildungssprachlich',
    collocation: 'einen Betrag ausmachen / einen Termin ausmachen / das Wesen einer Sache ausmachen',
    synonyms: ['betragen', 'vereinbaren', 'erkennen', 'stören'],
    isPolysemous: true,
    polysemyMeanings: [
      {
        id: 'poly-12-m1',
        number: 1,
        definitionDe: 'Einen quantitativen Anteil an einer Gesamtheit darstellen oder betragen',
        definitionEn: 'To constitute, represent, or account for a percentage/fraction of a whole',
        nuance: 'Statistik & Ökonomie',
        grammarInfo: 'transitiv + Akk',
        exampleSentence: 'Erneuerbare Energieträger machen mittlerweile über fünfzig Prozent des gesamten Stromverbrauchs aus.',
        clozeSentence: 'Erneuerbare Energieträger [...] mittlerweile über fünfzig Prozent des gesamten Stromverbrauchs [...].',
        translationEn: 'Renewable energy sources now account for over fifty percent of total electricity consumption.'
      },
      {
        id: 'poly-12-m2',
        number: 2,
        definitionDe: 'Etwas verbindlich vereinbaren oder aushandeln',
        definitionEn: 'To settle, fix, or arrange an agreement or appointment',
        nuance: 'Verhandlung & Absprache',
        grammarInfo: 'transitiv + Akk (einen Termin/Treffpunkt ausmachen)',
        exampleSentence: 'Die Delegationen machten Stillschweigen über die Zwischenstände der diplomatischen Verhandlungen aus.',
        clozeSentence: 'Die Delegationen [...] Stillschweigen über die Zwischenstände der diplomatischen Verhandlungen [...].',
        translationEn: 'The delegations agreed on confidentiality regarding the interim status of diplomatic negotiations.'
      },
      {
        id: 'poly-12-m3',
        number: 3,
        definitionDe: 'Das wesentliche Kennzeichen oder den Kern einer Sache begründen',
        definitionEn: 'To constitute the essence or defining core of something',
        nuance: 'Philosophie & Wesensbestimmung',
        grammarInfo: 'transitiv + Akk (das Wesen ausmachen)',
        exampleSentence: 'Gerade die offene Fehlerkultur macht den wahren Innovationsgeist erfolgreicher Start-ups aus.',
        clozeSentence: 'Gerade die offene Fehlerkultur [...] den wahren Innovationsgeist erfolgreicher Start-ups [...].',
        translationEn: 'It is precisely the open failure culture that constitutes the true innovative spirit of successful startups.'
      },
      {
        id: 'poly-12-m4',
        number: 4,
        definitionDe: 'Jemanden emotional belasten, stören oder Unbehagen bereiten',
        definitionEn: 'To bother, trouble, or matter to someone (usually in questions or negatives)',
        nuance: 'Befindlichkeit & Höflichkeit',
        grammarInfo: 'jemandem (Dat) etwas ausmachen',
        exampleSentence: 'Es macht dem Dozenten überhaupt nichts aus, wenn kritische Zwischenfragen während des Vortrags gestellt werden.',
        clozeSentence: 'Es [...] dem Dozenten überhaupt nichts [...], wenn kritische Zwischenfragen während des Vortrags gestellt werden.',
        translationEn: 'It does not bother the lecturer at all if critical questions are asked during the presentation.'
      }
    ],
    examples: [
      {
        sentence: 'Erneuerbare Energieträger machen mittlerweile über fünfzig Prozent des gesamten Stromverbrauchs aus.',
        clozeSentence: 'Erneuerbare Energieträger [...] mittlerweile über fünfzig Prozent des gesamten Stromverbrauchs [...].',
        translationEn: 'Renewable energy sources now account for over fifty percent of total electricity consumption.',
        context: 'Wirtschaft & Umwelt'
      }
    ],
    activeRecallPrompt: 'Welches vielschichtige Verb bedeutet „einen Prozentsatz betragen“, „das Wesen begründen“ und „jemandem etwas ausmachen“?',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  }
];

export const INITIAL_GOETHE_C1_VOCABULARY: VocabularyItem[] = [
  ...POLYSEMOUS_AND_CORE_ITEMS,
  ...C1VERBSBATCH1,
  ...C1VERBSBATCH2,
  ...C1VERBSBATCH3
];

