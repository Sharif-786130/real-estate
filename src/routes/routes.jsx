import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import HowItWorks from "../pages/HowItWorks.jsx";
import Contact from "../pages/Contact.jsx";
import Signup from "../pages/Signup.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Features from "../pages/Features.jsx";


/**
 * Path constants — import these instead of hardcoding strings
 * anywhere you need to navigate() or render a <Link>.
 */
export const PATHS = {
  home: "/",
  about: "/about",
  features: "/features",
  how: "/how-it-works",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
};

/**
 * Routes shown in the header/footer navigation, in display order.
 */
export const NAV_LINKS = [
  { path: PATHS.home, label: "Home" },
  { path: PATHS.about, label: "About" },
  { path: PATHS.features, label: "Features" },
  { path: PATHS.how, label: "How it works" },
  { path: PATHS.contact, label: "Contact" },
];

/**
 * Full route table, consumed by AppRoutes.jsx via useRoutes().
 * Add a new page by adding one entry here.
 */
const routes = [
  { path: PATHS.home, element: <Home /> },
  { path: PATHS.about, element: <About /> },
  { path: PATHS.features, element: <Features /> },
  { path: PATHS.how, element: <HowItWorks /> },
  { path: PATHS.contact, element: <Contact /> },
  { path: PATHS.login, element: <Login /> },
  { path: PATHS.signup, element: <Signup /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
