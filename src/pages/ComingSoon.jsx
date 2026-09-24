import { useLocation } from "react-router-dom";
import { IconClock, IconArrow } from "../components/Icons.jsx";
import ScrollReveal from "../components/scrollReaveal.jsx";
import useGo from "../hooks/useGo.js";

/**
 * Shown for any URL that has no page yet.
 * "/pricing" -> "Pricing is coming soon."
 */
const ComingSoon = ({ go: goProp }) => {
  const go = useGo(goProp);
  const { pathname } = useLocation();

  const slug = pathname.split("/").filter(Boolean).pop() || "";
  const pageName = decodeURIComponent(slug)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-theme min-h-screen overflow-x-clip">
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-28 flex flex-col items-center text-center">

        <ScrollReveal direction="bottom">
          <div className="w-16 h-16 rounded-full bg-brass/10 flex items-center justify-center text-brass mx-auto">
            <IconClock size={28} />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={100}>
          <p className="text-xs tracking-[0.2em] text-faint mt-8 mb-4">COMING SOON</p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-[20ch] mx-auto leading-[1.1] text-ink">
            {pageName ? (
              <>
                {pageName} is{" "}
                <span className="italic text-brass">on its way.</span>
              </>
            ) : (
              <>
                This page is{" "}
                <span className="italic text-brass">on its way.</span>
              </>
            )}
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={200}>
          <p className="text-soft mt-5 max-w-[46ch] mx-auto leading-relaxed">
            We haven't built this page yet. In the meantime, head back to the
            homepage or get in touch and we'll help you directly.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => go("home")}
              className="inline-flex items-center justify-center gap-2 bg-brass text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Back to homepage
              <IconArrow size={16} />
            </button>
            <button
              onClick={() => go("contact")}
              className="border-2 border-brass/40 text-brass font-medium px-8 py-4 rounded-xl hover:bg-brass/10 hover:border-brass transition-all duration-300"
            >
              Contact us
            </button>
          </div>
        </ScrollReveal>

      </section>
    </div>
  );
};

export default ComingSoon;
