import React from "react";

import Link from "next/link";
import navlink from "../constants/navlink.js";

const NavMenu = () => {
  return (
    <div className="flex gap-3">
      {navlink.map((navlink) => (
        <Link href={navlink.route} key={navlink.route}>
          {navlink.label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
