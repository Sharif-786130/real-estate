// import { Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import { PATHS } from "../routes/routes.jsx";

// const NO_FOOTER_PATHS = [PATHS.login, PATHS.signup];

// const MainLayout = () => {
//   const { pathname } = useLocation();
//   const hideFooter = NO_FOOTER_PATHS.includes(pathname);

//   // Scroll to top on every route change.
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "auto" });
//   }, [pathname]);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       {!hideFooter && <Footer />}
//     </div>
//   );
// };

// export default MainLayout;

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { PATHS } from "../routes/routes.jsx";

const NO_CHROME_PATHS = [PATHS.login, PATHS.signup];

const MainLayout = () => {
  const { pathname } = useLocation();
  const hideChrome = NO_CHROME_PATHS.includes(pathname);

  // Scroll to top on every route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideChrome && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
};

export default MainLayout;