"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span>Daniel Yao</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-slate-600 hover:text-white transition-colors"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;