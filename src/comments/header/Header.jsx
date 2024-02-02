import React from "react";

import { logo } from "../../assets";
import { odam } from "../../assets";
import { korzinka } from "../../assets";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="wrapper flex justify-between items-center gap-3px">
            <div className="wrapper__left bg-inherit">
              <img src={logo} alt="rasm" />
            </div>
            <div className="wrapper__right">
              <nav className="flex justify-between items-center gap-x-14  ">
                <ul className="flex justify-between items-center gap-6">
                  <li className="text-base">Каталог</li>
                  <li className="text-base">О нас</li>
                  <li className="text-base">Контакты</li>
                </ul>
                <ul>
                  <li>
                    <img className="inline" src={odam} alt="rasm" />
                    <img className="inline ml-10" src={korzinka} alt="rasm" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
