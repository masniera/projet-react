import Recettes from "./components/Recettes";
import React, { useState } from "react";
import Menu from "./components/Menu";

const App = () => {
  const [titleToPrint, setTitle] = useState("Appli Recettes de cuisine");
  return (
    <div>
      <Menu titleToPrint={titleToPrint}/>
    </div>
  );
};

export default App;
