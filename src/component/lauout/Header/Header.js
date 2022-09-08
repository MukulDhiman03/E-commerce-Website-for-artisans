import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.webp";
import { BsSearch } from "react-icons/bs";
const options = {
  logo: logo,
  logoWidth: "20vmax",
  burgerColor: "#eb4034",
  burgerColorHover: "#a62d24",
  navColor1: "white",
  navColor2: "rgb(245, 245, 220)",
  navColor3: "rgb(245, 245, 220)",
  link1Text: "Home",
  link2Text: "About",
  link3Text: "Product",
  link4Text: "Contact",
  link1Url: "/",
  link2Url: "/about",
  link3Url: "/product",
  link4Url: "/contact",
  link1Size: "2.5vmax",
  link2Size: "2.5vmax",
  link3Size: "2.5vmax",
  link4Size: "2.5vmax",
  link1Padding: "2.5vmax",
  link2Padding: "2.5vmax",
  link3Padding: "2.5vmax",
  link4Padding: "2.5vmax",
  link2Margin: "1vmax",
  link3Margin: "0",
  link4Margin: "1vmax",
  SearchIconElement: { BsSearch },
};
const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
