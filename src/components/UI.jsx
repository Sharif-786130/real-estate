export const DimLabel = ({ children }) => (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className="dim-line w-full" />
    <span className="text-xs tracking-wide text-faint font-medium">{children}</span>
  </div>
);

export function Button({ variant = "primary", size = "md", className = "", children, ...props }) {
  const base =
    "font-sans font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",      // bumped up from likely text-sm/px-3
    lg: "text-lg px-8 py-4",
  };

  const variants = {
    primary: "bg-brass text-white hover:bg-brass-dark",
    gradient: "bg-brass-gradient text-white hover:opacity-90",
    outline: "border-2 border-brass text-brass bg-transparent hover:bg-brass hover:text-white",
    ghost: "text-brass hover:bg-brass/10",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export const Field = ({ label, ...rest }) => (
  <label className="flex flex-col gap-1.5 text-sm">
    <span className="text-soft font-medium">{label}</span>
    <input
      className="border hairline rounded px-3.5 py-2.5 text-sm outline-none focus:border-brass"
      {...rest}
    />
  </label>
);
