import { Link } from "react-router-dom";
import { Button } from "../components/UI.jsx";
import { PATHS } from "../routes/routes.jsx";

const NotFound = () => (
  <div className="max-w-2xl mx-auto px-5 pt-24 pb-16 text-center flex flex-col items-center">
    <p className="text-xs tracking-wide text-faint mb-4">404</p>
    <h1 className="font-display text-4xl mb-4">This address isn't listed.</h1>
    <p className="text-soft mb-8 max-w-[42ch]">
      The page you're looking for doesn't exist, or the listing has moved.
    </p>
    <Link to={PATHS.home}>
      <Button>Back to homepage</Button>
    </Link>
  </div>
);

export default NotFound;
