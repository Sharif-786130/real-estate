// // import { IconShield, IconHandshake, IconChat, StatIcon } from "../components/Icons.jsx";
// // import { Button } from "../components/UI.jsx";
// // import aboutImage from "../assets/image5.jpg";
// // import ScrollReveal from "../components/scrollReaveal.jsx";

// // const About = ({ go }) => (
// //   <div className="bg-theme min-h-screen">

// //     {/* =====================================================
// //         HERO SECTION
// //         ===================================================== */}

// //     <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 grid md:grid-cols-2 gap-12 items-center">
// //       <ScrollReveal direction="left">
// //         <div className="min-w-0">
// //           <p className="text-xs tracking-[0.2em] text-faint mb-4">
// //             ABOUT FORTUNE CAPITAL
// //           </p>
// //           <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
// //             Home search felt impersonal,{" "}
// //             <span className="italic text-brass">so we rebuilt it.</span>
// //           </h1>
// //           <p className="text-soft mt-6 max-w-[52ch] leading-relaxed">
// //             Fortune Capital Developers started in 2019 after our founders spent a year
// //             house-hunting through stale listings, unreturned calls, and photos that
// //             never matched the property. We set out to build the version of this we
// //             wished existed: honest listings, agents who are actually reachable, and
// //             tools that respect your time.
// //           </p>
// //         </div>
// //       </ScrollReveal>

// //       <ScrollReveal direction="right">
// //         <div className="overflow-hidden rounded-2xl shadow-md">
// //           <img
// //             src={aboutImage}
// //             alt="Our team at work"
// //             className="w-full h-auto max-h-[440px] aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-110"
// //           />
// //         </div>
// //       </ScrollReveal>
// //     </section>


// //     {/* =====================================================
// //         STAT STRIP
// //         ===================================================== */}

// //     <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-20">
// //       <ScrollReveal direction="bottom">
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
// //           {[
// //             { n: "2019", l: "Founded in Austin", icon: "home" },
// //             { n: "40+", l: "Cities covered", icon: "map" },
// //             { n: "12,400", l: "Homes listed", icon: "users" },
// //             { n: "24hr", l: "Average agent reply", icon: "star" },
// //           ].map((stat) => (
// //             <div
// //               key={stat.l}
// //               className="group bg-elevated border hairline rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300"
// //             >
// //               <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-white group-hover:scale-110 transition-all duration-300">
// //                 <StatIcon name={stat.icon} />
// //               </div>
// //               <span className="font-display text-2xl sm:text-3xl text-ink group-hover:text-brass transition-colors duration-300">
// //                 {stat.n}
// //               </span>
// //               <p className="text-xs tracking-wide text-faint uppercase">{stat.l}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </ScrollReveal>
// //     </section>


// //     {/* =====================================================
// //         VALUES SECTION
// //         ===================================================== */}

// //     <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">
// //       <ScrollReveal direction="bottom">
// //         <p className="text-xs tracking-[0.2em] text-faint mb-2">WHAT WE STAND FOR</p>
// //         <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
// //           Built around three things
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-6">
// //           {[
// //             [IconShield, "Transparency", "Every listing is verified against public records before it goes live. What you see is what's for sale."],
// //             [IconHandshake, "Craft", "Search, tours, and paperwork are designed as one connected path, not three disconnected tools."],
// //             [IconChat, "Trust", "Agents respond within a day, by policy. We track it, and we publish the average."],
// //           ].map(([Ic, title, body]) => (
// //             <div
// //               key={title}
// //               className="group bg-elevated border hairline rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300"
// //             >
// //               <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-5 group-hover:bg-brass group-hover:text-white transition-all duration-300">
// //                 <Ic size={22} />
// //               </div>
// //               <h3 className="font-display text-xl mb-2 text-ink">{title}</h3>
// //               <p className="text-soft text-sm leading-relaxed">{body}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </ScrollReveal>
// //     </section>


// //     {/* =====================================================
// //         MILESTONES / TIMELINE
// //         ===================================================== */}

// //     <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">
// //       <ScrollReveal direction="bottom">
// //         <p className="text-xs tracking-[0.2em] text-faint mb-2">OUR JOURNEY</p>
// //         <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
// //           Milestones along the way
// //         </h2>

// //         <div className="grid sm:grid-cols-3 gap-8">
// //           {[
// //             ["2019", "Founded", "Fortune Capital opens in Austin with 40 listings and two agents."],
// //             ["2022", "40 cities", "Expanded coverage nationwide with a verified-agent network."],
// //             ["2026", "Agent matching", "Launched matching based on neighborhood expertise, not lead queues."],
// //           ].map(([year, title, body]) => (
// //             <div
// //               key={year}
// //               className="bg-elevated border hairline rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300"
// //             >
// //               <span className="font-display text-3xl text-brass">{year}</span>
// //               <div className="h-[2px] w-10 bg-brass-light rounded-full" />
// //               <h4 className="font-medium text-ink">{title}</h4>
// //               <p className="text-sm text-soft leading-relaxed">{body}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </ScrollReveal>
// //     </section>


// //     {/* =====================================================
// //         CTA SECTION
// //         ===================================================== */}

// //     <section className="mt-24 relative overflow-hidden">


// //       <div className="relative" style={{ background: "var(--gold-gradient)" }}>

// //         <div
// //           className="absolute inset-0 opacity-[0.07]"
// //           style={{
// //             backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
// //             backgroundSize: "24px 24px",
// //           }}
// //         />

// //         <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative">
// //           <ScrollReveal direction="left">
// //             <div className="text-center md:text-left">
// //               <p className="text-xs tracking-[0.2em] text-white/80 mb-3">
// //                 WORK WITH US
// //               </p>
// //               <h2 className="font-display text-3xl sm:text-4xl max-w-[20ch] text-white leading-tight">
// //                 See the homes we're proud of.
// //               </h2>
// //               <p className="text-white/90 mt-4 max-w-[42ch] leading-relaxed">
// //                 Browse our current listings or reach out — we usually reply within a day.
// //               </p>
// //             </div>
// //           </ScrollReveal>
// //           <ScrollReveal direction="right">
// //           <div className="flex flex-col sm:flex-row gap-3 shrink-0">
// //             <button
// //               onClick={() => go("features")}
// //               className="bg-white text-brass-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
// //             >
// //               View listings
// //             </button>
// //             <button
// //               onClick={() => go("contact")}
// //               className="border-2 border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
// //             >
// //               Contact us
// //             </button>
// //           </div>
// //           </ScrollReveal>

// //         </div>

// //       </div>
// //     </section>

// //   </div>
// // );

// // export default About;


// import { IconShield, IconHandshake, IconChat, StatIcon } from "../components/Icons.jsx";
// import aboutImage from "../assets/image5.jpg";
// import ScrollReveal from "../components/scrollReaveal.jsx";


// /* =========================================================
//    DATA
//    ========================================================= */

// const stats = [
//   { n: "2019", l: "Founded in Austin", icon: "home" },
//   { n: "40+", l: "Cities covered", icon: "map" },
//   { n: "12,400", l: "Homes listed", icon: "users" },
//   { n: "24hr", l: "Average agent reply", icon: "star" },
// ];

// const values = [
//   [IconShield, "Transparency", "Every listing is verified against public records before it goes live. What you see is what's for sale."],
//   [IconHandshake, "Craft", "Search, tours, and paperwork are designed as one connected path, not three disconnected tools."],
//   [IconChat, "Trust", "Agents respond within a day, by policy. We track it, and we publish the average."],
// ];

// const milestones = [
//   ["2019", "Founded", "Fortune Capital opens in Austin with 40 listings and two agents."],
//   ["2022", "40 cities", "Expanded coverage nationwide with a verified-agent network."],
//   ["2026", "Agent matching", "Launched matching based on neighborhood expertise, not lead queues."],
// ];


// /* =========================================================
//    ABOUT PAGE
//    ========================================================= */

// const About = ({ go }) => (
//   <div className="bg-theme min-h-screen overflow-x-clip">

//     {/* =====================================================
//         HERO SECTION
//         ===================================================== */}

//     <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 grid md:grid-cols-2 gap-12 items-center">

//       <ScrollReveal direction="left">
//         <div className="min-w-0">
//           <p className="text-xs tracking-[0.2em] text-faint mb-4">
//             ABOUT FORTUNE CAPITAL
//           </p>
//           <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
//             Home search felt impersonal,{" "}
//             <span className="italic text-brass">so we rebuilt it.</span>
//           </h1>
//           <p className="text-soft mt-6 max-w-[52ch] leading-relaxed">
//             Fortune Capital Developers started in 2019 after our founders spent a year
//             house-hunting through stale listings, unreturned calls, and photos that
//             never matched the property. We set out to build the version of this we
//             wished existed: honest listings, agents who are actually reachable, and
//             tools that respect your time.
//           </p>
//         </div>
//       </ScrollReveal>

//       <ScrollReveal direction="right" delay={100}>
//         <div className="overflow-hidden rounded-2xl shadow-md">
//           <img
//             src={aboutImage}
//             alt="Our team at work"
//             className="w-full h-auto max-h-[440px] aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-110"
//           />
//         </div>
//       </ScrollReveal>

//     </section>


//     {/* =====================================================
//         STAT STRIP
//         Each card has its own reveal.
//         ===================================================== */}

//     <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-20">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//         {stats.map((stat, idx) => (
//           <ScrollReveal key={stat.l} direction="bottom" delay={idx * 100}>
//             <div className="group h-full bg-elevated border hairline rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">
//               <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-white group-hover:scale-110 transition-all duration-300">
//                 <StatIcon name={stat.icon} />
//               </div>
//               <span className="font-display text-2xl sm:text-3xl text-ink group-hover:text-brass transition-colors duration-300">
//                 {stat.n}
//               </span>
//               <p className="text-xs tracking-wide text-faint uppercase">{stat.l}</p>
//             </div>
//           </ScrollReveal>
//         ))}
//       </div>
//     </section>


//     {/* =====================================================
//         VALUES SECTION
//         Heading and each card reveal separately.
//         ===================================================== */}

//     <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">

//       <ScrollReveal direction="bottom">
//         <p className="text-xs tracking-[0.2em] text-faint mb-2">WHAT WE STAND FOR</p>
//         <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
//           Built around three things
//         </h2>
//       </ScrollReveal>

//       <div className="grid md:grid-cols-3 gap-6">
//         {values.map(([Ic, title, body], idx) => (
//           <ScrollReveal key={title} direction="bottom" delay={idx * 120}>
//             <div className="group h-full bg-elevated border hairline rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">
//               <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-5 group-hover:bg-brass group-hover:text-white transition-all duration-300">
//                 <Ic size={22} />
//               </div>
//               <h3 className="font-display text-xl mb-2 text-ink">{title}</h3>
//               <p className="text-soft text-sm leading-relaxed">{body}</p>
//             </div>
//           </ScrollReveal>
//         ))}
//       </div>

//     </section>


//     {/* =====================================================
//         MILESTONES / TIMELINE
//         Heading and each card reveal separately.
//         ===================================================== */}

//     <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">

//       <ScrollReveal direction="bottom">
//         <p className="text-xs tracking-[0.2em] text-faint mb-2">OUR JOURNEY</p>
//         <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
//           Milestones along the way
//         </h2>
//       </ScrollReveal>

//       <div className="grid sm:grid-cols-3 gap-8">
//         {milestones.map(([year, title, body], idx) => (
//           <ScrollReveal key={year} direction="bottom" delay={idx * 120}>
//             <div className="h-full bg-elevated border hairline rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <span className="font-display text-3xl text-brass">{year}</span>
//               <div className="h-[2px] w-10 bg-brass-light rounded-full" />
//               <h4 className="font-medium text-ink">{title}</h4>
//               <p className="text-sm text-soft leading-relaxed">{body}</p>
//             </div>
//           </ScrollReveal>
//         ))}
//       </div>

//     </section>


//     {/* =====================================================
//         CTA SECTION
//         ===================================================== */}

//     <section className="mt-24 relative overflow-hidden">

//       <div className="relative" style={{ background: "var(--gold-gradient)" }}>

//         <div
//           className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
//             backgroundSize: "24px 24px",
//           }}
//         />

//         <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative">

//           <ScrollReveal direction="left">
//             <div className="text-center md:text-left">
//               <p className="text-xs tracking-[0.2em] text-white/80 mb-3">
//                 WORK WITH US
//               </p>
//               <h2 className="font-display text-3xl sm:text-4xl max-w-[20ch] text-white leading-tight">
//                 See the homes we're proud of.
//               </h2>
//               <p className="text-white/90 mt-4 max-w-[42ch] leading-relaxed">
//                 Browse our current listings or reach out — we usually reply within a day.
//               </p>
//             </div>
//           </ScrollReveal>

//           <ScrollReveal direction="right" className="shrink-0">
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button
//                 onClick={() => go("features")}
//                 className="bg-white text-brass-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 View listings
//               </button>
//               <button
//                 onClick={() => go("contact")}
//                 className="border-2 border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
//               >
//                 Contact us
//               </button>
//             </div>
//           </ScrollReveal>

//         </div>

//       </div>
//     </section>

//   </div>
// );

// export default About;


import { IconShield, IconHandshake, IconChat, StatIcon } from "../components/Icons.jsx";
import aboutImage from "../assets/image5.jpg";
import ScrollReveal from "../components/scrollReaveal.jsx";
import useGo from "../hooks/useGo.js";


/* =========================================================
   DATA
   ========================================================= */

const stats = [
  { n: "2019", l: "Founded in Austin", icon: "home" },
  { n: "40+", l: "Cities covered", icon: "map" },
  { n: "12,400", l: "Homes listed", icon: "users" },
  { n: "24hr", l: "Average agent reply", icon: "star" },
];

const values = [
  [IconShield, "Transparency", "Every listing is verified against public records before it goes live. What you see is what's for sale."],
  [IconHandshake, "Craft", "Search, tours, and paperwork are designed as one connected path, not three disconnected tools."],
  [IconChat, "Trust", "Agents respond within a day, by policy. We track it, and we publish the average."],
];

const milestones = [
  ["2019", "Founded", "Fortune Capital opens in Austin with 40 listings and two agents."],
  ["2022", "40 cities", "Expanded coverage nationwide with a verified-agent network."],
  ["2026", "Agent matching", "Launched matching based on neighborhood expertise, not lead queues."],
];


/* =========================================================
   ABOUT PAGE
   ========================================================= */

const About = ({ go: goProp }) => {
  const go = useGo(goProp);

  return (
  <div className="bg-theme min-h-screen overflow-x-clip">

    {/* =====================================================
        HERO SECTION
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 grid md:grid-cols-2 gap-12 items-center">

      <ScrollReveal direction="left">
        <div className="min-w-0">
          <p className="text-xs tracking-[0.2em] text-faint mb-4">
            ABOUT FORTUNE CAPITAL
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
            Home search felt impersonal,{" "}
            <span className="italic text-brass">so we rebuilt it.</span>
          </h1>
          <p className="text-soft mt-6 max-w-[52ch] leading-relaxed">
            Fortune Capital Developers started in 2019 after our founders spent a year
            house-hunting through stale listings, unreturned calls, and photos that
            never matched the property. We set out to build the version of this we
            wished existed: honest listings, agents who are actually reachable, and
            tools that respect your time.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={100}>
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src={aboutImage}
            alt="Our team at work"
            className="w-full h-auto max-h-[440px] aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-110"
          />
        </div>
      </ScrollReveal>

    </section>


    {/* =====================================================
        STAT STRIP
        Each card has its own reveal.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <ScrollReveal key={stat.l} direction="bottom" delay={idx * 100}>
            <div className="group h-full bg-elevated border hairline rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <StatIcon name={stat.icon} />
              </div>
              <span className="font-display text-2xl sm:text-3xl text-ink group-hover:text-brass transition-colors duration-300">
                {stat.n}
              </span>
              <p className="text-xs tracking-wide text-faint uppercase">{stat.l}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>


    {/* =====================================================
        VALUES SECTION
        Heading and each card reveal separately.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">

      <ScrollReveal direction="bottom">
        <p className="text-xs tracking-[0.2em] text-faint mb-2">WHAT WE STAND FOR</p>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
          Built around three things
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map(([Ic, title, body], idx) => (
          <ScrollReveal key={title} direction="bottom" delay={idx * 120}>
            <div className="group h-full bg-elevated border hairline rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brass transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-5 group-hover:bg-brass group-hover:text-white transition-all duration-300">
                <Ic size={22} />
              </div>
              <h3 className="font-display text-xl mb-2 text-ink">{title}</h3>
              <p className="text-soft text-sm leading-relaxed">{body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

    </section>


    {/* =====================================================
        MILESTONES / TIMELINE
        Heading and each card reveal separately.
        ===================================================== */}

    <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">

      <ScrollReveal direction="bottom">
        <p className="text-xs tracking-[0.2em] text-faint mb-2">OUR JOURNEY</p>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
          Milestones along the way
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-8">
        {milestones.map(([year, title, body], idx) => (
          <ScrollReveal key={year} direction="bottom" delay={idx * 120}>
            <div className="h-full bg-elevated border hairline rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="font-display text-3xl text-brass">{year}</span>
              <div className="h-[2px] w-10 bg-brass-light rounded-full" />
              <h4 className="font-medium text-ink">{title}</h4>
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
                WORK WITH US
              </p>
              <h2 className="font-display text-3xl sm:text-4xl max-w-[20ch] text-white leading-tight">
                See the homes we're proud of.
              </h2>
              <p className="text-white/90 mt-4 max-w-[42ch] leading-relaxed">
                Browse our current listings or reach out — we usually reply within a day.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="shrink-0">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => go("features")}
                className="bg-white text-brass-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                View listings
              </button>
              <button
                onClick={() => go("contact")}
                className="border-2 border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Contact us
              </button>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>

  </div>
  );
};

export default About;
