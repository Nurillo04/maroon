import React from "react";
import Advertising from "../../comments/advertising/Advertising";
import Bestseller from "../../comments/bestseller/Bestseller";
import Contact from "../../comments/contact/Contact";
import Footer from "../../comments/footer/Footer";
import Header from "../../comments/header/Header";
import Hero from "../../comments/hero/Hero";
import History from "../../comments/history/History";
import Personal from "../../comments/personal/Personal";
import Spring from "../../comments/spring/Spring";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Bestseller />
      <Spring />
      <Personal />
      <History />
      <Advertising />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
