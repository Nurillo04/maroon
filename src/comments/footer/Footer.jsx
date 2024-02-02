import React from "react";
import "./Footer.scss";

import { logo } from "../../assets";
import { facebook } from "../../assets";
import { instagram } from "../../assets";
import { twitter } from "../../assets";
import { footerC } from "../../assets";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-5 mt-28">
        <div className="container">
          <div className="wrapper">
            <div className="footer__top">
              <div className="wrapper flex justify-between items-center gap-3px">
                <div className="wrapper__left bg-inherit flex justify-between items-center gap-10">
                  <img src={logo} alt="rasm" />
                  <nav>
                    <ul className="flex justify-between items-center gap-6">
                      <li className="text-base">Каталог</li>
                      <li className="text-base">О нас</li>
                      <li className="text-base">Магазины</li>
                      <li className="text-base">Контакты</li>
                    </ul>
                  </nav>
                </div>
                <div className="wrapper__bottom">
                  <nav className="flex justify-start items-center gap-x-14  ">
                    <ul>
                      <li>
                        <div className="flex gap-5 mr-10">
                          <img src={facebook} alt="rasm" />
                          <img src={instagram} alt="rasm" />
                          <img src={twitter} alt="rasm" />
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="footer__bottom  ">
              <hr className="decoration-white mt-14" />
              <div className="flex justify-between items-center">
                <div className="flex gap-5 mt-5 ">
                  <p>Maroon</p>
                  <img className="w-5" src={footerC} alt="rasm" />
                  <p>2020 Все права защищены</p>
                </div>
                <div>
                  <p className="mt-5">Политика конфиденциальности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
