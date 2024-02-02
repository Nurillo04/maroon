import React from "react";
import "./Bestseller.scss";

import { krem1 } from "../../assets";
import { krem2 } from "../../assets";
import { krem3 } from "../../assets";
import { krem4 } from "../../assets";
import { vektor } from "../../assets";
import { vektor2 } from "../../assets";

const Bestseller = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="wrapper mt-28">
            <ul className="flex justify-between">
              <li className="py-20 px-6">
                <h5 className="font-medium text-3xl text-center font-sans">
                  Бестселлеры
                </h5>
                <p className="text-lg font-normal text-center font-sans mt-5 mb-5 w-56 ">
                  Легендарные продукты, завоевавшие любовь наших клиентов
                </p>
                <button className="text-center ml-8 py-3 px-5 border text-gray-900  font-sans">
                  Смотреть все
                </button>
              </li>
              <li>
                <img src={krem1} alt="rasm" />
                <h6 className="text-center mt-4">High</h6>
                <p className="subtitle text-center mt-4">крем для лица</p>
                <button className="border-b-2 text-center pt-5 px-8 ml-8">
                  Подробнее
                </button>
              </li>
              <li>
                <img src={krem2} alt="rasm" />
                <h6 className="text-center mt-4">Rest</h6>
                <p className="subtitle text-center mt-4">минеральная пудра</p>
                <button className="border-b-2 text-center pt-5 px-8 ml-8">
                  Подробнее
                </button>
              </li>
              <li>
                <img src={krem3} alt="rasm" />
                <h6 className="text-center mt-4">Rose</h6>
                <p className="subtitle text-center mt-4">крем для лица</p>
                <button className="border-b-2 text-center pt-5 px-8 ml-8">
                  Подробнее
                </button>
              </li>
              <li>
                <img src={krem4} alt="rasm" />
                <h6 className="text-center mt-4">Milk</h6>
                <p className="subtitle text-center mt-4">масло для тела</p>
                <button className="border-b-2 text-center pt-5 px-8 ml-8">
                  Подробнее
                </button>
              </li>
            </ul>
            <div className="flex gap-8 justify-end mr-20 mt-8">
              <img src={vektor2} alt="rasm" />
              <img src={vektor} alt="rasm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bestseller;
