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
              <ul className=" flex justify-between items-center flex-wrap">
                <li className=" items items1 px-5 pt-64 pb-2">
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

                <li className=" items items2  px-5 pt-64 pb-2 ">
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

                <li className=" items items1  px-5 pt-64 pb-2 ">
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

                <li className=" items items4  px-5 pt-64 pb-2">
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

                <li className=" items items5  px-5 pt-64 pb-2 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">
                      Paradise
                    </h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        590
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">минеральная пудра</p>
                    <p className="opacity-60"> 15g</p>
                  </div>
                </li>

                <li className=" items items6 px-5 pt-64 pb-2 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Sun</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        90
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">бомбочка для ванны</p>
                    <p className="opacity-60"> 20g</p>
                  </div>
                </li>

                <li className=" items items7  px-5 pt-64 pb-2 ">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Violet</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        890
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">крем для лица</p>
                    <p className="opacity-60"> 50g</p>
                  </div>
                </li>

                <li className=" items items8  px-5 pt-64 pb-2">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Clean</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        490
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">маска для лица</p>
                    <p className="opacity-60"> 100g</p>
                  </div>
                </li>

                <li className=" items items9  px-5 pt-64 pb-2">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Coconut</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        990
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">масло для тела</p>
                    <p className="opacity-60"> 300ml</p>
                  </div>
                </li>

                <li className=" items items10  px-5 pt-64 pb-2">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">
                      Lavender
                    </h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        290
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">мыло ручной работы</p>
                    <p className="opacity-60"> 50g</p>
                  </div>
                </li>

                <li className=" items items11  px-5 pt-64 pb-2">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Lotos</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        890
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">маска для лица</p>
                    <p className="opacity-60">50ml</p>
                  </div>
                </li>

                <li className=" items items12  px-5 pt-64 pb-2">
                  <div className=" flex justify-between items-center mb-3">
                    <h6 className="font-medium text-2xl  font-sans">Earth</h6>
                    <div className="flex">
                      <span className="font-medium text-1xl mr-1 font-sans">
                        90
                      </span>
                      <img src={sum} alt="rasm" />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="opacity-60">бомбочка для ванны</p>
                    <p className="opacity-60">20g</p>
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
