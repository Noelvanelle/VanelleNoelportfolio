// Uebersetzungen fuer das Portfolio (DE, EN, FR)
// Schluesselstruktur ist in allen Sprachen identisch.
// Wartungsregel:
// - Neue Schluessel immer in DE, EN und FR gleichzeitig anlegen.
// - Reihenfolge in den Arrays muss der Reihenfolge der DOM-Elemente entsprechen.
// - HTML-Inhalte (z. B. <em> oder <br>) nur dort verwenden, wo setHtml genutzt wird.
window.PORTFOLIO_I18N={
  // Standard-Sprache: Deutsch
  de:{
    // Kopfbereich, Navigation und Hero
    title:'Vanelle Tchinda — Developer Portfolio',
    nav:['Über mich','Projekte','Erfahrung','Skills','Kontakt'],
    heroEyebrow:'Fullstack Developer · HTW Saarbrücken',
    heroDesc:'Informatikstudentin mit Leidenschaft für verteilte Systeme, saubere Architektur und intuitive Web-Erlebnisse. Von der CLI bis zum UI.',
    heroCtas:['Projekte →','Kontakt','CV herunterladen'],
    scroll:'Scroll',
    // Ueber-mich-Bereich
    aboutTag:'Über mich',
    aboutTitle:'<em>Dev</em> aus Saarbrücken',
    aboutParas:[
      'Ich bin <strong>Vanelle</strong>, Informatikstudentin im B.Sc. an der HTW Saarbrücken. Ursprünglich aus Kamerun — ich baue Dinge, die wirklich funktionieren, von verteilten Java-Systemen bis zu dreisprachigen React-Apps.',
      'Mein Antrieb ist das <strong>vollständige Spektrum</strong> der Entwicklung: saubere Backend-Architektur, intuitive UIs und die unsichtbare Schicht dazwischen, die alles zusammenhält.',
      'Bis zum <strong>1. März 2026</strong> war ich Werkstudentin bei <strong>Saar Metall GmbH</strong>, wo ich echte Anforderungen in produktionsreife Software übersetzt habe.'
    ],
    stats:['Projekte','Jahre Studium','Sprachen','Lernbereitschaft'],
    languageNames:['Französisch','Deutsch','Englisch'],
    languageLevels:['Muttersprache','C1 · TelC','Grundkenntnisse'],
    // Projekte: Kopf, Titel, Untertitel und Beschreibungen
    projectsTag:'Projekte',
    projectsTitle:'Was ich <em>gebaut</em> habe',
    projectsCount:'07 Projekte',
    // Reihenfolge dieser Felder ist direkt an die 7 Projektkarten gekoppelt.
    projectPn:['01 · Hauptprojekt','02 · Systemprojekt','03 · CLI-Projekt','04 · Frontend-Projekt','05 · Frontend-Projekt','06 · Machine Learning','07 · Praxiserfahrung'],
    projectNames:['DailyKit','Distributed Cache','ShoppingListApp','WetterApp','Wissenschaftliches Arbeiten Tool','Movie Clustering (ML)','Saar Metall GmbH'],
    projectSubs:[
      'Journal · Budget · Notizen · Dreisprachig',
      'Verteiltes System · Java · gRPC · REST · CLI',
      'Java · CLI · Auth · Listenverwaltung',
      'React · Vite · Tailwind · Open-Meteo API',
      'BibTeX Import · Suche · Edit · Export',
      'TF-IDF · K-Means · DBSCAN · HAC · t-SNE',
      'Werkstudentin · Softwareentwicklung'
    ],
    projectDescs:[
      'All-in-One Notizbuch-App mit Journal, Budget und Notizen. Fokus auf klare UX, mobile Darstellung und schnelle Bearbeitung mit Export-Funktionen.',
      'Verteiltes Key-Value-Cache-System mit RegistryService, mehreren CacheNodes und interaktiver User-CLI. Kommunikation kombiniert REST (Verwaltung) und gRPC (Datenpfad).',
      'Reines Java-CLI Projekt ohne Frontend. Fokus auf robuste Kommando-Logik, Benutzerfluss und saubere Trennung zwischen Authentifizierung und Listen-Operationen.',
      'Moderne Wetter-App mit aktueller Wetterlage und 7-Tage-Vorhersage. Die Anwendung kombiniert Stadtsuche, Geolokalisierung, Suchverlauf und Temperaturumschaltung in einem responsiven One-Screen-Layout.',
      'Tool zum Importieren, Durchsuchen und Bearbeiten von BibTeX-Einträgen mit direktem Export. Ausgelegt auf schnelle Navigation auch bei vielen Datensätzen.',
      'Großes Clustering-Projekt zur Gruppierung von Filmen auf Basis von <code style="font-size:.85em">keywords</code> und <code style="font-size:.85em">overview</code>. Vergleich mehrerer Algorithmen inklusive Visualisierung der Clusterstruktur.',
      'Praxisprojekt im Unternehmenskontext mit Fokus auf Stabilität, nachvollziehbare Prozesse und enge Abstimmung mit realen Nutzeranforderungen.'
    ],
    // Projekt-Featurelisten (Projekte 1 bis 7)
    p1List:[
      '<span class="fa">▸</span>Registrierung &amp; Login mit E-Mail-Bestätigung via MailHog',
      '<span class="fa">▸</span>Journal-Einträge mit Kategorien, Suche und Detailansicht',
      '<span class="fa">▸</span>Budget-Übersicht mit strukturierter Kartenansicht',
      '<span class="fa">▸</span>Notizen erstellen, bearbeiten, löschen und als <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">.txt</code> exportieren',
      '<span class="fa">▸</span>Einstellungs-Modal (Profil, Sprache, Passwort, Modus)',
      '<span class="fa">▸</span>Dreisprachig: Deutsch, Englisch, Französisch · responsive auf Mobile und Desktop'
    ],
    p2List:[
      '<span class="fa">▸</span>User-CLI mit Auth: <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">register, login, logout</code>',
      '<span class="fa">▸</span>Key-Value-Befehle: <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">put, get, delete, take</code> + optionales TTL',
      '<span class="fa">▸</span>Registry-Service (REST) für Node-Liste, Heartbeat und Status',
      '<span class="fa">▸</span>gRPC zwischen ClientAPI und CacheNodes für performante Operationen',
      '<span class="fa">▸</span>Node-zu-Node Replikation und parallele Worker-Tests erfolgreich',
      '<span class="fa">▸</span>Metriken und Benchmark-Auswertung aus der CLI'
    ],
    p3List:[
      '<span class="fa">▸</span>Einloggen mit Benutzername und Passwort',
      '<span class="fa">▸</span>Shoppingliste erstellen und löschen',
      '<span class="fa">▸</span>Items hinzufügen, löschen und suchen',
      '<span class="fa">▸</span>Klarer CLI-Flow für schnellen Alltagseinsatz'
    ],
    p4List:[
      '<span class="fa">▸</span>Stadtsuche per Texteingabe und Wetterabfrage ueber Open-Meteo APIs',
      '<span class="fa">▸</span>Standortabfrage via Browser-Geolokalisierung plus Reverse-Geocoding',
      '<span class="fa">▸</span>Aktuelles Wetter mit Stadt, Land, Temperatur, Zustand, Wind und Messzeit',
      '<span class="fa">▸</span>7-Tage-Vorhersage mit Wetter-Emoji sowie Max-/Min-Temperaturen',
      '<span class="fa">▸</span>Globaler Wechsel zwischen Celsius und Fahrenheit',
      '<span class="fa">▸</span>Suchverlauf in localStorage mit Duplikat-Entfernung und Clear-Funktion'
    ],
    p5List:[
      '<span class="fa">▸</span>BibTeX Datei importieren und Datensätze listen',
      '<span class="fa">▸</span>Suche + Accordion-Ansicht mit aufklappbaren Details',
      '<span class="fa">▸</span>Inline-Edit einzelner Felder mit Bestätigen/Abbrechen',
      '<span class="fa">▸</span>Pagination und strukturierter Export'
    ],
    p6List:[
      '<span class="fa">▸</span>Datenbereinigung und Text-Preprocessing für sehr große Datenmengen',
      '<span class="fa">▸</span>TF-IDF Vektorisierung mit sparsamer Repräsentation',
      '<span class="fa">▸</span>Vergleich von K-Means, DBSCAN und HAC',
      '<span class="fa">▸</span>t-SNE zur visuellen Prüfung der Cluster-Trennung'
    ],
    p7List:[
      '<span class="fa">▸</span>Dokumenten-Management und Reklamationsprozesse digitalisiert',
      '<span class="fa">▸</span>Saubere und wartbare Fullstack-Umsetzung',
      '<span class="fa">▸</span>Fokus auf zuverlässige Software im produktiven Alltag'
    ],
    // Spezielle Projektbloecke (Case-Box, CLI-Session, Metriken)
    p7CaseTitle:'Werkstudentin - Saar Metall GmbH',
    p7CaseList:[
      'Dokumenten-Management-System für interne Prozesse implementiert',
      'Reklamationssystem für Lieferungen mit klaren Workflows umgesetzt',
      'Anforderungen aus dem Fachbereich in produktionsnahe Software übersetzt',
      'Zusammenarbeit im Team mit professionellem Versionsmanagement'
    ],
    dcSessionTitle:'Distributed Cache CLI Session',
    shoppingFlowTitle:'ShoppingListApp CLI Flow',
    mlMetricTitle:'Movie Clustering - Key Metrics',
    mlMetricLabels:[
      'Initiale Filme im Datensatz',
      'Filme nach Cleaning mit validem Overview',
      'TF-IDF Features (Keywords + Overview)',
      'Beste Silhouette (DBSCAN Konfiguration)'
    ],
    // Erfahrung und Ausbildung (Filter + Timeline-Eintraege)
    expTag:'Werdegang',
    expTitle:'Erfahrung &amp; <em>Ausbildung</em>',
    expFilters:['Alle','Beruf','Studium','Zertifikate'],
    // Timeline-Daten: Indizes muessen zwischen allen exp* Arrays zusammenpassen.
    expDates:['Apr. 2025 — 1. März 2026','2023 — laufend','Jan. 2024 — 15. März 2026','Juni 2023','Sept. 2020 — Juni 2021'],
    expBadges:['Beruf','Studium','Beruf','Zertifikat','Studium'],
    expTitles:['Werkstudentin Softwareentwicklung','B.Sc. Praktische Informatik','ServiceKraft','TelC C1 Hochschule','Abitur'],
    expCompanies:['Saar Metall GmbH · Saarbrücken','HTW Saarbrücken','Kunz Theater · Saarbrücken','Sprachzertifikat Deutsch','Gymnasium Bafoussam · Kamerun'],
    expList1:['Entwicklung eines Dokumenten-Management-Systems','Umsetzung eines Reklamationssystems für Lieferungen','Mitarbeit an internen IT-Projekten'],
    expList2:['Softwareentwicklung, Algorithmen, Datenbanken','Java, React, Node.js, PHP, SQL, gRPC','Machine Learning &amp; Verteilte Systeme'],
    expList3:['Kundenbetreuung und Bestellungsmanagement','Koordination mit Küchenteam'],
    // Skills, Kontakt und Footer
    skillsTag:'Technologien',
    skillsTitle:'Tech <em>Stack</em>',
    skillCardTitles:['// Frontend','// Backend','// Data &amp; Systems','// Tools &amp; Soft Skills'],
    // Skills pro Karte: jede Liste mappt auf genau eine Karte in #skills.
    skills1:['HTML &amp; CSS','JavaScript ES6+','React','Tailwind CSS','Responsive Design','Dark / Light Mode','i18n (3 Sprachen)'],
    skills2:['Node.js + Express','PHP','Java','REST APIs','gRPC / Protobuf','MailHog SMTP'],
    skills3:['SQL (relationale DB)','SQLite','Verteilte Systeme','Multithreading','Machine Learning','Maven'],
    skills4:['Git / GitLab','CLI-Entwicklung','Analytisches Denken','Teamarbeit','Strukturierte Arbeitsweise','Schnelle Lernkurve'],
    contactTag:'Kontakt',
    contactTitle:'Lass uns<br>gemeinsam<br><em>bauen.</em>',
    contactLocation:'<strong>Saarbrücken</strong>Albertstraße 7<br>66125 Saarbrücken<br>Deutschland',
    footer:['© 2026 Vanelle Tchinda','HTML · CSS · JS','Portfolio 2026']
  },
  // Englisch
  en:{
    // Header, Navigation und Hero
    title:'Vanelle Tchinda — Developer Portfolio',
    nav:['About','Projects','Experience','Skills','Contact'],
    heroEyebrow:'Fullstack Developer · HTW Saarbrücken',
    heroDesc:'Computer science student passionate about distributed systems, clean architecture, and intuitive web experiences. From CLI to UI.',
    heroCtas:['Projects →','Contact','Download CV'],
    scroll:'Scroll',
    // About-Bereich
    aboutTag:'About me',
    aboutTitle:'<em>Dev</em> from Saarbrücken',
    aboutParas:[
      'I am <strong>Vanelle</strong>, a B.Sc. computer science student at HTW Saarbrücken. Originally from Cameroon, I build things that actually work, from distributed Java systems to trilingual React apps.',
      'What drives me is the <strong>full spectrum</strong> of development: clean backend architecture, intuitive UIs, and the invisible layer in between that keeps everything together.',
      'Until <strong>March 1, 2026</strong>, I worked as a student software engineer at <strong>Saar Metall GmbH</strong>, translating real requirements into production-ready software.'
    ],
    stats:['Projects','Years of Study','Languages','Learning Drive'],
    languageNames:['French','German','English'],
    languageLevels:['Native language','C1 · TelC','Basic'],
    // Projects: Headline, Labels und Beschreibungen
    projectsTag:'Projects',
    projectsTitle:'What I have <em>built</em>',
    projectsCount:'07 Projects',
    // The order of these fields must stay aligned with the 7 project cards.
    projectPn:['01 · Featured Project','02 · Systems Project','03 · CLI Project','04 · Frontend Project','05 · Frontend Project','06 · Machine Learning','07 · Professional Experience'],
    projectNames:['DailyKit','Distributed Cache','ShoppingListApp','WetterApp','Academic Writing Tool','Movie Clustering (ML)','Saar Metall GmbH'],
    projectSubs:[
      'Journal · Budget · Notes · Trilingual',
      'Distributed System · Java · gRPC · REST · CLI',
      'Java · CLI · Auth · List Management',
      'React · Vite · Tailwind · Open-Meteo API',
      'BibTeX Import · Search · Edit · Export',
      'TF-IDF · K-Means · DBSCAN · HAC · t-SNE',
      'Working Student · Software Engineering'
    ],
    projectDescs:[
      'All-in-one notebook app with journal, budget, and notes. Built with a clear UX focus, responsive layouts, and fast editing with export options.',
      'Distributed key-value cache with RegistryService, multiple CacheNodes, and an interactive user CLI. Communication combines REST (management) and gRPC (data path).',
      'Pure Java CLI project without frontend. Focus on robust command flow, clean user journeys, and clear separation of authentication and list operations.',
      'Modern weather app with current conditions and a 7-day forecast. It combines city search, geolocation, search history, and temperature switching in a responsive one-screen layout.',
      'Tool to import, search, and edit BibTeX entries with direct export. Designed for fast navigation even with large datasets.',
      'Large clustering project grouping movies based on <code style="font-size:.85em">keywords</code> and <code style="font-size:.85em">overview</code>. Compares multiple algorithms and visualizes cluster structure.',
      'Practical company project focused on stability, traceable processes, and close collaboration with real user requirements.'
    ],
    // Feature lists for all seven projects
    p1List:[
      '<span class="fa">▸</span>Registration &amp; login with email confirmation via MailHog',
      '<span class="fa">▸</span>Journal entries with categories, search, and detail view',
      '<span class="fa">▸</span>Budget overview with structured card layout',
      '<span class="fa">▸</span>Create, edit, and delete notes, then export as <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">.txt</code>',
      '<span class="fa">▸</span>Settings modal (profile, language, password, mode)',
      '<span class="fa">▸</span>Trilingual: German, English, French · responsive on mobile and desktop'
    ],
    p2List:[
      '<span class="fa">▸</span>User CLI with auth: <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">register, login, logout</code>',
      '<span class="fa">▸</span>Key-value commands: <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">put, get, delete, take</code> + optional TTL',
      '<span class="fa">▸</span>Registry service (REST) for node list, heartbeat, and status',
      '<span class="fa">▸</span>gRPC between ClientAPI and CacheNodes for high-performance operations',
      '<span class="fa">▸</span>Node-to-node replication and successful parallel worker tests',
      '<span class="fa">▸</span>Metrics and benchmark evaluation from the CLI'
    ],
    p3List:[
      '<span class="fa">▸</span>Login with username and password',
      '<span class="fa">▸</span>Create and delete shopping lists',
      '<span class="fa">▸</span>Add, delete, and search items',
      '<span class="fa">▸</span>Clear CLI flow for fast everyday usage'
    ],
    p4List:[
      '<span class="fa">▸</span>City search by text input with weather requests via Open-Meteo APIs',
      '<span class="fa">▸</span>Current location via browser geolocation plus reverse geocoding',
      '<span class="fa">▸</span>Current weather with city, country, temperature, condition, wind, and timestamp',
      '<span class="fa">▸</span>7-day forecast with weather emoji and max/min temperatures',
      '<span class="fa">▸</span>Global switch between Celsius and Fahrenheit',
      '<span class="fa">▸</span>Search history in localStorage with deduplication and clear action'
    ],
    p5List:[
      '<span class="fa">▸</span>Import BibTeX files and list entries',
      '<span class="fa">▸</span>Search + accordion view with expandable details',
      '<span class="fa">▸</span>Inline edit for individual fields with confirm/cancel',
      '<span class="fa">▸</span>Pagination and structured export'
    ],
    p6List:[
      '<span class="fa">▸</span>Data cleaning and text preprocessing for large datasets',
      '<span class="fa">▸</span>TF-IDF vectorization with sparse representation',
      '<span class="fa">▸</span>Comparison of K-Means, DBSCAN, and HAC',
      '<span class="fa">▸</span>t-SNE for visual validation of cluster separation'
    ],
    p7List:[
      '<span class="fa">▸</span>Digitized document management and complaint processes',
      '<span class="fa">▸</span>Clean and maintainable fullstack implementation',
      '<span class="fa">▸</span>Focus on reliable software in daily production use'
    ],
    // Spezielle Projekteintraege
    p7CaseTitle:'Working Student - Saar Metall GmbH',
    p7CaseList:[
      'Implemented a document management system for internal processes',
      'Built a complaint workflow system for deliveries',
      'Translated business requirements into production-like software',
      'Collaborated in team workflows with professional version control'
    ],
    dcSessionTitle:'Distributed Cache CLI Session',
    shoppingFlowTitle:'ShoppingListApp CLI Flow',
    mlMetricTitle:'Movie Clustering - Key Metrics',
    mlMetricLabels:[
      'Initial movies in dataset',
      'Movies after cleaning with valid overview',
      'TF-IDF features (keywords + overview)',
      'Best silhouette score (DBSCAN setup)'
    ],
    // Experience-Sektion
    expTag:'Career',
    expTitle:'Experience &amp; <em>Education</em>',
    expFilters:['All','Work','Education','Certificates'],
    // Timeline data: indexes must stay synchronized across all exp* arrays.
    expDates:['Apr 2025 — Mar 1, 2026','2023 — present','Jan 2024 — Mar 15, 2026','June 2023','Sep 2020 — Jun 2021'],
    expBadges:['Work','Education','Work','Certificate','Education'],
    expTitles:['Working Student Software Engineering','B.Sc. Applied Computer Science','Service Staff','TelC C1 University','High School Diploma'],
    expCompanies:['Saar Metall GmbH · Saarbrücken','HTW Saarbrücken','Kunz Theater · Saarbrücken','German Language Certificate','Gymnasium Bafoussam · Cameroon'],
    expList1:['Development of a document management system','Implementation of a complaint system for deliveries','Participation in internal IT projects'],
    expList2:['Software engineering, algorithms, databases','Java, React, Node.js, PHP, SQL, gRPC','Machine learning &amp; distributed systems'],
    expList3:['Customer support and order management','Coordination with kitchen team'],
    // Skills, Contact und Footer
    skillsTag:'Technologies',
    skillsTitle:'Tech <em>Stack</em>',
    skillCardTitles:['// Frontend','// Backend','// Data &amp; Systems','// Tools &amp; Soft Skills'],
    // Per-card skill lists: each list maps to one .skc card in #skills.
    skills1:['HTML &amp; CSS','JavaScript ES6+','React','Tailwind CSS','Responsive Design','Dark / Light Mode','i18n (3 languages)'],
    skills2:['Node.js + Express','PHP','Java','REST APIs','gRPC / Protobuf','MailHog SMTP'],
    skills3:['SQL (relational DB)','SQLite','Distributed Systems','Multithreading','Machine Learning','Maven'],
    skills4:['Git / GitLab','CLI Development','Analytical Thinking','Teamwork','Structured Work Style','Fast Learning Curve'],
    contactTag:'Contact',
    contactTitle:'Let\'s<br>build<br><em>together.</em>',
    contactLocation:'<strong>Saarbrücken</strong>Albertstraße 7<br>66125 Saarbrücken<br>Germany',
    footer:['© 2026 Vanelle Tchinda','HTML · CSS · JS','Portfolio 2026']
  },
  // Franzoesisch
  fr:{
    // En-tete, navigation et hero
    title:'Vanelle Tchinda — Portfolio Développeuse',
    nav:['À propos','Projets','Expérience','Compétences','Contact'],
    heroEyebrow:'Développeuse Fullstack · HTW Saarbrücken',
    heroDesc:'Étudiante en informatique passionnée par les systèmes distribués, les architectures propres et les expériences web intuitives. Du CLI jusqu\'à l\'UI.',
    heroCtas:['Projets →','Contact','Télécharger CV'],
    scroll:'Défiler',
    // Section "A propos"
    aboutTag:'À propos',
    aboutTitle:'<em>Dev</em> à Saarbrücken',
    aboutParas:[
      'Je suis <strong>Vanelle</strong>, étudiante en informatique (B.Sc.) à la HTW Saarbrücken. Originaire du Cameroun, je construis des solutions qui fonctionnent vraiment, des systèmes Java distribués aux applications React trilingues.',
      'Ma motivation est le <strong>spectre complet</strong> du développement: architecture backend propre, interfaces intuitives, et la couche invisible entre les deux qui assure la cohérence.',
      'Jusqu\'au <strong>1er mars 2026</strong>, j\'étais étudiante salariée chez <strong>Saar Metall GmbH</strong>, où je transformais des besoins réels en logiciels prêts pour la production.'
    ],
    stats:['Projets','Années d\'études','Langues','Capacité d\'apprentissage'],
    languageNames:['Français','Allemand','Anglais'],
    languageLevels:['Langue maternelle','C1 · TelC','Basique'],
    // Projets: titres, sous-titres et descriptions
    projectsTag:'Projets',
    projectsTitle:'Ce que j\'ai <em>construit</em>',
    projectsCount:'07 Projets',
    // L'ordre de ces champs doit correspondre exactement aux 7 cartes projet.
    projectPn:['01 · Projet principal','02 · Projet systèmes','03 · Projet CLI','04 · Projet frontend','05 · Projet frontend','06 · Machine Learning','07 · Expérience professionnelle'],
    projectNames:['DailyKit','Distributed Cache','ShoppingListApp','WetterApp','Outil de travail scientifique','Movie Clustering (ML)','Saar Metall GmbH'],
    projectSubs:[
      'Journal · Budget · Notes · Trilingue',
      'Système distribué · Java · gRPC · REST · CLI',
      'Java · CLI · Auth · Gestion de listes',
      'React · Vite · Tailwind · Open-Meteo API',
      'Import BibTeX · Recherche · Édition · Export',
      'TF-IDF · K-Means · DBSCAN · HAC · t-SNE',
      'Étudiante salariée · Développement logiciel'
    ],
    projectDescs:[
      'Application tout-en-un pour journal, budget et notes. Accent sur une UX claire, un affichage responsive et une édition rapide avec fonctions d\'export.',
      'Système de cache clé-valeur distribué avec RegistryService, plusieurs CacheNodes et une CLI interactive. Communication hybride REST (gestion) et gRPC (chemin de données).',
      'Projet Java en CLI sans frontend. Focus sur une logique de commandes robuste, un flux utilisateur clair et une séparation nette entre authentification et gestion de listes.',
      'Application météo moderne avec conditions actuelles et prévisions sur 7 jours. Elle combine recherche de ville, géolocalisation, historique et changement d\'unité dans un layout responsive sur un seul écran.',
      'Outil pour importer, rechercher et éditer des entrées BibTeX avec export direct. Conçu pour une navigation rapide même sur de grands volumes.',
      'Projet de clustering à grande échelle pour regrouper des films à partir de <code style="font-size:.85em">keywords</code> et <code style="font-size:.85em">overview</code>. Comparaison de plusieurs algorithmes avec visualisation des clusters.',
      'Projet en entreprise axé sur la stabilité, des processus traçables et une collaboration étroite avec des besoins utilisateurs réels.'
    ],
    // Listes de fonctionnalites des projets
    p1List:[
      '<span class="fa">▸</span>Inscription &amp; connexion avec confirmation e-mail via MailHog',
      '<span class="fa">▸</span>Entrées journal avec catégories, recherche et vue détaillée',
      '<span class="fa">▸</span>Vue budget en cartes structurées',
      '<span class="fa">▸</span>Créer, modifier et supprimer des notes, puis exporter en <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">.txt</code>',
      '<span class="fa">▸</span>Fenêtre paramètres (profil, langue, mot de passe, mode)',
      '<span class="fa">▸</span>Trilingue: allemand, anglais, français · responsive mobile et desktop'
    ],
    p2List:[
      '<span class="fa">▸</span>CLI utilisateur avec auth: <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">register, login, logout</code>',
      '<span class="fa">▸</span>Commandes clé-valeur: <code style="color:var(--c1);font-family:var(--fm);font-size:.8em">put, get, delete, take</code> + TTL optionnel',
      '<span class="fa">▸</span>Service Registry (REST) pour la liste des nœuds, heartbeat et statut',
      '<span class="fa">▸</span>gRPC entre ClientAPI et CacheNodes pour des opérations performantes',
      '<span class="fa">▸</span>Réplication entre nœuds et tests parallèles réussis',
      '<span class="fa">▸</span>Métriques et analyse benchmark depuis la CLI'
    ],
    p3List:[
      '<span class="fa">▸</span>Connexion avec nom d\'utilisateur et mot de passe',
      '<span class="fa">▸</span>Créer et supprimer une liste de courses',
      '<span class="fa">▸</span>Ajouter, supprimer et rechercher des articles',
      '<span class="fa">▸</span>Flux CLI clair pour un usage quotidien rapide'
    ],
    p4List:[
      '<span class="fa">▸</span>Recherche de ville par texte avec appel météo via les APIs Open-Meteo',
      '<span class="fa">▸</span>Localisation actuelle via géolocalisation navigateur + reverse geocoding',
      '<span class="fa">▸</span>Météo actuelle avec ville, pays, température, état, vent et heure de mesure',
      '<span class="fa">▸</span>Prévisions 7 jours avec emoji météo et températures max/min',
      '<span class="fa">▸</span>Bascule globale entre Celsius et Fahrenheit',
      '<span class="fa">▸</span>Historique des recherches en localStorage avec suppression des doublons'
    ],
    p5List:[
      '<span class="fa">▸</span>Importer des fichiers BibTeX et lister les entrées',
      '<span class="fa">▸</span>Recherche + vue accordéon avec détails dépliables',
      '<span class="fa">▸</span>Édition inline des champs avec valider/annuler',
      '<span class="fa">▸</span>Pagination et export structuré'
    ],
    p6List:[
      '<span class="fa">▸</span>Nettoyage des données et prétraitement texte à grande échelle',
      '<span class="fa">▸</span>Vectorisation TF-IDF avec représentation sparse',
      '<span class="fa">▸</span>Comparaison K-Means, DBSCAN et HAC',
      '<span class="fa">▸</span>t-SNE pour vérifier visuellement la séparation des clusters'
    ],
    p7List:[
      '<span class="fa">▸</span>Digitalisation de la gestion documentaire et des réclamations',
      '<span class="fa">▸</span>Implémentation fullstack propre et maintenable',
      '<span class="fa">▸</span>Focus sur la fiabilité logicielle en usage réel'
    ],
    // Blocs speciaux des projets
    p7CaseTitle:'Étudiante salariée - Saar Metall GmbH',
    p7CaseList:[
      'Implémentation d\'un système de gestion documentaire pour les processus internes',
      'Mise en place d\'un système de réclamations pour les livraisons',
      'Traduction des besoins métier en logiciel proche production',
      'Collaboration en équipe avec gestion de versions professionnelle'
    ],
    dcSessionTitle:'Session CLI Distributed Cache',
    shoppingFlowTitle:'Flux CLI ShoppingListApp',
    mlMetricTitle:'Movie Clustering - Indicateurs clés',
    mlMetricLabels:[
      'Films initiaux dans le dataset',
      'Films après nettoyage avec overview valide',
      'Features TF-IDF (keywords + overview)',
      'Meilleur score silhouette (configuration DBSCAN)'
    ],
    // Parcours: filtres et entrees
    expTag:'Parcours',
    expTitle:'Expérience &amp; <em>Formation</em>',
    expFilters:['Tous','Travail','Études','Certificats'],
    // Donnees de timeline: garder les memes index dans tous les tableaux exp*.
    expDates:['avr. 2025 — 1 mars 2026','2023 — en cours','janv. 2024 — 15 mars 2026','juin 2023','sept. 2020 — juin 2021'],
    expBadges:['Travail','Études','Travail','Certificat','Études'],
    expTitles:['Étudiante salariée en développement logiciel','B.Sc. Informatique appliquée','Employée de service','TelC C1 Université','Baccalauréat'],
    expCompanies:['Saar Metall GmbH · Saarbrücken','HTW Saarbrücken','Kunz Theater · Saarbrücken','Certificat de langue allemande','Lycée Bafoussam · Cameroun'],
    expList1:['Développement d\'un système de gestion documentaire','Mise en place d\'un système de réclamations pour livraisons','Participation à des projets IT internes'],
    expList2:['Développement logiciel, algorithmes, bases de données','Java, React, Node.js, PHP, SQL, gRPC','Machine Learning &amp; systèmes distribués'],
    expList3:['Relation client et gestion des commandes','Coordination avec l\'équipe cuisine'],
    // Competences, contact et pied de page
    skillsTag:'Technologies',
    skillsTitle:'Tech <em>Stack</em>',
    skillCardTitles:['// Frontend','// Backend','// Données &amp; Systèmes','// Outils &amp; Soft Skills'],
    // Listes par carte: chaque tableau correspond a une carte .skc de #skills.
    skills1:['HTML &amp; CSS','JavaScript ES6+','React','Tailwind CSS','Design responsive','Mode clair / sombre','i18n (3 langues)'],
    skills2:['Node.js + Express','PHP','Java','APIs REST','gRPC / Protobuf','MailHog SMTP'],
    skills3:['SQL (base relationnelle)','SQLite','Systèmes distribués','Multithreading','Machine Learning','Maven'],
    skills4:['Git / GitLab','Développement CLI','Pensée analytique','Travail en équipe','Méthode de travail structurée','Apprentissage rapide'],
    contactTag:'Contact',
    contactTitle:'Construisons<br>quelque chose<br><em>ensemble.</em>',
    contactLocation:'<strong>Saarbrücken</strong>Albertstraße 7<br>66125 Saarbrücken<br>Allemagne',
    footer:['© 2026 Vanelle Tchinda','HTML · CSS · JS','Portfolio 2026']
  }
};

