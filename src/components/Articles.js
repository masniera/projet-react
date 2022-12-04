import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";

const Articles = (params) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/articles")
      .then((response) => setData(response.data));
  }, [params.newdata]);

  if (data !== null) {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((article) => {
          if (article !== null) {
            return (
              <Article
                key={"list-" + article.id}
                article={article}
                data={data}
                setNewData={params.setNewData}
              ></Article>
            );
          }
        })}
      </div>
    );
  }
};

export default Articles;
