import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-700">
      <footer className="text-center py-4 text-white text-sm">
        © {new Date().getFullYear()} Student Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
