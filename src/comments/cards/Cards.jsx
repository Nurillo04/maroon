import React from "react";
import "./Cards.scss";
import { rasm1 } from "../../assets";

const Cards = () => {
  return (
    <div>
      <section className="mt-10">
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__top mb-14 flex justify-between items-center gap-x-14">
              <h5 className="font-medium text-3xl text-center font-sans">
                Каталог
              </h5>
              <button className="text-center py-3 px-5 border text-gray-900  font-sans ">
                Фильтр
              </button>
            </div>
            <div className="cards">
              <ul>
                <li className="bg-[url('../../../public/banner.png')] ">
                  {/* <img src={rasm1} alt="rasm" /> */}
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod minus ratione nobis. Quos odit ad numquam neque.
                    Nostrum aspernatur, dolor odio praesentium repellendus
                    necessitatibus deleniti accusamus ullam eos sint aut
                    voluptatum expedita corporis doloribus eaque, ipsum, vitae
                    perspiciatis! Explicabo culpa aliquid atque quis.
                    Praesentium?
                  </p> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
