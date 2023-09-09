import React from "react";

function Footer(props) {
  return (
    <>
      <footer className="h-24 bg-skin-bg-shadow flex flex-col">
        <p>
          Dofus est un MMORPG édité par Ankama. " Osa'loot " est un site
          non-officiel sans aucun lien avec Ankama. Toutes les illustrations
          sont la propriété d'Ankama Studio et de Dofus.
        </p>
        <a
          href='https://github.com/BruandT'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ymokay
        </a>
      </footer>
    </>
  );
}

export default Footer;
