"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  //console.log(pathname);
  return (
    <div className="bg-navBar w-60 h-screen flex flex-col gap-8 pt-8">
      <h2 className="text-text-light-hover uppercase text-center">
        Creative team
      </h2>
      <hr />
      <ul className="flex flex-col h-[300px] gap-8  mx-auto">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={` font-medium uppercase cursor-pointer hover:text-text-light-hover ${
              pathname === item.href
                ? "text-text-light-selected"
                : "text-default-text-light"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
