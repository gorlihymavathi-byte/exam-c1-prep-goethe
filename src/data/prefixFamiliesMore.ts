import { PrefixFamily } from '../types';

export const MORE_PREFIX_FAMILIES: PrefixFamily[] = [
  // ==========================================
  // FAMILY: GEHEN
  // ==========================================
  {
    rootVerb: 'gehen',
    rootMeaningDe: 'Sich zu Fuß bewegen, voranschreiten, verlaufen',
    rootMeaningEn: 'To go, walk, proceed, fare, elapse',
    descriptionDe: '»gehen« bildet fundamentale Wendungen des C1-Diskurses: etwas mutig angehen, von Prämissen ausgehen, auf Gegenargumente eingehen.',
    descriptionEn: 'The root "gehen" forms the cornerstone of academic discourse: tackling issues, proceeding from premises, and addressing arguments.',
    verbsCount: 11,
    verbs: [
      {
        id: 'pref-gehen-angehen',
        word: 'angehen',
        baseRootVerb: 'gehen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Ein Problem tatkräftig anpacken oder jemanden persönlich betreffen',
        primaryDefinitionEn: 'To tackle a problem energetically or concern/pertain to someone',
        collocation: 'ein drängendes Problem energisch angehen; das geht alle Bürger an',
        synonyms: ['anpacken', 'bewältigen', 'betreffen', 'berühren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine schwierige gesellschaftliche oder wissenschaftliche Herausforderung entschlossen in Angriff nehmen',
            definitionEn: 'To tackle, confront, or approach a complex issue resolutely',
            nuance: 'Problemlösung & Politik',
            grammarInfo: 'transitiv + Akk (ein Problem angehen)',
            exampleSentence: 'Die Staatengemeinschaft muss den globalen Klimawandel endlich gemeinschaftlich angehen.',
            clozeSentence: 'Die Staaten müssen den Klimawandel endlich gemeinschaftlich [...].',
            translationEn: 'The international community must finally tackle global climate change collaboratively.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Für eine Person oder Institution von unmittelbarer Relevanz und Verantwortung sein',
            definitionEn: 'To concern, affect, or pertain to someone directly',
            nuance: 'Relevanz & Verantwortung',
            grammarInfo: 'transitiv + Akk (das geht jemanden an)',
            exampleSentence: 'Die Sicherung der Menschenrechte geht jeden einzelnen Bürger in einer Demokratie an.',
            clozeSentence: 'Die Sicherung der Menschenrechte [...] jeden Bürger [...].',
            translationEn: 'Securing human rights concerns every single citizen in a democracy.'
          }
        ]
      },
      {
        id: 'pref-gehen-ausgehen',
        word: 'ausgehen',
        baseRootVerb: 'gehen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Von Prämissen ausgehen, von einer Quelle emaniert werden oder zu Ende gehen',
        primaryDefinitionEn: 'To assume/presuppose premises, emanate from a source, or run out',
        collocation: 'von der Richtigkeit ausgehen; von der Maßnahme geht ein Impuls aus; der Vorrat geht aus',
        synonyms: ['annehmen', 'voraussetzen', 'entspringen', 'versiegen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine Hypothese oder fundierte Annahme als methodische Grundlage ansetzen',
            definitionEn: 'To assume, presume, or take as a methodological starting point',
            nuance: 'Wissenschaftliche Methodik',
            grammarInfo: 'ausgehen von + Dat',
            exampleSentence: 'Die Gutachter gehen in ihrer Prognose von einem moderaten Wirtschaftswachstum aus.',
            clozeSentence: 'Die Gutachter [...] in ihrer Prognose von einem Wachstum [...].',
            translationEn: 'The appraisers proceed from the assumption of moderate economic growth in their forecast.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Seinen Ursprung oder seine Ausstrahlung in einer Ursache haben',
            definitionEn: 'To emanate, originate, or radiate from an impetus or source',
            nuance: 'Wirkungsforschung',
            grammarInfo: 'ausgehen von + Dat',
            exampleSentence: 'Von den bahnbrechenden Entdeckungen der Genetik ging eine weltweite Forschungswelle aus.',
            clozeSentence: 'Von den Entdeckungen [...] eine weltweite Forschungswelle [...].',
            translationEn: 'A worldwide wave of research emanated from the groundbreaking discoveries in genetics.'
          }
        ]
      },
      {
        id: 'pref-gehen-umgehen',
        word: 'umgehen',
        baseRootVerb: 'gehen',
        prefix: 'um-',
        isSeparable: true,
        prefixTypeLabel: 'variabel',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Mit etwas sorgsam umgehen (trennbar) oder Vorschriften/Sanktionen umgehen (untrennbar)',
        primaryDefinitionEn: 'To handle/treat carefully (separable) or bypass/circumvent sanctions (inseparable)',
        collocation: 'mit Ressourcen achtsam umgehen; gesetzliche Verbote geschickt umgehen',
        synonyms: ['handhaben', 'behandeln', 'umschiffen', 'unterlaufen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Gegenstand, sensible Daten oder Mitmenschen mit gebotener Sorgfalt behandeln',
            definitionEn: 'To handle, treat, or manage delicate data, tools, or fellow humans with due care',
            nuance: 'Sorgfalt & Ethik (trennbar: um-gehen)',
            grammarInfo: 'umgehen mit + Dat',
            exampleSentence: 'Führungskräfte müssen mit vertraulichen Mitarbeiterdaten äußerst sensibel umgehen.',
            clozeSentence: 'Führungskräfte müssen mit vertraulichen Daten sensibel [...].',
            translationEn: 'Executives must handle confidential employee data with utmost sensitivity.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Gesetzliche Barrieren, Zölle oder Sanktionen durch Schleichwege unwirksam machen',
            definitionEn: 'To bypass, circumvent, or evade legal regulations or embargoes (inseparable)',
            nuance: 'Rechtsumgehung & Taktik (untrennbar: umgehen)',
            grammarInfo: 'transitiv + Akk (Sanktionen umgehen)',
            exampleSentence: 'Einige Handelsgesellschaften versuchten, die internationalen Sanktionen über Drittstaaten zu umgehen.',
            clozeSentence: 'Die Firmen versuchten, die Sanktionen zu [...].',
            translationEn: 'Some trading corporations attempted to circumvent international sanctions via third countries.'
          }
        ]
      },
      {
        id: 'pref-gehen-eingehen',
        word: 'eingehen',
        baseRootVerb: 'gehen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Auf Argumente differenziert eingehen, Risiken akzeptieren oder schrumpfen',
        primaryDefinitionEn: 'To address counterarguments in depth, incur risks/compromises, or wither/shrink',
        collocation: 'auf die Kritik ausführlich eingehen; ein kalkuliertes Risiko eingehen; ein Kompromiss',
        synonyms: ['reagieren auf', 'behandeln', 'akzeptieren', 'schrumpfen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Sich in einer Rede oder wissenschaftlichen Schrift ausführlich mit Einwänden befassen',
            definitionEn: 'To respond to, elaborate on, or address counterarguments constructively',
            nuance: 'Diskurs & Argumentation',
            grammarInfo: 'eingehen auf + Akk',
            exampleSentence: 'Die Dozentin ging im zweiten Teil der Vorlesung ausführlich auf die Fragen des Auditoriums ein.',
            clozeSentence: 'Die Dozentin [...] ausführlich auf die Fragen des Auditoriums [...].',
            translationEn: 'In the second part of the lecture, the lecturer addressed the auditorium\'s questions in detail.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine Wagnisentscheidung oder eine vertragliche Verpflichtung bewusst annehmen',
            definitionEn: 'To incur or take on a calculated risk, compromise, or alliance',
            nuance: 'Entscheidungsfindung',
            grammarInfo: 'ein Risiko / ein Bündnis eingehen',
            exampleSentence: 'Unternehmer müssen bisweilen kalkulierte Risiken eingehen, um Innovationen voranzutreiben.',
            clozeSentence: 'Unternehmer müssen kalkulierte Risiken [...].',
            translationEn: 'Entrepreneurs must occasionally take calculated risks to advance innovations.'
          }
        ]
      },
      {
        id: 'pref-gehen-aufgehen',
        word: 'aufgehen',
        baseRootVerb: 'gehen',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Kalkulationen gehen auf, oder sich vollkommen einer Passion widmen (aufgehen in)',
        primaryDefinitionEn: 'Calculations work out successfully, or to be completely absorbed in an endeavor',
        collocation: 'die strategische Rechnung geht auf; vollkommen in seiner Forschung aufgehen',
        synonyms: ['funktionieren', 'gelingen', 'vertieft sein in'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein strategischer Plan oder eine mathematische Prognose erweist sich als voll zutreffend',
            definitionEn: 'To work out, pay off, or prove completely true (of plans or strategy)',
            nuance: 'Strategie & Erfolg',
            grammarInfo: 'intransitiv (der Plan / die Rechnung geht auf)',
            exampleSentence: 'Die langfristige Rechnung der Zentralbank ging auf: Die Teuerung sank wieder.',
            clozeSentence: 'Die Rechnung der Zentralbank [...] auf: Die Inflation sank.',
            translationEn: 'The central bank\'s long-term strategy paid off: inflation dropped back down.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Seine gesamte Identität und Energie voller Hingabe einer Aufgabe widmen',
            definitionEn: 'To be completely engrossed, absorbed, or fulfilled in an artistic or scientific mission',
            nuance: 'Hingabe & Flow',
            grammarInfo: 'aufgehen in + Dat',
            exampleSentence: 'Die Biochemikerin ging völlig in ihren wegweisenden Laborstudien zur Krebsforschung auf.',
            clozeSentence: 'Die Forscherin [...] völlig in ihren Studien [...].',
            translationEn: 'The biochemist was completely absorbed in her pioneering cancer research studies.'
          }
        ]
      },
      {
        id: 'pref-gehen-vergehen',
        word: 'vergehen',
        baseRootVerb: 'gehen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Zeit verstreicht, oder sich strafbar machen gegen Schwächere (sich vergehen an)',
        primaryDefinitionEn: 'Time elapses/passes, or to commit a severe offense against someone (sich vergehen an)',
        collocation: 'die Zeit vergeht wie im Flug; sich an den Schutzbefohlenen vergehen',
        synonyms: ['verstreichen', 'ablaufen', 'missbrauchen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Zeitliche Einheiten verstreichen kontinuierlich bis zu einem Endpunkt',
            definitionEn: 'To pass by, elapse, or expire (of time or lifespan)',
            nuance: 'Zeitphilosophie',
            grammarInfo: 'intransitiv (die Zeit vergeht)',
            exampleSentence: 'Seit der Ratifizierung des Grundlagenvertrags sind nunmehr drei Jahrzehnte vergangen.',
            clozeSentence: 'Seit der Ratifizierung sind drei Jahrzehnte [...].',
            translationEn: 'Three decades have now passed since the ratification of the foundational treaty.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine schwere moralische oder juristische Straftat an einer Person oder Natur begehen',
            definitionEn: 'To violate, offend against, or assault someone defenceless or desecrate nature',
            nuance: 'Strafrecht & Moraltheologie',
            grammarInfo: 'sich vergehen an + Dat',
            exampleSentence: 'Wer sich an Schutzbedürftigen vergeht, muss mit der vollen Härte des Gesetzes rechnen.',
            clozeSentence: 'Wer sich an Schutzbedürftigen [...], wird hart bestraft.',
            translationEn: 'Anyone who offends against vulnerable persons must expect the full severity of the law.'
          }
        ]
      },
      {
        id: 'pref-gehen-übergehen',
        word: 'übergehen',
        baseRootVerb: 'gehen',
        prefix: 'über-',
        isSeparable: true,
        prefixTypeLabel: 'variabel',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Zum nächsten Thema übergehen (trennbar) oder verdiente Personen ignorieren (untrennbar)',
        primaryDefinitionEn: 'To proceed to the next topic (separable) or pass over/ignore someone (inseparable)',
        collocation: 'zur Tagesordnung übergehen; jemanden bei der Beförderung übergehen',
        synonyms: ['weiterschreiten', 'wechseln', 'missachten', 'ignorieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Nach Abschluss eines Gedankens die Diskussion dem nächsten Punkt zuwenden',
            definitionEn: 'To proceed, pass on, or transition to the subsequent agenda item (separable)',
            nuance: 'Sitzungsleitung & Rhetorik',
            grammarInfo: 'übergehen zu + Dat (trennbar: er geht über)',
            exampleSentence: 'Nach der Genehmigung des Protokolls ging das Gremium zum Haupttagesordnungspunkt über.',
            clozeSentence: 'Das Gremium [...] zum Haupttagesordnungspunkt [...].',
            translationEn: 'Following approval of the minutes, the panel proceeded to the main agenda item.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine qualifizierte Persönlichkeit bei einer Auszeichnung oder Beförderung übergehen',
            definitionEn: 'To pass over, bypass, or ignore someone intentionally in promotions (inseparable)',
            nuance: 'Personalpolitik & Ungerechtigkeit',
            grammarInfo: 'transitiv + Akk (untrennbar: sie überging den Kollegen)',
            exampleSentence: 'Obwohl sie herausragende Leistungen erbrachte, wurde die Ingenieurin bei der Beförderung übergangen.',
            clozeSentence: 'Die Ingenieurin wurde bei der Beförderung [...].',
            translationEn: 'Although she delivered outstanding achievements, the engineer was passed over for promotion.'
          }
        ]
      },
      {
        id: 'pref-gehen-hervorgehen',
        word: 'hervorgehen',
        baseRootVerb: 'gehen',
        prefix: 'hervor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Akademisch',
        primaryDefinitionDe: 'Aus Daten/Befunden ersichtlich werden oder als Sieger aus einem Wettbewerb siegen',
        primaryDefinitionEn: 'To emerge or become clear from evidence, or emerge victorious from a contest',
        collocation: 'aus den Akten geht hervor; als Sieger aus der Wahl hervorgehen',
        synonyms: ['sich ergeben aus', 'folgen aus', 'triumphieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Durch sorgfältige Lektüre von Dokumenten oder Statistiken offenkundig werden',
            definitionEn: 'To be evident, emerge, or stem conclusively from documents, data, or files',
            nuance: 'Hermeneutik & Quellenkritik',
            grammarInfo: 'hervorgehen aus + Dat',
            exampleSentence: 'Aus den internen Dokumenten geht unmissverständlich hervor, dass der Mangel bekannt war.',
            clozeSentence: 'Aus den Dokumenten [...] unmissverständlich [...], dass es bekannt war.',
            translationEn: 'From the internal documents it emerges unequivocally that the defect was known.'
          }
        ]
      },
      {
        id: 'pref-gehen-nachgehen',
        word: 'nachgehen',
        baseRootVerb: 'gehen',
        prefix: 'nach-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Einer Spur oder einem Verdacht akribisch nachforschen oder einem Beruf nachgehen',
        primaryDefinitionEn: 'To investigate a suspicion/clue meticulously, or pursue an occupation/calling',
        collocation: 'einem Verdacht akribisch nachgehen; einer Beschäftigung nachgehen; die Uhr geht nach',
        synonyms: ['ermitteln', 'untersuchen', 'ausüben'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einem Verdacht, Hinweisen oder wissenschaftlichen Spuren intensiv auf den Grund gehen',
            definitionEn: 'To investigate, track down, or follow up on a clue, suspicion, or inquiry',
            nuance: 'Kriminalistik & Recherche',
            grammarInfo: 'jemandem/einer Sache (Dat) nachgehen',
            exampleSentence: 'Die Staatsanwaltschaft muss jedem begründeten Hinweis auf Korruption gewissenhaft nachgehen.',
            clozeSentence: 'Die Behörde muss jedem Hinweis auf Korruption [...].',
            translationEn: 'The public prosecution service must conscientiously investigate every well-founded tip of corruption.'
          }
        ]
      },
      {
        id: 'pref-gehen-entgehen',
        word: 'entgehen',
        baseRootVerb: 'gehen',
        prefix: 'ent-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Einer Strafe knapp entkommen oder ein wichtiges Detail unbemerkt übersehen',
        primaryDefinitionEn: 'To escape/evade impending punishment, or miss an important detail accidentally',
        collocation: 'einer drohenden Katastrophe entgehen; das ist meiner Aufmerksamkeit entgangen',
        synonyms: ['entkommen', 'entrinnen', 'übersehen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einer drohenden Gefahr oder Sanktion durch glückliche Umstände entkommen',
            definitionEn: 'To escape, evade, or elude impending peril, disaster, or punishment',
            nuance: 'Rettung & Schicksal',
            grammarInfo: 'einer Sache (Dat) entgehen',
            exampleSentence: 'Durch die geistesgegenwärtige Bremsung entgingen die Reisenden einer fatalen Kollision.',
            clozeSentence: 'Durch die Bremsung [...] die Reisenden einer Kollision.',
            translationEn: 'Thanks to alert braking, the passengers escaped a fatal collision.'
          }
        ]
      },
      {
        id: 'pref-gehen-untergehen',
        word: 'untergehen',
        baseRootVerb: 'gehen',
        prefix: 'unter-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Historisch',
        primaryDefinitionDe: 'Reiche/Kulturen brechen zusammen, Schiffe versinken oder Stimmen verhallen',
        primaryDefinitionEn: 'Empires collapse/perish, ships sink, or voices get drowned out in noise',
        collocation: 'das Römische Reich ging unter; im Lärm der Menge untergehen',
        synonyms: ['zusammenbrechen', 'versinken', 'verhallen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Als historische Zivilisation, Imperium oder Institution endgültig zugrunde gehen',
            definitionEn: 'To collapse, perish, or fall into ruin (empires, cultures, civilizations)',
            nuance: 'Geschichtsphilosophie',
            grammarInfo: 'intransitiv (ein Staat geht unter)',
            exampleSentence: 'Historiker debattieren bis heute darüber, warum das Weströmische Reich einst unterging.',
            clozeSentence: 'Historiker debattieren, warum das Reich einst [...].',
            translationEn: 'Historians debate to this day why the Western Roman Empire once collapsed.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY: TRETEN
  // ==========================================
  {
    rootVerb: 'treten',
    rootMeaningDe: 'Einen Schritt setzen, den Fuß aufsetzen, sich einfinden',
    rootMeaningEn: 'To step, tread, kick, enter into',
    descriptionDe: '»treten« stiftet hochformelle Rechts- und Staatsbegriffe: ein Amt antreten, für Werte eintreten, Rechte abtreten, zurücktreten.',
    descriptionEn: 'The root "treten" creates foundational constitutional and legal terminology: assuming office, advocating for values, resigning.',
    verbsCount: 8,
    verbs: [
      {
        id: 'pref-treten-antreten',
        word: 'antreten',
        baseRootVerb: 'treten',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Amtlich',
        primaryDefinitionDe: 'Ein hohes Amt antreten, zur Arbeit erscheinen oder im Wettkampf konkurrieren',
        primaryDefinitionEn: 'To assume/take up an office, report for duty, or compete against a rival',
        collocation: 'ein Ministeramt feierlich antreten; eine Professur antreten; gegen den Meister antreten',
        synonyms: ['übernehmen', 'beginnen', 'erscheinen', 'konkurrieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine verfassungsmäßige, diplomatische oder akademische Funktion feierlich beginnen',
            definitionEn: 'To assume, enter upon, or take up an executive or academic office',
            nuance: 'Staatsorganisation & Hochschule',
            grammarInfo: 'transitiv + Akk (ein Amt antreten)',
            exampleSentence: 'Die neue Kanzlerin trat ihr Regierungsmandat mit einer programmatischen Rede an.',
            clozeSentence: 'Die Kanzlerin [...] ihr Mandat mit einer Rede [...].',
            translationEn: 'The new chancellor assumed her governing mandate with a programmatic address.'
          }
        ]
      },
      {
        id: 'pref-treten-eintreten',
        word: 'eintreten',
        baseRootVerb: 'treten',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Ethik',
        primaryDefinitionDe: 'Entschieden für Werte eintreten, einer Vereinigung beitreten oder Ereignisse treten ein',
        primaryDefinitionEn: 'To champion/advocate for values, join an organization, or occur/happen',
        collocation: 'entschieden für die Meinungsfreiheit eintreten; in eine Partei eintreten; Besserung tritt ein',
        synonyms: ['sich einsetzen für', 'plädieren für', 'beitreten', 'geschehen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Sich mit Leidenschaft und Entschlossenheit für Menschenrechte oder Gerechtigkeit verbürgen',
            definitionEn: 'To advocate, champion, or stand up unequivocally for freedom, justice, or values',
            nuance: 'Ethik & Zivilcourage',
            grammarInfo: 'eintreten für + Akk',
            exampleSentence: 'Die Bürgerbewegung tritt unerschrocken für Pressefreiheit und Transparenz ein.',
            clozeSentence: 'Die Bewegung [...] unerschrocken für Pressefreiheit [...].',
            translationEn: 'The citizens\' movement stands up dauntlessly for press freedom and transparency.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine erhoffte oder gefürchtete Wirkung stellt sich tatsächlich ein',
            definitionEn: 'To occur, happen, or materialize (effects, improvements, consequences)',
            nuance: 'Kausalität & Zustand',
            grammarInfo: 'intransitiv (die Wirkung tritt ein)',
            exampleSentence: 'Trotz intensiver Therapien trat die erhoffte Stabilisierung des Zustands nicht ein.',
            clozeSentence: 'Die erhoffte Stabilisierung [...] leider nicht [...].',
            translationEn: 'Despite intensive therapies, the hoped-for stabilization of the condition did not materialize.'
          }
        ]
      },
      {
        id: 'pref-treten-abtreten',
        word: 'abtreten',
        baseRootVerb: 'treten',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Völkerrecht',
        primaryDefinitionDe: 'Rechte/Territorien hoheitlich an andere übertragen oder von der Bühne abtreten',
        primaryDefinitionEn: 'To cede/assign sovereignty rights or territories, or depart from the public stage',
        collocation: 'Gebietsansprüche vertraglich abtreten; von der politischen Bühne abtreten',
        synonyms: ['zedieren', 'übertragen', 'abtreten', 'scheiden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Rechtsanspruch oder ein Territorium vertraglich an einen anderen Staat zedieren',
            definitionEn: 'To cede, convey, or assign legal claims, debts, or territorial rights',
            nuance: 'Völkerrecht & Zivilrecht',
            grammarInfo: 'etwas (Akk) an jemanden (Akk) abtreten',
            exampleSentence: 'Im Friedensvertrag musste der unterlegene Staat bedeutende Grenzregionen abtreten.',
            clozeSentence: 'Der Staat musste bedeutende Regionen [...].',
            translationEn: 'In the peace treaty, the defeated state had to cede significant border regions.'
          }
        ]
      },
      {
        id: 'pref-treten-vertreten',
        word: 'vertreten',
        baseRootVerb: 'treten',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Mandanten juristisch vertreten, wissenschaftliche Positionen vertreten oder Kollegen vertreten',
        primaryDefinitionEn: 'To represent clients/voters, advocate an intellectual stance, or stand in for someone',
        collocation: 'Interessen vor Gericht vertreten; einen wissenschaftlichen Standpunkt vertreten',
        synonyms: ['repräsentieren', 'verfechten', 'substituieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Als bevollmächtigter Abgeordneter oder Anwalt im Namen anderer handeln und sprechen',
            definitionEn: 'To legally represent clients, citizens, or an institution in court or parliament',
            nuance: 'Repräsentation & Recht',
            grammarInfo: 'transitiv + Akk (Interessen vertreten)',
            exampleSentence: 'Die renommierte Kanzlei vertritt die Belange der Kläger vor dem Verfassungsgericht.',
            clozeSentence: 'Die Kanzlei [...] die Belange der Kläger vor Gericht.',
            translationEn: 'The prestigious law firm represents the plaintiffs\' interests before the constitutional court.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Eine fundierte Überzeugung oder These mit Argumenten öffentlich behaupten und verteidigen',
            definitionEn: 'To advocate, champion, or defend an intellectual or ethical perspective',
            nuance: 'Diskurs & Philosophie',
            grammarInfo: 'eine Auffassung / Meinung vertreten',
            exampleSentence: 'Der Philosoph vertritt die These, dass Künstliche Intelligenz ein neues Rechtsbewusstsein erfordert.',
            clozeSentence: 'Der Philosoph [...] die These, dass KI neues Recht erfordert.',
            translationEn: 'The philosopher advocates the thesis that artificial intelligence requires a new legal awareness.'
          }
        ]
      },
      {
        id: 'pref-treten-auftreten',
        word: 'auftreten',
        baseRootVerb: 'treten',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Souverän in der Öffentlichkeit agieren, auf der Bühne spielen oder unerwartet eintreten',
        primaryDefinitionEn: 'To conduct oneself with poise in public, perform on stage, or arise/emerge (symptoms)',
        collocation: 'souverän und überzeugend auftreten; auf der Bühne auftreten; Komplikationen treten auf',
        synonyms: ['agieren', 'sich präsentieren', 'sich manifestieren', 'entstehen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Durch Körpersprache, Eloquenz und Habitus einen bestimmten Eindruck in der Öffentlichkeit hinterlassen',
            definitionEn: 'To carry oneself, behave, or make an impression with poise and authority',
            nuance: 'Habitus & Rhetorik',
            grammarInfo: 'intransitiv (sicher / kompetent auftreten)',
            exampleSentence: 'Die Ministerin trat während der internationalen Krisensitzung äußerst souverän und bestimmt auf.',
            clozeSentence: 'Die Ministerin [...] in der Krisensitzung souverän [...].',
            translationEn: 'The minister conducted herself with utmost confidence and resolve during the international crisis session.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Unerwartete Symptome, Mängel oder Phänomene manifestieren sich plötzlich',
            definitionEn: 'To crop up, emerge, or manifest suddenly (symptoms, flaws, complications)',
            nuance: 'Medizin & Systemanalyse',
            grammarInfo: 'intransitiv (Fehler / Symptome treten auf)',
            exampleSentence: 'Im Zuge der Belastungstests traten vereinzelt thermische Instabilitäten am Triebwerk auf.',
            clozeSentence: 'Bei den Tests [...] thermische Instabilitäten [...].',
            translationEn: 'In the course of stress testing, sporadic thermal instabilities arose in the engine.'
          }
        ]
      },
      {
        id: 'pref-treten-zurücktreten',
        word: 'zurücktreten',
        baseRootVerb: 'treten',
        prefix: 'zurück-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Politik',
        primaryDefinitionDe: 'Von einem politischen Spitzenamt resignieren oder von einem Vertrag absehen',
        primaryDefinitionEn: 'To resign from high office or rescind/withdraw legally from a sales contract',
        collocation: 'von seinem Ministeramt zurücktreten; vom Kaufvertrag fristgerecht zurücktreten',
        synonyms: ['demissionieren', 'resignieren', 'widerrufen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Die politische Verantwortung für eine Krise übernehmen und das Amt niederlegen',
            definitionEn: 'To resign or step down from high executive office or ministerial post',
            nuance: 'Verantwortung & Demission',
            grammarInfo: 'zurücktreten von + Dat (von einem Amt)',
            exampleSentence: 'Nach der Aufdeckung gravierender Fehlentscheidungen trat der Verteidigungsminister zurück.',
            clozeSentence: 'Nach der Aufdeckung [...] der Minister unverzüglich [...].',
            translationEn: 'Following the exposure of grave misjudgments, the defense minister resigned immediately.'
          }
        ]
      },
      {
        id: 'pref-treten-austreten',
        word: 'austreten',
        baseRootVerb: 'treten',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Aus einer Körperschaft formell austreten oder chemisch entweichen',
        primaryDefinitionEn: 'To resign membership from a party/church or leak/escape (chemicals, gas)',
        collocation: 'aus einer Partei formell austreten; giftige Gase treten aus',
        synonyms: ['ausscheiden', 'kündigen', 'entweichen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Die Mitgliedschaft in einer Partei, Konfession oder Vereinigung beenden',
            definitionEn: 'To formally resign membership from a church, party, or institution',
            nuance: 'Vereinsrecht & Verfassung',
            grammarInfo: 'austreten aus + Dat',
            exampleSentence: 'Aus Protest gegen den Rechtsruck traten hunderte Mitglieder geschlossen aus der Partei aus.',
            clozeSentence: 'Hunderte Mitglieder [...] geschlossen aus der Partei [...].',
            translationEn: 'In protest against the rightward shift, hundreds of members collectively resigned from the party.'
          }
        ]
      },
      {
        id: 'pref-treten-übertreten',
        word: 'übertreten',
        baseRootVerb: 'treten',
        prefix: 'über-',
        isSeparable: true,
        prefixTypeLabel: 'variabel',
        level: 'C1',
        register: 'Bildungssprachlich / Justiz',
        primaryDefinitionDe: 'Ein Gesetz schuldhaft verletzen (untrennbar) oder zur Konfession konvertieren (trennbar)',
        primaryDefinitionEn: 'To transgress/violate a law (inseparable) or convert to a faith (separable)',
        collocation: 'ein Gesetz wissentlich übertreten; zu einer anderen Religion übertreten',
        synonyms: ['verletzen', 'missachten', 'konvertieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine strafrechtliche oder moralische Grenzziehung vorsätzlich verletzen',
            definitionEn: 'To transgress, breach, or violate a statutory law or solemn command (inseparable)',
            nuance: 'Strafrecht & Gesetzesbruch',
            grammarInfo: 'transitiv + Akk (untrennbar: er übertrat das Gesetz)',
            exampleSentence: 'Wer die verfassungsrechtlichen Schranken wissentlich übertritt, riskiert Strafverfolgung.',
            clozeSentence: 'Wer die Schranken wissentlich [...], wird bestraft.',
            translationEn: 'Anyone who knowingly transgresses constitutional boundaries risks criminal prosecution.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY: BRINGEN
  // ==========================================
  {
    rootVerb: 'bringen',
    rootMeaningDe: 'Etwas transportieren, überbringen, veranlassen',
    rootMeaningEn: 'To bring, convey, yield, cause, produce',
    descriptionDe: '»bringen« liefert unersetzliche C1-Idiome: Beweise erbringen, Kenntnisse beibringen, Mut aufbringen, Gesetze einbringen.',
    descriptionEn: 'The root "bringen" delivers indispensable C1 idioms: furnishing proof, imparting skills, summoning courage, introducing bills.',
    verbsCount: 8,
    verbs: [
      {
        id: 'pref-bringen-beibringen',
        word: 'beibringen',
        baseRootVerb: 'bringen',
        prefix: 'bei-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Justiz',
        primaryDefinitionDe: 'Wissen didaktisch vermitteln, heikle Nachrichten schonend mitteilen oder Beweise liefern',
        primaryDefinitionEn: 'To teach skills, break sensitive news gently, or produce legal proof in court',
        collocation: 'jemandem Fähigkeiten beibringen; eine schlechte Nachricht schonend beibringen; Beweise beibringen',
        synonyms: ['lehren', 'vermitteln', 'eröffnen', 'vorlegen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Jemandem eine komplexe Kunstfertigkeit oder methodische Kenntnis lehren',
            definitionEn: 'To teach, impart, or instruct someone in an intricate skill or methodology',
            nuance: 'Pädagogik & Didaktik',
            grammarInfo: 'jemandem (Dat) etwas (Akk) beibringen',
            exampleSentence: 'Die Mentorin brachte dem Nachwuchswissenschaftler das Handwerk des akademischen Schreibens bei.',
            clozeSentence: 'Die Mentorin [...] ihm das Handwerk des Schreibens [...].',
            translationEn: 'The mentor taught the junior scientist the craft of academic writing.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Im Gerichtsverfahren notwendige Urkunden oder Beweismittel fristgerecht einreichen',
            definitionEn: 'To furnish, produce, or submit legal proof or documents before court',
            nuance: 'Prozessrecht & Beweisführung',
            grammarInfo: 'Beweise / Nachweise beibringen',
            exampleSentence: 'Der Kläger konnte bis zum Ende der Frist keine stichhaltigen Beweise für seine Behauptung beibringen.',
            clozeSentence: 'Der Kläger konnte keine Beweise [...].',
            translationEn: 'The plaintiff was unable to produce any convincing evidence for his assertion by the deadline.'
          }
        ]
      },
      {
        id: 'pref-bringen-erbringen',
        word: 'erbringen',
        baseRootVerb: 'bringen',
        prefix: 'er-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Wissenschaftliche Nachweise liefern oder anspruchsvolle Leistungen vollbringen',
        primaryDefinitionEn: 'To furnish empirical evidence or perform/render outstanding services',
        collocation: 'den empirischen Beweis erbringen; Höchstleistungen erbringen; eine Leistung erbringen',
        synonyms: ['nachweisen', 'beweisen', 'leisten', 'liefern'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen zwingenden logischen oder empirischen Beweis für eine These liefern',
            definitionEn: 'To provide, furnish, or render undeniable proof of an empirical phenomenon',
            nuance: 'Wissenschaftstheorie & Audit',
            grammarInfo: 'transitiv + Akk (den Nachweis erbringen)',
            exampleSentence: 'Dem Forscherteam gelang es, den schlüssigen Nachweis für die Existenz dunkler Materie zu erbringen.',
            clozeSentence: 'Dem Team gelang es, den Nachweis zu [...].',
            translationEn: 'The research team succeeded in furnishing conclusive proof for the existence of dark matter.'
          }
        ]
      },
      {
        id: 'pref-bringen-einbringen',
        word: 'einbringen',
        baseRootVerb: 'bringen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Politik',
        primaryDefinitionDe: 'Fachwissen konstruktiv beisteuern, Gesetzentwürfe im Parlament lancieren oder Rendite abwerfen',
        primaryDefinitionEn: 'To contribute expertise, table legislation in parliament, or yield profit',
        collocation: 'sein Fachwissen gewinnbringend einbringen; einen Gesetzentwurf einbringen; hohe Gewinne einbringen',
        synonyms: ['beisteuern', 'initiieren', 'vorlegen', 'abwerfen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Seine individuellen Kompetenzen und Talente zum Wohle eines Kollektivprojekts investieren',
            definitionEn: 'To contribute one\'s specialized skills, insights, or resources to a shared endeavor',
            nuance: 'Kollaboration & Teamarbeit',
            grammarInfo: 'etwas einbringen in + Akk',
            exampleSentence: 'Die Ökonomin brachte ihre profunden Marktkenntnisse in die Ausarbeitung der Reform ein.',
            clozeSentence: 'Die Ökonomin [...] ihre Marktkenntnisse in die Reform [...].',
            translationEn: 'The economist contributed her profound market knowledge to the elaboration of the reform.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Einen Gesetzentwurf oder Antrag zur parlamentarischen Lesung offiziell vorlegen',
            definitionEn: 'To introduce, table, or sponsor a legislative bill before parliament',
            nuance: 'Parlamentarismus & Gesetzgebung',
            grammarInfo: 'einen Entwurf im Parlament einbringen',
            exampleSentence: 'Die Fraktionen brachten gemeinsam einen Dringlichkeitsantrag zur Energieversorgung ein.',
            clozeSentence: 'Die Fraktionen [...] gemeinsam einen Antrag [...].',
            translationEn: 'The parliamentary groups jointly introduced an urgent motion on energy security.'
          }
        ]
      },
      {
        id: 'pref-bringen-aufbringen',
        word: 'aufbringen',
        baseRootVerb: 'bringen',
        prefix: 'auf-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Psychische Geduld/Mut mobilisieren, finanzielle Mittel beschaffen oder verärgern',
        primaryDefinitionEn: 'To summon courage/patience, raise financial funds, or antagonize people',
        collocation: 'große Geduld / Mut aufbringen; die Geldmittel aufbringen; das Team gegen sich aufbringen',
        synonyms: ['mobilisieren', 'beschaffen', 'finanzieren', 'verärgern'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'In einer extrem fordernden Lage die notwendige innere Stärke und Geduld aktivieren',
            definitionEn: 'To muster, summon, or summon up the required patience, courage, or forbearance',
            nuance: 'Resilienz & Willenskraft',
            grammarInfo: 'Geduld / Mut / Verständnis aufbringen für + Akk',
            exampleSentence: 'Man muss bei der Betreuung traumatisierter Personen enormes Einfühlungsvermögen aufbringen.',
            clozeSentence: 'Man muss enormes Einfühlungsvermögen [...].',
            translationEn: 'One must summon enormous empathy when caring for traumatized individuals.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Die erforderlichen Geldmittel für eine teure Investition zusammentragen',
            definitionEn: 'To raise, procure, or finance the necessary capital for an endeavor',
            nuance: 'Finanzierung & Investition',
            grammarInfo: 'transitiv + Akk (die Mittel aufbringen)',
            exampleSentence: 'Die Kommune konnte den millionenschweren Eigenanteil für das Klinikum kaum aufbringen.',
            clozeSentence: 'Die Kommune konnte den Eigenanteil kaum [...].',
            translationEn: 'The municipality was barely able to raise its multi-million euro co-financing share for the clinic.'
          }
        ]
      },
      {
        id: 'pref-bringen-vorbringen',
        word: 'vorbringen',
        baseRootVerb: 'bringen',
        prefix: 'vor-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Formell / Bildungssprachlich',
        primaryDefinitionDe: 'Argumente, Einwände oder Beschwerden in einer Sitzung förmlich artikulieren',
        primaryDefinitionEn: 'To put forward, advance, articulate, or voice objections or grievances',
        collocation: 'berechtigte Bedenken vorbringen; seine Beschwerde sachlich vorbringen',
        synonyms: ['artikulieren', 'äußern', 'vortragen'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen kritischen Gedanken oder Einspruch in einer formellen Verhandlung zur Sprache bringen',
            definitionEn: 'To advance, submit, or voice objections or arguments in formal deliberations',
            nuance: 'Verhandlung & Rhetorik',
            grammarInfo: 'transitiv + Akk (Bedenken / Argumente vorbringen)',
            exampleSentence: 'Die Umweltverbände brachten stichhaltige Bedenken gegen den Autobahnausbau vor.',
            clozeSentence: 'Die Verbände [...] stichhaltige Bedenken gegen den Ausbau [...].',
            translationEn: 'The environmental associations advanced cogent reservations against the highway expansion.'
          }
        ]
      },
      {
        id: 'pref-bringen-anbringen',
        word: 'anbringen',
        baseRootVerb: 'bringen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Gegenstände montieren oder Anmerkungen passend im Gespräch platzieren',
        primaryDefinitionEn: 'To attach/mount fixtures physically or inject a remark appropriately into dialogue',
        collocation: 'Warnschilder anbringen; eine treffende Bemerkung anbringen',
        synonyms: ['montieren', 'befestigen', 'äußern', 'einflechten'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine kluge Kritik oder passende Bemerkung an richtiger Stelle in den Diskurs einflechten',
            definitionEn: 'To insert, voice, or inject a pertinent comment or criticism during debate',
            nuance: 'Konversation & Taktik',
            grammarInfo: 'eine Bemerkung / Kritik anbringen',
            exampleSentence: 'In der Podiumsdiskussion konnte der Journalist seine provokante Frage geschickt anbringen.',
            clozeSentence: 'Der Journalist konnte seine Frage geschickt [...].',
            translationEn: 'During the panel discussion, the journalist was able to adroitly voice his provocative question.'
          }
        ]
      },
      {
        id: 'pref-bringen-verbringen',
        word: 'verbringen',
        baseRootVerb: 'bringen',
        prefix: 'ver-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Zeit an einem Ort oder mit einer intellektuellen Beschäftigung zubringen',
        primaryDefinitionEn: 'To spend/pass time at a location or engaged in an intellectual pursuit',
        collocation: 'seine Studienzeit im Ausland verbringen; Jahre im Exil verbringen',
        synonyms: ['weilen', 'zubringen', 'verleben'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine Zeitspanne an einem bestimmten Ort verweilen oder mit einer Tätigkeit füllen',
            definitionEn: 'To spend or pass a period of time living in a place or engaging in study',
            nuance: 'Biographie & Lebensführung',
            grammarInfo: 'Zeit verbringen mit/in + Dat',
            exampleSentence: 'Der Philosoph verbrachte die Jahre seines Exils mit der Abfassung seines Hauptwerks.',
            clozeSentence: 'Der Philosoph [...] Jahre mit der Abfassung des Werks.',
            translationEn: 'The philosopher spent the years of his exile composing his magnum opus.'
          }
        ]
      },
      {
        id: 'pref-bringen-zubringen',
        word: 'zubringen',
        baseRootVerb: 'bringen',
        prefix: 'zu-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Gehoben / Bildungssprachlich',
        primaryDefinitionDe: 'Eine längere Zeitspanne mit Grübeln, Schlaflosigkeit oder Warten verbringen',
        primaryDefinitionEn: 'To spend time enduring or occupied with brooding, sleeplessness, or waiting',
        collocation: 'die Nacht schlaflos mit Grübeln zubringen; den Lebensabend in Ruhe zubringen',
        synonyms: ['verleben', 'verbringen', 'ausharren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Zeitraum in einem bestimmten emotionalen Zustand oder bei einer Beschäftigung verleben',
            definitionEn: 'To spend or pass time in a contemplative state or enduring a situation',
            nuance: 'Literarischer Stil & Essayistik',
            grammarInfo: 'Zeit zubringen mit + Dat',
            exampleSentence: 'Der Wissenschaftler brachte Tage in der Bibliothek mit dem Studium alter Handschriften zu.',
            clozeSentence: 'Der Forscher [...] Tage mit dem Studium der Handschriften [...].',
            translationEn: 'The scholar spent days in the library studying ancient manuscripts.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // FAMILY: SCHLIESSEN
  // ==========================================
  {
    rootVerb: 'schließen',
    rootMeaningDe: 'Zusammenfügen, verriegeln, folgern, beenden',
    rootMeaningEn: 'To close, lock, conclude, infer, deduce',
    descriptionDe: '»schließen« ist der epistemologische Kern des Deutschen: logisch schließen, Verträge abschließen, Möglichkeiten ausschließen.',
    descriptionEn: 'The root "schließen" represents the epistemological core of German: logical deduction, concluding treaties, precluding risks.',
    verbsCount: 6,
    verbs: [
      {
        id: 'pref-schliessen-ausschliessen',
        word: 'ausschließen',
        baseRootVerb: 'schließen',
        prefix: 'aus-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Wissenschaft',
        primaryDefinitionDe: 'Eine Hypothese/Fehlerquelle kategorisch verwerfen oder Mitglieder disqualifizieren',
        primaryDefinitionEn: 'To categorically rule out/preclude hypotheses, or expel/disqualify members',
        collocation: 'menschliches Versagen definitiv ausschließen; aus der Partei ausschließen',
        synonyms: ['prekludieren', 'verwerfen', 'exkommunizieren', 'disqualifizieren'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Eine theoretische Erklärung oder Fehlerquelle nach sorgfältiger Prüfung als unmöglich ablehnen',
            definitionEn: 'To categorically preclude, eliminate, or rule out a potential cause or hypothesis',
            nuance: 'Logik & Forensik',
            grammarInfo: 'transitiv + Akk (eine Möglichkeit ausschließen)',
            exampleSentence: 'Die Flugunfallermittler konnten einen technischen Defekt der Triebwerke definitiv ausschließen.',
            clozeSentence: 'Die Ermittler konnten einen Defekt definitiv [...].',
            translationEn: 'The air accident investigators were able to definitely rule out an engine malfunction.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Ein Parteimitglied oder Verbandsmitglied wegen gravierender Vergehen dauerhaft verbannen',
            definitionEn: 'To expel, banish, or disqualify someone from a party or academic society',
            nuance: 'Vereinsrecht & Disziplinarrecht',
            grammarInfo: 'jemanden ausschließen aus + Dat',
            exampleSentence: 'Wegen satzungswidrigen Verhaltens wurde der Abgeordnete einstimmig aus der Fraktion ausgeschlossen.',
            clozeSentence: 'Der Abgeordnete wurde einstimmig aus der Fraktion [...].',
            translationEn: 'Due to conduct contrary to party statutes, the lawmaker was unanimously expelled from the parliamentary group.'
          }
        ]
      },
      {
        id: 'pref-schliessen-abschliessen',
        word: 'abschließen',
        baseRootVerb: 'schließen',
        prefix: 'ab-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Verträge/Studien erfolgreich vollenden, Türen versperren oder mit der Vergangenheit brechen',
        primaryDefinitionEn: 'To conclude treaties/degrees successfully, lock doors, or make peace with the past',
        collocation: 'einen Vertrag vorteilhaft abschließen; ein Studium abschließen; mit der Vergangenheit abschließen',
        synonyms: ['vollenden', 'besiegeln', 'finalisieren', 'verriegeln'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Ein akademisches Hochschulstudium oder ein Großprojekt zur formellen Reife bringen',
            definitionEn: 'To conclude, complete, or graduate from university studies or a project',
            nuance: 'Akademische Grade & Verträge',
            grammarInfo: 'transitiv + Akk (das Examen / den Vertrag abschließen)',
            exampleSentence: 'Die Verhandlungsdelegationen schlossen den bilateralen Freihandelsvertrag nach Monaten zähen Ringens ab.',
            clozeSentence: 'Die Delegationen [...] den Freihandelsvertrag erfolgreich [...].',
            translationEn: 'The negotiating delegations successfully concluded the bilateral free trade agreement after months of tough haggling.'
          },
          {
            meaningNumber: 2,
            definitionDe: 'Ein traumatisches oder schmerzhaftes Lebenskapitel emotional hinter sich lassen',
            definitionEn: 'To make peace with, come to terms with, or put behind oneself a painful past chapter',
            nuance: 'Psychologie & Bewältigung',
            grammarInfo: 'abschließen mit + Dat',
            exampleSentence: 'Nach dem langen Konflikt wollte die Verfasserin endgültig mit den Streitigkeiten abschließen.',
            clozeSentence: 'Sie wollte endgültig mit den Streitigkeiten [...].',
            translationEn: 'After the protracted conflict, the author wanted to finally put the disputes behind her.'
          }
        ]
      },
      {
        id: 'pref-schliessen-anschliessen',
        word: 'anschließen',
        baseRootVerb: 'schließen',
        prefix: 'an-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Geräte an Strom/Netz koppeln oder sich der Meinung anderer zustimmend beigesellen',
        primaryDefinitionEn: 'To connect devices to networks, or endorse/align with an intellectual opinion',
        collocation: 'sich der Meinung vollumfänglich anschließen; an das Glasfasernetz anschließen',
        synonyms: ['zustimmen', 'beipflichten', 'konnektieren', 'ankoppeln'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Sich den überzeugenden Argumenten einer Autorität oder eines Kollegen vorbehaltlos anschließen',
            definitionEn: 'To align with, endorse, or agree with someone\'s opinion or judgment wholeheartedly',
            nuance: 'Diskurs & Urteilsbildung',
            grammarInfo: 'sich (Akk) einer Meinung (Dat) anschließen',
            exampleSentence: 'Die Gutachter schlossen sich nach intensiver Beratung dem Votum der Leitkommission an.',
            clozeSentence: 'Die Gutachter [...] sich dem Votum der Kommission [...].',
            translationEn: 'Following intensive deliberations, the appraisers aligned with the verdict of the lead commission.'
          }
        ]
      },
      {
        id: 'pref-schliessen-beschliessen',
        word: 'beschließen',
        baseRootVerb: 'schließen',
        prefix: 'be-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Formell / Parlamentarisch',
        primaryDefinitionDe: 'Gesetze im Parlament demokratisch verabschieden oder eine Tagung beenden',
        primaryDefinitionEn: 'To resolve, pass, or enact a law in parliament, or conclude a symposium',
        collocation: 'ein Gesetz mehrheitlich beschließen; die Tagung mit einem Festakt beschließen',
        synonyms: ['verabschieden', 'dekretierten', 'beschließen', 'beenden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Einen Gesetzesentwurf oder Beschluss durch förmliche parlamentarische Abstimmung in Kraft setzen',
            definitionEn: 'To formally resolve, vote on, or enact a bill or statute in parliament',
            nuance: 'Legislative & Staatsrecht',
            grammarInfo: 'transitiv + Akk (eine Reform beschließen)',
            exampleSentence: 'Der Bundestag beschloss das Gesetz zur Beschleunigung von Asylverfahren mit breiter Mehrheit.',
            clozeSentence: 'Der Bundestag [...] das Gesetz mit breiter Mehrheit.',
            translationEn: 'The Bundestag passed the law on accelerating asylum procedures with a broad majority.'
          }
        ]
      },
      {
        id: 'pref-schliessen-entschliessen',
        word: 'entschließen',
        baseRootVerb: 'schließen',
        prefix: 'ent-',
        isSeparable: false,
        prefixTypeLabel: 'untrennbar',
        level: 'C1',
        register: 'Bildungssprachlich',
        primaryDefinitionDe: 'Einen verbindlichen Entschluss für das eigene Leben oder Handeln fassen',
        primaryDefinitionEn: 'To make up one\'s mind, resolve, or determine firmly to undertake an action',
        collocation: 'sich zu einem Schritt entschließen; sich schweren Herzens entschließen',
        synonyms: ['beschließen', 'sich durchringen', 'entscheiden'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Nach intensiver Abwägung zu einem definitiven Handlungsvorsatz gelangen',
            definitionEn: 'To resolve, make a definitive decision, or determine to take a crucial step',
            nuance: 'Entschlusskraft & Ethos',
            grammarInfo: 'sich entschließen zu + Dat',
            exampleSentence: 'Nach jahrelangem Zögern entschloss sich die Wissenschaftlerin zur Gründung eines Start-ups.',
            clozeSentence: 'Sie [...] sich schließlich zur Gründung eines Start-ups.',
            translationEn: 'Following years of hesitation, the scientist resolved to found a start-up.'
          }
        ]
      },
      {
        id: 'pref-schliessen-einschliessen',
        word: 'einschließen',
        baseRootVerb: 'schließen',
        prefix: 'ein-',
        isSeparable: true,
        prefixTypeLabel: 'trennbar',
        level: 'C1',
        register: 'Bildungssprachlich / Formell',
        primaryDefinitionDe: 'Im Leistungsumfang enthalten sein oder Personen räumlich einsperren/umzingeln',
        primaryDefinitionEn: 'To encompass/include provisions in scope, or lock in/encircle physically',
        collocation: 'alle Nebenkosten einschließen; den Feind im Kessel einschließen',
        synonyms: ['beinhalten', 'umfassen', 'inkludieren', 'einkesseln'],
        meanings: [
          {
            meaningNumber: 1,
            definitionDe: 'Kosten, Rechte oder Pflichten im Gesamtpaket bereits implizit oder explizit beinhalten',
            definitionEn: 'To encompass, comprise, or include fees, rights, or services within a total scope',
            nuance: 'Vertragsgestaltung & Logik',
            grammarInfo: 'transitiv + Akk (Leistungen einschließen)',
            exampleSentence: 'Der vertragliche Pauschalpreis schließt sämtliche Reisekosten, Spesen und Steuern ein.',
            clozeSentence: 'Der Pauschalpreis [...] sämtliche Reisekosten und Steuern [...].',
            translationEn: 'The contractual lump-sum price includes all travel costs, expenses, and taxes.'
          }
        ]
      }
    ]
  }
];
