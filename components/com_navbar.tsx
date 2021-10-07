import Style from "~/styles/scss/navbar.module.scss";
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

  console.log(menu.array, "check_data");
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${Style["bg-primary-gradien"]}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SERIUS STORE <i className="fas fa-award" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={`${Style["menudropdown"]} col-1`}>
              <div
                className={`${Style["relative"]}`}
                onClick={(event) => {
                  // se_count((count += 1));
                  menu.methods(event, (menu.menu_bolean = !menu.menu_bolean));
                }}
              >
                menu
              </div>
              <div className={`${Style["absolute"]}`}>
                <div className={`d-flex`}>
                  <div className={`col-2`}>{menu.menu_array()}</div>
                </div>
              </div>
            </div>
            <div className="row col-9 g-0">
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control form-control-sm ${Style.inputCostume}`}
                    id="exampleFormControlInput1"
                    placeholder="Cari"
                  />
                  {/* <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with checkbox"
                  />*/}
                </div>
              </div>
            </div>
            <div className={`${Style["menudropdown_profile"]} col-2`}>
              <div
                className={`${Style["relative"]} g-0`}
                onClick={(event) => {
                  menu.profile(
                    event,
                    (menu.profile_bolean = !menu.profile_bolean)
                  );
                }}
              >
                <div className="col-3">
                  <div className="input-group">
                    <div>
                      <img
                        src="/img/AJUAN%20TAMPILAN%201.jpg"
                        style={{
                          borderRadius: "100%",
                          height: "30px",
                          width: "30px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={`col-6 text-white ${Style["text-overflow"]}`}>
                  <div>Aldi iskandar</div>
                </div>
              </div>
              <div className={`${Style["absolute"]}`}>
                <div className={`d-flex`}>
                  <div className={`col-2`}>{menu.menu_array()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Com_navbar;
