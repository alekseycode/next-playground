"use client";

import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div className="relative border-8 border-slate-800 nav-bar">
      <div className="flex sm:justify-center md:justify-between items-center py-3 relative z-10">
        <div className="hidden md:flex justify-around">
          <NavItem name="Home" path="/" currentPath={currentPath} />
          <NavItem
            name="Earth"
            path="/milkyway/earth"
            currentPath={currentPath}
          />
          <NavItem
            name="Lake"
            path="/milkyway/earth/eagle-lake"
            currentPath={currentPath}
          />
        </div>
      </div>
    </div>
  );
}
