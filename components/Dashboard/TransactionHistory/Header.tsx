import React from "react";

function Header() {
  return (
    <div className=" flex justify-between mb-2">
      <h2 className="text-lg font-semibold text-[#1A1A1A]">
        Transaction History
      </h2>
      <button className="capitalize text-primary hover:bg-primary-container px-2 py-1 rounded active:scale-95">
        Show All
      </button>
    </div>
  );
}

export default Header;
