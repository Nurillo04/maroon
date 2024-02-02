import React from "react";
import { bir } from "../../assets";
import { ikki } from "../../assets";
import { uch } from "../../assets";
import { tort } from "../../assets";
import { besh } from "../../assets";
import { olti } from "../../assets";

const Advertising = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="wrapper flex justify-center ">
            <div className="wrapper__left flex flex-wrap w-2/3">
              <img src={bir} alt="rasm" />
              <img src={ikki} alt="rasm" />
              <img src={uch} alt="rasm" />
              <img src={tort} alt="rasm" />
              <img src={besh} alt="rasm" />
              <img src={olti} alt="rasm" />
            </div>
            <div className="wrapper__right pt-28">
              <h5 className="font-medium text-3xl  font-sans">
                Присоединяйтесь к нам
              </h5>
              <p className="font-medium font-sans w-80 mt-8 mb-8">
                Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
                акциях первыми
              </p>
              <button className="border text-center py-5 px-8 ml-8">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertising;
