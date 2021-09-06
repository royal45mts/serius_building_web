import Style from "~/styles/scss/navbar.module.scss";
import type { AppProps } from "next/app";
import { useAuth } from "~/store_context";
import { useEffect, useReducer, useState } from "react";
import { Test } from "~/pages";
import redux_1 from "~/store_context/reducers/redux_1";
const Com_navbar = ({ children }: any) => {
  const { state, dispatch } = new Test().dispart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SERIUS STORE <i className="fas fa-award" />
          </a>
          {JSON.stringify(state)}
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "tr" })}
          >
            send
          </button>{" "}
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
              <div className={`${Style["relative"]}`}>menu</div>
              <div className={`${Style["absolute"]}`}>menu</div>
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
