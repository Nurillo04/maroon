import React from "react";
import "./Cards.scss";
import { sum } from "../../assets";

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
              <ul className=" flex justify-between items-center">
                <li className=" items items1 px-5 pt-72 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">High</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        990
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">крем для лица</p>
                    <p className="opacity-60"> 50ml</p>
                  </div>
                </li>

                <li className=" items items2 px-5 pt-72 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Rest</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        690
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">минеральная пудра</p>
                    <p className="opacity-60"> 20g</p>
                  </div>
                </li>

                <li className=" items items1 px-5 pt-72 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Rose</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        890
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">крем для лица</p>
                    <p className="opacity-60"> 50ml</p>
                  </div>
                </li>

                <li className=" items items1 px-5 pt-72 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Milk</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        790
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">масло для тела</p>
                    <p className="opacity-60"> 150ml</p>
                  </div>
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
