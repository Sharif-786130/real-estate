import { useState, useEffect, useRef } from "react";
import { Button } from "../components/UI.jsx";
import { IconCheck, IconLock, IconMail, IconArrow } from "../components/Icons.jsx";
import AuthShell from "../components/AuthShell.jsx";
import ScrollReveal from "../components/scrollReaveal.jsx";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/routes.jsx";


/* =========================================================
   HELPERS
   ========================================================= */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STORAGE_KEY = "fc_login_email";
const REDIRECT_SECONDS = 5;

// Storage can be blocked (private mode etc.), so always guard it
const readSavedEmail = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
};

const validate = (f) => {
  const e = {};
  if (!f.email) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(f.email)) e.email = "Enter a valid email, like you@email.com.";

  if (!f.password) e.password = "Enter your password.";
  else if (f.password.length < 6) e.password = "Password must be at least 6 characters.";
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


/* =========================================================
   LOGIN PAGE
   views: "login" | "forgot" | "resetSent" | "done"
   ========================================================= */

const Login = ({ go }) => {
  const savedEmail = useRef(readSavedEmail()).current;

  // Use the `go` prop if the parent passes one, otherwise use the router.
  const navigate = useNavigate();
  const goTo = (name) => {
    if (typeof go === "function") return go(name);
    navigate(PATHS?.[name] ?? (name === "home" ? "/" : `/${name}`));
  };

  const [view, setView] = useState("login");
  const [form, setForm] = useState({ email: savedEmail, password: "" });
  const [remember, setRemember] = useState(!!savedEmail);
  const [showPw, setShowPw] = useState(false);
  const [capsOn, setCapsOn] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);
  const timer = useRef(null);

  const errors = validate(form);
  const showError = (k) => (touched[k] || submitted) && errors[k];

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));
  const blur = (k) => () => setTouched((prev) => ({ ...prev, [k]: true }));

  // Clear any pending fake-request timer when leaving the page
  useEffect(() => () => clearTimeout(timer.current), []);

  // Success screen: count down, then go to the homepage
  useEffect(() => {
    if (view !== "done") return;
    setCountdown(REDIRECT_SECONDS);
    const id = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [view]);

  useEffect(() => {
    if (view === "done" && countdown <= 0) goTo("home");
  }, [view, countdown]);

  const fakeRequest = (onDone) => {
    setLoading(true);
    timer.current = setTimeout(() => {
      setLoading(false);
      onDone();
    }, 1200);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (loading || errors.email || errors.password) return;

    fakeRequest(() => {
      try {
        if (remember) localStorage.setItem(STORAGE_KEY, form.email);
        else localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* storage unavailable, ignore */
      }
      setView("done");
    });
  };

  const submitForgot = (e) => {
    e.preventDefault();
    setTouched((prev) => ({ ...prev, email: true }));
    if (loading || errors.email) return;
    fakeRequest(() => setView("resetSent"));
  };

  const goBackToLogin = () => {
    setSubmitted(false);
    setTouched({});
    setView("login");
  };

  const handleCaps = (e) => {
    if (e.getModifierState) setCapsOn(e.getModifierState("CapsLock"));
  };

  const heading = {
    login: { eyebrow: "LOG IN", title: "Welcome back.", sub: "Log in to view saved homes and messages." },
    forgot: { eyebrow: "PASSWORD HELP", title: "Reset your password.", sub: "Enter your email and we'll send you a reset link." },
    resetSent: { eyebrow: "CHECK YOUR INBOX", title: "Reset link sent.", sub: "It can take a minute or two to arrive." },
    done: { eyebrow: "SUCCESS", title: "You're signed in.", sub: "Taking you to the homepage." },
  }[view];


  return (
    <AuthShell eyebrow={heading.eyebrow} title={heading.title} sub={heading.sub}>
      <ScrollReveal direction="bottom">

        {/* Content is capped at 120vh; scrolls inside if it ever gets taller */}
        <div className="max-h-[120vh] overflow-y-auto -mx-1 px-1 -my-1 py-1">

          {/* ---------------- SUCCESS ---------------- */}
          {view === "done" && (
            <div className="flex flex-col items-start gap-4 py-2" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-brass flex items-center justify-center text-white shadow-md">
                <IconCheck size={28} />
              </div>

              <h3 className="font-display text-2xl text-ink break-all">
                Signed in as {form.email}
              </h3>

              <p className="text-soft text-sm leading-relaxed">
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
          )}


          {/* ---------------- FORGOT PASSWORD ---------------- */}
          {view === "forgot" && (
            <form onSubmit={submitForgot} noValidate className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-1">
                <IconMail size={20} />
              </div>

              <AuthInput
                id="forgot-email"
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

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Spinner /> Sending link…
                  </span>
                ) : (
                  "Send reset link"
                )}
              </Button>

              <button
                type="button"
                onClick={goBackToLogin}
                className="text-sm text-brass font-medium hover:underline w-fit"
              >
                Back to log in
              </button>
            </form>
          )}


          {/* ---------------- RESET LINK SENT ---------------- */}
          {view === "resetSent" && (
            <div className="flex flex-col items-start gap-4 py-2" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-brass flex items-center justify-center text-white shadow-md">
                <IconMail size={26} />
              </div>
              <h3 className="font-display text-2xl text-ink">Check your email</h3>
              <p className="text-soft text-sm leading-relaxed">
                If an account exists for{" "}
                <span className="text-ink font-medium break-all">{form.email}</span>, a
                reset link is on its way. This is a demo, so nothing was actually sent.
              </p>
              <Button variant="outline" onClick={goBackToLogin} className="mt-2">
                Back to log in
              </Button>
            </div>
          )}


          {/* ---------------- LOGIN FORM ---------------- */}
          {view === "login" && (
            <form onSubmit={submitLogin} noValidate className="flex flex-col gap-5">

              {/* Icon badge above the form */}
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center text-brass mb-1">
                <IconLock size={20} />
              </div>

              <AuthInput
                id="login-email"
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

              <div className="flex flex-col gap-1.5">
                <AuthInput
                  id="login-password"
                  label="Password"
                  icon={IconLock}
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  value={form.password}
                  onChange={set("password")}
                  onBlur={(e) => {
                    blur("password")();
                    setCapsOn(false);
                  }}
                  onKeyUp={handleCaps}
                  onKeyDown={handleCaps}
                  placeholder="••••••••"
                  error={showError("password")}
                  right={
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? "Hide password" : "Show password"}
                      aria-pressed={showPw}
                      className="p-1.5 rounded-md text-faint hover:text-brass transition-colors"
                    >
                      <EyeIcon off={showPw} />
                    </button>
                  }
                />

                {capsOn && (
                  <p className="text-xs text-brass" role="status">
                    Caps Lock is on.
                  </p>
                )}
              </div>

              {/* Remember me + forgot password */}
              <div className="flex items-center justify-between gap-3 -mt-1">
                <label className="flex items-center gap-2 text-sm text-soft cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded accent-brass cursor-pointer"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setTouched({});
                    setView("forgot");
                  }}
                  className="text-xs text-brass hover:underline transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Spinner /> Logging in…
                  </span>
                ) : (
                  "Log in"
                )}
              </Button>

              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-hairline" />
                <span className="text-xs text-faint">or</span>
                <div className="flex-1 h-px bg-hairline" />
              </div>

              <p className="text-sm text-soft text-center">
                No account?{" "}
                <button
                  type="button"
                  onClick={() => goTo("signup")}
                  className="text-brass font-medium hover:underline"
                >
                  Sign up
                </button>
              </p>

            </form>
          )}

        </div>
      </ScrollReveal>
    </AuthShell>
  );
};

export default Login;
