import Style from "~/styles/scss/navbar.module.scss";
import type { AppProps } from "next/app";
import { useEffect, useReducer, useState } from "react";
import redux_1 from "~/store_context/reducers/redux_1";

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
  angka_bolean: boolean = false;
  constructor() {}
  set funleng(data: number) {
    this.length = data;
  }
  get fun_leng_2() {
    return this.length;
  }
  public methods(event: any, data?: boolean) {
    // let [menu_bol, set_menu_bol] = useState(false);
    if (data) {
      document
        .getElementsByClassName(Style.absolute)[0]
        .classList.add(Style.active);
    } else {
      document
        .getElementsByClassName(Style.absolute)[0]
        .classList.remove(Style.active);
    }

    console.log(data);
  }
  public menu_array() {
    return this.array.map((d: any, i: number) => {
      return <div className="text-capitalize ">{d.name}</div>;
    });
  }
}
const menu = new Menu();
const Com_navbar = ({ children }: any) => {
  let [count, se_count] = useState(menu.angka);

  console.log(menu.array, "check_data");
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
            <div className={`${Style["menudropdown"]}`}>
              <div
                className={`${Style["relative"]}`}
                onClick={(event) => {
                  // se_count((count += 1));
                  menu.methods(event, (menu.angka_bolean = !menu.angka_bolean));
                }}
              >
                menu
              </div>
              <div className={`${Style["absolute"]}`}>
                <div>{menu.menu_array()}</div>
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
                </div>
              </div>
            </div>
            <div className="row ms-2 col-2 g-0">
              <div className="col-2">
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control form-control-sm ${Style.inputCostume}`}
                    id="exampleFormControlInput1"
                    placeholder="Cari"
                  />
                </div>
              </div>
              <div className="col-6">
                <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Com_navbar;
