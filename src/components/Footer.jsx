import React from "react";

function Footer(props) {
  return (
    <>
      <footer className="h-24 bg-skin-bg-shadow flex flex-col items-center">
        <div className="w-11/12 h-full flex flex-col justify-center items-center">
        <p className="text-white">
          Dofus est un MMORPG édité par <a target="_blank" href="https://www.ankama.com/fr" className="text-skin-color">Ankama</a>. " Osa'loot " est un site
          non-officiel sans aucun lien avec Ankama. Toutes les illustrations
          sont la propriété d'Ankama Studio et de Dofus.
        </p>
        <a
          href='https://github.com/BruandT'
          target='_blank'
          rel='noopener noreferrer'
          className="text-skin-color"
        >
          Ymokay
        </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
