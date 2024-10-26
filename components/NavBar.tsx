"use client";
import { NAV_LINKS } from "@/constants";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarProps {
  handleCloseMenu?: () => void;
}

const NavBar = ({ handleCloseMenu }: NavBarProps) => {
  const pathname = usePathname();
  //console.log(pathname);
  return (
    <nav className="bg-navBar w-[260px] px-5 min-h-screen flex flex-col relative z-20">
      <div className="lg:hidden text-right px-6">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleCloseMenu}
          className="text-2xl text-default-text-light hover:text-text-light-hover "
        />
      </div>
      <h2 className="text-text-light-hover uppercase text-center py-[18px]">
        Creative team
      </h2>
      <div className="w-full mb-[30px] h-[2px] bg-default-text-light"></div>
      <ul className="flex flex-col h-[300px] gap-8 relative">
        {NAV_LINKS.map((item) => (
          <li className="w-full relative px-6" key={item.key}>
            <Link
              href={item.href}
              className={`block w-full text-xs text-center font-semibold uppercase cursor-pointer hover:text-text-light-hover ${
                pathname === item.href
                  ? "text-text-light-selected"
                  : "text-default-text-light"
              }`}
            >
              {item.label}
            </Link>

            {/* Pointer to label */}
            {pathname === item.href && <div className="absolute pointer"></div>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
