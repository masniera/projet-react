import React, { useEffect, useState } from "react";
import TitlePage from "./TitlePage";
import BlogForm from "./BlogForm";
import Articles from "./Articles";

const Blog = (title) => {
  const [newdata, setNewData] = useState([]);
  return (
    <div id="page">
      <TitlePage title={title} />
      <BlogForm setNewData={setNewData} />
      <Articles setNewData={setNewData} newdata={newdata} />
    </div>
  );
};

export default Blog;
