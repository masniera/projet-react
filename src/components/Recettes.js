import React, { useState } from "react";

import TableauRecette from "./TableauRecette.js";
import Recherche from "./Recherche";
import TitlePage from "./TitlePage";

const Recettes = (title) => {
  const [search, setSearch] = useState("");

  return (
    <div id="page">
      <TitlePage title={title} />
      <Recherche setSearch={setSearch} />
      <TableauRecette ingrediant={search} />
    </div>
  );
};

export default Recettes;
