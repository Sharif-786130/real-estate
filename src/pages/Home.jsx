import { HeroArt, CardArt } from "../components/Art.jsx";

import { DimLabel } from "../components/UI.jsx";

import {
  IconArrow,
  IconBed,
  IconBath,
  IconArea,
  StatIcon,
} from "../components/Icons.jsx";

import ScrollReveal from "../components/scrollReaveal.jsx";
import useGo from "../hooks/useGo.js";


/* =========================================================
   PROPERTY DATA
   ========================================================= */

const properties = [
  {
    name: "Willow Creek Bungalow",
    area: "Travis Heights",
    price: "$486,000",
    beds: 3,
    baths: 2,
    sqft: "1,640",
  },
  {
    name: "The Kestrel Loft",
    area: "East Side",
    price: "$612,500",
    beds: 2,
    baths: 2,
    sqft: "1,180",
  },
  {
    name: "Marlowe Farmhouse",
    area: "Clarksville",
    price: "$734,000",
    beds: 4,
    baths: 3,
    sqft: "2,410",
  },
  {
    name: "Cedar Row Duplex",
    area: "Zilker",
    price: "$559,900",
    beds: 3,
    baths: 2,
    sqft: "1,720",
  },
  {
    name: "Founders Street House",
    area: "Hyde Park",
    price: "$698,000",
    beds: 4,
    baths: 2,
    sqft: "2,050",
  },
  {
    name: "The Millworks Unit 4B",
    area: "Downtown",
    price: "$421,000",
    beds: 1,
    baths: 1,
    sqft: "890",
  },
];


/* =========================================================
   STATS DATA
   ========================================================= */

const stats = [
  { n: "12,400", l: "Homes listed", icon: "home" },
  { n: "86", l: "Cities covered", icon: "map" },
  { n: "340", l: "Verified agents", icon: "users" },
  { n: "4.9", l: "Average review", icon: "star", suffix: "/ 5" },
];


/* =========================================================
   PROPERTY CARD
   ========================================================= */

const PropertyCard = ({ p, i }) => {
  return (
    <div className="group relative h-full rounded-2xl overflow-hidden bg-elevated border hairline shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">

      {/* Glow ring on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 1.5px var(--color-brass), 0 20px 40px -12px rgba(184, 138, 59, 0.35)",
        }}
      />

      {/* Property Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <CardArt variant={i} />

        {/* Price badge floating on image */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-md">
          <span className="font-display font-semibold text-brass text-sm">
            {p.price}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex flex-col gap-3 relative">

        <div>
          <p className="font-display text-lg leading-tight text-ink group-hover:text-brass transition-colors duration-300">
            {p.name}
          </p>
          <p className="text-xs text-faint mt-1 flex items-center gap-1">
            <IconArea size={12} />
            {p.area}
          </p>
        </div>

        {/* Property Stats */}
        <div className="flex items-center gap-4 text-xs text-soft pt-3 border-t hairline mt-1">
          <span className="flex items-center gap-1.5">
            <IconBed size={15} />
            {p.beds} bd
          </span>
          <span className="flex items-center gap-1.5">
            <IconBath size={15} />
            {p.baths} ba
          </span>
          <span className="flex items-center gap-1.5">
            <IconArea size={15} />
            {p.sqft} sqft
          </span>
        </div>

        {/* View details link — appears on hover */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-brass opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
          View details
          <IconArrow size={14} />
        </div>

      </div>
    </div>
  );
};


/* =========================================================
   HOME PAGE
   ========================================================= */

const Home = ({ go: goProp }) => {
  const go = useGo(goProp);

  return (
    <main className="bg-theme min-h-screen overflow-x-clip">

      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Hero Content */}
        <ScrollReveal direction="left">
          <div className="min-w-0">

            <p className="text-xs tracking-[0.2em] text-faint mb-4">
              FORTUNE CAPITAL DEVELOPERS
            </p>

            <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] text-ink">
              A home is not a transaction.
              <br />
              It's where you'll{" "}
              <span className="italic text-brass">actually live.</span>
            </h1>

            <p className="text-soft mt-5 max-w-[46ch] leading-relaxed">
              Browse verified listings, tour on your schedule,
              and work with an agent who picks up the phone.
              No games, no vague square footage.
            </p>

          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal direction="right" delay={100}>
          <HeroArt />
        </ScrollReveal>

      </section>


      {/* =====================================================
          STATISTICS SECTION
          Each card has its own reveal, staggered by column.
          ===================================================== */}

      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {stats.map((stat, idx) => (
            <ScrollReveal
              key={stat.l}
              direction="bottom"
              delay={idx * 100}
            >
              <div className="group h-full bg-elevated border hairline rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">

                <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <StatIcon name={stat.icon} />
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl sm:text-4xl text-ink group-hover:text-brass transition-colors duration-300">
                    {stat.n}
                  </span>
                  {stat.suffix && (
                    <span className="font-display text-lg text-faint">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <DimLabel>{stat.l}</DimLabel>

              </div>
            </ScrollReveal>
          ))}

        </div>
      </section>


      {/* =====================================================
          FEATURED PROPERTIES
          Header and each card reveal separately.
          ===================================================== */}

      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">

        <ScrollReveal direction="bottom">
          <div className="flex items-end justify-between mb-8">

            <div>
              <p className="text-xs tracking-[0.2em] text-faint mb-2">
                FEATURED
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-ink">
                Homes on the market this week
              </h2>
            </div>

            <button
              onClick={() => go("features")}
              className="hidden sm:flex items-center gap-1.5 text-sm text-brass hover:underline"
            >
              See all features
              <IconArrow size={15} />
            </button>

          </div>
        </ScrollReveal>

        {/* Property Grid (no wrapper here, each card is wrapped) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <ScrollReveal
              key={p.name}
              direction="bottom"
              delay={(i % 3) * 120}
            >
              <PropertyCard p={p} i={i} />
            </ScrollReveal>
          ))}
        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION SECTION
          ===================================================== */}

      <section className="mt-24 relative overflow-hidden">

        <div
          className="relative"
          style={{ background: "var(--gold-gradient)" }}
        >

          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative">

            <ScrollReveal direction="left">
              <div className="text-center md:text-left">

                <p className="text-xs tracking-[0.2em] text-white/80 mb-3">
                  JOIN 12,000+ HAPPY HOMEOWNERS
                </p>

                <h2 className="font-display text-3xl sm:text-4xl max-w-[20ch] text-white leading-tight">
                  Ready to find your place?
                </h2>

                <p className="text-white/90 mt-4 max-w-[42ch] leading-relaxed">
                  Create a free account to save homes,
                  get alerts, and message agents directly.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">

                <button
                  onClick={() => go("signup")}
                  className="bg-white text-brass-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Sign up free
                </button>

                <button
                  onClick={() => go("how")}
                  className="border-2 border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  How it works
                </button>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>

    </main>
  );
};


export default Home;
