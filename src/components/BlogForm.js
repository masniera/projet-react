import React from "react";
import axios from "axios";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import Article from "./Article";

const BlogForm = (params) => {
  return (
    <div>
      <input type="text" placeholder="Nom" id="inputName" />
      <br />
      <textarea
        placeholder="Message"
        id="inputMessage"
        rows="4"
        onChange={() => {
          if (document.getElementById("inputMessage").value.length >= 140) {
            console.log("debloqué");
            document.getElementById("inputSubmit").className = "inputSubmit";
            document.getElementById("minCharac").innerHTML = "";
          } else {
            document.getElementById("minCharac").innerHTML =
              "Veuillez écrire un minimum de 140 caractères";
            document.getElementById("inputSubmit").className =
              "inputSubmit blocked";
          }
        }}
      />
      <br />
      <p id="minCharac">Veuillez écrire un minimum de 140 caractères</p>
      <input
        type="submit"
        value="Envoyer"
        className="inputSubmit blocked"
        id="inputSubmit"
        onClick={() => {
          params.setNewData(true);
          axios.post("http://localhost:3003/articles/", {
            author: document.getElementById("inputName").value,
            date: new Date(),
            content: document.getElementById("inputMessage").value,
          });
        }}
      />
    </div>
  );
};

export default BlogForm;
