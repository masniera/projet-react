import React from "react";

const Recherche = (params) => {
  return (
    <input
      type="text"
      placeholder="Tapez le nom d'un aliment"
      onChange={(event) => {
        params.setSearch(event.target.value);
      }}
      id="barre_de_recherche"
    ></input>
  );
};

export default Recherche;
