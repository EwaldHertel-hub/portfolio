const intialState = {
  "hero": {
    "h1_1": "Ideen",
    "h1_2": "in echte Projekte formen",
    "h1_3": "die Ergebnisse liefern",
    "paragraph_1": "Hallo, wir sind eine kleine Agentur aus Deutschland mit einer Leidenschaft für Code.",
    "button_text": "Unsere Arbeit ansehen"
  },
  "about": {
    "title": "Lernen Sie uns kennen",
    "subtitle": "Das Team",
    "coder_title": "Der Coder",
    "coder_description": "Mein Name ist Ewald, ich bin der Entwickler im Team",
    "voice_title": "Die Stimme",
    "voice_description": "Mein Name ist Nadine, ich bin die Stimme des Teams"
  },
  "experience": {
    "title": "Berufliche Arbeitserfahrung",
    "subtitle": "Unsere Arbeitsübersicht",
    "responsibilities_heading": "Verantwortlichkeiten",
    "experience_1": {
      "review": "Adrian brachte Kreativität und technisches Fachwissen ins Team und verbesserte unsere Frontend-Performance erheblich. Seine Arbeit war von unschätzbarem Wert, um schnellere Erlebnisse zu liefern.",
      "title": "Frontend-Entwickler",
      "date": "Januar 2023 - Heute",
      "responsibilities": [
        "Entwicklung und Wartung von benutzerorientierten Funktionen für die Hostinger-Website.",
        "Enge Zusammenarbeit mit UI/UX-Designern, um nahtlose Benutzererlebnisse zu gewährleisten.",
        "Optimierung von Webanwendungen für maximale Geschwindigkeit und Skalierbarkeit."
      ]
    },
    "experience_2": {
      "review": "Adrians Beiträge zu den Webanwendungen von Docker waren hervorragend. Er geht Herausforderungen mit einer problemlösenden Denkweise an.",
      "title": "Full-Stack-Entwickler",
      "date": "Juni 2020 - Dezember 2023",
      "responsibilities": [
        "Leitung der Entwicklung von Dockers Webanwendungen mit Fokus auf Skalierbarkeit.",
        "Zusammenarbeit mit Backend-Ingenieuren, um APIs nahtlos in das Frontend zu integrieren.",
        "Beiträge zu Open-Source-Projekten, die im Docker-Ökosystem verwendet wurden."
      ]
    },
    "experience_3": {
      "review": "Adrians Arbeit an der mobilen App von Appwrite brachte ein hohes Maß an Qualität und Effizienz. Er lieferte Lösungen, die unser mobiles Erlebnis verbesserten und unsere Produktziele erreichten.",
      "title": "React-Native-Entwickler",
      "date": "März 2019 - Mai 2020",
      "responsibilities": [
        "Erstellung plattformübergreifender mobiler Apps mit React Native und Integration in die Backend-Dienste von Appwrite.",
        "Verbesserung der App-Leistung und des Benutzererlebnisses durch Code-Optimierung und Tests.",
        "Abstimmung mit dem Produktteam, um Funktionen auf der Grundlage von Feedback zu implementieren."
      ]
    }
  },
  "techStack": {
    "title": "Wie ich beitragen kann & meine Schlüsselkompetenzen",
    "subtitle": "Was ich biete",
    "frontend_title": "Frontend-Entwickler",
    "backend_title": "Backend-Entwickler",
    "database_title": "Datenbank-Entwickler",
    "frontend_skills": [
      "React.js",
      "CSS",
      "SASS/SCSS",
      "JavaScript",
      "Redux.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS"
    ],
    "backend_skills": [
      "Node.js",
      "Express.js",
      "PHP",
      "Nest.js"
    ],
    "database_skills": [
      "MySQL",
      "SQL Server",
      "SQLite"
    ]
  },
  "footer": {
    "terms": "Allgemeine Geschäftsbedingungen",
    "copyright": "© 2024 Hertel Webagentur. Alle Rechte vorbehalten."
  }
};

const DeReducer = (state = intialState) => {
    return state;
}
export default DeReducer;