import { PrefixFamily, PrefixVerbItem, VocabularyItem } from '../types';
import { MORE_PREFIX_FAMILIES } from './prefixFamiliesMore';
import { FINAL_PREFIX_FAMILIES } from './prefixFamiliesFinal';

export const PREFIX_FAMILIES_DATA: PrefixFamily[] = [
  // ==========================================
  // FAMILY 1: SETZEN
  // ==========================================
  {
    rootVerb: 'setzen',
    rootMeaningDe: 'In eine sitzende Position bringen, platzieren, anwenden',
    rootMeaningEn: 'To set, put, place, seat, deploy',
    descriptionDe: 'Die Stammfamilie »setzen« gehört zu den nuancenreichsten C1-Wortfamilien des Deutschen. Durch Präfixe entstehen hochpräzise Rechts-, Wirtschafts-, und Alltagsbedeutungen.',
    descriptionEn: 'The root family "setzen" is one of the most expressive C1 word families in German. Prefixes generate precise legal, economic, and practical meanings.',
    verbsCount: 14,
    verbs: [
      {
        id: 'pref-setzen-einsetzen',
        word: 'einsetzen',
        baseRootVerb: 'setzen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Mittel oder Methoden anwenden, sich für eine Sache engagieren oder beginnen',
        primaryDefinitionEn: 'To deploy/use resources, advocate for something, or set in/commence',
        collocation: 'sich für den Klimaschutz einsetzen; Ressourcen gezielt einsetzen; das Einsetzen der Dämmerung',
        synonyms: ['anwenden', 'nutzen', 'sich engagieren', 'beginnen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ressourcen, Personal, Methoden oder finanzielle Mittel gezielt verwenden',
            definitionEn: 'To deploy, utilize, or employ resources, staff, or methods',
            nuance: 'Verwaltung, Wirtschaft & Strategie',
            grammarInfo: 'transitiv + Akk (Mittel/Methoden einsetzen)',
            exampleSentence: 'Die Regierung will zusätzliche Haushaltsmittel für die Sanierung von Schulen einsetzen.',
            clozeSentence: 'Die Regierung will zusätzliche Haushaltsmittel für die Sanierung von Schulen [...].',
            translationEn: 'The government intends to deploy additional budget funds for the renovation of schools.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sich leidenschaftlich und unermüdlich für Menschenrechte oder Ideale starkmachen',
            definitionEn: 'To advocate, champion, or stand up for a cause or people',
            nuance: 'Zivilgesellschaft & Ethik',
            grammarInfo: 'sich einsetzen für + Akk',
            exampleSentence: 'Zahlreiche Bürgerrechtler setzen sich mutig für den Schutz von Minderheiten ein.',
            clozeSentence: 'Zahlreiche Bürgerrechtler [...] sich mutig für den Schutz von Minderheiten [...].',
            translationEn: 'Numerous civil rights activists courageously stand up for the protection of minorities.'
          },
          {
            meaningNumber: 3,
            definitionDe: 'Etwas beginnt fühlbar (z.B. Wetterphänomene, Dämmerung, wirtschaftlicher Aufschwung)',
            definitionEn: 'To set in, commence, or begin noticeably',
            nuance: 'Natur & Prozesse',
            grammarInfo: 'intransitiv (etwas setzt ein)',
            exampleSentence: 'Mit dem Einsetzen des starken Schneefalls kam der gesamte Bahnverkehr zum Erliegen.',
            clozeSentence: 'Mit dem [...] des starken Schneefalls kam der gesamte Bahnverkehr zum Erliegen.',
            translationEn: 'With the onset of heavy snowfall, all train services ground to a halt.'
          },
          {
            meaningNumber: 4,
            definitionDe: 'Ein Gremium, ein Komitee oder einen Rechtsnachfolger offiziell berufen',
            definitionEn: 'To appoint or establish a committee, commission, or heir',
            nuance: 'Recht & Politik',
            grammarInfo: 'transitiv + Akk (einen Ausschuss / Erben einsetzen)',
            exampleSentence: 'Das Parlament setzte unverzüglich einen Untersuchungsausschuss zur Klärung der Affäre ein.',
            clozeSentence: 'Das Parlament [...] unverzüglich einen Untersuchungsausschuss zur Klärung der Affäre [...].',
            translationEn: 'Parliament promptly established a committee of inquiry to clarify the affair.'
          }
        ]
      },
      {
        id: 'pref-setzen-aussetzen',
        word: 'aussetzen',
        baseRootVerb: 'setzen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Eine Frist pausieren, Kritik üben (aussetzen an) oder Gefahren preisgeben',
        primaryDefinitionEn: 'To suspend payments/terms, find fault with something, or expose to danger',
        collocation: 'die Zinszahlungen aussetzen; etwas an einer Methode auszusetzen haben; einer Gefahr aussetzen',
        synonyms: ['unterbrechen', 'kritisieren', 'preisgeben', 'aussetzen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine Zahlungsfrist, ein Gerichtsverfahren oder eine Vollstreckung vorübergehend stoppen',
            definitionEn: 'To suspend, adjourn, or pause a procedure, term, or debt payment',
            nuance: 'Recht & Finanzwesen',
            grammarInfo: 'transitiv + Akk (ein Verfahren / Zahlungen aussetzen)',
            exampleSentence: 'Das Gericht beschloss, die Vollstreckung des Urteils bis zur Berufungsverhandlung auszusetzen.',
            clozeSentence: 'Das Gericht beschloss, die Vollstreckung des Urteils bis zur Verhandlung [...].',
            translationEn: 'The court decided to suspend enforcement of the judgment pending the appeal hearing.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen Mangel bemerken und Kritik an einer Leistung oder Verhaltensweise üben',
            definitionEn: 'To find fault with, object to, or criticize something',
            nuance: 'Kritik & Diskurs',
            grammarInfo: 'etwas auszusetzen haben an + Dat',
            exampleSentence: 'An der methodischen Exaktheit der Dissertation hatte die Prüfungskommission rein gar nichts auszusetzen.',
            clozeSentence: 'An der Exaktheit der Dissertation hatte die Kommission nichts [...].',
            translationEn: 'The examination committee had absolutely no fault to find with the methodological rigor of the dissertation.'
          },
          {
            meaningNumber: 3,
            definitionDe: 'Jemanden oder etwas schutzlos einer Bedrohung, Strahlung oder Witterung preisgeben',
            definitionEn: 'To expose someone or something to peril, radiation, or extreme elements',
            nuance: 'Umwelt, Medizin & Sicherheit',
            grammarInfo: 'jemanden/etwas (Akk) einer Gefahr (Dat) aussetzen',
            exampleSentence: 'Man darf die empfindlichen Messgeräte keinesfalls direkter Sonneneinstrahlung aussetzen.',
            clozeSentence: 'Man darf die Geräte keinesfalls direkter Sonneneinstrahlung [...].',
            translationEn: 'One must under no circumstances expose the delicate measuring instruments to direct sunlight.'
          }
        ]
      },
      {
        id: 'pref-setzen-umsetzen',
        word: 'umsetzen',
        baseRootVerb: 'setzen',
        prefix: 'um-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Wirtschaft',
        primaryDefinitionDe: 'Beschlüsse verwirklichen, Umsätze erwirtschaften oder räumlich versetzen',
        primaryDefinitionEn: 'To implement plans/policies, generate sales revenue, or reposition objects',
        collocation: 'einen Beschluss in die Tat umsetzen; Waren im Millionenwert umsetzen',
        synonyms: ['verwirklichen', 'realisieren', 'erwirtschaften', 'umstellen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Theoretische Pläne, Gesetze oder Strategien in die praktische Tat überführen',
            definitionEn: 'To implement, execute, or put into practice theoretical ideas or legislative acts',
            nuance: 'Politik, Management & Praxis',
            grammarInfo: 'transitiv + Akk (Pläne / Beschlüsse in die Tat umsetzen)',
            exampleSentence: 'Die Unternehmensführung muss die beschlossene Digitalisierungsstrategie nun zügig umsetzen.',
            clozeSentence: 'Die Führung muss die beschlossene Digitalisierungsstrategie nun zügig [...].',
            translationEn: 'Corporate management must now swiftly implement the adopted digitalization strategy.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'In einem Geschäftszeitraum einen bestimmten finanziellen Waren- oder Dienstleistungswert verkaufen',
            definitionEn: 'To turn over or generate a specific volume of sales revenue',
            nuance: 'Wirtschaft & Finanzen',
            grammarInfo: 'transitiv + Akk (Beträge umsetzen)',
            exampleSentence: 'Der Online-Händler setzte im vergangenen Quartal über fünfzig Millionen Euro um.',
            clozeSentence: 'Der Händler [...] im vergangenen Quartal über fünfzig Millionen Euro [...].',
            translationEn: 'The online retailer generated over fifty million euros in turnover in the past quarter.'
          }
        ]
      },
      {
        id: 'pref-setzen-ansetzen',
        word: 'ansetzen',
        baseRootVerb: 'setzen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Einen Termin terminieren, Kosten veranschlagen oder ein Problem an den Wurzeln packen',
        primaryDefinitionEn: 'To schedule a meeting, estimate costs, or tackle an issue at its source',
        collocation: 'eine Sitzung für Montag ansetzen; Kosten mit 10.000 Euro ansetzen; an den Ursachen ansetzen',
        synonyms: ['terminieren', 'veranschlagen', 'anpacken', 'beginnen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen festen Zeitpunkt für eine Verhandlung, Sitzung oder Gerichtsverhandlung festlegen',
            definitionEn: 'To schedule, fix, or set a date/time for a formal proceeding',
            nuance: 'Verwaltung & Recht',
            grammarInfo: 'transitiv + Akk (einen Termin ansetzen auf/für + Akk)',
            exampleSentence: 'Der Senat hat die mündliche Verhandlung für den kommenden Donnerstag angesetzt.',
            clozeSentence: 'Der Senat hat die Verhandlung für den Donnerstag [...].',
            translationEn: 'The senate has scheduled the oral hearing for next Thursday.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen geschätzten Wert, Preis oder Kostenrahmen kalkulatorisch zugrunde legen',
            definitionEn: 'To estimate, evaluate, or budget costs at a specific sum',
            nuance: 'Finanzplanung & Controlling',
            grammarInfo: 'etwas ansetzen mit + Dat',
            exampleSentence: 'Die Architekten setzten die Baukosten für das Projekt vorsichtig mit zehn Millionen Euro an.',
            clozeSentence: 'Die Architekten [...] die Baukosten vorsichtig mit zehn Millionen Euro [...].',
            translationEn: 'The architects prudently budgeted the construction costs for the project at ten million euros.'
          },
          {
            meaningNumber: 3,
            definitionDe: 'Strategisch an den fundamentalen Ursachen oder Hebeln eines Phänomens anfangen',
            definitionEn: 'To tackle or approach a problem right at its root causes',
            nuance: 'Wissenschaft & Gesellschaft',
            grammarInfo: 'ansetzen an + Dat',
            exampleSentence: 'Erfolgreiche Präventionsprogramme müssen direkt an den familiären Ursachen ansetzen.',
            clozeSentence: 'Erfolgreiche Präventionsprogramme müssen direkt an den Ursachen [...].',
            translationEn: 'Successful prevention programs must start directly at the familial root causes.'
          }
        ]
      },
      {
        id: 'pref-setzen-aufsetzen',
        word: 'aufsetzen',
        baseRootVerb: 'setzen',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Ein offizielles Schriftstück verfassen, auf dem Boden landen oder eine Miene auflegen',
        primaryDefinitionEn: 'To draft a legal contract/testament, touch down upon landing, or put on a face',
        collocation: 'einen Vertrag / ein Testament aufsetzen; sanft auf der Landebahn aufsetzen; ein Lächeln aufsetzen',
        synonyms: ['entwerfen', 'verfassen', 'landen', 'vortäuschen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Vertrag, ein juristisches Testament oder ein Protokoll formal ausarbeiten',
            definitionEn: 'To draft, draw up, or compose a legal contract, will, or official document',
            nuance: 'Recht & Notariat',
            grammarInfo: 'transitiv + Akk (einen Vertrag aufsetzen)',
            exampleSentence: 'Der Notar setzte den Grundstückskaufvertrag nach den Wünschen beider Parteien auf.',
            clozeSentence: 'Der Notar [...] den Grundstückskaufvertrag nach den Wünschen der Parteien [...].',
            translationEn: 'The notary drafted the real estate purchase agreement according to the wishes of both parties.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Mit den Rädern oder Kufen nach dem Flug den Boden berühren',
            definitionEn: 'To touch down upon landing (aircraft)',
            nuance: 'Luftfahrt & Verkehr',
            grammarInfo: 'intransitiv (auf der Piste aufsetzen)',
            exampleSentence: 'Trotz des heftigen Seitenwinds setzte die Passagiermaschine erstaunlich sanft auf.',
            clozeSentence: 'Trotz des Seitenwinds [...] die Passagiermaschine sanft [...].',
            translationEn: 'Despite the violent crosswind, the passenger aircraft touched down remarkably smoothly.'
          }
        ]
      },
      {
        id: 'pref-setzen-absetzen',
        word: 'absetzen',
        baseRootVerb: 'setzen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Einen Amtsträger entlassen, steuerlich geltend machen oder Waren verkaufen',
        primaryDefinitionEn: 'To depose from office, deduct from tax, or sell market goods',
        collocation: 'einen Diktator absetzen; Ausgaben von der Steuer absetzen; Produkte im Ausland absetzen',
        synonyms: ['entmachten', 'abziehen', 'vertreiben', 'abgrenzen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Jemanden von einem hohen politischen oder institutionellen Amt entheben',
            definitionEn: 'To depose, dismiss, or oust someone from high public office',
            nuance: 'Politik & Verfassungsrecht',
            grammarInfo: 'transitiv + Akk (einen Minister absetzen)',
            exampleSentence: 'Nach dem Misstrauensvotum setzte das Staatsoberhaupt das gesamte Kabinett ab.',
            clozeSentence: 'Nach dem Votum [...] das Staatsoberhaupt das gesamte Kabinett [...].',
            translationEn: 'Following the vote of no confidence, the head of state deposed the entire cabinet.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Berufliche Kosten mindernd beim zu versteuernden Einkommen geltend machen',
            definitionEn: 'To deduct business expenses from taxable income',
            nuance: 'Steuerrecht & Finanzen',
            grammarInfo: 'etwas von der Steuer absetzen',
            exampleSentence: 'Freiberufler können Anschaffungen für Arbeitsmittel vollständig von der Steuer absetzen.',
            clozeSentence: 'Freiberufler können Anschaffungen von der Steuer [...].',
            translationEn: 'Freelancers can deduct work equipment purchases entirely from their taxes.'
          },
          {
            meaningNumber: 3,
            definitionDe: 'Große Stückzahlen produzierter Güter auf dem Markt erfolgreich verkaufen',
            definitionEn: 'To sell or market goods in substantial volumes',
            nuance: 'Handel & Export',
            grammarInfo: 'transitiv + Akk (Waren absetzen)',
            exampleSentence: 'Der Konzern konnte in diesem Geschäftsjahr mehr Elektroautos absetzen als je zuvor.',
            clozeSentence: 'Der Konzern konnte mehr Elektroautos [...] als je zuvor.',
            translationEn: 'The conglomerate was able to sell more electric cars this fiscal year than ever before.'
          }
        ]
      },
      {
        id: 'pref-setzen-durchsetzen',
        word: 'durchsetzen',
        baseRootVerb: 'setzen',
        prefix: 'durch-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Seinen Willen gegen Widerstände durchbringen oder am Markt breite Akzeptanz finden',
        primaryDefinitionEn: 'To enforce one\'s will against opposition or establish oneself successfully',
        collocation: 'seine Forderungen durchsetzen; sich am Markt durchsetzen; von Fehlern durchsetzt',
        synonyms: ['erzwingen', 'Geltung verschaffen', 'sich etablieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine Richtlinie, Forderung oder Reform trotz massiver Gegenwehr zur Geltung bringen',
            definitionEn: 'To push through, enforce, or assert one\'s demands/policies against resistance',
            nuance: 'Politik & Verhandlung',
            grammarInfo: 'transitiv + Akk (seinen Willen durchsetzen)',
            exampleSentence: 'Der Verhandlungsführer konnte die geforderte Lohnerhöhung schließlich durchsetzen.',
            clozeSentence: 'Der Verhandlungsführer konnte die geforderte Lohnerhöhung schließlich [...].',
            translationEn: 'The chief negotiator was ultimately able to push through the demanded pay raise.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Allgemeine Anerkennung und Marktbeherrschung gegenüber Konkurrenten erlangen',
            definitionEn: 'To prevail, catch on, or become established in widespread usage',
            nuance: 'Wirtschaft & Soziologie',
            grammarInfo: 'sich durchsetzen',
            exampleSentence: 'Es dauerte mehrere Jahre, bis sich der neue technische Standard weltweit durchsetzte.',
            clozeSentence: 'Es dauerte mehrere Jahre, bis sich der Standard weltweit [...].',
            translationEn: 'It took several years before the new technical standard caught on worldwide.'
          }
        ]
      },
      {
        id: 'pref-setzen-besetzen',
        word: 'besetzen',
        baseRootVerb: 'setzen',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Territorien militärisch einnehmen, Stellen mit Fachkräften füllen oder Plätze belegen',
        primaryDefinitionEn: 'To occupy territory, staff a vacancy with experts, or occupy seats',
        collocation: 'ein Territorium besetzen; eine Professur hochkarätig besetzen; alle Plätze besetzt',
        synonyms: ['okkupieren', 'besetzen', 'besetzen mit'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Militärisch in ein fremdes Staatsgebiet einmarschieren und Kontrolle ausüben',
            definitionEn: 'To militarily occupy foreign territory or strategic strongholds',
            nuance: 'Geopolitik & Völkerrecht',
            grammarInfo: 'transitiv + Akk (ein Land / ein Gebäude besetzen)',
            exampleSentence: 'Die Truppen hielten das strategisch wichtige Grenzgebiet monatelang besetzt.',
            clozeSentence: 'Die Truppen hielten das wichtige Grenzgebiet monatelang [...].',
            translationEn: 'The troops held the strategically important border territory occupied for months.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine vakanzgewordene Führungs- oder Forschungsstelle mit einer geeigneten Person betrauen',
            definitionEn: 'To fill or staff a vacant post/chair with a distinguished individual',
            nuance: 'Personal & Wissenschaft',
            grammarInfo: 'eine Stelle besetzen mit + Dat',
            exampleSentence: 'Die Universität konnte den Lehrstuhl für Quantenphysik mit einer Spitzenforscherin besetzen.',
            clozeSentence: 'Die Universität konnte den Lehrstuhl mit einer Spitzenforscherin [...].',
            translationEn: 'The university was able to fill the chair of quantum physics with a top researcher.'
          }
        ]
      },
      {
        id: 'pref-setzen-ersetzen',
        word: 'ersetzen',
        baseRootVerb: 'setzen',
        prefix: 'er-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Etwas durch ein Besseres austauschen oder entstandenen Schaden wiedergutmachen',
        primaryDefinitionEn: 'To substitute/replace something or reimburse/compensate for damages',
        collocation: 'fossile Brennstoffe durch Solarstrom ersetzen; den Schaden in voller Höhe ersetzen',
        synonyms: ['substituieren', 'austauschen', 'entschädigen', 'vergüten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen veralteten oder unzureichenden Gegenstand durch ein moderneres Äquivalent ablösen',
            definitionEn: 'To replace, substitute, or supersede an outdated entity with a superior equivalent',
            nuance: 'Technologie & Wandel',
            grammarInfo: 'etwas (Akk) ersetzen durch + Akk',
            exampleSentence: 'Industrieländer müssen Kohlekraftwerke konsequent durch erneuerbare Energieträger ersetzen.',
            clozeSentence: 'Industrieländer müssen Kohlekraftwerke durch erneuerbare Energien [...].',
            translationEn: 'Industrialized countries must systematically replace coal-fired plants with renewable energy sources.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Jemandem den materiellen oder finanziellen Verlust ausgleichen',
            definitionEn: 'To reimburse, refund, or compensate for incurred damage or costs',
            nuance: 'Schadensersatzrecht & Versicherung',
            grammarInfo: 'jemandem (Dat) den Schaden (Akk) ersetzen',
            exampleSentence: 'Die Fluggesellschaft musste den Passagieren die Hotelkosten anstandslos ersetzen.',
            clozeSentence: 'Die Airline musste den Passagieren die Hotelkosten anstandslos [...].',
            translationEn: 'The airline had to reimburse the passengers for their hotel expenses without complaint.'
          }
        ]
      },
      {
        id: 'pref-setzen-versetzen',
        word: 'versetzen',
        baseRootVerb: 'setzen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Einen Mitarbeiter transferieren, in einen Zustand bringen oder jemanden warten lassen',
        primaryDefinitionEn: 'To transfer personnel, shift into a state of mind, or stand someone up',
        collocation: 'einen Beamten versetzen; jemanden in Erstaunen versetzen; jemanden versetzen (Treffen)',
        synonyms: ['transferieren', 'bewegen', 'stehenlassen', 'verpfänden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Angestellten oder Beamten an einen anderen Dienstort oder in eine andere Abteilung verlegen',
            definitionEn: 'To transfer, reassign, or relocate an employee or official to another branch',
            nuance: 'Arbeitsrecht & Verwaltung',
            grammarInfo: 'jemanden versetzen an/nach/in + Akk',
            exampleSentence: 'Auf eigenen Wunsch wurde die Diplomatin an die Botschaft in Tokio versetzt.',
            clozeSentence: 'Auf eigenen Wunsch wurde die Diplomatin an die Botschaft [...].',
            translationEn: 'At her own request, the diplomat was transferred to the embassy in Tokyo.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Bei jemandem ein starkes emotionales oder geistiges Befinden hervorrufen',
            definitionEn: 'To induce a specific mental state or plunge someone into panic/wonder',
            nuance: 'Psychologie & Kognition',
            grammarInfo: 'jemanden in Angst/Erstaunen/Aufruhr versetzen',
            exampleSentence: 'Die sensationellen Entdeckungen der Astrophysiker versetzten die Fachwelt in helles Erstaunen.',
            clozeSentence: 'Die Entdeckungen [...] die Fachwelt in helles Erstaunen [...].',
            translationEn: 'The sensational discoveries by astrophysicists threw the specialist community into sheer amazement.'
          }
        ]
      },
      {
        id: 'pref-setzen-vorsetzen',
        word: 'vorsetzen',
        baseRootVerb: 'setzen',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Jemandem einen Vorgesetzten bestimmen, Speisen servieren oder sich Ziele stecken',
        primaryDefinitionEn: 'To appoint a superior over someone, serve food, or resolve to achieve an aim',
        collocation: 'jemandem einen Vorgesetzten vorsetzen; den Gästen ein Mahl vorsetzen; sich ein Ziel vorsetzen',
        synonyms: ['überordnen', 'servieren', 'sich vornehmen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einer Arbeitsgruppe ohne Mitspracherecht eine leitende Führungskraft überordnen',
            definitionEn: 'To place someone superior above a team without their consent',
            nuance: 'Hierarchie & Organisation',
            grammarInfo: 'jemandem (Dat) jemanden (Akk) vorsetzen',
            exampleSentence: 'Die Belegschaft war empört darüber, dass man ihr einen externen Sanierer vorsetzte.',
            clozeSentence: 'Die Belegschaft war empört, dass man ihr einen Sanierer [...].',
            translationEn: 'The workforce was indignant that an external turnaround manager had been placed above them.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sich ein anspruchsvolles Vorhaben verbindlich zum persönlichen Ziel machen',
            definitionEn: 'To resolve or determine to achieve an ambitious objective',
            nuance: 'Motivation & Ethos',
            grammarInfo: 'sich (Dat) etwas (Akk) vorsetzen',
            exampleSentence: 'Die Wissenschaftlerin hatte sich fest vorgesetzt, die Habilitation in zwei Jahren abzuschließen.',
            clozeSentence: 'Die Forscherin hatte sich fest [...], die Arbeit zügig zu beenden.',
            translationEn: 'The scientist had firmly resolved to complete her postdoctoral qualification within two years.'
          }
        ]
      },
      {
        id: 'pref-setzen-zusetzen',
        word: 'zusetzen',
        baseRootVerb: 'setzen',
        prefix: 'zu-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Jemanden physisch oder seelisch strapazieren oder Substanzen beimischen',
        primaryDefinitionEn: 'To take a heavy toll on/afflict someone, or add an ingredient/substance',
        collocation: 'der Stress setzt ihr schwer zu; dem Gemisch Chemikalien zusetzen; finanziell zusetzen',
        synonyms: ['belasten', 'strapazieren', 'beimischen', 'beifügen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Jemandes körperliche oder psychische Widerstandskraft durch Belastung stark schwächen',
            definitionEn: 'To severely wear down, drain, or afflict someone physically or mentally',
            nuance: 'Gesundheit & Psychologie',
            grammarInfo: 'jemandem (Dat) schwer zusetzen',
            exampleSentence: 'Die wochenlange Schlaflosigkeit setzte der Gesundheit des Spitzenpolitikers sichtlich zu.',
            clozeSentence: 'Die wochenlange Schlaflosigkeit [...] der Gesundheit sichtlich [...].',
            translationEn: 'Weeks of insomnia visibly took a heavy toll on the leading politician\'s health.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einer chemischen Lösung oder einem Lebensmittel einen Stoff beimengen',
            definitionEn: 'To add or infuse a substance/reagent into a mixture or compound',
            nuance: 'Naturwissenschaft & Chemie',
            grammarInfo: 'einer Substanz (Dat) etwas (Akk) zusetzen',
            exampleSentence: 'Dem aufbereiteten Trinkwasser wurden geringe Spuren von Mineralien zugesetzt.',
            clozeSentence: 'Dem Trinkwasser wurden geringe Spuren von Mineralien [...].',
            translationEn: 'Trace amounts of minerals were added to the purified drinking water.'
          }
        ]
      },
      {
        id: 'pref-setzen-fortsetzen',
        word: 'fortsetzen',
        baseRootVerb: 'setzen',
        prefix: 'fort-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Bildungssprachlich',
        primaryDefinitionDe: 'Eine unterbrochene Handlung, Verhandlung oder Tradition weiterführen',
        primaryDefinitionEn: 'To resume, prolong, or continue an ongoing endeavor or tradition',
        collocation: 'die Friedensverhandlungen fortsetzen; eine wissenschaftliche Tradition fortsetzen',
        synonyms: ['weiterführen', 'wiederaufnehmen', 'prolongieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine begonnene oder pausierte Tätigkeit zielgerichtet weiterbetreiben',
            definitionEn: 'To resume or continue an ongoing action, negotiation, or academic research',
            nuance: 'Diplomatie & Projektarbeit',
            grammarInfo: 'transitiv + Akk (Verhandlungen fortsetzen)',
            exampleSentence: 'Nach der kurzen Unterbrechung setzten die Delegierten ihre Gespräche konstruktiv fort.',
            clozeSentence: 'Nach der Pause [...] die Delegierten ihre Gespräche [...].',
            translationEn: 'After the brief recess, the delegates constructively resumed their discussions.'
          }
        ]
      },
      {
        id: 'pref-setzen-nachsetzen',
        word: 'nachsetzen',
        baseRootVerb: 'setzen',
        prefix: 'nach-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Jemandem fliehendem nacheilen, nachdrängen oder Druck erhöhen',
        primaryDefinitionEn: 'To pursue, chase after, or aggressively press on after an opponent',
        collocation: 'dem Flüchtigen sofort nachsetzen; im Gefecht entschlossen nachsetzen',
        synonyms: ['verfolgen', 'nachjagen', 'nachdrängen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einem weichenden Kontrahenten oder Flüchtenden unverzüglich nachjagen',
            definitionEn: 'To immediately pursue, follow after, or press a retreating adversary',
            nuance: 'Sicherheit, Sport & Rhetorik',
            grammarInfo: 'jemandem (Dat) nachsetzen',
            exampleSentence: 'Die Polizeistreife setzte dem flüchtenden Bankräuber zu Fuß nach.',
            clozeSentence: 'Die Polizeistreife [...] dem flüchtenden Täter zu Fuß [...].',
            translationEn: 'The police patrol pursued the fleeing bank robber on foot.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY 2: STELLEN
  // ==========================================
  {
    rootVerb: 'stellen',
    rootMeaningDe: 'Aufrecht platzieren, in eine Position bringen, anordnen',
    rootMeaningEn: 'To stand, place, set upright, position, adjust',
    descriptionDe: '»stellen« bildet das Fundament für Kernverben der Formulierung, Entdeckung und institutionellen Organisation im C1-Bereich.',
    descriptionEn: 'The root "stellen" forms the backbone of essential C1 verbs governing discovery, presentation, and organizational action.',
    verbsCount: 14,
    verbs: [
      {
        id: 'pref-stellen-einstellen',
        word: 'einstellen',
        baseRootVerb: 'stellen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Personal rekrutieren, Arbeiten stoppen, ein Gerät justieren oder sich adaptieren',
        primaryDefinitionEn: 'To hire staff, cease operations, calibrate an instrument, or adapt oneself',
        collocation: 'hochqualifiziertes Personal einstellen; die Produktion einstellen; sich auf Risiken einstellen',
        synonyms: ['anstellen', 'beenden', 'justieren', 'sich anpassen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Arbeitskräfte vertraglich unter Vertrag nehmen',
            definitionEn: 'To hire, employ, or recruit qualified personnel',
            nuance: 'Arbeitsmarkt & HR',
            grammarInfo: 'transitiv + Akk (Mitarbeiter einstellen)',
            exampleSentence: 'Das Softwareunternehmen beabsichtigt, im kommenden Quartal fünfzig Ingenieure einzustellen.',
            clozeSentence: 'Das Unternehmen beabsichtigt, viele Ingenieure [...].',
            translationEn: 'The software company intends to hire fifty engineers in the upcoming quarter.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine fortlaufende Produktion, Zahlungen oder eine Tätigkeit endgültig stoppen',
            definitionEn: 'To discontinue, terminate, or shut down production or payments',
            nuance: 'Wirtschaft & Recht',
            grammarInfo: 'transitiv + Akk (den Betrieb / Zahlungen einstellen)',
            exampleSentence: 'Wegen mangelnder Rentabilität musste das Werk die Fabrikation des Modells einstellen.',
            clozeSentence: 'Das Werk musste die Fabrikation des Modells [...].',
            translationEn: 'Due to lack of profitability, the plant had to discontinue manufacturing that model.'
          },
          {
            meaningNumber: 3,
            definitionDe: 'Sich mental und praktisch auf veränderte Rahmenbedingungen vorbereiten',
            definitionEn: 'To adapt to, brace for, or attune oneself to upcoming challenges',
            nuance: 'Psychologie & Zukunftsforschung',
            grammarInfo: 'sich einstellen auf + Akk',
            exampleSentence: 'Die Landwirtschaft muss sich auf häufigere Dürreperioden und Starkregen einstellen.',
            clozeSentence: 'Die Landwirtschaft muss sich auf Dürreperioden [...].',
            translationEn: 'Agriculture must adapt to more frequent periods of drought and torrential rains.'
          }
        ]
      },
      {
        id: 'pref-stellen-ausstellen',
        word: 'ausstellen',
        baseRootVerb: 'stellen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Amtlich',
        primaryDefinitionDe: 'Kunstwerke präsentieren, Urkunden amtlich anfertigen oder Geräte abschalten',
        primaryDefinitionEn: 'To exhibit art, issue official documents/certificates, or turn off machines',
        collocation: 'Gemälde in der Galerie ausstellen; ein Visum / Zeugnis ausstellen; ein Gerät ausstellen',
        synonyms: ['präsentieren', 'exponieren', 'fertigen', 'abschalten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Kunstwerke oder innovative Produkte der Öffentlichkeit zugänglich darbieten',
            definitionEn: 'To exhibit or display artwork or technological inventions in public galleries',
            nuance: 'Kultur & Museologie',
            grammarInfo: 'transitiv + Akk (Exponate ausstellen)',
            exampleSentence: 'Die renommierte Kuratorin stellt zeitgenössische Skulpturen im Museum aus.',
            clozeSentence: 'Die Kuratorin [...] zeitgenössische Skulpturen im Museum [...].',
            translationEn: 'The renowned curator is exhibiting contemporary sculptures at the museum.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine offizielle Bescheinigung, einen Pass oder ein medizinisches Attest rechtsgültig verfassen',
            definitionEn: 'To issue, certify, or draw up an official license, certificate, or passport',
            nuance: 'Verwaltung & Medizin',
            grammarInfo: 'jemandem (Dat) ein Dokument (Akk) ausstellen',
            exampleSentence: 'Die Behörde stellte dem Diplomaten einen neuen Reisepass aus.',
            clozeSentence: 'Die Behörde [...] dem Diplomaten einen neuen Reisepass [...].',
            translationEn: 'The authorities issued a new passport to the diplomat.'
          }
        ]
      },
      {
        id: 'pref-stellen-darstellen',
        word: 'darstellen',
        baseRootVerb: 'stellen',
        prefix: 'dar-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Etwas bedeuten/sein, Sachverhalte visualisieren oder eine Theaterrolle verkörpern',
        primaryDefinitionEn: 'To constitute/represent, portray/illustrate concepts, or play an acting role',
        collocation: 'ein enormes Risiko darstellen; Zusammenhänge in einer Grafik darstellen',
        synonyms: ['verkörpern', 'konstituieren', 'schildern', 'abbilden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'In seiner Bedeutung eine Gefahr, Chance oder Herausforderung sein',
            definitionEn: 'To constitute, represent, or pose a risk, challenge, or opportunity',
            nuance: 'Wissenschaft & Analyse',
            grammarInfo: 'transitiv + Akk (ein Risiko / einen Fortschritt darstellen)',
            exampleSentence: 'Die Überhitzung der globalen Ökosysteme stellt eine existentielle Bedrohung dar.',
            clozeSentence: 'Die Überhitzung der Ökosysteme [...] eine Bedrohung [...].',
            translationEn: 'The overheating of global ecosystems represents an existential threat.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen komplizierten Sachverhalt mündlich, schriftlich oder bildlich veranschaulichen',
            definitionEn: 'To delineate, illustrate, or depict complex relations in text or graphics',
            nuance: 'Wissenschaft & Didaktik',
            grammarInfo: 'transitiv + Akk (Sachverhalte darstellen)',
            exampleSentence: 'In seinem Werk stellt der Historiker die Ursachen der Revolution detailliert dar.',
            clozeSentence: 'Der Historiker [...] die Ursachen der Revolution detailliert [...].',
            translationEn: 'In his work, the historian portrays the causes of the revolution in detail.'
          }
        ]
      },
      {
        id: 'pref-stellen-feststellen',
        word: 'feststellen',
        baseRootVerb: 'stellen',
        prefix: 'fest-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Eine Tatsache wissenschaftlich ermitteln, konstatieren oder Identitäten klären',
        primaryDefinitionEn: 'To ascertain/detect facts, state firmly in debate, or identify persons',
        collocation: 'eine signifikante Abweichung feststellen; treffend feststellen; Personalien feststellen',
        synonyms: ['konstatieren', 'verifizieren', 'bemerken', 'ermitteln'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Durch sorgfältige Analyse, Messung oder Beobachtung eine Wahrheit erkennen',
            definitionEn: 'To detect, ascertain, or verify an objective empirical fact',
            nuance: 'Empirie & Kriminologie',
            grammarInfo: 'transitiv + Akk (eine Veränderung feststellen)',
            exampleSentence: 'Die Labordiagnostik stellte eine bedenkliche Konzentration von Schadstoffen im Wasser fest.',
            clozeSentence: 'Das Labor [...] eine bedenkliche Konzentration von Schadstoffen [...].',
            translationEn: 'Laboratory diagnostics detected an alarming concentration of pollutants in the water.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'In einem akademischen oder politischen Diskurs eine Feststellung klar aussprechen',
            definitionEn: 'To state, declare, or remark emphatically in intellectual debate',
            nuance: 'Diskurs & Rhetorik',
            grammarInfo: 'feststellen, dass...',
            exampleSentence: 'Die Philosophin stellte treffend fest, dass technologischer Fortschritt ethischer Reflexion bedarf.',
            clozeSentence: 'Die Philosophin [...] treffend [...], dass Fortschritt Ethik bedarf.',
            translationEn: 'The philosopher aptly noted that technological progress necessitates ethical reflection.'
          }
        ]
      },
      {
        id: 'pref-stellen-aufstellen',
        word: 'aufstellen',
        baseRootVerb: 'stellen',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Theorien/Regeln formulieren, Denkmäler errichten oder Kandidaten nominieren',
        primaryDefinitionEn: 'To formulate hypotheses/rules, erect monuments, or field candidates',
        collocation: 'eine kühne Hypothese aufstellen; Verhaltensregeln aufstellen; einen Kandidaten aufstellen',
        synonyms: ['formulieren', 'postulieren', 'errichten', 'nominieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine wissenschaftliche Hypothese, ein Axiom oder Leitlinien definieren',
            definitionEn: 'To establish, put forward, or postulate a scientific hypothesis or code of conduct',
            nuance: 'Wissenschaftstheorie & Normen',
            grammarInfo: 'transitiv + Akk (eine Behauptung / These aufstellen)',
            exampleSentence: 'Die Forscher stellten die Hypothese auf, dass das Virus durch Aerosole übertragen wird.',
            clozeSentence: 'Die Forscher [...] die Hypothese [...], dass das Virus so übertragen wird.',
            translationEn: 'The researchers formulated the hypothesis that the virus is transmitted through aerosols.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen Parteikandidaten für ein politisches Mandat offiziell benennen',
            definitionEn: 'To nominate or field a candidate for public office or elections',
            nuance: 'Demokratie & Parteiwesen',
            grammarInfo: 'jemanden als Kandidaten aufstellen',
            exampleSentence: 'Der Parteitag stellte die erfahrene Juristin als Spitzenkandidatin für die Wahl auf.',
            clozeSentence: 'Der Parteitag [...] die Juristin als Spitzenkandidatin [...].',
            translationEn: 'The party convention nominated the experienced jurist as their lead candidate for the election.'
          }
        ]
      },
      {
        id: 'pref-stellen-abstellen',
        word: 'abstellen',
        baseRootVerb: 'stellen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Missstände beseitigen, Versorgung abschalten oder auf ein Ziel fokussieren (abstellen auf)',
        primaryDefinitionEn: 'To remedy abuses/defects, shut off utilities, or gear towards a goal',
        collocation: 'bürokratische Missstände abstellen; den Gashahn abstellen; auf die Bedürfnisse abstellen',
        synonyms: ['beseitigen', 'korrigieren', 'abschalten', 'fokussieren auf'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen unhaltbaren Fehler, einen Missstand oder Sicherheitsmangel sofort beheben',
            definitionEn: 'To remedy, eliminate, or put an end to an abuse, malpractice, or deficiency',
            nuance: 'Verwaltung & Qualitätskontrolle',
            grammarInfo: 'transitiv + Akk (Missstände / Mängel abstellen)',
            exampleSentence: 'Die Klinikleitung versprach, die personellen Engpässe im Pflegedienst umgehend abzustellen.',
            clozeSentence: 'Die Leitung versprach, die personellen Engpässe umgehend [...].',
            translationEn: 'The clinic management promised to remedy the nursing staffing shortages immediately.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Inhaltlich oder argumentativ speziell auf ein bestimmtes Kriterium ausrichten',
            definitionEn: 'To gear towards, focus on, or tailor argumentation around a criterion',
            nuance: 'Rechtsdogmatik & Rhetorik',
            grammarInfo: 'abstellen auf + Akk',
            exampleSentence: 'Das Bundesgericht stellte in seiner Urteilsbegründung maßgeblich auf das Kindeswohl ab.',
            clozeSentence: 'Das Gericht [...] in seiner Urteilsbegründung auf das Kindeswohl [...].',
            translationEn: 'In its statement of grounds, the federal court focused decisively on the best interests of the child.'
          }
        ]
      },
      {
        id: 'pref-stellen-vorstellen',
        word: 'vorstellen',
        baseRootVerb: 'stellen',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Sich etwas imaginieren, Personen bekannt machen oder ein Konzept präsentieren',
        primaryDefinitionEn: 'To imagine/conceive of, introduce persons, or present a project/concept',
        collocation: 'sich die Konsequenzen vorstellen; den neuen Direktor vorstellen; ein Projekt vorstellen',
        synonyms: ['imaginieren', 'präsentieren', 'bekanntmachen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein geistiges inneres Bild von zukünftigen Entwicklungen entwerfen',
            definitionEn: 'To imagine, picture, or conceive of future scenarios or consequences',
            nuance: 'Kognition & Vorstellungskraft',
            grammarInfo: 'sich (Dat) etwas (Akk) vorstellen',
            exampleSentence: 'Niemand konnte sich damals die dramatische Tragweite dieses Entschlusses vorstellen.',
            clozeSentence: 'Niemand konnte sich damals die Tragweite dieses Entschlusses [...].',
            translationEn: 'Nobody at that time could imagine the dramatic magnitude of that decision.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Ein ausgearbeitetes Konzept oder eine Forschungsstudie der Öffentlichkeit präsentieren',
            definitionEn: 'To present, showcase, or unveil a concept or study to a forum',
            nuance: 'Wissenschaft & Wirtschaft',
            grammarInfo: 'etwas (Akk) dem Publikum vorstellen',
            exampleSentence: 'Die Ingenieure stellten der Fachpresse ihren emissionsfreien Flugzeugantrieb vor.',
            clozeSentence: 'Die Ingenieure [...] der Fachpresse ihren neuartigen Antrieb [...].',
            translationEn: 'The engineers unveiled their zero-emission aircraft propulsion system to the trade press.'
          }
        ]
      },
      {
        id: 'pref-stellen-herstellen',
        word: 'herstellen',
        baseRootVerb: 'stellen',
        prefix: 'her-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Güter industriell produzieren oder Beziehungen/Ordnung schaffen',
        primaryDefinitionEn: 'To manufacture goods or establish relations/order/connections',
        collocation: 'Medikamente synthetisch herstellen; diplomatische Beziehungen herstellen; Ordnung herstellen',
        synonyms: ['produzieren', 'fabrizieren', 'etablieren', 'aufbauen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Industriell, pharmazeutisch oder handwerklich Fertigwaren erzeugen',
            definitionEn: 'To manufacture, synthesize, or produce goods or pharmaceuticals',
            nuance: 'Industrie & Pharmazie',
            grammarInfo: 'transitiv + Akk (Güter herstellen)',
            exampleSentence: 'Das Labor kann den Impfstoff in extrem großen Mengen kostengünstig herstellen.',
            clozeSentence: 'Das Labor kann den Impfstoff in großen Mengen [...].',
            translationEn: 'The laboratory can manufacture the vaccine in extremely large quantities cost-effectively.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen Kontakt, eine Verbindung oder geordnete Verhältnisse begründen',
            definitionEn: 'To establish contact, order, or diplomatic relations',
            nuance: 'Diplomatie & Governance',
            grammarInfo: 'transitiv + Akk (Verbindung / Ordnung herstellen)',
            exampleSentence: 'Nach den tagelangen Unruhen gelang es der Polizei, wieder Ruhe und Ordnung herzustellen.',
            clozeSentence: 'Der Polizei gelang es, wieder Ruhe und Ordnung [...].',
            translationEn: 'Following days of unrest, the police succeeded in restoring peace and order.'
          }
        ]
      },
      {
        id: 'pref-stellen-umstellen',
        word: 'umstellen',
        baseRootVerb: 'stellen',
        prefix: 'um-',
        isSeparable: true,
        prefixTypeLabel: 'variabel',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Gewohnheiten/Systeme transformieren oder ein Objekt militärisch einkreisen',
        primaryDefinitionEn: 'To reorganize/convert a system, or encircle/cordon off a building',
        collocation: 'die Ernährung auf vegan umstellen; das Gebäude von Einsatzkräften umstellen',
        synonyms: ['transformieren', 'reorganisieren', 'einkreisen', 'umringen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein Produktionsverfahren, Ernährungsgewohnheiten oder Computersysteme neu organisieren',
            definitionEn: 'To convert, adapt, or reorganize production or lifestyles (separable: um-stellen)',
            nuance: 'Transformation & Nachhaltigkeit',
            grammarInfo: 'etwas (Akk) umstellen auf + Akk (trennbar)',
            exampleSentence: 'Viele landwirtschaftliche Großbetriebe stellen ihre Bewirtschaftung auf Ökolandbau um.',
            clozeSentence: 'Viele Betriebe [...] ihre Bewirtschaftung auf Ökolandbau [...].',
            translationEn: 'Many large agricultural holdings are converting their operations to organic farming.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Ein Areal ringsherum mit Einsatzkräften abriegeln',
            definitionEn: 'To surround, encircle, or cordon off a building (inseparable: umstellen)',
            nuance: 'Sicherheitskräfte & Taktik',
            grammarInfo: 'transitiv + Akk (untrennbar: die Polizei umstellte das Haus)',
            exampleSentence: 'Spezialeinheiten der Polizei umstellten das Versteck der Verdächtigen geräuschlos.',
            clozeSentence: 'Spezialeinheiten [...] das Versteck der Verdächtigen geräuschlos.',
            translationEn: 'Police special forces noiselessly cordoned off the suspects\' hideout.'
          }
        ]
      },
      {
        id: 'pref-stellen-anstellen',
        word: 'anstellen',
        baseRootVerb: 'stellen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Mitarbeiter einstellen, systematische Überlegungen anstellen oder anstehen',
        primaryDefinitionEn: 'To employ staff, make reflections/inquiries, or line up in a queue',
        collocation: 'Überlegungen / Nachforschungen anstellen; sich in der Schlange anstellen',
        synonyms: ['beschäftigen', 'initiieren', 'durchführen', 'sich einreihen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Geistige Untersuchungen, wissenschaftliche Vergleiche oder Berechnungen durchführen',
            definitionEn: 'To carry out investigations, undertake reflections, or conduct comparisons',
            nuance: 'Wissenschaft & Kognition',
            grammarInfo: 'Nachforschungen / Überlegungen / Vergleiche anstellen',
            exampleSentence: 'Die Kriminalisten stellten umfangreiche Ermittlungen zum Tathergang an.',
            clozeSentence: 'Die Kriminalisten [...] umfangreiche Ermittlungen zum Tathergang [...].',
            translationEn: 'The criminologists conducted comprehensive inquiries into the course of events.'
          }
        ]
      },
      {
        id: 'pref-stellen-bereitstellen',
        word: 'bereitstellen',
        baseRootVerb: 'stellen',
        prefix: 'bereit-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Amtlich',
        primaryDefinitionDe: 'Geldmittel, Ressourcen oder Daten zur Nutzung verfügbar machen',
        primaryDefinitionEn: 'To allocate, disburse, or provide funding, resources, or datasets',
        collocation: 'Milliardenhilfen bereitstellen; Rohdaten zur freien Verfügung bereitstellen',
        synonyms: ['allokieren', 'zur Verfügung stellen', 'bereitstellen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Finanzielle Mittel oder Hilfsgüter für einen spezifischen Zweck allokieren',
            definitionEn: 'To disburse, allocate, or make funds or equipment readily available',
            nuance: 'Finanzpolitik & Logistik',
            grammarInfo: 'transitiv + Akk (Mittel bereitstellen für + Akk)',
            exampleSentence: 'Die Europäische Union stellt zusätzliche Milliardenhilfen für den Wiederaufbau bereit.',
            clozeSentence: 'Die EU [...] zusätzliche Milliardenhilfen für den Wiederaufbau [...].',
            translationEn: 'The European Union is allocating additional billions in aid for reconstruction.'
          }
        ]
      },
      {
        id: 'pref-stellen-klarstellen',
        word: 'klarstellen',
        baseRootVerb: 'stellen',
        prefix: 'klar-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Ein gravierendes Missverständnis oder eine Falschmeldung unmissverständlich korrigieren',
        primaryDefinitionEn: 'To clarify, elucidate, or set the record straight definitively',
        collocation: 'ein Missverständnis klarstellen; gegenüber den Medien unmissverständlich klarstellen',
        synonyms: ['präzisieren', 'berichtigen', 'richtigstellen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Vor der Öffentlichkeit eine verzerrte oder fehlerhafte Darstellung unzweideutig korrigieren',
            definitionEn: 'To rectify or clear up a distortion or misunderstanding in public discourse',
            nuance: 'Öffentlichkeitsarbeit & Recht',
            grammarInfo: 'transitiv + Akk (den Sachverhalt klarstellen)',
            exampleSentence: 'Der Ministeriumssprecher stellte auf der Pressekonferenz den tatsächlichen Sachverhalt klar.',
            clozeSentence: 'Der Sprecher [...] auf der Pressekonferenz den Sachverhalt [...].',
            translationEn: 'The ministry spokesperson clarified the actual facts at the press conference.'
          }
        ]
      },
      {
        id: 'pref-stellen-zustellen',
        word: 'zustellen',
        baseRootVerb: 'stellen',
        prefix: 'zu-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Amtlich',
        primaryDefinitionDe: 'Sendungen oder gerichtliche Vorladungen amtlich aushändigen oder Wege verbarrikadieren',
        primaryDefinitionEn: 'To officially serve/deliver court summons or block passageways',
        collocation: 'einen gerichtlichen Mahnbescheid zustellen; den Rettungsweg zustellen',
        synonyms: ['aushändigen', 'überbringen', 'blockieren', 'versperren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein Schriftstück mit rechtlicher Verbindlichkeit dem Empfänger förmlich übergeben',
            definitionEn: 'To officially serve or deliver legal documents or subpoenas',
            nuance: 'Justiz & Postwesen',
            grammarInfo: 'jemandem (Dat) ein Dokument (Akk) förmlich zustellen',
            exampleSentence: 'Der Gerichtsvollzieher stellte dem Schuldner die Pfändungsverfügung persönlich zu.',
            clozeSentence: 'Der Beamte [...] dem Schuldner die Verfügung persönlich [...].',
            translationEn: 'The bailiff served the attachment order to the debtor in person.'
          }
        ]
      },
      {
        id: 'pref-stellen-verstellen',
        word: 'verstellen',
        baseRootVerb: 'stellen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Die Sicht oder den Weg versperren, oder die eigene Persönlichkeit heuchlerisch verbergen',
        primaryDefinitionEn: 'To obstruct a view/path, or dissemble/disguise one\'s true character',
        collocation: 'die Aussicht verstellen; sich verstellen (Heuchelei); ein Instrument verstellen',
        synonyms: ['versperren', 'blockieren', 'heucheln', 'dejustieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Durchgang oder die freie Sicht durch ein Hindernis blockieren',
            definitionEn: 'To block, obstruct, or impede a walkway, doorway, or scenic vista',
            nuance: 'Architektur & Raum',
            grammarInfo: 'transitiv + Akk (die Sicht verstellen)',
            exampleSentence: 'Der neugebaute Betonkomplex verstellt den Anwohnern den Blick auf das Flusstal.',
            clozeSentence: 'Der Neubau [...] den Anwohnern den Blick auf das Flusstal.',
            translationEn: 'The newly built concrete complex obstructs the residents\' view of the river valley.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sein wahres Wesen, seine Gefühle oder Meinungen heuchlerisch maskieren',
            definitionEn: 'To dissemble, disguise one\'s true feelings, or pretend to be someone else',
            nuance: 'Charakter & Psychologie',
            grammarInfo: 'sich verstellen',
            exampleSentence: 'In Verhandlungen ist es fatal, sich unauthentisch zu verstellen; Aufrichtigkeit schafft Vertrauen.',
            clozeSentence: 'In Verhandlungen ist es fatal, sich zu [...].',
            translationEn: 'In negotiations, it is fatal to dissemble inauthentically; sincerity builds trust.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY 3: LEGEN
  // ==========================================
  {
    rootVerb: 'legen',
    rootMeaningDe: 'In eine horizontale Lage bringen, platzieren, investieren',
    rootMeaningEn: 'To lay, place flat, deposit, arrange, invest',
    descriptionDe: '»legen« erschließt Schlüsselfelder des Rechts (Widerspruch einlegen), der Wissenschaft (Thesen belegen) und der Ökonomie (Kapital anlegen).',
    descriptionEn: 'The root "legen" governs fundamental domains of law (filing appeals), science (substantiating hypotheses), and finance (investing capital).',
    verbsCount: 12,
    verbs: [
      {
        id: 'pref-legen-belegen',
        word: 'belegen',
        baseRootVerb: 'legen',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Akademisch',
        primaryDefinitionDe: 'Wissenschaftliche Thesen mit empirischen Beweisen untermauern oder Kurse buchen',
        primaryDefinitionEn: 'To substantiate/corroborate hypotheses with empirical evidence or enroll in courses',
        collocation: 'eine These mit Fakten belegen; ein Seminar an der Universität belegen; mit Zöllen belegen',
        synonyms: ['untermauern', 'nachweisen', 'verifizieren', 'einschreiben'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine theoretische Aussage durch empirische Messdaten oder historische Quellen stützen',
            definitionEn: 'To corroborate, verify, or substantiate a claim with hard evidence',
            nuance: 'Wissenschaft & Hermeneutik',
            grammarInfo: 'etwas (Akk) mit Beweisen belegen',
            exampleSentence: 'Die Forscherin konnte ihre soziologische Hypothese mit statistischen Langzeitdaten belegen.',
            clozeSentence: 'Die Forscherin konnte ihre These mit Daten [...].',
            translationEn: 'The researcher was able to substantiate her sociological hypothesis with long-term statistical data.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sich an einer Hochschule für ein Seminar oder Vorlesung verbindlich anmelden',
            definitionEn: 'To enroll in, register for, or take an academic university course',
            nuance: 'Hochschule & Studium',
            grammarInfo: 'transitiv + Akk (ein Seminar belegen)',
            exampleSentence: 'Im kommenden Sommersemester muss er noch zwei Proseminare in Erkenntnistheorie belegen.',
            clozeSentence: 'Er muss noch zwei Proseminare [...].',
            translationEn: 'In the coming summer semester, he still needs to take two introductory seminars in epistemology.'
          },
          {
            meaningNumber: 3,
            definitionDe: 'Importierte Handelsgüter mit staatlichen Zöllen oder Sondersteuern belasten',
            definitionEn: 'To impose or levy punitive tariffs or taxes on imports',
            nuance: 'Handelspolitik & Zölle',
            grammarInfo: 'etwas mit Zöllen belegen',
            exampleSentence: 'Die Regierung belegte den Import von Stahl mit empfindlichen Strafzöllen.',
            clozeSentence: 'Die Regierung [...] den Import von Stahl mit Strafzöllen.',
            translationEn: 'The government imposed sensitive punitive tariffs on the import of steel.'
          }
        ]
      },
      {
        id: 'pref-legen-anlegen',
        word: 'anlegen',
        baseRootVerb: 'legen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Finanzen',
        primaryDefinitionDe: 'Kapital gewinnbringend investieren, Gärten/Datenbanken konzipieren oder Schiffe festmachen',
        primaryDefinitionEn: 'To invest capital profitably, design archives/parks, or dock ships',
        collocation: 'Geld in Aktien anlegen; eine Datenbank systematisch anlegen; es auf Streit anlegen',
        synonyms: ['investieren', 'erschaffen', 'konzipieren', 'festmachen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Finanzielle Ersparnisse oder Vermögen zur Renditeerzielung investieren',
            definitionEn: 'To invest capital or wealth into stocks, bonds, or real estate',
            nuance: 'Finanzen & Portfoliomanagement',
            grammarInfo: 'Geld anlegen in + Dat',
            exampleSentence: 'Pensionsfonds legen große Vermögensteile in inflationsgeschützten Staatsanleihen an.',
            clozeSentence: 'Fonds [...] Vermögensteile in Staatsanleihen [...].',
            translationEn: 'Pension funds invest large portions of their assets into inflation-protected government bonds.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Ein komplexes Archiv, eine Datenbank oder eine Parkanlage planvoll strukturieren',
            definitionEn: 'To create, structure, or lay out an archive, database, or landscape park',
            nuance: 'Stadtplanung & Informatik',
            grammarInfo: 'transitiv + Akk (eine Datenbank anlegen)',
            exampleSentence: 'Die Bibliothekare legten ein digitales Verzeichnis aller Handschriften systematisch an.',
            clozeSentence: 'Die Bibliothekare [...] ein digitales Verzeichnis systematisch [...].',
            translationEn: 'The librarians systematically laid out a digital catalog of all manuscripts.'
          }
        ]
      },
      {
        id: 'pref-legen-darlegen',
        word: 'darlegen',
        baseRootVerb: 'legen',
        prefix: 'dar-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Gedanken, Strategien oder Argumente logisch und präzise auseinandersetzen',
        primaryDefinitionEn: 'To expound, elucidate, set forth, or present arguments clearly',
        collocation: 'seine Argumente überzeugend darlegen; die Beweggründe schlüssig darlegen',
        synonyms: ['erläutern', 'auseinandersetzen', 'exponieren', 'erklären'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'In einem Diskurs oder Gutachten eine komplexe Gedankenkette schlüssig entfalten',
            definitionEn: 'To set forth, expound, or clearly explain a complex line of reasoning',
            nuance: 'Rhetorik & Essayistik',
            grammarInfo: 'transitiv + Akk (seine Sichtweise darlegen)',
            exampleSentence: 'In seinem Plädoyer legte der Verteidiger die Zweifel an der Zeugenaussage brillant dar.',
            clozeSentence: 'Der Verteidiger [...] die Zweifel an der Zeugenaussage brillant [...].',
            translationEn: 'In his closing plea, the defense counsel brilliantly set forth the doubts regarding the witness testimony.'
          }
        ]
      },
      {
        id: 'pref-legen-einlegen',
        word: 'einlegen',
        baseRootVerb: 'legen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Justiz',
        primaryDefinitionDe: 'Förmlichen Rechtsmitteln/Widerspruch Ausdruck verleihen oder Pausen einschieben',
        primaryDefinitionEn: 'To lodge an appeal/objection against a ruling, or take a short break',
        collocation: 'Berufung / Widerspruch einlegen; eine schöpferische Pause einlegen; Veto einlegen',
        synonyms: ['anfechten', 'Widerspruch erheben', 'unterbrechen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Gegen eine behördliche oder richterliche Entscheidung ein formales Rechtsmittel ergreifen',
            definitionEn: 'To lodge an appeal, objection, or veto against an administrative decision',
            nuance: 'Prozessrecht & Staatsrecht',
            grammarInfo: 'Widerspruch / Berufung einlegen gegen + Akk',
            exampleSentence: 'Der Anwalt legte fristgerecht Berufung gegen das erstinstanzliche Urteil ein.',
            clozeSentence: 'Der Anwalt [...] fristgerecht Berufung gegen das Urteil [...].',
            translationEn: 'The attorney lodged an appeal within the statutory deadline against the first-instance judgment.'
          }
        ]
      },
      {
        id: 'pref-legen-auslegen',
        word: 'auslegen',
        baseRootVerb: 'legen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Justiz',
        primaryDefinitionDe: 'Gesetze hermeneutisch interpretieren, Geld vorschießen oder Flyer ausbreiten',
        primaryDefinitionEn: 'To interpret/construe legal texts, advance funds on someone\'s behalf, or display flyers',
        collocation: 'ein Gesetz verfassungskonform auslegen; Geld für jemanden auslegen',
        synonyms: ['interpretieren', 'deuten', 'vorschießen', 'präsentieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Den tieferen juristischen oder philosophischen Sinn eines Gesetzestextes ermitteln',
            definitionEn: 'To interpret or construe the teleological and grammatical meaning of a law',
            nuance: 'Jurisprudenz & Hermeneutik',
            grammarInfo: 'transitiv + Akk (ein Gesetz auslegen)',
            exampleSentence: 'Die Verfassungsrichter müssen die Grundrechte im Lichte des digitalen Zeitalters zeitgemäß auslegen.',
            clozeSentence: 'Die Richter müssen die Grundrechte zeitgemäß [...].',
            translationEn: 'The constitutional judges must interpret fundamental rights in a modern light suited to the digital age.'
          }
        ]
      },
      {
        id: 'pref-legen-vorlegen',
        word: 'vorlegen',
        baseRootVerb: 'legen',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Verwaltung',
        primaryDefinitionDe: 'Berichte oder Gesetzentwürfe zur Begutachtung einreichen oder Tempo vorgeben',
        primaryDefinitionEn: 'To submit/present reports or drafts to a council, or set a rapid pace',
        collocation: 'einen Abschlussbericht vorlegen; dem Parlament den Haushaltsentwurf vorlegen',
        synonyms: ['einreichen', 'präsentieren', 'übergeben'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein offizielles Dossier, einen Entwurf oder Nachweis einer prüfenden Instanz überreichen',
            definitionEn: 'To table, present, or submit an official report, draft, or credentials to authorities',
            nuance: 'Parlamentarismus & Audit',
            grammarInfo: 'jemandem (Dat) etwas (Akk) vorlegen',
            exampleSentence: 'Die Sachverständigenkommission legte der Bundesregierung ihr finales Gutachten vor.',
            clozeSentence: 'Die Kommission [...] der Regierung ihr finales Gutachten [...].',
            translationEn: 'The commission of experts submitted its final appraisal to the federal government.'
          }
        ]
      },
      {
        id: 'pref-legen-verlegen',
        word: 'verlegen',
        baseRootVerb: 'legen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Termine zeitlich verschieben, Bücher publizieren oder Gegenstände verpusseln',
        primaryDefinitionEn: 'To postpone/reschedule dates, publish books/monographs, or misplace items',
        collocation: 'eine Konferenz auf den Herbst verlegen; wissenschaftliche Literatur verlegen; Schlüssel verlegen',
        synonyms: ['verschieben', 'publizieren', 'herausgeben', 'verbummeln'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Den Zeitpunkt eines Ereignisses auf ein späteres Datum transferieren',
            definitionEn: 'To postpone, reschedule, or adjourn an event or appointment to a later date',
            nuance: 'Organisation & Zeitmanagement',
            grammarInfo: 'etwas verlegen auf + Akk',
            exampleSentence: 'Wegen des Bahnstreiks musste die Fachtagung um zwei Wochen verlegt werden.',
            clozeSentence: 'Wegen des Streiks musste die Tagung [...] werden.',
            translationEn: 'Due to the rail strike, the symposium had to be postponed by two weeks.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Als Verlagsunternehmen Bücher drucken, binden und vermarkten',
            definitionEn: 'To publish, print, and distribute literary or academic monographs',
            nuance: 'Buchwesen & Wissenschaft',
            grammarInfo: 'transitiv + Akk (Bücher verlegen)',
            exampleSentence: 'Der renommierte Universitätsverlag verlegt Standardwerke zur zeitgenössischen Philosophie.',
            clozeSentence: 'Der Verlag [...] Standardwerke zur zeitgenössischen Philosophie.',
            translationEn: 'The renowned university press publishes standard works on contemporary philosophy.'
          }
        ]
      },
      {
        id: 'pref-legen-festlegen',
        word: 'festlegen',
        baseRootVerb: 'legen',
        prefix: 'fest-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Verbindliche Richtlinien determinieren oder sich unwiderruflich positionieren',
        primaryDefinitionEn: 'To determine/stipulate criteria or commit oneself irrevocably to a stance',
        collocation: 'verbindliche Kriterien festlegen; sich auf eine Strategie festlegen',
        synonyms: ['determinieren', 'stipulieren', 'sich binden', 'definieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Regeln, Grenzwerte oder Richtlinien mit rechtlicher Gültigkeit definieren',
            definitionEn: 'To stipulate, determine, or prescribe binding standards, thresholds, or norms',
            nuance: 'Normung & Gesetzgebung',
            grammarInfo: 'transitiv + Akk (Kriterien festlegen)',
            exampleSentence: 'Die Ministerkonferenz legte einheitliche Grenzwerte für Feinstaubemissionen fest.',
            clozeSentence: 'Die Ministerkonferenz [...] einheitliche Grenzwerte [...].',
            translationEn: 'The conference of ministers stipulated uniform thresholds for particulate emissions.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Sich endgültig und bindend für eine Option oder einen Kandidaten entscheiden',
            definitionEn: 'To commit oneself definitively to a choice, stance, or candidate',
            nuance: 'Entscheidungstheorie',
            grammarInfo: 'sich festlegen auf + Akk',
            exampleSentence: 'Die Parteispitze wollte sich vor den internen Wahlen noch nicht auf eine Koalition festlegen.',
            clozeSentence: 'Die Parteispitze wollte sich noch nicht auf eine Koalition [...].',
            translationEn: 'The party leadership did not yet want to commit itself to a coalition before the internal elections.'
          }
        ]
      },
      {
        id: 'pref-legen-niederlegen',
        word: 'niederlegen',
        baseRootVerb: 'legen',
        prefix: 'nieder-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Bildungssprachlich',
        primaryDefinitionDe: 'Ein hohes Amt freiwillig aufgeben, die Arbeit bestreiken oder Gedanken niederschreiben',
        primaryDefinitionEn: 'To resign from high office, lay down tools in a strike, or record thoughts in writing',
        collocation: 'sein Mandat / Amt niederlegen; die Arbeit aus Protest niederlegen; Gedanken schriftlich niederlegen',
        synonyms: ['abtreten', 'resignieren', 'bestreiken', 'zu Papier bringen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Aus freien Stücken auf eine ministerielle, richterliche oder parlamentarische Funktion verzichten',
            definitionEn: 'To formally resign from or relinquish an executive, judicial, or parliamentary mandate',
            nuance: 'Staatsdienst & Ethik',
            grammarInfo: 'transitiv + Akk (sein Amt niederlegen)',
            exampleSentence: 'Nach den Enthüllungen über Interessenkonflikte legte der Staatssekretär sein Amt nieder.',
            clozeSentence: 'Der Staatssekretär [...] nach den Enthüllungen sein Amt [...].',
            translationEn: 'Following revelations about conflicts of interest, the state secretary resigned from his office.'
          }
        ]
      },
      {
        id: 'pref-legen-ablegen',
        word: 'ablegen',
        baseRootVerb: 'legen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Prüfungen absolvieren, Vorurteile überwinden oder Akten registrieren',
        primaryDefinitionEn: 'To take examinations, shed prejudices/bad habits, or file records in archives',
        collocation: 'eine Prüfung / ein Examen ablegen; Vorurteile endgültig ablegen; einen Eid ablegen',
        synonyms: ['absolvieren', 'überwinden', 'schwören', 'archivieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine formale akademische Prüfung oder einen feierlichen Eid vor Zeugen leisten',
            definitionEn: 'To take a formal examination or take a solemn oath before witnesses',
            nuance: 'Hochschulwesen & Justiz',
            grammarInfo: 'transitiv + Akk (ein Examen / einen Eid ablegen)',
            exampleSentence: 'Die angehende Richterin legte ihren Amtseid auf das Grundgesetz ab.',
            clozeSentence: 'Die Richterin [...] ihren Amtseid auf die Verfassung [...].',
            translationEn: 'The prospective judge took her official oath upon the constitution.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Tief sitzende schlechte Gewohnheiten, Ängste oder Vorurteile willentlich überwinden',
            definitionEn: 'To shed, discard, or divest oneself of prejudices, phobias, or bad habits',
            nuance: 'Persönlichkeitsentwicklung & Soziologie',
            grammarInfo: 'transitiv + Akk (Vorurteile ablegen)',
            exampleSentence: 'Moderne Gesellschaften müssen verkrustete Stereotypen schrittweise ablegen.',
            clozeSentence: 'Moderne Gesellschaften müssen verkrustete Stereotypen [...].',
            translationEn: 'Modern societies must gradually shed ingrained stereotypes.'
          }
        ]
      },
      {
        id: 'pref-legen-überlegen',
        word: 'überlegen',
        baseRootVerb: 'legen',
        prefix: 'über-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Sich eine Entscheidung reiflich durchdenken oder anderen qualitativ überlegen sein',
        primaryDefinitionEn: 'To deliberate/ponder thoroughly, or be intellectually/tactically superior',
        collocation: 'sich einen Schritt reiflich überlegen; dem Konkurrenten intellektuell überlegen sein',
        synonyms: ['nachdenken', 'ponderieren', 'übertreffen', 'dominieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine Handlungsoption in all ihren Facetten gedanklich prüfen',
            definitionEn: 'To ponder, deliberate on, or contemplate a course of action prudently',
            nuance: 'Kognition & Rationalität',
            grammarInfo: 'sich (Dat) etwas (Akk) reiflich überlegen',
            exampleSentence: 'Vor der Unterschrift sollte sich die Gründerin den Schritt noch einmal reiflich überlegen.',
            clozeSentence: 'Sie sollte sich den Schritt noch einmal reiflich [...].',
            translationEn: 'Before signing, the founder should deliberate on the step thoroughly once more.'
          }
        ]
      },
      {
        id: 'pref-legen-zulegen',
        word: 'zulegen',
        baseRootVerb: 'legen',
        prefix: 'zu-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Wirtschaft',
        primaryDefinitionDe: 'Wirtschaftlich wachsen/zulegen, an Tempo gewinnen oder etwas Neues erwerben',
        primaryDefinitionEn: 'To gain in economy/polls, increase pace/speed, or acquire new equipment',
        collocation: 'die Wirtschaft konnte zulegen; an Tempo zulegen; sich ein Gerät zulegen',
        synonyms: ['wachsen', 'ansteigen', 'beschleunigen', 'anschaffen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'In Prozentwerten, Wirtschaftsindikatoren oder Umfragen spürbar ansteigen',
            definitionEn: 'To gain ground, surge, or register growth in economic indicators or polling',
            nuance: 'Ökonomie & Meinungsforschung',
            grammarInfo: 'intransitiv (zulegen um X Prozent)',
            exampleSentence: 'Die Industrieproduktion konnte im vergangenen Monat um unerwartete zwei Prozent zulegen.',
            clozeSentence: 'Die Produktion konnte um zwei Prozent [...].',
            translationEn: 'Industrial production managed to gain an unexpected two percent last month.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY 4: ZIEHEN
  // ==========================================
  {
    rootVerb: 'ziehen',
    rootMeaningDe: 'Mit Zugkraft bewegen, wandern, migrieren',
    rootMeaningEn: 'To pull, draw, drag, move, migrate',
    descriptionDe: '»ziehen« generiert vitale C1-Termini für Bezüge, Erziehung, juristische Konfiskationen (einziehen) und Entzug von Rechten.',
    descriptionEn: 'The root "ziehen" provides critical C1 terms for citations, educational nurturing, legal confiscations, and revocation of rights.',
    verbsCount: 11,
    verbs: [
      {
        id: 'pref-ziehen-beziehen',
        word: 'beziehen',
        baseRootVerb: 'ziehen',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Sich auf Referenzen berufen, Einkünfte erhalten oder Quartiere beziehen',
        primaryDefinitionEn: 'To refer/pertain to sources, draw pensions/income, or move into quarters',
        collocation: 'sich auf eine Studie beziehen; ein festes Gehalt beziehen; eine Wohnung beziehen',
        synonyms: ['referenzieren', 'einkassieren', 'einziehen in'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine logische Verbindung zu einer wissenschaftlichen Veröffentlichung oder Quelle herstellen',
            definitionEn: 'To refer to, cite, or base arguments on a specific study or premise',
            nuance: 'Wissenschaftliche Methodik',
            grammarInfo: 'sich beziehen auf + Akk',
            exampleSentence: 'Der Autor bezieht sich in seiner Argumentation auf die klassischen Texte von Max Weber.',
            clozeSentence: 'Der Autor [...] sich in seiner Argumentation auf Max Weber.',
            translationEn: 'In his argumentation, the author refers to the classical texts of Max Weber.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Regelmäßige Zahlungen wie Rentenbezüge, Gehälter oder Fördergelder erhalten',
            definitionEn: 'To draw or receive regular financial income, allowances, or pension benefits',
            nuance: 'Sozialrecht & Wirtschaft',
            grammarInfo: 'transitiv + Akk (Rente / Subventionen beziehen)',
            exampleSentence: 'Mehrere Millionen Ruheständler beziehen eine gesetzliche Altersrente.',
            clozeSentence: 'Viele Ruheständler [...] eine gesetzliche Altersrente.',
            translationEn: 'Several million retirees draw a statutory retirement pension.'
          }
        ]
      },
      {
        id: 'pref-ziehen-erziehen',
        word: 'erziehen',
        baseRootVerb: 'ziehen',
        prefix: 'er-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Junge Menschen pädagogisch zu mündigen Persönlichkeiten heranbilden',
        primaryDefinitionEn: 'To nurture, educate, raise, or bring up youth towards ethical values',
        collocation: 'Kinder zu mündigen Bürgern erziehen; zu Toleranz und Weltoffenheit erziehen',
        synonyms: ['heranbilden', 'formen', 'sozialisieren', 'unterrichten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Durch bewusste pädagogische Förderung ethische und intellektuelle Werte vermitteln',
            definitionEn: 'To raise, educate, or nurture individuals towards critical independence and responsibility',
            nuance: 'Pädagogik & Ethik',
            grammarInfo: 'jemanden erziehen zu + Dat',
            exampleSentence: 'Bildungseinrichtungen müssen Heranwachsende zu demokratischem Denken und Toleranz erziehen.',
            clozeSentence: 'Schulen müssen Heranwachsende zu Toleranz [...].',
            translationEn: 'Educational institutions must educate young people towards democratic thinking and tolerance.'
          }
        ]
      },
      {
        id: 'pref-ziehen-vorziehen',
        word: 'vorziehen',
        baseRootVerb: 'ziehen',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Einer Option den Vorzug geben oder Termine zeitlich nach vorn verlegen',
        primaryDefinitionEn: 'To prefer one option over another, or bring an appointment forward to an earlier date',
        collocation: 'Qualität der Quantität vorziehen; einen Termin um zwei Tage vorziehen',
        synonyms: ['präferieren', 'den Vorzug geben', 'vorverlegen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Aus Überzeugung einer Alternative den klaren Vorzug gegenüber einer anderen einräumen',
            definitionEn: 'To prefer or prioritize one alternative over another on qualitative grounds',
            nuance: 'Präferenztheorie & Ethik',
            grammarInfo: 'etwas (Akk) einer Sache (Dat) vorziehen',
            exampleSentence: 'Kritische Konsumenten ziehen langlebige Produkte billiger Wegwerfware eindeutig vor.',
            clozeSentence: 'Konsumenten [...] langlebige Produkte billiger Ware [...].',
            translationEn: 'Critical consumers clearly prefer durable products over cheap disposable goods.'
          }
        ]
      },
      {
        id: 'pref-ziehen-entziehen',
        word: 'entziehen',
        baseRootVerb: 'ziehen',
        prefix: 'ent-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Justiz',
        primaryDefinitionDe: 'Rechte/Lizenzen hoheitlich aberkennen oder sich Verantwortung verweigern',
        primaryDefinitionEn: 'To revoke/deprive someone of a license or evade civic responsibility',
        collocation: 'jemandem die Fahrerlaubnis entziehen; sich der Verantwortung entziehen',
        synonyms: ['aberkennen', 'widerrufen', 'vorenthalten', 'ausweichen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Jemandem eine amtliche Genehmigung, das Vertrauen oder Privilegien per Dekret wegnehmen',
            definitionEn: 'To revoke, withdraw, or deprive someone of a license, permit, or mandate',
            nuance: 'Verwaltungsrecht & Justiz',
            grammarInfo: 'jemandem (Dat) etwas (Akk) entziehen',
            exampleSentence: 'Wegen wiederholter Verstöße entzog die Finanzaufsicht der Bank die Geschäftslizenz.',
            clozeSentence: 'Die Aufsicht [...] der Bank die Geschäftslizenz.',
            translationEn: 'Due to repeated violations, the financial regulator revoked the bank\'s operating license.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einer ethischen, rechtlichen oder sozialen Pflicht durch Flucht ausweichen',
            definitionEn: 'To evade, shirk, or elude moral or legal duties and obligations',
            nuance: 'Ethik & Recht',
            grammarInfo: 'sich (Dat) einer Pflicht (Dat) entziehen',
            exampleSentence: 'Die Konzernleitung darf sich ihrer ökologischen Verantwortung nicht länger entziehen.',
            clozeSentence: 'Der Konzern darf sich seiner Verantwortung nicht [...].',
            translationEn: 'Corporate management may no longer evade its ecological responsibility.'
          }
        ]
      },
      {
        id: 'pref-ziehen-einziehen',
        word: 'einziehen',
        baseRootVerb: 'ziehen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Justiz',
        primaryDefinitionDe: 'Wohnungen beziehen, Straftat-Gewinne beschlagnahmen oder ins Parlament gewählt werden',
        primaryDefinitionEn: 'To move into a home, confiscate illicit proceeds by court, or enter parliament',
        collocation: 'in das neue Gebäude einziehen; kriminell erbeutetes Vermögen einziehen; in den Landtag einziehen',
        synonyms: ['beziehen', 'konfiszieren', 'einziehen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Illegale Gelder oder Tatwerkzeuge durch Gerichtsurteil zugunsten des Staates beschlagnahmen',
            definitionEn: 'To confiscate, impound, or forfeit illicit criminal assets by judicial decree',
            nuance: 'Strafprozessrecht & Vermögenseinziehung',
            grammarInfo: 'transitiv + Akk (Vermögenswerte einziehen)',
            exampleSentence: 'Das Gericht entschied, die millionenschweren Erlöse aus dem Rauschgifthandel vollständig einzuziehen.',
            clozeSentence: 'Das Gericht entschied, die Erlöse vollständig [...].',
            translationEn: 'The court decided to entirely confiscate the multi-million euro proceeds from narcotics trafficking.'
          }
        ]
      },
      {
        id: 'pref-ziehen-abziehen',
        word: 'abziehen',
        baseRootVerb: 'ziehen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Militärtruppen repatriieren, Steuern subtrahieren oder Aufmerksamkeit umlenken',
        primaryDefinitionEn: 'To withdraw troops, deduct tax from wages, or divert public attention',
        collocation: 'Truppen aus dem Krisengebiet abziehen; Steuern vom Brutto abziehen; die Aufmerksamkeit abziehen',
        synonyms: ['evakuieren', 'subtrahieren', 'abwenden', 'umlenken'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Streitkräfte oder Friedensmissionen planmäßig aus einer Region zurückholen',
            definitionEn: 'To pull out, withdraw, or redeploy military formations or envoys',
            nuance: 'Geostrategie & Verteidigung',
            grammarInfo: 'Truppen abziehen aus + Dat',
            exampleSentence: 'Das Verteidigungsministerium beschloss, alle verbliebenen Verbände aus der Krisenregion abzuziehen.',
            clozeSentence: 'Das Ministerium beschloss, die Verbände [...].',
            translationEn: 'The defense ministry resolved to withdraw all remaining formations from the crisis zone.'
          }
        ]
      },
      {
        id: 'pref-ziehen-überziehen',
        word: 'überziehen',
        baseRootVerb: 'ziehen',
        prefix: 'über-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Finanzen',
        primaryDefinitionDe: 'Das Bankkonto über das Limit belasten oder Redezeiten im Parlament überschreiten',
        primaryDefinitionEn: 'To overdraw a bank balance beyond limits, or exceed the allowed speaking time',
        collocation: 'das Girokonto überziehen; die vereinbarte Redezeit überziehen',
        synonyms: ['überbeanspruchen', 'überschreiten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Den verfügbaren Kreditrahmen eines Bankkontos über das vereinbarte Maß hinaus in Anspruch nehmen',
            definitionEn: 'To overdraw a current account beyond its established credit allowance',
            nuance: 'Bankwesen & Konsum',
            grammarInfo: 'transitiv + Akk (das Konto überziehen)',
            exampleSentence: 'Die Zinsen schnellen drastisch in die Höhe, sobald Kunden ihr Girokonto unautorisiert überziehen.',
            clozeSentence: 'Zinsen steigen, sobald Kunden ihr Konto [...].',
            translationEn: 'Interest rates surge dramatically as soon as customers overdraw their checking accounts without authorization.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Ein festgesetztes Zeitkontingent bei einem Vortrag oder Debattenbeitrag überschreiten',
            definitionEn: 'To run over or exceed the allotted time limit in an official presentation',
            nuance: 'Rhetorik & Sitzungsleitung',
            grammarInfo: 'transitiv + Akk (die Redezeit überziehen)',
            exampleSentence: 'Der Bundestagspräsident rügte den Redner, weil dieser die Zeit um fünf Minuten überzog.',
            clozeSentence: 'Der Präsident rügte ihn, weil er die Zeit [...].',
            translationEn: 'The Bundestag president reprimanded the speaker because he exceeded his speaking time by five minutes.'
          }
        ]
      },
      {
        id: 'pref-ziehen-nachziehen',
        word: 'nachziehen',
        baseRootVerb: 'ziehen',
        prefix: 'nach-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Wirtschaft',
        primaryDefinitionDe: 'Mit Preiserhöhungen den Konkurrenten folgen oder als Familie migrieren',
        primaryDefinitionEn: 'To follow suit on prices or family reunification migration',
        collocation: 'mit Preiserhöhungen nachziehen; der Familie ins Ausland nachziehen',
        synonyms: ['folgen', 'nachfolgen', 'angleichen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Aus wettbewerblichen Gründen das Marktverhalten anderer Marktteilnehmer replizieren',
            definitionEn: 'To follow suit, match competitor prices, or emulate rival strategic adjustments',
            nuance: 'Wettbewerbsökonomie',
            grammarInfo: 'nachziehen mit + Dat',
            exampleSentence: 'Nachdem der Branchenprimus die Tarife anhob, zogen alle Wettbewerber binnen Tagen nach.',
            clozeSentence: 'Alle Wettbewerber [...] binnen Tagen [...].',
            translationEn: 'After the industry leader raised its rates, all competitors followed suit within days.'
          }
        ]
      },
      {
        id: 'pref-ziehen-umziehen',
        word: 'umziehen',
        baseRootVerb: 'ziehen',
        prefix: 'um-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Den Wohnsitz verlegen oder sich neue Kleidung anlegen',
        primaryDefinitionEn: 'To relocate residence, or change clothes for a formal occasion',
        collocation: 'in eine andere Metropole umziehen; sich für die Gala umziehen',
        synonyms: ['umsiedeln', 'relokieren', 'Kleidung wechseln'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Den dauerhaften Lebensmittelpunkt oder Firmensitz an einen anderen Standort verlegen',
            definitionEn: 'To relocate, move headquarters, or establish household in another city',
            nuance: 'Migration & Stadtgeographie',
            grammarInfo: 'umziehen nach/in + Akk',
            exampleSentence: 'Das Forschungsinstitut wird im kommenden Frühjahr in ein hochmodernes Laborzentrum umziehen.',
            clozeSentence: 'Das Institut wird in ein modernes Laborzentrum [...].',
            translationEn: 'The research institute will relocate to a state-of-the-art laboratory center next spring.'
          }
        ]
      },
      {
        id: 'pref-ziehen-ausziehen',
        word: 'ausziehen',
        baseRootVerb: 'ziehen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Eine Mietwohnung räumen oder in die Welt aufbrechen',
        primaryDefinitionEn: 'To vacate a residence, take off clothing, or set out into the world',
        collocation: 'aus der Wohnung ausziehen; in die weite Welt ausziehen',
        synonyms: ['räumen', 'verlassen', 'aufbrechen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein Mietobjekt nach Beendigung des Vertrags ordnungsgemäß räumen',
            definitionEn: 'To move out of, vacate, or hand back a leased residential property',
            nuance: 'Mietrecht & Wohnen',
            grammarInfo: 'ausziehen aus + Dat',
            exampleSentence: 'Die Mieter müssen bis Ende des Monats aus der geräumten Altbauwohnung ausziehen.',
            clozeSentence: 'Die Mieter müssen aus der Altbauwohnung [...].',
            translationEn: 'The tenants must move out of the vacated old building apartment by the end of the month.'
          }
        ]
      },
      {
        id: 'pref-ziehen-anziehen',
        word: 'anziehen',
        baseRootVerb: 'ziehen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Wirtschaft',
        primaryDefinitionDe: 'Investoren magnetisch anlocken oder im Preis drastisch ansteigen',
        primaryDefinitionEn: 'To attract investors/tourists magnetically or surge in prices/inflation',
        collocation: 'ausländische Investoren anziehen; die Preise ziehen spürbar an; das Tempo anziehen',
        synonyms: ['attrahieren', 'anlocken', 'ansteigen', 'beschleunigen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Durch Attraktivität und Standortvorteile Kapital oder Talente anlocken',
            definitionEn: 'To attract, draw in, or magnetize investment capital, talent, or tourists',
            nuance: 'Standortpolitik & Außenwirtschaft',
            grammarInfo: 'transitiv + Akk (Kapital anziehen)',
            exampleSentence: 'Die Innovationskraft der Start-up-Szene zieht weltweite Wagniskapitalgeber an.',
            clozeSentence: 'Die Innovationskraft [...] globale Wagniskapitalgeber [...].',
            translationEn: 'The innovative power of the start-up scene attracts global venture capitalists.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Von Marktkräften angetrieben einen steilen Teuerungskurs verzeichnen',
            definitionEn: 'To pick up, surge, or rise steeply (prices, interest rates, or inflation)',
            nuance: 'Geldpolitik & Inflation',
            grammarInfo: 'intransitiv (die Zinsen ziehen an)',
            exampleSentence: 'Weil die Rohstoffkosten steigen, ziehen die Verbraucherpreise im ganzen Land an.',
            clozeSentence: 'Die Verbraucherpreise [...] im ganzen Land [...].',
            translationEn: 'Because raw material costs are rising, consumer prices across the country are surging.'
          }
        ]
      }
    ]
  }
];

export const ALL_PREFIX_FAMILIES: PrefixFamily[] = [
  ...PREFIX_FAMILIES_DATA,
  ...MORE_PREFIX_FAMILIES,
  ...FINAL_PREFIX_FAMILIES
];

// Helper: Convert all prefix verb items into full VocabularyItem records
// so they can enrich the entire global vocabulary, flashcards, quiz generator, and search!
export function getPrefixVerbsAsVocabulary(): VocabularyItem[] {
  const items: VocabularyItem[] = [];

  for (const family of ALL_PREFIX_FAMILIES) {
    for (const verb of family.verbs) {
      items.push({
        id: verb.id,
        word: verb.word,
        wordClass: 'Verb',
        category: `Präfixfamilie »${family.rootVerb}«`,
        level: 'C1',
        register: verb.register,
        definitionDe: verb.primaryDefinitionDe,
        definitionEn: verb.primaryDefinitionEn,
        collocation: verb.collocation,
        synonyms: verb.synonyms || [],
        antonyms: verb.antonyms || [],
        isPolysemous: verb.meanings.length > 1,
        polysemyMeanings: verb.meanings.map((m, idx) => ({
          id: `${verb.id}-m${idx + 1}`,
          number: m.meaningNumber,
          definitionDe: m.definitionDe,
          definitionEn: m.definitionEn,
          nuance: m.nuance || 'Präfixverb Nuance',
          grammarInfo: m.grammarInfo,
          exampleSentence: m.exampleSentence,
          clozeSentence: m.clozeSentence,
          translationEn: m.translationEn
        })),
        examples: verb.meanings.map(m => ({
          sentence: m.exampleSentence,
          clozeSentence: m.clozeSentence,
          translationEn: m.translationEn,
          context: m.nuance || `Präfix ${verb.prefix}`
        })),
        activeRecallPrompt: `Wie lautet das C1-Präfixverb aus der Familie »${family.rootVerb}« für: „${verb.primaryDefinitionDe}“ (Kollokation: ${verb.collocation})?`,
        myelinationLevel: 0,
        consecutiveCorrect: 0,
        timesReviewed: 0,
        timesIncorrect: 0,
        lastReviewedAt: null,
        inMistakeQueue: false,
        isBookmarked: false
      });
    }
  }

  return items;
}
