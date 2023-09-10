import React from "react";

function CardMonster(data) {
  return (
    <>
      <div className='w-64 h-64 flex flex-col items-center bg-skin-bg-color/50 border-solid border-2 border-skin-light rounded'>
        <div className='w-full mt-2 flex '>
          <img
            src='./assets/images/Dofus_emeraude.png'
            alt='image du monstre'
            className=' w-20 h-20 ml-3'
          />
          <div className='flex flex-col mt-2'>
            <h3 className='w-40 pr-1'>{data.name}</h3>
            <p>
              Niv. {data.lvlMin} à {data.lvlMax}
            </p>
          </div>
        </div>
        <div className='w-full mt-4 py-1 flex flex-wrap justify-center gap-1'>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
          <div className='h-14 w-14 bg-skin-bg-color border rounded'></div>
        </div>
      </div>
    </>
  );
}

export default CardMonster;
