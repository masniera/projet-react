import React from "react";
import Recettes from "./Recettes";
import Blog from "./Blog";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import titleToPrint from "./Recettes";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const recettes = Recettes("Appli recettes de cuisine");
  const blog = Blog("Blog");
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          padding: "5px 0 5px 5px",
          fontSize: "20px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <NavLink
            to="Recettes"
            style={({ isActive }) => ({
              color: "rgb(222, 94, 62)",
              textDecoration: isActive ? "underline 0.4rem" : "none",
              textUnderlineOffset: "0.4rem",
            })}
          >
            Recettes
          </NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <NavLink
            to="Blog"
            style={({ isActive }) => ({
              color: "rgb(222, 94, 62)",
              textDecoration: isActive ? "underline 0.4rem" : "none",
              textUnderlineOffset: "0.4rem",
              borderRadius: "10 px",
            })}
          >
            Blog
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route exact path="/Recettes" element={recettes} />
        <Route exact path="/Blog" element={blog} />
      </Routes>
    </BrowserRouter>
  );
};

export default Menu;
