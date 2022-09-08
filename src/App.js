import React, { useEffect } from "react";
import Header from "./component/lauout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./component/lauout/Footer/Footer.js";
import Home from "./component/Home/Home.js"
import "./App.css"
const App = () => {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route extact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
