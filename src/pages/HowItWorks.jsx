import { Button } from "../components/UI.jsx";
import { IconArrow, IconCheck } from "../components/Icons.jsx";
import ScrollReveal from "../components/scrollReaveal.jsx";
import useGo from "../hooks/useGo.js";

const STEPS = [
  ["Tell us what you're looking for", "City, budget, must-haves — takes about two minutes, no account required yet."],
  ["Browse matched homes", "We surface listings that fit, with pricing context so you know what's fair."],
  ["Tour, in person or virtually", "Book a walkthrough directly with the listing agent, on your schedule."],
  ["Make an offer with your agent", "Your matched agent handles paperwork, negotiation, and closing logistics."],
];

const HowItWorks = ({ go: goProp }) => {
  const go = useGo(goProp);

  return (
  <div className="bg-theme min-h-screen overflow-x-clip">

    {/* =====================================================
        HERO
        Follows scroll direction, staggered top to bottom.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 text-center">

      <ScrollReveal direction="bottom">
        <p className="text-xs tracking-[0.2em] text-faint mb-4">HOW IT WORKS</p>
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={100}>
        <h1 className="font-display text-4xl sm:text-5xl max-w-[20ch] mx-auto leading-[1.1] text-ink">
          From search to keys,{" "}
          <span className="italic text-brass">in four steps.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={200}>
        <p className="text-soft mt-5 max-w-[52ch] mx-auto leading-relaxed">
          No guesswork, no dead-end calls — just a clear path from first search to closing day.
        </p>
      </ScrollReveal>

    </section>


    {/* =====================================================
        STEPS
        The connecting lines stay outside ScrollReveal so their
        absolute positioning isn't affected. Each card reveals
        on its own.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-20">
      <div className="relative">

        {/* Connecting line — desktop only */}
        <div className="hidden md:block absolute left-0 right-0 top-8 h-[2px] bg-hairline" />
        <div
          className="hidden md:block absolute left-0 top-8 h-[2px]"
          style={{ background: "var(--gold-gradient)", width: "100%" }}
        />

        <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
          {STEPS.map(([title, body], i) => (
            <ScrollReveal key={title} direction="bottom" delay={i * 100}>
              <div className="group h-full bg-elevated border hairline rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-brass flex items-center justify-center text-white font-display text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="font-display text-lg text-ink leading-snug group-hover:text-brass transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-sm text-soft leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>


    {/* =====================================================
        TRUST STRIP
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
      <ScrollReveal direction="bottom">
        <div className="bg-elevated border hairline rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">

          <div className="w-14 h-14 rounded-full bg-brass/10 flex items-center justify-center text-brass shrink-0">
            <IconCheck size={26} />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <p className="text-soft leading-relaxed">
              Most buyers on Fortune Capital see their first matched home within{" "}
              <span className="text-ink font-semibold">48 hours</span>.
            </p>
          </div>

          <Button onClick={() => go("signup")} className="shrink-0">
            Get started
            <IconArrow size={16} />
          </Button>

        </div>
      </ScrollReveal>
    </section>


    {/* =====================================================
        CTA SECTION
        ===================================================== */}

    <section className="mt-24 relative overflow-hidden">
      <div className="relative" style={{ background: "var(--gold-gradient)" }}>

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative">

          <ScrollReveal direction="left">
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.2em] text-white/80 mb-3">
                START TODAY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl max-w-[20ch] text-white leading-tight">
                Your first match is closer than you think.
              </h2>
              <p className="text-white/90 mt-4 max-w-[42ch] leading-relaxed">
                Tell us what you're looking for and we'll take it from there.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="shrink-0">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => go("signup")}
                className="bg-white text-brass-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get started
              </button>
              <button
                onClick={() => go("features")}
                className="border-2 border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                See features
              </button>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>

  </div>
  );
};

export default HowItWorks;
