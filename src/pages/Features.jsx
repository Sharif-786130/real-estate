import { IconSearch, IconShield, IconTour, IconHandshake, IconBell, IconChart } from "../components/Icons.jsx";
import ScrollReveal from "../components/scrollReaveal.jsx";
import useGo from "../hooks/useGo.js";

const FEATURES = [
  [IconSearch, "Smart search filters", "Narrow by commute time, school zone, lot size, or renovation age — not just beds and baths."],
  [IconShield, "Verified listings", "Every address is cross-checked against county records before publishing."],
  [IconTour, "Virtual walkthroughs", "Tour a floor plan from your phone before you book an in-person visit."],
  [IconHandshake, "Agent matching", "We pair you with an agent who's closed deals in that exact neighborhood."],
  [IconBell, "Saved homes & alerts", "Track homes you like and get notified the moment price or status changes."],
  [IconChart, "Transparent pricing reports", "See comparable sales for the last 12 months before you make an offer."],
];

const Features = ({ go: goProp }) => {
  const go = useGo(goProp);

  return (
  <div className="bg-theme min-h-screen overflow-x-clip">

    {/* =====================================================
        HERO
        Follows scroll direction, staggered top to bottom.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 text-center">

      <ScrollReveal direction="bottom">
        <p className="text-xs tracking-[0.2em] text-faint mb-4">FEATURES</p>
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={100}>
        <h1 className="font-display text-4xl sm:text-5xl max-w-[20ch] mx-auto leading-[1.1] text-ink">
          Everything you need,{" "}
          <span className="italic text-brass">nothing you have to guess at.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="bottom" delay={200}>
        <p className="text-soft mt-5 max-w-[56ch] mx-auto leading-relaxed">
          Fortune Capital is built around the parts of buying or selling a home that usually go wrong first.
        </p>
      </ScrollReveal>

    </section>


    {/* =====================================================
        FEATURE CARDS
        Each card has its own reveal, staggered by column.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FEATURES.map(([Ic, title, body], idx) => (
          <ScrollReveal
            key={title}
            direction="bottom"
            delay={(idx % 3) * 120}
          >
            <div className="group h-full bg-elevated border hairline rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-5 group-hover:bg-brass group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Ic size={22} />
              </div>
              <h3 className="font-display text-lg mb-2 text-ink group-hover:text-brass transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-soft leading-relaxed">{body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
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
                READY WHEN YOU ARE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl max-w-[20ch] text-white leading-tight">
                See these features in action.
              </h2>
              <p className="text-white/90 mt-4 max-w-[42ch] leading-relaxed">
                Browse live listings and try the search filters for yourself.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="shrink-0">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => go("home")}
                className="bg-white text-brass-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Browse listings
              </button>
              <button
                onClick={() => go("signup")}
                className="border-2 border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Sign up free
              </button>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>

  </div>
  );
};

export default Features;
