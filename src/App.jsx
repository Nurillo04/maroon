import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./comments/header/Header";
import Catalog from "./pages/catalog/Catalog";
import Details from "./pages/details/Details";
import Contact from "./comments/contact/Contact";
import Footer from "./comments/footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="details" element={<Details />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
