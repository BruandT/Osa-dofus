import React from "react";
import Navigation from "../components/Navigation";

function Header() {
  return (
    <>
      <header className="flex h-20">
        <div className="flex items-center w-1/3">
        <img src="./assets/images/Dofus_emeraude.png" alt="logo dofus" className="h-full" />
        <h1 className="font-luckiest text-2xl">Osa'loot</h1>
        </div>
        <Navigation />
      </header>
    </>
  );
}

export default Header;
