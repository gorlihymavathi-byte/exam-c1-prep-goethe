import { PrefixFamily } from '../types';

export const FINAL_PREFIX_FAMILIES: PrefixFamily[] = [
  // ==========================================
  // FAMILY: HALTEN
  // ==========================================
  {
    rootVerb: 'halten',
    rootMeaningDe: 'Festhalten, standhalten, währen, einschätzen',
    rootMeaningEn: 'To hold, keep, stop, deem, maintain, sustain',
    descriptionDe: '»halten« ist ein Kernbegriff für Vereinbarungen (einhalten), Vorträge (abhalten) und Resilienz (durchhalten).',
    descriptionEn: 'The root "halten" forms essential terms for compliance with agreements, holding symposiums, and mental resilience.',
    verbsCount: 11,
    verbs: [
      {
        id: 'pref-halten-einhalten',
        word: 'einhalten',
        baseRootVerb: 'halten',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Justiz',
        primaryDefinitionDe: 'Rechtsnormen, Fristen oder vertragliche Zusagen gewissenhaft respektieren',
        primaryDefinitionEn: 'To observe, comply with, adhere to, or meet deadlines and legal norms',
        collocation: 'gesetzliche Fristen penibel einhalten; ein Versprechen einhalten; das Tempolimit einhalten',
        synonyms: ['befolgen', 'respektieren', 'wahren', 'erfüllen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine verbindliche vertragliche Frist oder gesetzliche Verpflichtung pünktlich erfüllen',
            definitionEn: 'To adhere to, comply with, or respect statutory deadlines or treaty stipulations',
            nuance: 'Rechtstreue & Verlässlichkeit',
            grammarInfo: 'transitiv + Akk (Fristen / Verträge einhalten)',
            exampleSentence: 'Alle Vertragsparteien sind verpflichtet, die vereinbarten Lieferfristen strikt einzuhalten.',
            clozeSentence: 'Alle Parteien müssen die Lieferfristen strikt [...].',
            translationEn: 'All contracting parties are obligated to strictly adhere to the agreed delivery deadlines.'
          }
        ]
      },
      {
        id: 'pref-halten-abhalten',
        word: 'abhalten',
        baseRootVerb: 'halten',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Wissenschaftliche Konferenzen/Wahlen durchführen oder jemanden von Fehlern abhalten',
        primaryDefinitionEn: 'To convene/hold symposiums and elections, or dissuade/prevent someone from doing something',
        collocation: 'eine Konferenz / Wahlen abhalten; jemanden von einer Dummheit abhalten',
        synonyms: ['durchführen', 'veranstalten', 'hindern', 'abbringen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine offizielle wissenschaftliche Tagung, Vorlesung oder Wahlversammlung veranstalten',
            definitionEn: 'To hold, conduct, convene, or stage an academic symposium or formal election',
            nuance: 'Akademischer Betrieb & Politik',
            grammarInfo: 'transitiv + Akk (eine Tagung / Abstimmung abhalten)',
            exampleSentence: 'Die Akademie wird ihr jährliches Kolloquium im historischen Festsaal abhalten.',
            clozeSentence: 'Die Akademie wird ihr Kolloquium im Festsaal [...].',
            translationEn: 'The academy will hold its annual colloquium in the historic banquet hall.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine Person mit warnenden Worten oder sanftem Zwang an einer unüberlegten Tat hindern',
            definitionEn: 'To dissuade, deter, or restrain someone from making a disastrous mistake',
            nuance: 'Warnung & Schutz',
            grammarInfo: 'jemanden abhalten von + Dat',
            exampleSentence: 'Glücklicherweise konnte der Kollege ihn von einer vorschnellen Kündigung abhalten.',
            clozeSentence: 'Er konnte ihn von einer vorschnellen Kündigung [...].',
            translationEn: 'Fortunately, his colleague was able to dissuade him from a premature resignation.'
          }
        ]
      },
      {
        id: 'pref-halten-aufhalten',
        word: 'aufhalten',
        baseRootVerb: 'halten',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Einen gefährlichen Trend stoppen/bremsen oder sich an einem Ort verweilen',
        primaryDefinitionEn: 'To stem/arrest a negative development, or stay/sojourn in a location',
        collocation: 'den Klimawandel rechtzeitig aufhalten; sich in einer Metropole aufhalten',
        synonyms: ['stoppen', 'bremsen', 'inhibieren', 'verweilen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Das Fortschreiten einer Seuche, einer Krise oder eines feindlichen Vorstoßes blockieren',
            definitionEn: 'To halt, stem, check, or arrest the momentum of a crisis or epidemic',
            nuance: 'Krisenintervention',
            grammarInfo: 'transitiv + Akk (den Verfall aufhalten)',
            exampleSentence: 'Nur durch drastische globale Sparmaßnahmen lässt sich die Erderwärmung aufhalten.',
            clozeSentence: 'Nur so lässt sich die Erderwärmung noch [...].',
            translationEn: 'Only through drastic global measures can global warming be halted.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Vorübergehend an einem bestimmten geographischen Ort ansässig sein oder leben',
            definitionEn: 'To stay, reside, or sojourn temporarily in a city or country',
            nuance: 'Aufenthaltsrecht & Reisen',
            grammarInfo: 'sich aufhalten in + Dat',
            exampleSentence: 'Während des Forschungssemesters hielt sich die Professorin in Cambridge auf.',
            clozeSentence: 'Während des Semesters [...] sich die Professorin in Oxford [...].',
            translationEn: 'During her sabbatical, the professor resided in Cambridge.'
          }
        ]
      },
      {
        id: 'pref-halten-enthalten',
        word: 'enthalten',
        baseRootVerb: 'halten',
        prefix: 'ent-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Wesentliche Bestandteile beinhalten oder sich der Stimmabgabe enthalten',
        primaryDefinitionEn: 'To contain/comprise essential ingredients/elements, or abstain from voting',
        collocation: 'wertvolle Nährstoffe enthalten; sich bei der Abstimmung der Stimme enthalten',
        synonyms: ['beinhalten', 'umfassen', 'abstinieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Bestimmte Stoffe, Paragraphen oder Bedeutungsnuancen in sich bergen',
            definitionEn: 'To contain, encompass, or embody specific substances or stipulations',
            nuance: 'Analyse & Vertragswerk',
            grammarInfo: 'transitiv + Akk (Substanzen enthalten)',
            exampleSentence: 'Der Gesetzentwurf enthält strenge Sanktionen für Wirtschaftskriminalität.',
            clozeSentence: 'Der Entwurf [...] strenge Sanktionen für Vergehen.',
            translationEn: 'The draft legislation contains stringent sanctions for corporate crime.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Bei einem parlamentarischen Votum weder mit Ja noch mit Nein stimmen',
            definitionEn: 'To abstain from voting in a formal parliamentary or council ballot',
            nuance: 'Demokratie & Votum',
            grammarInfo: 'sich (Akk) der Stimme (Gen) enthalten',
            exampleSentence: 'Zahlreiche Abgeordnete der Opposition enthielten sich bei der finalen Abstimmung der Stimme.',
            clozeSentence: 'Viele Abgeordnete [...] sich der Stimme.',
            translationEn: 'Numerous opposition lawmakers abstained from voting in the final ballot.'
          }
        ]
      },
      {
        id: 'pref-halten-durchhalten',
        word: 'durchhalten',
        baseRootVerb: 'halten',
        prefix: 'durch-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Trotz extremer Erschöpfung oder Widrigkeiten standhaft bleiben',
        primaryDefinitionEn: 'To persevere, endure, hold out, or stay the course despite hardship',
        collocation: 'bis zum Ende tapfer durchhalten; die Isolation psychisch durchhalten',
        synonyms: ['ausharren', 'standhalten', 'durchstehen', 'persistieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine langwierige physische oder psychische Härteperiode ohne Resignation ertragen',
            definitionEn: 'To persevere, hold out, or stay resilient through extreme physical or mental ordeal',
            nuance: 'Resilienz & Willensstärke',
            grammarInfo: 'intransitiv (bis zum Ende durchhalten)',
            exampleSentence: 'Trotz des monatelangen Lockdowns hielten die Pflegekräfte mit bewundernswerter Disziplin durch.',
            clozeSentence: 'Die Pflegekräfte [...] mit Disziplin [...].',
            translationEn: 'Despite the months-long lockdown, healthcare workers persevered with admirable discipline.'
          }
        ]
      },
      {
        id: 'pref-halten-festhalten',
        word: 'festhalten',
        baseRootVerb: 'halten',
        prefix: 'fest-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Protokoll',
        primaryDefinitionDe: 'An Prinzipien unerschütterlich festhalten oder Vereinbarungen schriftlich fixieren',
        primaryDefinitionEn: 'To cling to principles steadfastly or record agreements in written protocols',
        collocation: 'am Kurs unerschütterlich festhalten; Beschlüsse im Protokoll festhalten',
        synonyms: ['beharren auf', 'protokollieren', 'fixieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Trotz gegenteiliger Meinungen unverändert an einer Überzeugung oder Tradition partizipieren',
            definitionEn: 'To cling to, adhere staunchly to, or insist on an established principle or course',
            nuance: 'Standhaftigkeit & Dogmatik',
            grammarInfo: 'festhalten an + Dat',
            exampleSentence: 'Die Parteispitze hielt unbeirrt an ihrem umstrittenen Reformkurs fest.',
            clozeSentence: 'Die Parteispitze [...] unbeirrt an ihrem Kurs [...].',
            translationEn: 'The party leadership clung steadfastly to its contentious course of reforms.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Wichtige Ergebnisse einer Sitzung zur dauerhaften Nachweisbarkeit schriftlich dokumentieren',
            definitionEn: 'To record, document, or take down decisions in official written minutes',
            nuance: 'Audit & Protokollführung',
            grammarInfo: 'transitiv + Akk (Ergebnisse schriftlich festhalten)',
            exampleSentence: 'Die Schriftführerin hielt alle Einwände der Mitglieder präzise im Protokoll fest.',
            clozeSentence: 'Die Schriftführerin [...] alle Einwände präzise [...].',
            translationEn: 'The secretary recorded all member objections precisely in the minutes.'
          }
        ]
      },
      {
        id: 'pref-halten-behalten',
        word: 'behalten',
        baseRootVerb: 'halten',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Im Gedächtnis memorieren, das Eigentum bewahren oder die Fassung wahren',
        primaryDefinitionEn: 'To retain in memory, keep ownership of assets, or maintain self-control',
        collocation: 'die Nerven / die Fassung behalten; Vokabeln dauerhaft im Gedächtnis behalten',
        synonyms: ['memorieren', 'behalten', 'wahren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Informationen oder Gelerntes im Langzeitgedächtnis fest verankern',
            definitionEn: 'To retain, memorize, or remember information permanently in long-term memory',
            nuance: 'Neurowissenschaft & Gedächtnis',
            grammarInfo: 'transitiv + Akk (Gedankengut im Gedächtnis behalten)',
            exampleSentence: 'Durch gezielte Wiederholungen behält das Gehirn komplexe C1-Strukturen mühelos.',
            clozeSentence: 'Durch Wiederholung [...] das Gehirn Strukturen dauerhaft.',
            translationEn: 'Through targeted repetitions, the brain effortlessly retains complex C1 structures.'
          }
        ]
      },
      {
        id: 'pref-halten-vorhalten',
        word: 'vorhalten',
        baseRootVerb: 'halten',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Jemandem moralische Vorwürfe machen oder Notfallkapazitäten bereithalten',
        primaryDefinitionEn: 'To reproach/rebuke someone for failures, or maintain reserve capacities on standby',
        collocation: 'jemandem sein Versagen vorhalten; Bettenkapazitäten für Notfälle vorhalten',
        synonyms: ['vorwerfen', 'rügen', 'bereitstellen', 'bevorraten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Jemandem seine Fehltritte oder Versäumnisse ungeschönt vor Augen führen',
            definitionEn: 'To reproach, castigate, or rebuke someone for their wrongdoing or failure',
            nuance: 'Moral & Tadel',
            grammarInfo: 'jemandem (Dat) ein Fehlverhalten (Akk) vorhalten',
            exampleSentence: 'Die Opposition hielt dem Minister seine widersprüchlichen Aussagen scharf vor.',
            clozeSentence: 'Die Opposition [...] dem Minister seine Aussagen scharf [...].',
            translationEn: 'The opposition sharply reproached the minister for his contradictory statements.'
          }
        ]
      },
      {
        id: 'pref-halten-unterhalten',
        word: 'unterhalten',
        baseRootVerb: 'halten',
        prefix: 'unter-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Diplomatische Beziehungen pflegen, Einrichtungen finanzieren oder ein Publikum amüsieren',
        primaryDefinitionEn: 'To maintain diplomatic relations/facilities, provide financial upkeep, or entertain an audience',
        collocation: 'diplomatische Beziehungen unterhalten; ein Opernhaus unterhalten; sich anregend unterhalten',
        synonyms: ['pflegen', 'finanzieren', 'alimentieren', 'amüsieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Regelmäßige formelle Kontakte zu anderen Staaten pflegen oder Kultureinrichtungen finanzieren',
            definitionEn: 'To maintain diplomatic relations, embassies, or cultural infrastructure financially',
            nuance: 'Diplomatie & Kulturförderung',
            grammarInfo: 'transitiv + Akk (Beziehungen / ein Institut unterhalten)',
            exampleSentence: 'Die beiden Staaten unterhalten seit dem Friedensabkommen enge diplomatische Beziehungen.',
            clozeSentence: 'Die Staaten [...] enge diplomatische Beziehungen.',
            translationEn: 'The two states have maintained close diplomatic relations since the peace accord.'
          }
        ]
      },
      {
        id: 'pref-halten-aushalten',
        word: 'aushalten',
        baseRootVerb: 'halten',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Schmerz, Druck oder Ambiguität standhaft ertragen, ohne zusammenzubrechen',
        primaryDefinitionEn: 'To endure, bear, tolerate, or withstand severe pain, pressure, or ambiguity',
        collocation: 'enormen Druck aushalten; Widersprüche gelassen aushalten; Schmerzen aushalten',
        synonyms: ['ertragen', 'tolerieren', 'erdulden', 'widerstehen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Schmerzhafte Erfahrungen oder Ambiguitäten mit psychischer Reife ertragen',
            definitionEn: 'To withstand, tolerate, or endure high pressure, discomfort, or cognitive dissonance',
            nuance: 'Ambiguitätstoleranz & Psychologie',
            grammarInfo: 'transitiv + Akk (Spannungen aushalten)',
            exampleSentence: 'Reife Persönlichkeiten vermögen es, widersprüchliche Meinungen gelassen auszuhalten.',
            clozeSentence: 'Reife Persönlichkeiten vermögen Spannungen gelassen [...].',
            translationEn: 'Mature personalities are able to withstand contradictory viewpoints with equanimity.'
          }
        ]
      },
      {
        id: 'pref-halten-anhalten',
        word: 'anhalten',
        baseRootVerb: 'halten',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Ein Zustand dauert an, ein Fahrzeug stoppen oder zu Sparsamkeit ermahnen (anhalten zu)',
        primaryDefinitionEn: 'A state persists/continues, stop a vehicle, or urge someone towards virtue (anhalten zu)',
        collocation: 'der Aufschwung hält weiter an; Kinder zu Sparsamkeit anhalten; den Atem anhalten',
        synonyms: ['fortdauern', 'persistieren', 'stoppen', 'ermahnen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein meteorologischer, konjunktureller oder gesundheitlicher Zustand dauert unvermindert fort',
            definitionEn: 'To persist, continue, or endure unabated (of economic trends or weather)',
            nuance: 'Prozessanalyse',
            grammarInfo: 'intransitiv (der Trend hält an)',
            exampleSentence: 'Wenn die Trockenheit noch länger anhält, drohen massive Ernteausfälle in der Region.',
            clozeSentence: 'Wenn die Dürre noch länger [...], drohen Ernteausfälle.',
            translationEn: 'If the drought persists any longer, massive crop failures threaten the region.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Jemanden mit pädagogischem Nachdruck zu Fleiß, Sorgfalt oder Sparsamkeit auffordern',
            definitionEn: 'To urge, admonish, or encourage someone towards diligence or prudence',
            nuance: 'Pädagogik & Disziplin',
            grammarInfo: 'jemanden anhalten zu + Dat',
            exampleSentence: 'Die Ausbilderin hielt die Auszubildenden zu größter Präzision bei der Arbeit an.',
            clozeSentence: 'Die Ausbilderin [...] die Lehrlinge zu Präzision [...].',
            translationEn: 'The instructor urged the apprentices towards utmost precision in their work.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY: NEHMEN
  // ==========================================
  {
    rootVerb: 'nehmen',
    rootMeaningDe: 'Ergreifen, fassen, empfangen, akzeptieren',
    rootMeaningEn: 'To take, seize, adopt, accept, assume',
    descriptionDe: '»nehmen« formt zentrale C1-Kollokationen: eine Haltung einnehmen, Hypothesen annehmen, sich Vorhaben vornehmen, Aufgaben übernehmen.',
    descriptionEn: 'The root "nehmen" produces key C1 collocations: adopting stances, accepting hypotheses, resolving projects, assuming roles.',
    verbsCount: 10,
    verbs: [
      {
        id: 'pref-nehmen-annehmen',
        word: 'annehmen',
        baseRootVerb: 'nehmen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Philosophie',
        primaryDefinitionDe: 'Eine Hypothese voraussetzen, ein Angebot/Kind adoptieren oder Ausmaße annehmen',
        primaryDefinitionEn: 'To assume/suppose a hypothesis, accept an offer/adopt, or assume proportions',
        collocation: 'eine begründete Vermutung annehmen; die Herausforderung mutig annehmen; Ausmaße annehmen',
        synonyms: ['supponieren', 'mutmaßen', 'akzeptieren', 'adoptieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Aus logischen Indizien schlussfolgern und etwas als wahrscheinlich voraussetzen',
            definitionEn: 'To assume, suppose, or presume on the basis of plausible inductive evidence',
            nuance: 'Epistemologie & Deduktion',
            grammarInfo: 'transitiv (man nimmt an, dass...)',
            exampleSentence: 'Die Ermittler nehmen an, dass der Täter über profunde Insiderkenntnisse verfügte.',
            clozeSentence: 'Die Ermittler [...] an, dass der Täter Insider war.',
            translationEn: 'Investigators assume that the perpetrator possessed profound insider knowledge.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'In bedrohlicher oder erfreulicher Weise einen neuen Umfang oder Charakter entwickeln',
            definitionEn: 'To take on, assume, or develop proportions, dimensions, or traits',
            nuance: 'Skalierung & Wandel',
            grammarInfo: 'Ausmaße / Dimensionen annehmen',
            exampleSentence: 'Die Überschwemmungen nahmen nach den sintflutartigen Regenfällen dramatische Ausmaße an.',
            clozeSentence: 'Die Fluten [...] dramatische Ausmaße [...].',
            translationEn: 'The flooding assumed dramatic proportions following the torrential rains.'
          }
        ]
      },
      {
        id: 'pref-nehmen-einnehmen',
        word: 'einnehmen',
        baseRootVerb: 'nehmen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Geopolitik',
        primaryDefinitionDe: 'Einen intellektuellen Standpunkt beziehen, Medikamente konsumieren oder Steuern erzielen',
        primaryDefinitionEn: 'To adopt a principled stance, ingest medicine, or collect tax revenues',
        collocation: 'einen kritischen Standpunkt einnehmen; eine feste Haltung einnehmen; Gelder einnehmen',
        synonyms: ['beziehen', 'konsumieren', 'erzielen', 'einverleiben'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'In einer ethischen oder wissenschaftlichen Kontroverse eine begründete Position beziehen',
            definitionEn: 'To adopt, assume, or occupy a reflective stance or intellectual viewpoint',
            nuance: 'Ethik & Debatte',
            grammarInfo: 'eine Haltung / Position einnehmen',
            exampleSentence: 'In der Debatte um Gentechnik nimmt der Ethikrat eine betont vorsichtige Haltung ein.',
            clozeSentence: 'Der Ethikrat [...] eine betont vorsichtige Haltung [...].',
            translationEn: 'In the debate surrounding genetic engineering, the ethics council adopts a markedly cautious stance.'
          }
        ]
      },
      {
        id: 'pref-nehmen-aufnehmen',
        word: 'aufnehmen',
        baseRootVerb: 'nehmen',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Geflüchtete gastfreundlich empfangen, Kontakte knüpfen, Kredite aufnehmen oder absorbieren',
        primaryDefinitionEn: 'To accommodate refugees, initiate contact/relations, take out loans, or absorb knowledge',
        collocation: 'diplomatische Beziehungen aufnehmen; einen Kredit aufnehmen; Wissen begierig aufnehmen',
        synonyms: ['beherbergen', 'anknüpfen', 'aufnehmen', 'absorbieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Verhandlungen, diplomatische Kontakte oder Gerichtsverfahren offiziell beginnen',
            definitionEn: 'To initiate, establish, or enter into diplomatic relations or negotiations',
            nuance: 'Diplomatie & Dialog',
            grammarInfo: 'Beziehungen / Verhandlungen aufnehmen mit + Dat',
            exampleSentence: 'Die beiden verfeindeten Nachbarstaaten nahmen nach Jahrzehnten wieder den Dialog auf.',
            clozeSentence: 'Die Nachbarstaaten [...] wieder den Dialog [...].',
            translationEn: 'Following decades, the two hostile neighbouring states entered into dialogue again.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Neue Informationen oder Sinneseindrücke kognitiv verarbeiten und internalisieren',
            definitionEn: 'To absorb, assimilate, or take in intellectual knowledge or sensory impressions',
            nuance: 'Kognitionspsychologie',
            grammarInfo: 'transitiv + Akk (Wissen aufnehmen)',
            exampleSentence: 'Ermüdete Studierende können nach stundenlangen Vorlesungen kaum noch neue Fakten aufnehmen.',
            clozeSentence: 'Die Studierenden können kaum noch Fakten [...].',
            translationEn: 'Exhausted students can barely absorb any new facts after hours of lectures.'
          }
        ]
      },
      {
        id: 'pref-nehmen-übernehmen',
        word: 'übernehmen',
        baseRootVerb: 'nehmen',
        prefix: 'über-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Wirtschaft',
        primaryDefinitionDe: 'Verantwortung mutig tragen, Konkurrenten aufkaufen oder sich überfordern (sich übernehmen)',
        primaryDefinitionEn: 'To shoulder responsibility, acquire corporate rivals, or overexert oneself',
        collocation: 'die volle Verantwortung übernehmen; ein Unternehmen feindlich übernehmen; sich finanziell übernehmen',
        synonyms: ['tragen', 'akquirieren', 'überlasten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Die moralische oder justizielle Haftung für Vorkommnisse vollumfänglich akzeptieren',
            definitionEn: 'To shoulder, assume, or take on full responsibility or liability for actions',
            nuance: 'Ethik & Governance',
            grammarInfo: 'transitiv + Akk (die Verantwortung übernehmen)',
            exampleSentence: 'Die Vorstandsvorsitzende übernahm die ungeteilte Verantwortung für das Scheitern des Projekts.',
            clozeSentence: 'Die Chefin [...] die ungeteilte Verantwortung.',
            translationEn: 'The chief executive officer assumed undivided responsibility for the project\'s failure.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sich durch zu hohe Arbeitspakete oder Schulden physisch bzw. finanziell ruinieren',
            definitionEn: 'To overextend, overstrain, or overexert oneself physically or financially',
            nuance: 'Gesundheit & Finanzrisiko',
            grammarInfo: 'sich übernehmen',
            exampleSentence: 'Wer ohne Vorbereitung an einem Marathon teilnimmt, übernimmt sich körperlich maßlos.',
            clozeSentence: 'Wer so antritt, [...] sich körperlich maßlos.',
            translationEn: 'Anyone participating in a marathon without training overexerts themselves physically to an extreme.'
          }
        ]
      },
      {
        id: 'pref-nehmen-vornehmen',
        word: 'vornehmen',
        baseRootVerb: 'nehmen',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Planmäßige Veränderungen durchführen oder sich verbindliche Ziele stecken',
        primaryDefinitionEn: 'To carry out alterations/inspections, or resolve/intend to achieve goals',
        collocation: 'eine gründliche Überprüfung vornehmen; sich fest vornehmen; jemanden ins Gebet nehmen',
        synonyms: ['durchführen', 'vollziehen', 'beabsichtigen', 'intendieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine formale Modifikation, Untersuchung oder Messung praktisch vollziehen',
            definitionEn: 'To carry out, perform, or execute an inspection, amendment, or audit',
            nuance: 'Audit & Verfahren',
            grammarInfo: 'transitiv + Akk (eine Änderung vornehmen)',
            exampleSentence: 'Der TÜV nahm eine gründliche Sicherheitsprüfung an den Bremsanlagen vor.',
            clozeSentence: 'Der Prüfer [...] eine Sicherheitsprüfung [...].',
            translationEn: 'The technical inspection association carried out a thorough safety audit on the braking systems.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen bindenden persönlichen Vorsatz für die persönliche Zukunft fassen',
            definitionEn: 'To resolve, intend, or set one\'s mind firmly upon an objective',
            nuance: 'Autonomie & Entschluss',
            grammarInfo: 'sich (Dat) etwas (Akk) vornehmen',
            exampleSentence: 'Die Nachwuchsforscherin hatte sich vorgenommen, das Manuskript vor dem Winter fertigzustellen.',
            clozeSentence: 'Sie hatte sich [...], das Werk fertigzustellen.',
            translationEn: 'The junior scholar had resolved to complete the manuscript before winter.'
          }
        ]
      },
      {
        id: 'pref-nehmen-entnehmen',
        word: 'entnehmen',
        baseRootVerb: 'nehmen',
        prefix: 'ent-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Labor',
        primaryDefinitionDe: 'Wissenschaftliche Proben gewinnen oder aus Texten deduzierend schlussfolgern',
        primaryDefinitionEn: 'To draw/take physical samples, or gather/deduce information from documents',
        collocation: 'eine Blutprobe fachgerecht entnehmen; aus den Berichten entnehmen',
        synonyms: ['gewinnen', 'extrahieren', 'schlussfolgern', 'ersehen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Aus geschriebenen Akten oder Tabellen eine wesentliche Schlussfolgerung ziehen',
            definitionEn: 'To deduce, gather, or infer insights from textual or numerical records',
            nuance: 'Hermeneutik & Analyse',
            grammarInfo: 'etwas entnehmen aus + Dat',
            exampleSentence: 'Aus der statistischen Erhebung lässt sich entnehmen, dass das Bildungsniveau stetig steigt.',
            clozeSentence: 'Aus den Daten lässt sich [...], dass Bildung zunimmt.',
            translationEn: 'From the statistical survey it can be gathered that educational levels are steadily rising.'
          }
        ]
      },
      {
        id: 'pref-nehmen-ausnehmen',
        word: 'ausnehmen',
        baseRootVerb: 'nehmen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Justiz',
        primaryDefinitionDe: 'Ausnahmen gestatten, jemanden von Pflichten befreien oder finanziell ausbeuten',
        primaryDefinitionEn: 'To exempt from obligations/rules, or fleece/exploit someone financially',
        collocation: 'Härtefälle von der Regelung ausnehmen; sich seltsam ausnehmen; jemanden ausnehmen',
        synonyms: ['exzedieren', 'befreien', 'privilegieren', 'ausbeuten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Bestimmte Personengruppen aus Billigkeitsgründen von einer gesetzlichen Abgabe befreien',
            definitionEn: 'To exempt someone or specific groups from statutory taxes or obligations',
            nuance: 'Verwaltungsrecht & Billigkeit',
            grammarInfo: 'jemanden ausnehmen von + Dat',
            exampleSentence: 'Geringverdiener und Studierende wurden von den zusätzlichen Abgaben ausgenommen.',
            clozeSentence: 'Studierende wurden von den Abgaben [...].',
            translationEn: 'Low-income earners and students were exempted from the supplementary levies.'
          }
        ]
      },
      {
        id: 'pref-nehmen-abnehmen',
        word: 'abnehmen',
        baseRootVerb: 'nehmen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Technik',
        primaryDefinitionDe: 'Werte sinken/verringern sich, bauliche Werke formell prüfen/abnehmen oder Lasten erleichtern',
        primaryDefinitionEn: 'To decline/diminish (rates), inspect and formally approve building works, or relieve a burden',
        collocation: 'die Nachfrage nimmt ab; ein Bauwerk bauaufsichtlich abnehmen; jemandem die Arbeit abnehmen',
        synonyms: ['sinken', 'schwinden', 'zertifizieren', 'abnehmen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Nach Fertigstellung eines Gebäudes oder einer Software die Konformität amtlich bescheinigen',
            definitionEn: 'To inspect, approve, and sign off formally on construction or software works',
            nuance: 'Bauvertragsrecht & Audit',
            grammarInfo: 'transitiv + Akk (ein Bauwerk abnehmen)',
            exampleSentence: 'Die Bauaufsichtsbehörde nahm die Brandschutzeinrichtungen des Neubaus ohne Beanstandung ab.',
            clozeSentence: 'Die Behörde [...] die Brandschutzanlagen ohne Mängel [...].',
            translationEn: 'The building inspection authority officially approved the new building\'s fire safety installations without complaint.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'In Intensität, Zahl oder Stärke stetig geringer werden',
            definitionEn: 'To decrease, wane, decline, or diminish in frequency or power',
            nuance: 'Tendenz & Statistik',
            grammarInfo: 'intransitiv (die Intensität nimmt ab)',
            exampleSentence: 'Im Zuge des demografischen Wandels nimmt die Zahl der Erwerbspersonen spürbar ab.',
            clozeSentence: 'Die Zahl der Erwerbspersonen [...] stetig [...].',
            translationEn: 'In the wake of demographic change, the working-age population is noticeably decreasing.'
          }
        ]
      },
      {
        id: 'pref-nehmen-benehmen',
        word: 'benehmen',
        baseRootVerb: 'nehmen',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Sich gesellschaftlich kultiviert verhalten oder jemanden der Besinnung berauben',
        primaryDefinitionEn: 'To conduct/behave oneself appropriately or deprive someone of consciousness',
        collocation: 'sich tadellos benehmen; der Schlag benahm ihm den Atem',
        synonyms: ['sich verhalten', 'auftreten', 'rauben'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Den gesellschaftlichen Konventionen und dem Ethos entsprechend fehlerlos agieren',
            definitionEn: 'To conduct oneself, behave, or comport oneself with dignity and etiquette',
            nuance: 'Soziologie & Anstand',
            grammarInfo: 'sich anständig / unmöglich benehmen',
            exampleSentence: 'Die Delegierten benahmen sich während der kontroversen Plenardebatte vorbildlich diszipliniert.',
            clozeSentence: 'Die Delegierten [...] sich während der Debatte vorbildlich.',
            translationEn: 'The delegates comported themselves with exemplary discipline during the controversial plenary debate.'
          }
        ]
      },
      {
        id: 'pref-nehmen-vernehmen',
        word: 'vernehmen',
        baseRootVerb: 'nehmen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Formell / Justiz',
        primaryDefinitionDe: 'Zeugen oder Beschuldigte polizeilich/richterlich verhören oder akustisch wahrnehmen',
        primaryDefinitionEn: 'To interrogate/examine witnesses or suspects officially, or perceive sounds faintly',
        collocation: 'einen Kronzeugen stundenlang vernehmen; eine leise Stimme vernehmen',
        synonyms: ['befragen', 'verhören', 'audieren', 'wahrnehmen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine Person im Rahmen eines Ermittlungsverfahrens formal befragen und protokollieren',
            definitionEn: 'To examine, interrogate, or question witnesses or defendants in criminal proceedings',
            nuance: 'Strafprozessrecht & Kriminalistik',
            grammarInfo: 'transitiv + Akk (Zeugen vernehmen)',
            exampleSentence: 'Der Ermittlungsrichter vernahm die Hauptzeugin unter Ausschluss der Öffentlichkeit.',
            clozeSentence: 'Der Richter [...] die Hauptzeugin unter Ausschluss der Öffentlichkeit.',
            translationEn: 'The investigating magistrate examined the key witness in camera.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY: FÜHREN
  // ==========================================
  {
    rootVerb: 'führen',
    rootMeaningDe: 'Leiten, lenken, geleiten, steuern',
    rootMeaningEn: 'To lead, guide, conduct, direct, manage',
    descriptionDe: '»führen« bildet das Vokabular für Exekutive, Logik und Inszenierung: ausführen, einführen, durchführen, überführen.',
    descriptionEn: 'The root "führen" forms terminology for executive execution, logic, and staging: executing plans, introducing systems, convicting suspects.',
    verbsCount: 8,
    verbs: [
      {
        id: 'pref-fuehren-ausfuehren',
        word: 'ausführen',
        baseRootVerb: 'führen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Befehle/Programme exekutieren, Güter exportieren oder Gedanken detailliert entfalten',
        primaryDefinitionEn: 'To execute orders/programs, export goods, or expound thoughts in detail',
        collocation: 'einen Beschluss exakt ausführen; Waren ins Ausland ausführen; Gedanken näher ausführen',
        synonyms: ['exekutieren', 'vollziehen', 'exportieren', 'präzisieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Arbeitsauftrag, Bauplan oder ein Computerprogramm präzise in die Tat umsetzen',
            definitionEn: 'To execute, implement, or perform a contract, order, or automated script',
            nuance: 'Projektmanagement & IT',
            grammarInfo: 'transitiv + Akk (Befehle ausführen)',
            exampleSentence: 'Der Generalunternehmer führte die Sanierungsmaßnahmen nach höchsten Standards aus.',
            clozeSentence: 'Der Bauherr [...] die Sanierung nach höchsten Standards [...].',
            translationEn: 'The general contractor executed the renovation measures to the highest standards.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'In einer Rede oder Dissertation ein Argument noch gründlicher und differenzierter vertiefen',
            definitionEn: 'To expound, elucidate, or elaborate upon an intellectual thesis in depth',
            nuance: 'Wissenschaftliche Rhetorik',
            grammarInfo: 'transitiv + Akk (eine These näher ausführen)',
            exampleSentence: 'Wie die Referentin in ihrem Vortrag treffend ausführte, bedingen sich Bildung und Wohlstand.',
            clozeSentence: 'Wie die Referentin treffend [...], bedingen sich beide Aspekte.',
            translationEn: 'As the speaker aptly expounded in her presentation, education and prosperity are mutually contingent.'
          }
        ]
      },
      {
        id: 'pref-fuehren-einfuehren',
        word: 'einführen',
        baseRootVerb: 'führen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Außenhandel',
        primaryDefinitionDe: 'Neue Gesetze/Technologien etablieren, Waren importieren oder Novizen einarbeiten',
        primaryDefinitionEn: 'To introduce/adopt new regulations or technologies, import commodities, or induct newcomers',
        collocation: 'eine CO2-Steuer einführen; Rohstoffe zollfrei einführen; jemanden in die Materie einführen',
        synonyms: ['etablieren', 'implementieren', 'importieren', 'initiieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein innovatives Verfahren, ein neues Gesetz oder ein IT-System in einer Institution etablieren',
            definitionEn: 'To introduce, launch, or establish an innovative policy, law, or digital system',
            nuance: 'Institutioneller Wandel',
            grammarInfo: 'transitiv + Akk (Standards einführen)',
            exampleSentence: 'Das Parlament plant, im nächsten Jahr eine umfassende Steuervereinfachung einzuführen.',
            clozeSentence: 'Das Parlament plant, eine Reform [...].',
            translationEn: 'Parliament plans to introduce a comprehensive tax simplification next year.'
          }
        ]
      },
      {
        id: 'pref-fuehren-durchfuehren',
        word: 'durchführen',
        baseRootVerb: 'führen',
        prefix: 'durch-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Empirie',
        primaryDefinitionDe: 'Wissenschaftliche Experimente, Audits oder Wahlen ordnungsgemäß abwickeln',
        primaryDefinitionEn: 'To conduct, carry out, or administer scientific trials, audits, or elections',
        collocation: 'eine empirische Studie durchführen; Inspektionen durchführen; Versuche durchführen',
        synonyms: ['veranstalten', 'vollziehen', 'abwickeln', 'vollstrecken'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine methodisch anspruchsvolle Versuchsreihe oder organisatorische Maßnahme realisieren',
            definitionEn: 'To conduct, perform, or administer an empirical study, audit, or experiment',
            nuance: 'Wissenschaftliche Praxis',
            grammarInfo: 'transitiv + Akk (eine Untersuchung durchführen)',
            exampleSentence: 'Das virologische Institut führte eine breit angelegte Antikörperstudie durch.',
            clozeSentence: 'Das Institut [...] eine breit angelegte Studie [...].',
            translationEn: 'The virological institute conducted a broad-based antibody study.'
          }
        ]
      },
      {
        id: 'pref-fuehren-anfuehren',
        word: 'anführen',
        baseRootVerb: 'führen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Rhetorik',
        primaryDefinitionDe: 'Statistiken/Beispiele als Beweis zitieren, eine Bewegung leiten oder jemanden täuschen',
        primaryDefinitionEn: 'To cite/quote examples or statistics as proof, lead a movement, or dupe someone',
        collocation: 'stichhaltige Argumente anführen; eine Demonstration anführen; die Tabelle anführen',
        synonyms: ['zitieren', 'beibringen', 'leiten', 'täuschen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Historische Beispiele, Zitate oder empirische Belege zur Untermauerung ins Feld führen',
            definitionEn: 'To cite, adduce, or quote pertinent examples or arguments in support of a claim',
            nuance: 'Rhetorik & Beweisführung',
            grammarInfo: 'Argumente / Beispiele anführen für + Akk',
            exampleSentence: 'Zur Untermauerung seiner These führte der Wissenschaftler neueste Messreihen an.',
            clozeSentence: 'Der Forscher [...] neueste Messreihen [...].',
            translationEn: 'In substantiation of his thesis, the scientist cited recent series of measurements.'
          }
        ]
      },
      {
        id: 'pref-fuehren-ueberfuehren',
        word: 'überführen',
        baseRootVerb: 'führen',
        prefix: 'über-',
        isSeparable: true,
        prefixTypeLabel: 'variabel',
        level: 'C1',
        register: 'Formell / Justiz',
        primaryDefinitionDe: 'Straftäter gerichtlich überführen (untrennbar) oder Systeme transformieren (trennbar)',
        primaryDefinitionEn: 'To convict/prove guilty beyond doubt (inseparable) or transfer/convert systems (separable)',
        collocation: 'den Täter der Tat überführen; die Forschung in die Praxis überführen',
        synonyms: ['der Schuld bezichtigen', 'nachweisen', 'transformieren', 'überleiten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Beschuldigten durch unanfechtbare DNA- oder Sachbeweise der Schuld überweisen',
            definitionEn: 'To convict, prove guilty, or nail a culprit on undeniable physical evidence (inseparable)',
            nuance: 'Kriminalistik & Justiz',
            grammarInfo: 'jemanden der Tat (Gen) überführen (untrennbar: er überführte ihn)',
            exampleSentence: 'Die Kriminalpolizei konnte den Serienbetrüger dank lückenloser Geldspur zweifelsfrei überführen.',
            clozeSentence: 'Die Polizei konnte den Täter zweifelsfrei [...].',
            translationEn: 'The criminal investigation department was able to convict the serial fraudster beyond doubt thanks to an unbroken money trail.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Theoretische Erkenntnisse oder Prototypen in die industrielle Serienfertigung transformieren',
            definitionEn: 'To transfer, convert, or transition research findings into industrial application (separable)',
            nuance: 'Wissens- und Technologietransfer',
            grammarInfo: 'etwas überführen in + Akk (trennbar: er führt es über)',
            exampleSentence: 'Es ist das Ziel der Bundesagentur, universitäre Patente zügig in marktfähige Produkte überzuführen.',
            clozeSentence: 'Ziel ist es, Patente in Produkte [...].',
            translationEn: 'It is the federal agency\'s goal to swiftly transition university patents into marketable products.'
          }
        ]
      },
      {
        id: 'pref-fuehren-auffuehren',
        word: 'aufführen',
        baseRootVerb: 'führen',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Kultur',
        primaryDefinitionDe: 'Ein Theaterstück auf der Bühne inszenieren, Punkte auflisten oder sich ungebührlich verhalten',
        primaryDefinitionEn: 'To perform/stage a play, itemize in a roster, or behave in an unseemly manner',
        collocation: 'ein Drama von Schiller aufführen; alle Kostenpunkte einzeln aufführen; sich unmöglich aufführen',
        synonyms: ['inszenieren', 'auflisten', 'aufführen', 'sich gebärden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein dramatisches oder musikalisches Kunstwerk vor zahlendem Publikum auf der Bühne spielen',
            definitionEn: 'To stage, perform, or put on a play, opera, or symphony before an audience',
            nuance: 'Theaterwissenschaft & Musik',
            grammarInfo: 'transitiv + Akk (ein Theaterstück aufführen)',
            exampleSentence: 'Das Burgtheater führt die Neuinszenierung von Goethes »Faust« im Oktober auf.',
            clozeSentence: 'Das Burgtheater [...] die Neuinszenierung im Oktober [...].',
            translationEn: 'The Burgtheater is staging the new production of Goethe\'s "Faust" in October.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sämtliche Positionen oder Argumente in einer formalen Tabelle detailliert verzeichnen',
            definitionEn: 'To list, enumerate, or itemize each cost or item systematically',
            nuance: 'Rechnungswesen & Inventar',
            grammarInfo: 'transitiv + Akk (Kosten einzeln aufführen)',
            exampleSentence: 'Im Kostenvoranschlag müssen alle Materialkosten transparent aufgeführt werden.',
            clozeSentence: 'Im Kostenvoranschlag müssen alle Kosten transparent [...] werden.',
            translationEn: 'In the cost estimate, all material expenses must be itemized transparently.'
          }
        ]
      },
      {
        id: 'pref-fuehren-abfuehren',
        word: 'abführen',
        baseRootVerb: 'führen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Fiskalisch',
        primaryDefinitionDe: 'Steuern an das Finanzamt transferieren oder Kriminelle in Handschellen eskortieren',
        primaryDefinitionEn: 'To remit/pay taxes to the exchequer or lead a suspect away in handcuffs',
        collocation: 'die Umsatzsteuer pünktlich abführen; den Festgenommenen in Handschellen abführen',
        synonyms: ['überweisen', 'entrichten', 'abtransportieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einbehaltene Steuern oder Sozialabgaben vorschriftsmäßig an die Staatskasse überweisen',
            definitionEn: 'To remit, pay over, or transfer statutory taxes or social contributions to the revenue office',
            nuance: 'Steuerrecht & Buchhaltung',
            grammarInfo: 'transitiv + Akk (Steuern abführen an + Akk)',
            exampleSentence: 'Arbeitgeber müssen die Lohnsteuer ihrer Angestellten monatlich an das Finanzamt abführen.',
            clozeSentence: 'Arbeitgeber müssen die Steuer an das Finanzamt [...].',
            translationEn: 'Employers must remit their employees\' income tax to the tax office on a monthly basis.'
          }
        ]
      },
      {
        id: 'pref-fuehren-verfuehren',
        word: 'verführen',
        baseRootVerb: 'führen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Jemanden zu unklugen Handlungen verleiten oder erotisch bezirzen',
        primaryDefinitionEn: 'To entice/lure someone into foolish deeds or seductively charm',
        collocation: 'zu unüberlegten Konsumausgaben verführen; jemanden verführen',
        synonyms: ['verleiten', 'verlocken', 'bezirzen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Jemanden durch geschickte Reize oder Verlockung zu einer schädlichen Fehlentscheidung manipulieren',
            definitionEn: 'To seduce, entice, or lure someone into making an imprudent or unprincipled choice',
            nuance: 'Konsumpsychologie & Ethik',
            grammarInfo: 'jemanden verführen zu + Dat',
            exampleSentence: 'Aggressive Online-Werbung verführt gerade junge Konsumenten zu fahrlässiger Verschuldung.',
            clozeSentence: 'Werbung [...] junge Konsumenten oft zu Schulden.',
            translationEn: 'Aggressive online advertising entices young consumers in particular into reckless debt.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY: GEBEN
  // ==========================================
  {
    rootVerb: 'geben',
    rootMeaningDe: 'Überreichen, schenken, mitteilen, existieren',
    rootMeaningEn: 'To give, impart, produce, exist, yield',
    descriptionDe: '»geben« erzeugt die elementaren Register für Zitate (wiedergeben), Eingeständnisse (zugeben), Verzicht (aufgeben) und Vortäuschung (vorgeben).',
    descriptionEn: 'The root "geben" yields pivotal vocabulary for reproducing citations, conceding errors, abandoning efforts, and feigning pretexts.',
    verbsCount: 10,
    verbs: [
      {
        id: 'pref-geben-wiedergeben',
        word: 'wiedergeben',
        baseRootVerb: 'geben',
        prefix: 'wieder-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Hermeneutik',
        primaryDefinitionDe: 'Den Sinn eines Textes sinngemäß oder wortgetreu reproduzieren',
        primaryDefinitionEn: 'To reproduce, recount, recite, or convey the meaning of a text faithfully',
        collocation: 'den Inhalt mit eigenen Worten wiedergeben; ein Zitat wortgetreu wiedergeben',
        synonyms: ['reproduzieren', 'paraphrasieren', 'referieren', 'abbilden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Den gedanklichen Gehalt einer Rede oder Abhandlung mit wissenschaftlicher Exaktheit nacherzählen',
            definitionEn: 'To reproduce, paraphrase, or recount the substantive essence of a work accurately',
            nuance: 'Textanalyse & Exegese',
            grammarInfo: 'transitiv + Akk (den Gedankengang wiedergeben)',
            exampleSentence: 'Die Rezensentin gab die Kernthese des philosophischen Werks prägnant und treffend wieder.',
            clozeSentence: 'Die Rezensentin [...] die These des Werks prägnant [...].',
            translationEn: 'The reviewer reproduced the core thesis of the philosophical work concisely and accurately.'
          }
        ]
      },
      {
        id: 'pref-geben-angeben',
        word: 'angeben',
        baseRootVerb: 'geben',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Fakten präzise deklarieren, Quellen spezifizieren oder prahlen',
        primaryDefinitionEn: 'To declare/state facts or sources precisely, or boast/brag ostentatiously',
        collocation: 'seine Personalien wahrheitsgemäß angeben; Quellen im Verzeichnis angeben; prahlerisch angeben',
        synonyms: ['deklarieren', 'spezifizieren', 'nennen', 'prahlen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'In einem amtlichen Dokument oder wissenschaftlichen Text genaue Daten oder Nachweise benennen',
            definitionEn: 'To state, specify, or declare precise facts, coordinates, or citations officially',
            nuance: 'Amtssprache & Bibliographie',
            grammarInfo: 'transitiv + Akk (Quellen / Gründe angeben)',
            exampleSentence: 'Bei der Beantragung des Reisepasses müssen Bürger ihren Wohnsitz exakt angeben.',
            clozeSentence: 'Bürger müssen ihren Wohnsitz exakt [...].',
            translationEn: 'When applying for a passport, citizens must specify their place of residence exactly.'
          }
        ]
      },
      {
        id: 'pref-geben-aufgeben',
        word: 'aufgeben',
        baseRootVerb: 'geben',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Die Hoffnung oder ein Projekt resigniert beenden, oder Postsendungen aufgeben',
        primaryDefinitionEn: 'To abandon/relinquish hopes or projects, or lodge parcels at the post office',
        collocation: 'die Hoffnung niemals aufgeben; ein Forschungsprojekt vorzeitig aufgeben; ein Paket aufgeben',
        synonyms: ['kapitulieren', 'aufgeben', 'abbrechen', 'einliefern'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen zähen Kampf, ein Ideal oder ein Unternehmen mangels Erfolgsaussichten einstellen',
            definitionEn: 'To relinquish, abandon, or give up on an ideal, endeavor, or struggle',
            nuance: 'Resignation & Realismus',
            grammarInfo: 'transitiv + Akk (einen Plan / die Hoffnung aufgeben)',
            exampleSentence: 'Trotz unzähliger Rückschläge weigerte sich die Wissenschaftlerin, ihre Forschung aufzugeben.',
            clozeSentence: 'Sie weigerte sich, ihre Forschung [...].',
            translationEn: 'Despite countless setbacks, the scientist refused to abandon her research.'
          }
        ]
      },
      {
        id: 'pref-geben-abgeben',
        word: 'abgeben',
        baseRootVerb: 'geben',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Bildungssprachlich',
        primaryDefinitionDe: 'Stellungnahmen offiziell verlautbaren, Stimmen abgeben oder Wärme emittieren',
        primaryDefinitionEn: 'To deliver a formal statement, cast an electoral vote, or emit heat/energy',
        collocation: 'eine Erklärung vor der Presse abgeben; seine Stimme bei der Wahl abgeben; Wärme abgeben',
        synonyms: ['verlautbaren', 'emittieren', 'überreichen', 'wählen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine offizielle Stellungnahme oder ein feierliches Bekenntnis öffentlich verkünden',
            definitionEn: 'To make, deliver, or issue an official statement before press or court',
            nuance: 'Diplomatie & Öffentlichkeitsarbeit',
            grammarInfo: 'eine Erklärung / ein Statement abgeben',
            exampleSentence: 'Der Regierungssprecher gab eine knappe Erklärung zur aktuellen Sicherheitslage ab.',
            clozeSentence: 'Der Sprecher [...] eine Erklärung zur Lage [...].',
            translationEn: 'The government spokesperson delivered a concise statement on the current security situation.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'In einem geheimen Wahlgang sein verfassungsrechtliches Votum vollziehen',
            definitionEn: 'To cast one\'s vote in an election or referendum',
            nuance: 'Demokratie & Wahlrecht',
            grammarInfo: 'seine Stimme abgeben',
            exampleSentence: 'Über achtzig Prozent der wahlberechtigten Bürger gaben bei der Volksabstimmung ihre Stimme ab.',
            clozeSentence: 'Die Bürger [...] bei der Wahl ihre Stimme [...].',
            translationEn: 'Over eighty percent of eligible citizens cast their vote in the referendum.'
          }
        ]
      },
      {
        id: 'pref-geben-vorgeben',
        word: 'vorgeben',
        baseRootVerb: 'geben',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Verbindliche Richtlinien vorschreiben oder falsche Tatsachen heuchlerisch vortäuschen',
        primaryDefinitionEn: 'To prescribe binding guidelines/standards, or feign/pretend pretexts deceptively',
        collocation: 'klare Richtlinien vorgeben; Krankheit heuchlerisch vorgeben; das Tempo vorgeben',
        synonyms: ['vorschreiben', 'stipulieren', 'fingieren', 'vortäuschen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Als vorgesetzte Instanz die einzuhaltenden Rahmenbedingungen verbindlich definieren',
            definitionEn: 'To dictate, prescribe, or set guidelines, benchmarks, or the operational pace',
            nuance: 'Governance & Normierung',
            grammarInfo: 'transitiv + Akk (Regeln / das Tempo vorgeben)',
            exampleSentence: 'Die EU-Kommission gibt strenge Qualitätsstandards für den Gewässerschutz vor.',
            clozeSentence: 'Die Kommission [...] strenge Standards für den Schutz [...].',
            translationEn: 'The EU Commission prescribes stringent quality standards for water protection.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen unwahren Sachverhalt oder eine Krankheit als Vorwand vortäuschen',
            definitionEn: 'To feign, pretend, or profess under false pretences',
            nuance: 'Täuschung & Heuchelei',
            grammarInfo: 'vorgeben zu sein / vorgeben, dass...',
            exampleSentence: 'Der Angeklagte gab vor, von den illegalen Machenschaften nichts gewusst zu haben.',
            clozeSentence: 'Der Angeklagte [...] vor, nichts gewusst zu haben.',
            translationEn: 'The defendant feigned not to have known anything about the illicit dealings.'
          }
        ]
      },
      {
        id: 'pref-geben-eingeben',
        word: 'eingeben',
        baseRootVerb: 'geben',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Informatik',
        primaryDefinitionDe: 'Digitale Daten in Masken einspeisen oder eine intuitive Eingebung empfangen',
        primaryDefinitionEn: 'To key in/input digital data into systems, or inspire an intuition into someone',
        collocation: 'Passwörter / Daten eingeben; eine göttliche Eingebung; was hat dich dazu eingegeben',
        synonyms: ['eintippen', 'einspeisen', 'inspirieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Numerische oder alphanumerische Parameter in ein Terminal oder Datenbanksystem eintragen',
            definitionEn: 'To input, key in, or enter alphanumeric parameters into an electronic interface',
            nuance: 'Informatik & Datenverarbeitung',
            grammarInfo: 'transitiv + Akk (Daten eingeben)',
            exampleSentence: 'Der Benutzer muss den kryptographischen Sicherheitsschlüssel vor dem Start eingeben.',
            clozeSentence: 'Der Benutzer muss den Sicherheitsschlüssel [...].',
            translationEn: 'The user must enter the cryptographic security key prior to launch.'
          }
        ]
      },
      {
        id: 'pref-geben-ausgeben',
        word: 'ausgeben',
        baseRootVerb: 'geben',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Finanzwesen',
        primaryDefinitionDe: 'Geld für Güter aufwenden, Wertpapiere emittieren oder sich fälschlich als Experte ausgeben',
        primaryDefinitionEn: 'To disburse/spend money, issue securities/bonds, or pose/pass oneself off as someone',
        collocation: 'Milliarden für Forschung ausgeben; neue Staatsanleihen ausgeben; sich als Arzt ausgeben',
        synonyms: ['aufwenden', 'emittieren', 'sich profilieren als', 'vorgeben zu sein'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Staatliche Anleihen, Aktien oder Urkunden offiziell in Umlauf bringen',
            definitionEn: 'To issue, float, or release government bonds, stocks, or credentials',
            nuance: 'Kapitalmarkt & Emission',
            grammarInfo: 'transitiv + Akk (Anleihen / Aktien ausgeben)',
            exampleSentence: 'Die Notenbank gab zur Stützung des Haushalts neue inflationsgebundene Anleihen aus.',
            clozeSentence: 'Die Notenbank [...] neue Anleihen [...].',
            translationEn: 'The central bank issued new inflation-linked bonds to support the budget.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Täuschend behaupten, man sei eine angesehene Amtsperson oder ein Experte',
            definitionEn: 'To pass oneself off, pose, or masquerade as a doctor, diplomat, or specialist',
            nuance: 'Hochstapelei & Identität',
            grammarInfo: 'sich ausgeben als/für + Akk',
            exampleSentence: 'Der Hochstapler gab sich über Monate hinweg als renommierter Chirurg aus.',
            clozeSentence: 'Der Hochstapler [...] sich als Chirurg [...].',
            translationEn: 'The impostor passed himself off as a prestigious surgeon over months.'
          }
        ]
      },
      {
        id: 'pref-geben-uebergeben',
        word: 'übergeben',
        baseRootVerb: 'geben',
        prefix: 'über-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Formell / Bildungssprachlich',
        primaryDefinitionDe: 'Ein Amt/Bauwerk feierlich überreichen oder sich erbrechen',
        primaryDefinitionEn: 'To formally hand over/deliver an office or infrastructure, or vomit',
        collocation: 'den Neubau seiner Bestimmung übergeben; die Amtsgeschäfte geordnet übergeben',
        synonyms: ['aushändigen', 'überantworten', 'überlassen', 'einweihen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein fertiges Großprojekt, ein Amt oder ein Gut feierlich der Nutzung überantworten',
            definitionEn: 'To formally hand over, dedicate, or consign infrastructure or an office to its users',
            nuance: 'Staatszeremoniell & Einweihung',
            grammarInfo: 'etwas (Akk) seiner Bestimmung / jemandem übergeben',
            exampleSentence: 'Der Ministerpräsident übergab die neue Hochgeschwindigkeitsstrecke feierlich ihrer Bestimmung.',
            clozeSentence: 'Der Ministerpräsident [...] die Strecke feierlich ihrer Bestimmung.',
            translationEn: 'The prime minister formally dedicated the new high-speed rail line to its service.'
          }
        ]
      },
      {
        id: 'pref-geben-vergeben',
        word: 'vergeben',
        baseRootVerb: 'geben',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Verwaltung',
        primaryDefinitionDe: 'Öffentliche Aufträge ausschreiben/zuschlagen oder Schuld großmütig verzeihen',
        primaryDefinitionEn: 'To award public contracts/tenders, or magnanimously forgive debts and offenses',
        collocation: 'öffentliche Bauaufträge vergeben; jemandem eine Verfehlung vergeben; Chancen vergeben',
        synonyms: ['zuschlagen', 'erteilen', 'allozieren', 'verzeihen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Nach einem transparenten Vergabeverfahren einen Staatsauftrag an einen Bieter zuschlagen',
            definitionEn: 'To award, assign, or allocate public contracts or academic prizes to bidders',
            nuance: 'Vergaberecht & Procurement',
            grammarInfo: 'einen Auftrag vergeben an + Akk',
            exampleSentence: 'Die Stadtverwaltung vergab den Großauftrag für die Schuldigitalisierung an ein lokales Konsortium.',
            clozeSentence: 'Die Stadtverwaltung [...] den Auftrag an ein lokales Konsortium.',
            translationEn: 'The city administration awarded the major contract for school digitization to a local consortium.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Aus sittlicher Großmut jemandem ein erlittenes Unrecht nicht länger anlasten',
            definitionEn: 'To forgive, pardon, or absolve someone magnanimously of their transgressions',
            nuance: 'Ethik & Versöhnung',
            grammarInfo: 'jemandem (Dat) etwas (Akk) vergeben',
            exampleSentence: 'Wahre Versöhnung erfordert den aufrichtigen Willen, historische Verbrechen zu vergeben.',
            clozeSentence: 'Versöhnung erfordert den Willen, Verbrechen zu [...].',
            translationEn: 'True reconciliation requires the sincere willingness to forgive historical crimes.'
          }
        ]
      },
      {
        id: 'pref-geben-begeben',
        word: 'begeben',
        baseRootVerb: 'geben',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Gehoben / Bildungssprachlich',
        primaryDefinitionDe: 'Sich räumlich an einen Ort begeben, in Gefahr geraten oder auf Rechte verzichten (sich begeben eines Rechts)',
        primaryDefinitionEn: 'To repair/proceed to a location, enter danger, or renounce/waive a right (genitive)',
        collocation: 'sich auf die Reise begeben; sich in Gefahr begeben; sich eines Rechts begeben',
        synonyms: ['hinbegeben', 'aufbrechen', 'verzichten auf', 'einwilligen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Zielgerichtet zu einem Ort aufbrechen oder sich in eine heikle Lage hineinbewegen',
            definitionEn: 'To betake oneself, proceed, or venture into an arena or precarious situation',
            nuance: 'Gehobener Stil & Diplomatie',
            grammarInfo: 'sich begeben nach/zu/in + Akk',
            exampleSentence: 'Die Delegation begab sich unverzüglich in das Hauptquartier der Friedensmission.',
            clozeSentence: 'Die Delegation [...] sich unverzüglich in das Hauptquartier.',
            translationEn: 'The delegation betook itself promptly to the headquarters of the peacekeeping mission.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Freiwillig und rechtswirksam auf einen Anspruch oder ein Vorrecht verzichten',
            definitionEn: 'To waive, renounce, or relinquish a legal claim or prerogative',
            nuance: 'Rechtsverzicht (Genitiv)',
            grammarInfo: 'sich eines Rechts / Anspruchs (Gen) begeben',
            exampleSentence: 'Mit dieser Unterschrift begibt sich der Erbe jeglicher künftiger Nachforderungen.',
            clozeSentence: 'Der Erbe [...] sich jeglicher Nachforderungen.',
            translationEn: 'With this signature, the heir waives any future supplementary claims.'
          }
        ]
      }
    ]
  }
];
