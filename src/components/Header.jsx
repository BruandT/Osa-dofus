import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex h-24 border-b-2 border-skin-light px-2 bg-skin-bg-shadow">
        <div className="flex items-center w-1/3">
        <NavLink to="/" className={'h-full flex items-center'}>
        <img src="./assets/images/Dofus_emeraude.png" alt="logo dofus" className="h-20" />
        </NavLink>
        <h1 className="font-luckiest text-2xl text-skin-light">Osa'loot</h1>
        </div>
        <Navigation />
      </header>
    </>
  );
}

export default Header;
