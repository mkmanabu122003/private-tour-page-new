import { useState } from "react";
import { Link } from "react-router-dom";
import {
  trackDiagnosticStart,
  trackDiagnosticAnswer,
  trackDiagnosticComplete,
  trackDiagnosticToTour,
  trackDiagnosticToContact,
} from "@/lib/ga4";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";

export interface DiagnosticOption {
  headline: string;
  subtext: string;
  scores: Record<string, number>;
  /** Result IDs that this option makes ineligible (hard constraint). */
  eliminates?: string[];
}

export interface DiagnosticQuestion {
  id: string;
  chapterLabel: string;
  question: string;
  options: DiagnosticOption[];
}

export interface DiagnosticResult {
  id: string;
  title: string;
  heroImage: string;
  narrative: string;
  tourPath: string;
  tourLabel: string;
  readMoreLabel: string;
  readMorePath: string;
  contactQuery: string;
}

export interface DiagnosticConfig {
  toolId: string;
  language: "en" | "es";
  toolName: string;
  introHeadline: string;
  introBody: string;
  ctaLabel: string;
  questions: DiagnosticQuestion[];
  results: Record<string, DiagnosticResult>;
  resultLabel: string;
  signature: string;
  /** Tie-breaker order. The first id wins ties. */
  tieBreakerOrder?: string[];
}

interface DiagnosticProps {
  config: DiagnosticConfig;
}

type Stage = "intro" | "question" | "result";

const ROMAN = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
const SPELLED = ["One.", "Two.", "Three.", "Four.", "Five."];

const labels = {
  en: {
    back: "Back",
    retake: "Retake the quiz",
    credentials: "National Government Licensed Guide",
    name: "Manabu",
  },
  es: {
    back: "Atrás",
    retake: "Repetir el test",
    credentials: "Guía con Licencia Nacional",
    name: "Manabu",
  },
};

export const Diagnostic = ({ config }: DiagnosticProps) => {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [eliminated, setEliminated] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultId, setResultId] = useState<string | null>(null);

  const t = labels[config.language];
  const totalQuestions = config.questions.length;

  const handleStart = () => {
    trackDiagnosticStart(config.toolId);
    setStage("question");
    setStep(0);
    setScores({});
    setEliminated(new Set());
    setAnswers([]);
    setResultId(null);
  };

  const handleAnswer = (optionIndex: number) => {
    const question = config.questions[step];
    const option = question.options[optionIndex];

    trackDiagnosticAnswer(config.toolId, question.id, optionIndex);

    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    const newEliminated = new Set(eliminated);
    (option.eliminates || []).forEach((id) => newEliminated.add(id));
    setEliminated(newEliminated);

    const newAnswers = [...answers.slice(0, step), optionIndex];
    setAnswers(newAnswers);

    if (step + 1 < totalQuestions) {
      setStep(step + 1);
    } else {
      const winner = pickWinner(newScores, newEliminated, config);
      setResultId(winner);
      setStage("result");
      trackDiagnosticComplete(config.toolId, winner);
    }
  };

  const handleBack = () => {
    if (step === 0) {
      setStage("intro");
      return;
    }
    const newStep = step - 1;
    const recomputedScores: Record<string, number> = {};
    const recomputedEliminated = new Set<string>();
    for (let i = 0; i < newStep; i++) {
      const opt = config.questions[i].options[answers[i]];
      Object.entries(opt.scores).forEach(([k, v]) => {
        recomputedScores[k] = (recomputedScores[k] || 0) + v;
      });
      (opt.eliminates || []).forEach((id) => recomputedEliminated.add(id));
    }
    setScores(recomputedScores);
    setEliminated(recomputedEliminated);
    setStep(newStep);
  };

  const handleRetake = () => {
    setStage("intro");
    setStep(0);
    setScores({});
    setEliminated(new Set());
    setAnswers([]);
    setResultId(null);
  };

  const handleTourClick = () => {
    if (resultId) trackDiagnosticToTour(config.toolId, resultId);
  };

  const handleContactClick = () => {
    if (resultId) trackDiagnosticToContact(config.toolId, resultId);
  };

  return (
    <div className="not-prose bg-background">
      {stage === "intro" && (
        <div className="animate-fade-in">
          {/* Top photo */}
          <div className="relative h-48 md:h-64">
            <img
              src="/images/blog/day-trip-comparison-hero.webp"
              alt="Day trips from Tokyo: Kamakura, Hakone and Nikko"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/20" />
          </div>

          {/* Content */}
          <div className="px-6 py-10 md:px-10 md:py-12 flex flex-col">
            {/* Author lockup */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={guidePortrait}
                alt="Manabu, your tour guide"
                className="w-12 h-12 rounded-full object-cover border border-accent"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.credentials}
                </p>
              </div>
            </div>

            {/* Tool name label */}
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
              {config.toolName}
            </p>

            {/* Headline */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.2] tracking-tight mb-6">
              {config.introHeadline}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              {config.introBody}
            </p>

            <button
              type="button"
              onClick={handleStart}
              className="self-start group inline-flex items-baseline gap-3 text-foreground hover:text-accent transition-colors"
            >
              <span className="font-serif text-xl italic">{config.ctaLabel}</span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      )}

      {stage === "question" && (
        <div className="px-6 py-10 md:px-10 md:py-12 animate-fade-in" key={step}>
          {/* Chapter markers */}
          <div className="flex items-center gap-4 mb-2" aria-live="polite">
            {config.questions.map((q, idx) => (
              <span
                key={q.id}
                className={`font-serif italic text-base transition-colors ${
                  idx === step
                    ? "text-foreground"
                    : idx < step
                    ? "text-accent"
                    : "text-muted-foreground/40"
                }`}
              >
                {SPELLED[idx]}
              </span>
            ))}
          </div>

          <div className="w-12 h-px bg-foreground mb-8" />

          {/* Chapter label */}
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-6">
            {config.questions[step].chapterLabel}
          </p>

          {/* Question */}
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.2] tracking-tight mb-10">
            {config.questions[step].question}
          </h3>

          {/* Answers */}
          <ul className="border-t border-border">
            {config.questions[step].options.map((option, idx) => (
              <li key={idx} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => handleAnswer(idx)}
                  className="group w-full text-left py-6 md:py-7 flex items-baseline gap-5 md:gap-8 hover:bg-accent/5 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 focus:outline-none focus-visible:bg-accent/5"
                >
                  <span className="font-serif italic text-2xl text-accent shrink-0 w-8">
                    {ROMAN[idx]}
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-xl md:text-2xl text-foreground leading-snug group-hover:text-accent transition-colors">
                      {option.headline}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {option.subtext}
                    </span>
                  </span>
                  <span className="text-xl text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Back link */}
          <button
            type="button"
            onClick={handleBack}
            className="mt-10 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            ← {t.back}
          </button>
        </div>
      )}

      {stage === "result" && resultId && config.results[resultId] && (
        <div className="animate-fade-in-up">
          {/* Hero image */}
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={config.results[resultId].heroImage}
              alt={config.results[resultId].title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

            {/* Label + title overlaid on image */}
            <div className="absolute inset-x-0 bottom-0 px-6 py-8 md:px-12 md:py-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                {config.resultLabel}
              </p>
              <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-none tracking-tight">
                {config.results[resultId].title}
              </h3>
            </div>
          </div>

          {/* Narrative + CTAs */}
          <div className="px-6 py-10 md:px-10 md:py-12">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 font-light">
              {config.results[resultId].narrative}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to={`/contact?tour=${config.results[resultId].contactQuery}`}
                onClick={handleContactClick}
                className="btn-accent text-center inline-flex items-center justify-center"
              >
                {config.results[resultId].tourLabel}
                <span className="ml-2">→</span>
              </Link>
              <Link
                to={config.results[resultId].readMorePath}
                onClick={handleTourClick}
                className="text-center inline-flex items-center justify-center px-6 py-3 text-foreground hover:text-accent transition-colors font-serif italic text-lg"
              >
                {config.results[resultId].readMoreLabel}
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Signature */}
            <p className="font-serif italic text-2xl text-accent text-right">
              {config.signature}
            </p>

            {/* Quiet retake link */}
            <div className="mt-10 pt-6 border-t border-border">
              <button
                type="button"
                onClick={handleRetake}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.18em]"
              >
                {t.retake}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function pickWinner(
  scores: Record<string, number>,
  eliminated: Set<string>,
  config: DiagnosticConfig,
): string {
  const ids = Object.keys(config.results);
  const order = config.tieBreakerOrder || ids;
  const eligible = order.filter((id) => !eliminated.has(id));
  // Safety: if everyone got eliminated, fall back to full list
  const candidates = eligible.length > 0 ? eligible : order;

  let winner = candidates[0];
  let max = -Infinity;

  for (const id of candidates) {
    const score = scores[id] || 0;
    if (score > max) {
      max = score;
      winner = id;
    }
  }
  return winner;
}
