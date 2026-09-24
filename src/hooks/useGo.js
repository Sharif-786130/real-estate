import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/routes.jsx";

// Known pages. Only needed if PATHS in routes.jsx doesn't already have the key.
// Change a path here if your real URL is different.
const KNOWN_PATHS = {
  home: "/",
  about: "/about",
  features: "/features",
  how: "/how-it-works",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
};

/**
 * useGo(goProp?)
 * Returns a go("pageName") function that works on every page.
 *
 * Where go("pageName") sends you:
 *   1. PATHS[pageName] from routes.jsx, if it exists
 *   2. KNOWN_PATHS[pageName] above, if it exists
 *   3. "/pageName" otherwise
 *
 * Case 3 is what makes future pages easy: a button can call go("pricing")
 * before the page exists and lands on the "Coming soon" page. Once you add a
 * route with path "/pricing", the same button opens the real page, with no
 * change needed here.
 */
const useGo = (goProp) => {
  const navigate = useNavigate();

  if (typeof goProp === "function") return goProp;

  return (name) => {
    const path = PATHS?.[name] ?? KNOWN_PATHS[name] ?? `/${name}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" }); // open the new page at the top
  };
};

export default useGo;
