import React from "react";
import Advertising from "../../comments/advertising/Advertising";
import Cards from "../../comments/cards/Cards";
import Contact from "../../comments/contact/Contact";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <div>
      <Cards />
      <Advertising />
      <Contact />
    </div>
  );
};

export default Catalog;
