import React from "react";
import { hero1 } from "../../assets";
import { hero2 } from "../../assets";
import { vektor } from "../../assets";
// import { herobg } from "../../assets";

const Hero = () => {
  return (
    <div>
      <section className="pt-8 pb-8 text-center bg-[url('../../../public/hero-bg.png')] ">
        <div className="container">
          <div className=" flex justify-center gap-20 items-center">
            <div>
              <img src={hero1} alt="rasm" />
              <div className="flex justify-between mt-5 ">
               
                <p className="font-medium font-sans">Уход для лица</p>
                <img src={vektor} alt="rasm" />
              </div>
            </div>
            <div className="hero__card">
              <h2 className="font-medium text-6xl text-center font-sans">
                MAROON
              </h2>
              <p className="text-lg font-normal text-center font-sans mt-5 mb-5 w-64">
                Натуральная косметика для бережного ухода за кожей
              </p>
              <button className="text-center py-3 px-5 border text-gray-900  font-sans ">
                Подробнее
              </button>
            </div>
            <div className="hero__card">
              <img src={hero2} alt="rasm" />
              <div className="flex justify-between mt-5 ">
                {" "}
                <p className="font-medium font-sans">Уход для лица</p>
                <img src={vektor} alt="rasm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
