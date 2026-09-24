import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HouseMark, IconMenu, IconClose } from "./Icons.jsx";
import { Button } from "./UI.jsx";
import { PATHS, NAV_LINKS } from "../routes/routes.jsx";
import Iconimage from "../assets/icon2.png"
import ScrollReveal from "./scrollReaveal.jsx";

const Header = () => {
    const [open, setOpen] = useState(false);

    const navTickClass = ({ isActive }) =>
        `nav-tick text-sm pb-2 transition-colors duration-200 ${
            isActive ? "active text-brass font-medium" : "text-soft hover:text-ink"
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `text-left text-sm ${isActive ? "text-brass font-semibold" : "text-soft"}`;

    return (
        <header
            className="sticky top-0 z-40 backdrop-blur border-b hairline"
            style={{ background: "color-mix(in srgb, var(--color-canvas) 88%, transparent)" }}
        >
            <ScrollReveal direction="top">
            <div className="max-w-6xl mx-auto px-2 sm:px-8 h-30 flex items-center justify-between">

                <img src={Iconimage} alt="Logo" className="w-30 h-30 object-contain" />

                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ path, label }) => (
                        <NavLink key={path} to={path} end={path === PATHS.home} className={navTickClass}>
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <Link to={PATHS.login}>
                        <Button variant="ghost">Log in</Button>
                    </Link>
                    <Link to={PATHS.signup}>
                        <Button variant="primary">Sign up</Button>
                    </Link>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <IconClose /> : <IconMenu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t hairline px-5 py-4 flex flex-col gap-4">
                    {NAV_LINKS.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === PATHS.home}
                            className={mobileLinkClass}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <div className="flex gap-3 pt-2">
                        <Link to={PATHS.login} className="flex-1" onClick={() => setOpen(false)}>
                            <Button variant="outline" className="w-full">
                                Log in
                            </Button>
                        </Link>
                        <Link to={PATHS.signup} className="flex-1" onClick={() => setOpen(false)}>
                            <Button variant="primary" className="w-full">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

            </ScrollReveal>
        </header>
    );
};

export default Header;