import Style from "~/styles/scss/navbar.module.scss";
import type { AppProps } from "next/app";
import { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import redux_1 from "~/store_context/reducers/redux_1";
import Img from "~/img/black.png";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
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

  public methods(event: any, data?: boolean) {
    // let [menu_bol, set_menu_bol] = useState(false);
    const profile = document
      .getElementsByClassName(Style.menudropdown)[0]
      .getElementsByClassName(Style.absolute)[0];

    if (data) {
      profile.classList.add(Style.active);
    } else {
      profile.classList.remove(Style.active);
    }
  }
  public profile(event: any, data?: boolean) {
    // let [menu_bol, set_menu_bol] = useState(false);
    const profile = document
      .getElementsByClassName(Style.menudropdown_profile)[0]
      .getElementsByClassName(Style.absolute)[0];

    if (data) {
      profile.classList.add(Style.active);
    } else {
      profile.classList.remove(Style.active);
    }
  }

  public menu_array() {
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
}

const menu = new Menu();
const Com_navbar = ({ children }: any) => {
  let [count, se_count] = useState(menu.angka);
  return (
    <div className={``}>
      <div className={`row m-10`}>
        <div
          style={{
            width: "60px",
          }}
        >
          <button className={`btn btn-light btn-sm m-0 btn-circle-40`}>
            <Icon path={mdiMenu} size="25px" />
          </button>
        </div>
        <div className={`col-3`}>
          <h4 className={`m-0`}>SERIUS</h4>
        </div>
      </div>
    </div>
  );
};
export default Com_navbar;
