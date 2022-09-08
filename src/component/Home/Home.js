import React from "react";
// import {CgMouse} from "react-icons/all"
import "./Home.css";
import Product from "./Product.js";
import img from "../../images/product.jpg";
import MetaData from "../lauout/MetaData";

const product = {
  name: "Blue Tshirt",
  images: img,
  price: "$30",
  _id: "abhishek",
};

const Home = () => {
  return (
    <>
      <MetaData title="Artisans.in" />
      <div>
        <div className="banner">
          <p>Welcome To Artisans E-commerce Website </p>
          <h2>Low price best quality </h2>
          <h1>Find Amazing Products Below</h1>
          <a href="#container">
            <button>Scroll</button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </div>
      </div>
    </>
  );
};

export default Home;
