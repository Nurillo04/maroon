import React from "react";
import "./Contact.scss";

import { facebook } from "../../assets";
import { instagram } from "../../assets";
import { twitter } from "../../assets";
import { map } from "../../assets";

const Contact = () => {
  return (
    <div>
      <section className="mt-28">
        <div className="container">
          <div className="wrapper flex justify-center">
            <div className="wrapper__left p-24">
              <h6 className="mb-8 text-3xl">Контакты</h6>
              <p className="mb-3">Адрес</p>
              <p className="mb-6">
                Санкт-Петербург, ул. Большая Конюшенная, 19
              </p>
              <p className="mb-3">Телефон</p>
              <p className="mb-6">+7 (923) 888-90-60</p>
              <p className="mb-3">E-mail</p>
              <p className="mb-3">info@maroon.ru</p>
              <div className="flex gap-5">
                <img src={facebook} alt="rasm" />
                <img src={instagram} alt="rasm" />
                <img src={twitter} alt="rasm" />
              </div>
            </div>
            <div className="wrapper__right pt-12">
              <img src={map} alt="rasm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
