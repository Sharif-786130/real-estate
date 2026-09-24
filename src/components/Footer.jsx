import { Link } from "react-router-dom";
import { PATHS } from "../routes/routes.jsx";
import ScrollReveal from "./scrollReaveal.jsx";

const Footer = () => {
  return (
    <footer className="bg-ink relative overflow-hidden">
      <ScrollReveal direction="bottom">

        {/* Subtle top accent line */}
        <div className="h-[3px] w-full" style={{ background: "var(--gold-gradient)" }} />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <p className="font-display italic text-2xl text-brass-light mb-3">
                Fortune Capital
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-[28ch]">
                Homes, found properly — with real listings and people who answer the phone.
              </p>
            </div>

            {/* Company links */}
            <div>
              <p className="text-xs tracking-[0.15em] text-brass-light mb-4 uppercase">
                Company
              </p>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link to={PATHS.about} className="text-white/70 hover:text-white transition-colors">About</Link></li>
                <li><Link to={PATHS.features} className="text-white/70 hover:text-white transition-colors">Features</Link></li>
                <li><Link to={PATHS.how} className="text-white/70 hover:text-white transition-colors">How it works</Link></li>
              </ul>
            </div>

            {/* Account links */}
            <div>
              <p className="text-xs tracking-[0.15em] text-brass-light mb-4 uppercase">
                Account
              </p>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link to={PATHS.login} className="text-white/70 hover:text-white transition-colors">Log in</Link></li>
                <li><Link to={PATHS.signup} className="text-white/70 hover:text-white transition-colors">Sign up</Link></li>
                <li><Link to={PATHS.contact} className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Office info */}
            <div>
              <p className="text-xs tracking-[0.15em] text-brass-light mb-4 uppercase">
                Office
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                214 Kestrel Row<br />
                Austin, TX 78701<br />
                hello@fortunecapital.example
              </p>
            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-6">
            <p className="text-white/40 text-xs">
              © 2026 Fortune Capital Developers. All listings illustrative.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;