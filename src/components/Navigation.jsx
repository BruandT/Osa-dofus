import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className='flex items-center'>
        <ul className='h-full flex items-center ml-20 gap-5 bg-skin-bg-shadow'>
          <NavLink to='/'>
            <li className='h-20 w-40 flex text-skin-color text-lg font-semibold items-center justify-center gap-2 px-2 border-solid border-2 border-blue rounded'>
              <img
                src='./assets/icons/home.png'
                alt='logo home'
                className='h-1/2'
              />
              Home
            </li>
          </NavLink>
          <NavLink to='/monsters'>
            <li className='h-20 w-40 flex text-skin-color text-lg font-semibold items-center justify-center gap-2 px-2 border-solid border-2 border-blue rounded'>
              <img
                src='./assets/icons/monster.png'
                alt='logo monsters'
                className='h-1/2'
              />
              Monsters
            </li>
          </NavLink>
          <NavLink to='/items'>
            <li className='h-20 w-40 flex text-skin-color text-lg font-semibold items-center justify-center gap-2 px-2 border-solid border-2 border-blue rounded'>
              <img
                src='./assets/icons/equipment.png'
                alt='logo items'
                className='h-1/2'
              />
              Items
            </li>
          </NavLink>
          <NavLink to='/builds'>
            <li className='h-20 w-40 flex text-skin-color text-lg font-semibold items-center justify-center gap-2 px-2 border-solid border-2 border-blue rounded'>
              <img
                src='./assets/icons/deck.png'
                alt='logo builds'
                className='h-1/2'
              />
              Builds
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
