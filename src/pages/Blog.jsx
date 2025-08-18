import React from "react";
import Eventing from "../components/Eventing";
import Conditional from "../components/Conditional";
import bg1 from "../images/premium_photo-1681286768130-b9da2bdc6695.avif";
import ReduxApi from "../components/ReduxApi";

const Blog = () => {
  return (
    <div>
      <ReduxApi />
      <div
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${bg1})`,
          height: "200px",
          marginTop: "-100px",
          backgroundSize: "cover",
        }}
      ></div>
      <Conditional />
      <Eventing />
      <h1>Blog Page</h1>
    </div>
  );
};

export default Blog;
