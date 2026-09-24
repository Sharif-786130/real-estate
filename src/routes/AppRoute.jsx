import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";

/**
 * Wraps every page in MainLayout (header + footer) and renders
 * whichever route matches the current URL.
 */
const AppRoutes = () => {
  const element = useRoutes([
    {
      element: <MainLayout />,
      children: routes,
    },
  ]);
  return element;
};

export default AppRoutes;
