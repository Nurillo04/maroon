import React from "react";

const Spring = () => {
  return (
    <div>
      <section className="pt-20 pb-14 mt-16 bg-auto  bg-[url('../../../public/banner.png')] ">
        <div className="container">
          <div className="wrapper  flex">
            <div className="wrapper-left w-2/4"></div>
            <div className="wrapper-right w-56 pl-28">
              <h3 className=" w-56 text-4xl   font-sans ">
                Встречайте весну вместе с нами
              </h3>
              <p className="w-72 mt-5 mb-5   font-sans">
                Попробуйте новую коллекцию ухаживающих средств для лица с SPF
                защитой
              </p>
              <button className="py-4 px-8 border  font-sans">Подробнее</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spring;
