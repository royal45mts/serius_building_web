import Style from "~/styles/scss/corousel.module.scss";
import type { AppProps } from "next/app";
import { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import redux_1 from "~/store_context/reducers/redux_1";
import Img from "~/img/black.png";
class Menu {
  length: number = 0;
  angka: number = 2;
  array: any = [
    {
      name: "kategori",
    },
    {
      name: "produk",
    },
  ];
  menu_bolean: boolean = false;
  profile_bolean: boolean = false;
  constructor() {}

  set funleng(data: number) {
    this.length = data;
  }

  get fun_leng_2() {
    return this.length;
  }
  public image() {
    return this.array.map((d: any, i: number) => {
      return (
        <div className={`col-12 d-grid`} key={i.toString()}>
          <button
            className={`text-capitalize btn
             btn-sm
             text-start
             btn-primary my-1 ${Style["pointer-focus"]}`}
          >
            {d.name}
          </button>
        </div>
      );
    });
  }
  public slider() {}
}

const menu = new Menu();
const Com_navbar = ({ children }: any) => {
  let [count, se_count] = useState(menu.angka);
  return (
    <div>
      <div className={`slider`}>
        <div className={`${Style.wrapper}`}>
          <div className={`${Style.slides}`}>
            <span className={`slide`}>1</span>
            <span className={`slide`}>2</span>
            <span className={`slide`}>3</span>
            <span className={`slide`}>4</span>
            <span className={`slide`}>5</span>
          </div>
        </div>
        <div className={`${Style.control} ${Style.prev}`}>prev</div>
        <div className={`${Style.control} ${Style.next}`}>next</div>
      </div>
    </div>
  );
};
export default Com_navbar;
