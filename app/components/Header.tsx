"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="w-screen">
      <div className="flex items-center justify-between">
        <h1>dashboard</h1>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <hr />
    </header>
  );
};

export default Header;
