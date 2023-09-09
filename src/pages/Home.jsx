import React from "react";
import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <>
      <main className='bg-main flex justify-center w-screen bg-skin-bg-shadow'>
        <div className='w-11/12 flex flex-col mt-4 gap-4 items-center'>
          <div className='w-4/5 h-52 flex items-center relative'>
            <div
              id='monster'
              className='bg-blue-left flex items-center justify-center absolute'
            >
              <div className='w-8/12'>
                <p className='m-5 text-lg font-semibold text-skin-base'>
                <NavLink
                    to='/monsters'
                    className='text-skin-light text-lg font-bold underline underline-offset-2'
                  >
                    ICI!
                  </NavLink>{" "}
                  Tu peux voir ce que les monstres loot.
                </p>
              </div>
            </div>
            <div className='bg-white-right flex items-center justify-center absolute left-80'>
              <div className='w-8/12'>
                <p className='text-lg font-semibold text-skin-color'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus, laudantium.
                </p>
              </div>
            </div>
          </div>

          <div className='w-4/5 h-52 flex items-center relative'>
            <div
              id='stuff'
              className='bg-blue-right flex items-center justify-center absolute right-0'
            >
              <div className='w-8/12'>
                <p className='p-scalex m-5 text-lg font-semibold text-skin-base'>
                  <NavLink
                    to='/items'
                    className='text-skin-light text-lg font-bold underline underline-offset-2'
                  >
                    ICI!
                  </NavLink>{" "}
                  Tu peux voir sur quel monstre tombe les stuffs.
                </p>
              </div>
            </div>
            <div className='bg-white-left flex items-center justify-center absolute right-80'>
              <div className='w-8/12'>
                <p className='p-scalex text-lg font-semibold text-skin-color'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti omnis quo pariatur!
                </p>
              </div>
            </div>
          </div>

          <div className='w-4/5 h-52 flex items-center relative'>
            <div
              id='build'
              className='bg-blue-left flex items-center justify-center absolute'
            >
              <div className='w-8/12'>
                <p className='m-5 text-lg font-semibold text-skin-base'>
                <NavLink
                    to='/builds'
                    className='text-skin-light text-lg font-bold underline underline-offset-2'
                  >
                    ICI!
                  </NavLink>{" "}
                  Tu peux créer ton build.
                </p>
              </div>
            </div>
            <div className='bg-white-right flex items-center justify-center absolute left-80'>
              <div className='w-8/12'>
                <p className='text-lg font-semibold text-skin-color'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus, laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
