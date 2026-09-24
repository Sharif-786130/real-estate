import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/UI.jsx";
import { IconCheck, IconUserPlus, IconMail, IconLock, IconArrow } from "../components/Icons.jsx";
import AuthShell from "../components/AuthShell.jsx";
import ScrollReveal from "../components/scrollReaveal.jsx";
import { PATHS } from "../routes/routes.jsx";


/* =========================================================
   HELPERS
   ========================================================= */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ROLES = ["Buyer", "Seller", "Agent"];
const REDIRECT_SECONDS = 5;

const STRENGTH_LABELS = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["bg-red-500", "bg-red-500", "bg-orange-400", "bg-yellow-500", "bg-green-500"];

// Individual password rules, used by both the meter and the checklist
const passwordChecks = (pw) => [
  { label: "8+ characters", ok: pw.length >= 8 },
  { label: "Upper & lowercase", ok: /[a-z]/.test(pw) && /[A-Z]/.test(pw) },
  { label: "A number", ok: /\d/.test(pw) },
  { label: "A symbol", ok: /[^A-Za-z0-9]/.test(pw) },
];

const validate = (f, agreed) => {
  const e = {};

  if (!f.name.trim()) e.name = "Enter your full name.";
  else if (f.name.trim().length < 2) e.name = "Name must be at least 2 characters.";

  if (!f.email) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(f.email)) e.email = "Enter a valid email, like you@email.com.";

  if (!f.password) e.password = "Create a password.";
  else if (f.password.length < 6) e.password = "Password must be at least 6 characters.";

  if (!f.confirm) e.confirm = "Re-enter your password.";
  else if (f.confirm !== f.password) e.confirm = "Passwords don't match.";

  if (!agreed) e.terms = "Please accept the terms to continue.";

  return e;
};


/* =========================================================
   SMALL UI PIECES
   ========================================================= */

const EyeIcon = ({ off }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {off ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

const Spinner = () => (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
    <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Input with a leading icon, optional right-side control and inline error
const AuthInput = ({ id, label, icon: Icon, error, right, ...props }) => (
  <div className="flex flex-col gap-1.5 text-sm">
    <label htmlFor={id} className="text-soft font-medium">
      {label}
    </label>

    <div className="relative">
      {Icon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint pointer-events-none">
          <Icon size={16} />
        </span>
      )}

      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg py-2.5 text-sm text-ink placeholder:text-faint bg-transparent outline-none transition-all
          ${Icon ? "pl-10" : "pl-3.5"} ${right ? "pr-11" : "pr-3.5"}
          ${
            error
              ? "border border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border hairline focus:border-brass focus:ring-2 focus:ring-brass/15"
          }`}
        {...props}
      />

      {right && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">{right}</div>
      )}
    </div>

    {error && (
      <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

const EyeButton = ({ shown, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={shown ? "Hide password" : "Show password"}
    aria-pressed={shown}
    className="p-1.5 rounded-md text-faint hover:text-brass transition-colors"
  >
    <EyeIcon off={shown} />
  </button>
);

// 4-segment strength bar + checklist of rules
const StrengthMeter = ({ password }) => {
  if (!password) return null;

  const checks = passwordChecks(password);
  const score = checks.filter((c) => c.ok).length;
  const filled = Math.max(score, 1);

  return (
    <div className="flex flex-col gap-2 mt-1" aria-live="polite">
      <div className="flex items-center gap-3">
        <div className="flex flex-1 gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                n <= filled ? STRENGTH_COLORS[score] : "bg-brass/15"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-soft w-16 text-right">{STRENGTH_LABELS[score]}</span>
      </div>

      <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
        {checks.map((c) => (
          <li
            key={c.label}
            className={`flex items-center gap-1.5 text-xs transition-colors ${
              c.ok ? "text-brass" : "text-faint"
            }`}
          >
            <span
              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border ${
                c.ok ? "bg-brass border-brass text-white" : "border-current"
              }`}
            >
              {c.ok && <IconCheck size={9} />}
            </span>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
};


/* =========================================================
   SIGNUP PAGE
   ========================================================= */

const Signup = ({ go }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", role: "Buyer" });
  const [agreed, setAgreed] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [capsOn, setCapsOn] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);
  const timer = useRef(null);

  // Use the `go` prop if the parent passes one, otherwise use the router.
  const navigate = useNavigate();
  const goTo = (name) => {
    if (typeof go === "function") return go(name);
    navigate(PATHS?.[name] ?? (name === "home" ? "/" : `/${name}`));
  };

  const errors = validate(form, agreed);
  const showError = (k) => (touched[k] || submitted) && errors[k];

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));
  const blur = (k) => () => setTouched((prev) => ({ ...prev, [k]: true }));
  const handleCaps = (e) => {
    if (e.getModifierState) setCapsOn(e.getModifierState("CapsLock"));
  };

  // Clear any pending fake-request timer when leaving the page
  useEffect(() => () => clearTimeout(timer.current), []);

  // Success screen: count down, then go to the homepage
  useEffect(() => {
    if (!done) return;
    setCountdown(REDIRECT_SECONDS);
    const id = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [done]);

  useEffect(() => {
    if (done && countdown <= 0) goTo("home");
  }, [done, countdown]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (loading || Object.keys(errors).length > 0) return;

    setLoading(true);
    timer.current = setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1400);
  };

  const firstName = form.name.trim().split(" ")[0];

  const heading = done
    ? { eyebrow: "ACCOUNT CREATED", title: "You're all set.", sub: "Taking you to the homepage." }
    : { eyebrow: "SIGN UP", title: "Create your account.", sub: "Free to join. Save homes, message agents, get alerts." };


  return (
    <AuthShell eyebrow={heading.eyebrow} title={heading.title} sub={heading.sub}>
      <ScrollReveal direction="bottom">

        {/* Content is capped at 120vh; scrolls inside if it ever gets taller */}
        <div className="max-h-[120vh] overflow-y-auto -mx-1 px-1 -my-1 py-1">

          {/* ---------------- SUCCESS ---------------- */}
          {done ? (
            <div className="flex flex-col items-start gap-4 py-2" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-brass flex items-center justify-center text-white shadow-md">
                <IconCheck size={28} />
              </div>

              <h3 className="font-display text-2xl text-ink break-words">
                Welcome, {firstName}.
              </h3>

              <p className="text-soft text-sm leading-relaxed">
                Your account has been created successfully.
              </p>

              {/* Account summary */}
              <div className="w-full rounded-xl border hairline bg-brass/5 p-4 flex flex-col gap-2 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-faint">Email</span>
                  <span className="text-ink font-medium break-all text-right">{form.email}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-faint">Joined as</span>
                  <span className="text-ink font-medium">{form.role}</span>
                </div>
              </div>

              <p className="text-soft text-xs leading-relaxed">
                This is a demo — no account was actually created or stored.
              </p>

              {/* Countdown bar */}
              <div className="w-full">
                <div className="h-1.5 w-full rounded-full bg-brass/15 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-[width] duration-1000 ease-linear"
                    style={{
                      width: `${(Math.max(countdown, 0) / REDIRECT_SECONDS) * 100}%`,
                      background: "var(--gold-gradient)",
                    }}
                  />
                </div>
                <p className="text-xs text-faint mt-2">
                  Redirecting to the homepage in {Math.max(countdown, 0)}s…
                </p>
              </div>

              <Button onClick={() => goTo("home")} className="mt-1">
                Go to homepage now
                <IconArrow size={16} />
              </Button>
            </div>
          ) : (

          /* ---------------- SIGNUP FORM ---------------- */
            <form onSubmit={submit} noValidate className="flex flex-col gap-5">

              {/* Icon badge above the form */}
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-1">
                <IconUserPlus size={20} />
              </div>

              <AuthInput
                id="signup-name"
                label="Full name"
                icon={IconUserPlus}
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={set("name")}
                onBlur={blur("name")}
                placeholder="Jordan Lee"
                error={showError("name")}
              />

              <AuthInput
                id="signup-email"
                label="Email"
                icon={IconMail}
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set("email")}
                onBlur={blur("email")}
                placeholder="you@email.com"
                error={showError("email")}
              />

              {/* Password + strength meter */}
              <div className="flex flex-col gap-1.5">
                <AuthInput
                  id="signup-password"
                  label="Password"
                  icon={IconLock}
                  type={showPw ? "text" : "password"}
                  autoComplete="new-password"
                  value={form.password}
                  onChange={set("password")}
                  onBlur={() => {
                    blur("password")();
                    setCapsOn(false);
                  }}
                  onKeyUp={handleCaps}
                  onKeyDown={handleCaps}
                  placeholder="At least 6 characters"
                  error={showError("password")}
                  right={<EyeButton shown={showPw} onClick={() => setShowPw((v) => !v)} />}
                />

                {capsOn && (
                  <p className="text-xs text-brass" role="status">
                    Caps Lock is on.
                  </p>
                )}

                <StrengthMeter password={form.password} />
              </div>

              <AuthInput
                id="signup-confirm"
                label="Confirm password"
                icon={IconLock}
                type={showPw ? "text" : "password"}
                autoComplete="new-password"
                value={form.confirm}
                onChange={set("confirm")}
                onBlur={blur("confirm")}
                placeholder="Re-enter your password"
                error={showError("confirm")}
                right={<EyeButton shown={showPw} onClick={() => setShowPw((v) => !v)} />}
              />

              {/* Role selector */}
              <div className="flex flex-col gap-1.5 text-sm">
                <span id="role-label" className="text-soft font-medium">I am a</span>
                <div role="radiogroup" aria-labelledby="role-label" className="grid grid-cols-3 gap-2">
                  {ROLES.map((r) => {
                    const selected = form.role === r;
                    return (
                      <button
                        key={r}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => setForm((prev) => ({ ...prev, role: r }))}
                        className={`rounded-lg border py-2.5 text-sm font-medium transition-all duration-200 ${
                          selected
                            ? "border-brass bg-brass/10 text-brass"
                            : "hairline text-soft hover:border-brass hover:text-brass"
                        }`}
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terms */}
              <div className="flex flex-col gap-1.5 -mt-1">
                <label className="flex items-start gap-2.5 text-sm text-soft cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    aria-invalid={submitted && !agreed}
                    aria-describedby={submitted && !agreed ? "terms-error" : undefined}
                    className="w-4 h-4 mt-0.5 rounded accent-brass cursor-pointer shrink-0"
                  />
                  <span>
                    I agree to the <span className="text-ink font-medium">Terms of Service</span> and{" "}
                    <span className="text-ink font-medium">Privacy Policy</span>.
                  </span>
                </label>

                {submitted && errors.terms && (
                  <p id="terms-error" role="alert" className="text-xs text-red-500">
                    {errors.terms}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full mt-1" disabled={loading}>
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Spinner /> Creating account…
                  </span>
                ) : (
                  "Create account"
                )}
              </Button>

              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-hairline" />
                <span className="text-xs text-faint">or</span>
                <div className="flex-1 h-px bg-hairline" />
              </div>

              <p className="text-sm text-soft text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => goTo("login")}
                  className="text-brass font-medium hover:underline"
                >
                  Log in
                </button>
              </p>

            </form>
          )}

        </div>
      </ScrollReveal>
    </AuthShell>
  );
};

export default Signup;