import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className='flex items-center'>
        <ul className='flex gap-5'>
          <NavLink to="/monsters" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Monsters</li>
          </NavLink>
          <NavLink to="/items" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Items</li>
          </NavLink>
          <NavLink to="/builds" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Builds</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
