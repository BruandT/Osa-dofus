import React, { useState } from "react";
import datas from "../datas/monster.json";
import CardMonster from "../components/CardMonster";

function Monster(props) {
  const monstersPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State pour stocker le terme de recherche

  // Triez les données par niveau minimum avant de les afficher
  const sortedDatas = datas.slice().sort((a, b) => a.levelMin - b.levelMin);

  // Filtrez les monstres en fonction du terme de recherche
  const filteredMonsters = sortedDatas.filter(
    (data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      Object.keys(data.drops).length > 0
  );

  const startIndex = (currentPage - 1) * monstersPerPage;
  const endIndex = startIndex + monstersPerPage;
  const monstersToDisplay = filteredMonsters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredMonsters.length / monstersPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Mettre à jour le terme de recherche
    setCurrentPage(1); // Revenir à la première page lorsqu'une nouvelle recherche est effectuée
  };

  return (
    <>
      <main className='bg-main flex justify-center w-screen bg-skin-bg-shadow'>
        <div className='bg-monster w-10/12 mt-10 p-3 flex flex-col items-center bg-skin-bg-shadow rounded'>
          <div className='w-full flex justify-center relative'>
            <input
              className='search absolute left-10 rounded pl-2'
              type='text'
              placeholder='Recherche monstre'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <h2 className='font-luckiest text-2xl text-skin-color'>Monsters</h2>
          </div>
          <div className='w-full h-0.5 bg-skin-bg-color rounded'></div>
          <div className='w-full mt-2 gap-1 justify-center flex flex-wrap overflow-hidden'>
            {monstersToDisplay.map((data) => (
              <CardMonster
                key={`${data.id}-${data.name}`}
                id={data.id}
                name={data.name}
                lvlMin={data.levelMin}
                lvlMax={data.levelMax}
                item={data.drops}
              />
            ))}
          </div>
          <div className='flex justify-center mt-3 gap-10'>
            <button
              className='text-lg font-luckiest text-skin-color font-semiBold'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<< Prev"}
            </button>
            <button
              className='text-lg font-luckiest text-skin-color font-semiBold'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {"Next >>"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Monster;
