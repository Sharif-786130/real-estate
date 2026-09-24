const AuthShell = ({ eyebrow, title, sub, children }) => (
  <div className="max-w-md mx-auto px-5 pt-16 sm:pt-24 pb-10">
    <p className="text-xs tracking-wide text-faint mb-4">{eyebrow}</p>
    <h1 className="font-display text-3xl leading-tight">{title}</h1>
    {sub && <p className="text-soft text-sm mt-3">{sub}</p>}
    <div className="mt-9 border hairline rounded bg-elevated p-7">{children}</div>
  </div>
);

export default AuthShell;
