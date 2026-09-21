import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// Lazy-initialized Gemini AI Client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", aiConfigured: Boolean(process.env.GEMINI_API_KEY) });
});

// Endpoint: Generate a new Goethe C1 Vocabulary item with Active Recall context
app.post("/api/c1/generate-word", async (req, res) => {
  try {
    const ai = getAI();
    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY is not configured in environment.",
        fallback: true,
      });
    }

    const { category = "Wissenschaft & Argumentation", wordType = "all" } = req.body;

    const prompt = `Du bist ein erfahrener Goethe-Zertifikat C1 Prüfer und Linguist für Deutsch als Fremdsprache.
Erstelle ein authentisches deutsches Wort oder eine Nomen-Verb-Verbindung auf anspruchsvollem C1/C2-Niveau passend zur Kategorie "${category}" (Wortart-Präferenz: "${wordType}").

Antworte NUR mit validem JSON im folgenden Format ohne Markdown-Backticks:
{
  "word": "das Phänomen, -e / plädieren für / zur Debatte stehen",
  "article": "das / der / die / -",
  "wordClass": "Nomen / Verb / Adjektiv / Nomen-Verb-Verbindung",
  "category": "${category}",
  "definitionDe": "Präzise deutsche C1-Erklärung",
  "definitionEn": "Concise English translation and meaning",
  "register": "Gehoben / Bildungssprachlich / Formell",
  "collocation": "Feste Verbindung oder Rektion (z.B. plädieren für + Akk)",
  "synonyms": ["Synonym 1", "Synonym 2"],
  "antonyms": ["Antonym 1"],
  "examples": [
    {
      "sentence": "Vollständiger C1 Mustersatz auf Deutsch.",
      "clozeSentence": "Mustersatz mit [...] anstelle des Zielworts für Active Recall.",
      "translationEn": "English translation of the example sentence.",
      "context": "Akademischer / politischer / gesellschaftlicher Diskurs"
    }
  ],
  "activeRecallPrompt": "Ein herausfordernder Impuls zur neuronalen Aktivierung (z.B. 'Welches gehobene Verb drückt aus, dass man sich vehement für etwas einsetzt?')"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
    const data = JSON.parse(cleaned);
    res.json(data);
  } catch (error: any) {
    console.error("Error generating C1 word:", error);
    res.status(500).json({ error: error.message || "Failed to generate word" });
  }
});

// Endpoint: AI Sentence Evaluator for User Active Practice
app.post("/api/c1/evaluate-sentence", async (req, res) => {
  try {
    const ai = getAI();
    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY is not configured in environment.",
      });
    }

    const { targetWord, userSentence } = req.body;
    if (!targetWord || !userSentence) {
      return res.status(400).json({ error: "targetWord and userSentence are required." });
    }

    const prompt = `Bewerte diesen deutschen Satz eines Goethe-Zertifikat C1 Lernenden:
Zielwort/Ausdruck: "${targetWord}"
Vom Lernenden geschriebener Satz: "${userSentence}"

Analysiere:
1. Ist das Zielwort semantisch, syntaktisch und stilistisch korrekt auf C1-Niveau verwendet?
2. Grammatikalische Korrektheit (Kasus, Rektion, Wortstellung).
3. Stilistisches Niveau (C1-Angemessenheit, Vermeidung von Umgangssprache).
4. Eine verbesserte bzw. idiomatische C1-Variante.

Antworte ausschließlich im JSON-Format:
{
  "isCorrect": true/false,
  "scoreOutOf10": 8,
  "feedbackDe": "Prägnante deutsche Rückmeldung für den Lerner.",
  "feedbackEn": "Concise English feedback.",
  "improvedSentence": "Optimierte C1-Version des Satzes.",
  "improvedSentenceEn": "English translation of the optimized C1 sentence.",
  "grammarNotes": "Erklärung zu Kasus, Rektion oder Kollokation falls relevant."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
    res.json(JSON.parse(cleaned));
  } catch (error: any) {
    console.error("Error evaluating sentence:", error);
    res.status(500).json({ error: error.message || "Failed to evaluate sentence" });
  }
});

// Endpoint: Explain polysemous nuances
app.post("/api/c1/explain-polysemy", async (req, res) => {
  try {
    const ai = getAI();
    if (!ai) {
      return res.status(503).json({ error: "GEMINI_API_KEY not configured" });
    }

    const { word } = req.body;
    const prompt = `Erkläre das mehrdeutige deutsche Wort "${word}" für das Goethe-Zertifikat C1.
Gib die wichtigsten 2-4 Bedeutungen an, jeweils mit Rektion/Grammatik, C1 Mustersatz und englischer Übersetzung.
Antworte im JSON-Format:
{
  "word": "${word}",
  "meanings": [
    {
      "meaningNumber": 1,
      "definitionDe": "Bedeutung auf Deutsch",
      "definitionEn": "Meaning in English",
      "grammar": "z.B. transitiv / mit Akk / reflexiv",
      "exampleSentence": "Prägnanter C1 Beispielsatz",
      "translationEn": "English translation"
    }
  ],
  "examTip": "Tipp für die Goethe C1 Prüfung (Leseverstehen/Sprachbausteine)"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
    res.json(JSON.parse(cleaned));
  } catch (error: any) {
    console.error("Error explaining polysemy:", error);
    res.status(500).json({ error: error.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
