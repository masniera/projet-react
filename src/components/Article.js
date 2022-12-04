import React, { useState } from "react";
import axios from "axios";

const Article = (params) => {
  const [eddited, setEddited] = useState(false);
  const [author, setAuthor] = useState(params.article.author);
  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const [message, setMessage] = useState(params.article.content);
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  //console.log(params.article);
  if (params.article !== null) {
    let date = new Date(params.article.date);
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let newData = params.data;
    newData[params.article.id - 1] = null;
    if (eddited === false) {
      return (
        <div className="article">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "50%", fontSize: "30px" }}>
                  <b>{params.article.author}</b>
                </td>
                <td style={{ width: "50%", textAlign: "right" }}>
                  <p>
                    <i>
                      Posté le {date.toLocaleDateString("fr-FR", options)} à{" "}
                      {date.toLocaleTimeString("fr-FR")}
                    </i>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="deleteButton"
                    onClick={() => {
                      params.setNewData(newData);
                      axios.delete(
                        "http://localhost:3003/articles/" + params.article.id,
                        null
                      );
                    }}
                  >
                    Supprimer
                  </button>
                  <button
                    id="modifyButton"
                    onClick={() => {
                      setEddited(true);
                    }}
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ width: "95vh" }}>{params.article.content}</p>
        </div>
      );
    } else {
      return (
        <div className="article">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "50%", fontSize: "30px" }}>
                  <input
                    type="text"
                    id="modifyName"
                    value={author}
                    onChange={changeAuthor}
                  />
                </td>
                <td style={{ width: "50%", textAlign: "right" }}>
                  <input
                    type="date"
                    id="modifyMessage"
                    value={params.article.date}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="deleteButton"
                    onClick={() => {
                      params.setNewData(true);
                      axios.delete(
                        "http://localhost:3003/articles/" + params.article.id,
                        null
                      );
                    }}
                  >
                    Supprimer
                  </button>
                  <button
                    id="modifyButton"
                    onClick={() => {
                      params.setNewData(true);
                      axios.put(
                        "http://localhost:3003/articles/" + params.article.id,
                        {
                          author: author,
                          date: params.article.date,
                          content: message,
                        }
                      );
                      setEddited(false);
                    }}
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <textarea
            rows="4"
            style={{ width: "95vh" }}
            value={message}
            onChange={changeMessage}
          />
        </div>
      );
    }
  }
};

export default Article;
