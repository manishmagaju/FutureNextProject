import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <span className="text-sm text-primary ">FutureNext</span>
        <span className="text-sm text-secondary"> Academy</span>
      </div>
      <NavMenu />
      <button className="border-2 rounded-2xl p-2 border-secondary text-primary hover:bg-primary transition hover:text-white">
        Logout
      </button>
    </div>
  );
};

export default Header;
