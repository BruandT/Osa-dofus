import React from "react";

function CardMonster(data) {
  const itemsArray = Object.entries(data.item); // Convertir les valeurs de l'objet en tableau
  const itemsToShow = itemsArray.slice(0, 7); // Obtenez les 8 premières entrées

  return (
    <>
      <div className='w-64 h-64 flex flex-col items-center bg-skin-bg-color/50 border-solid border-2 border-skin-light rounded'>
        <div className='w-full mt-2 flex '>
          <img
            src={`./assets/sprites/monsters/80/${data.id}.png`}
            alt={data.name}
            className=' w-20 h-20 ml-3'
          />
          <div className='flex flex-col mt-2'>
            <h3 className='w-40 pr-1'>{data.name}</h3>
            <p>
              Niv. {data.lvlMin} à {data.lvlMax}
            </p>
          </div>
        </div>
        <div className='w-full mt-6 py-1 flex flex-wrap justify-center gap-1'>
          {itemsToShow.map(([itemId]) => (
            <div
              key={itemId}
              className='h-14 w-14 bg-skin-bg-color border rounded'
            >
              <img
                src={`./assets/sprites/items/200/${itemId}.png`}
                alt={itemId}
                className='w-full h-full'
              />
            </div>
          ))}

          {itemsArray.length > 7 && (
            <div className='bg-addition h-14 w-14 border rounded flex items-center justify-center text-2xl font-bold'></div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardMonster;
