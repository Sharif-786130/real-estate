import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal
 *
 * - direction="bottom" (default): follows your scroll direction.
 *     Scrolling DOWN -> the element slides up into place (from below).
 *     Scrolling UP   -> the element slides down into place (from above).
 * - direction="left" / "right": always slides in from that side.
 * - direction="top": always slides in from above.
 *
 * The effect replays every time the element enters the screen.
 */
const ScrollReveal = ({
  children,
  direction = "bottom",
  delay = 0,
  distance = 40,
  duration = 800,
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [fromAbove, setFromAbove] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who turned animations off in their system settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // The element left the screen. Remember which side it left from:
          // above the screen (scrolled past) or below it (not reached yet).
          // That decides where it slides in from next time.
          setFromAbove(entry.boundingClientRect.top < 0);
          setVisible(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = () => {
    if (direction === "left") return `translateX(-${distance}px)`;
    if (direction === "right") return `translateX(${distance}px)`;
    if (direction === "top") return `translateY(-${distance}px)`;
    // "bottom": follow the scroll direction
    return fromAbove ? `translateY(-${distance}px)` : `translateY(${distance}px)`;
  };

  return (
    // Outer div stays still and is what we observe (keeps detection stable).
    // Inner div does the moving.
    <div ref={ref} className={className}>
      <div
        style={{
          height: "100%",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : hiddenTransform(),
          // Delay only when appearing, so leaving the screen is instant
          transition: `opacity ${duration}ms ease ${visible ? delay : 0}ms, transform ${duration}ms ease ${visible ? delay : 0}ms`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;