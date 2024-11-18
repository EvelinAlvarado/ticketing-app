"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const handleMenu = () => {
    console.log("clicked menu");
    setDisplayMenu(true);
  };
  const handleCloseMenu = () => {
    console.log("close menu");
    setDisplayMenu(false);
  };
  return (
    <header className="header-grid max-w-[1440px] padding-container relative">
      <div className="flexBetween py-4 border-b-2 border-primary-shades primary-shades">
        <h1 className="font-semibold text-sm">Dashboard</h1>
        {displayMenu === false ? (
          <FontAwesomeIcon
            className="text-2xl"
            icon={faBars}
            onClick={handleMenu}
          />
        ) : (
          <div className="fixed inset-0 z-50">
            {/* Fondo semitransparente */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={handleCloseMenu}
            ></div>
            {/* NavBar desplegado */}
            <div className="fixed right-0 top-0 z-20 w-60 min-h-screen bg-slate-700">
              <NavBar handleCloseMenu={handleCloseMenu} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
