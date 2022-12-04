import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const TableauRecette = (search) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          search.ingrediant
      )
      .then((responses) => setData(responses.data.meals));
  }, [search]);

  if (data !== null) {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((recette) => {
          return (
            <Card
              className="recette"
              key={"list-" + recette.idMeal}
              recette={recette}
            ></Card>
          );
        })}
      </div>
    );
  }
};

export default TableauRecette;
