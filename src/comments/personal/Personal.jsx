import React from "react";
import { personalImg } from "../../assets";

const Personal = () => {
  return (
    <div>
      <section className="mt-48">
        <div className="container">
          <div className="wrapper flex">
            <div className="wrapper__left pl-14 w-1/2">
              <h5 className="font-medium text-3xl  font-sans">
                Индивидуальный уход
              </h5>
              <p className="font-medium font-sans w-80 mt-8 mb-8">
                Не всегда очевидно, какие элементы и минералы необходимы коже, а
                многочисленные эксперименты с разными средствами только ухудшают
                ее качество. <br /> <br />
                Заполните анкету, и мы подберем уход, подходящий именно вам,
                учитывая ваш образ жизни, место жительства и другие факторы.{" "}
              </p>
              <button className="border text-center py-5 px-8 ml-8">
                Заполнить анкету
              </button>
            </div>
            <div className="wrapper__right">
              <img src={personalImg} alt="rasm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personal;
