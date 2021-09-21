import Style from "~/styles/scss/corousel.module.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import redux_1 from "~/store_context/reducers/redux_1";
import Img from "~/img/black.png";
import { Swiper, SwiperSlide } from "swiper/react";
import PouchDb from "pouchdb-browser";
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
  save_scroll: number = 0;
  menu_bolean: boolean = false;
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
  public slider2() {
    let slider = document.getElementById("slider"),
      sliderItems = document.getElementById("slides"),
      prev = document.getElementById("prev"),
      next = document.getElementById("next");

    function slide(wrapper: any, items: any, prev: any, next: any) {
      let posX1 = 0,
        posX2 = 0,
        posInitial: any,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName(Style.slide),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName(Style.slide)[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

      // Clone first and last slide
      items.appendChild(cloneFirst);
      items.insertBefore(cloneLast, firstSlide);
      wrapper.classList.add(Style.loaded);

      // Mouse events
      items.onmousedown = dragStart;

      // Touch events
      items.addEventListener("touchstart", dragStart);
      items.addEventListener("touchend", dragEnd);
      items.addEventListener("touchmove", dragAction);

      // Click events
      prev.addEventListener("click", function () {
        shiftSlide(-1);
      });
      next.addEventListener("click", function () {
        shiftSlide(1);
      });

      // Transition events
      items.addEventListener("transitionend", checkIndex);

      function dragStart(e: any) {
        e.preventDefault();
        posInitial = items.offsetLeft;
        console.log(posInitial, "check_data");

        if (e.type == "touchstart") {
          posX1 = e.touches[0].clientX;
        } else {
          posX1 = e.clientX;
          document.onmouseup = dragEnd;
          document.onmousemove = dragAction;
        }
      }

      function dragAction(e: any) {
        if (e.type == "touchmove") {
          posX2 = posX1 - e.touches[0].clientX;
          posX1 = e.touches[0].clientX;
        } else {
          posX2 = posX1 - e.clientX;
          posX1 = e.clientX;
        }

        items.style.left = items.offsetLeft - posX2 + "px";
      }

      function dragEnd(e: any) {
        e.preventDefault();
        posFinal = items.offsetLeft;

        if (posFinal - posInitial < -threshold) {
          shiftSlide(1, "drag");
        } else if (posFinal - posInitial > threshold) {
          shiftSlide(-1, "drag");
        } else {
          items.style.left = posInitial + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
      }

      function shiftSlide(dir: any, action?: any) {
        items.classList.add(Style.shifting);

        if (allowShift) {
          if (!action) {
            posInitial = items.offsetLeft;
          }

          if (dir === 1) {
            items.style.left = posInitial - slideSize + "px";
            index++;
          } else if (dir === -1) {
            items.style.left = posInitial + slideSize + "px";
            index--;
          }
        }

        allowShift = false;
      }

      function checkIndex() {
        items.classList.remove(Style.shifting);
        if (index == -1) {
          items.style.left = -(slidesLength * slideSize) + "px";
          index = slidesLength - 1;
        }

        if (index == slidesLength) {
          items.style.left = -(1 * slideSize) + "px";
          index = 0;
        }

        allowShift = true;
      }
    }

    slide(slider, sliderItems, prev, next);
  }
  array_num = [3, 2, 3, 4, 5, 993, 23, 2];

  public check_fung() {
    let get_bg_slider = document.getElementById(`slider`);
    let get_bg = document.getElementById("slides");
    let check_image = document.getElementsByClassName(Style.slide);
    let mousedown = 0;
    let press = false;
    let array_data_image: any = [];
    let angka = -5;
    let position_mouse = 0;
    let position_mouse2 = 0;
    let index = 0;
    let position_string = "";
    for (let i = 0; i < check_image.length; i++) {
      angka += check_image[i].clientWidth + 5;
      array_data_image.push(-angka);
    }
    get_bg_slider!.addEventListener("mousedown", (e) => {
      press = true;
      mousedown = e.offsetX - get_bg!.offsetLeft;
    });
    window.addEventListener("mouseup", (e) => {
      press = false;
      console.log(position_mouse2, array_data_image);
    });
    get_bg_slider!.addEventListener("mousemove", (e) => {
      if (!press) return;
      e.preventDefault();
      let x = e.offsetX;
      position_mouse2 = x - mousedown;
      get_bg!.style.left = `${position_mouse2}px`;
      if (x - mousedown > position_mouse) {
        // right
        position_string = "right";
      } else {
        //left
        position_string = "left";
      }
      // console.log(x - mousedown, ">", position_mouse);

      position_mouse = x - mousedown;
    });
    /* get_bg!.addEventListener("mouseup", (e: any) => {
      get_bg!.removeEventListener("mousemove", check);
    });
    get_bg!.addEventListener("mouseleave", (e: any) => {
      get_bg!.removeEventListener("mousemove", check);
    });*/
  }
  public bubblesort() {
    let array = this.array_num;
    let filter = (arr: any, idx1: number, idx2: number) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          filter(array, j, j + 1);
        }
      }
    }

    console.log(array);
  }

  public selectionSort() {
    let array = this.array_num;

    let filter = (arr: any, idx1: number, idx2: number) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = 0; i < array.length; i++) {
      let lowers = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[lowers] > array[j]) {
          lowers = j;
        }
      }
      if (i !== lowers) filter(array, i, lowers);
    }

    console.log(array);
  }
  public insersSort() {
    let array = this.array_num;

    let filter = (arr: any, idx1: number, idx2: number) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = 1; i < array.length; i++) {
      let lowers = array[i];
      let j;
      for (j = i - 1; j >= 0 && array[j] > lowers; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = lowers;
    }

    console.log(array);
  }
  public array_tree() {
    let array: any = [
      {
        parent: "0",
        id: "1",
        items_child: [],
      },
      {
        parent: "1",
        id: "1.1",
        items_child: [],
      },
      {
        parent: "1",
        id: "1.2",
        items_child: [],
      },
      {
        parent: "1.1",
        id: "1.1.1",
        items_child: [],
      },
      {
        parent: "1.1",
        id: "1.1.2",
        items_child: [],
      },
      {
        parent: "1.2",
        id: "1.2.1",
        items_child: [],
      },
      {
        parent: "0",
        id: "2",
        items_child: [],
      },
      {
        parent: "2",
        id: "2.1",
        items_child: [],
      },
      {
        parent: "2",
        id: "2.2",
        items_child: [],
      },
      {
        parent: "2.1",
        id: "2.1.1",
        items_child: [],
      },
      {
        parent: "2.1",
        id: "2.1.2",
        items_child: [],
      },
    ];
    let object = [],
      array_object: any = [];

    for (let i = 0; i < array.length; i++) {
      object[i] = array[i].id;
      array[i].items_child = [];
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].parent !== "0") {
        array[object.indexOf(array[i].parent)].items_child.push(array[i]);
      } else {
        array_object.push(array[i]);
      }
    }
    console.log(array_object);
  }
}
let array: any = [];
for (let i = 0; i < 10; i++) {
  array.push(i);
}
const menu = new Menu();
const Com_navbar = ({ children, externalPostData }: any) => {
  useEffect(() => {
    // menu.check_fung();
    // menu.array_tree();
    /* router.push("/api").then((r) => {
      console.log(r);
    });*/
  }, []);
  return (
    <div>
      {/*
      <div id="slider" className={Style.slider}>
        <div className={`${Style.wrapper}`}>
          <div id="slides" className={`${Style.slides} text-center`}>
            {array.map((d: any, i: any) => {
              return (
                <span className={Style.slide} key={i}>
                  test {i}
                </span>
              );
            })}
          </div>
        </div>
        <a id="prev" className={`${Style.control} ${Style.prev}`} />
        <a id="next" className={`${Style.control} ${Style.next}`} />
      </div>
*/}

      {/*
      <div id="slider" className={`${Style.scroll_check}`}>
        <div id="slides" className={`${Style.background}`}>
          {array.map((d: any, i: number) => {
            return (
              <div className={Style.slide} key={i}>
                test
              </div>
            );
          })}
          <a id="prev" className="control prev"></a>
          <a id="next" className="control next"></a>
        </div>
      </div>
*/}
    </div>
  );
};
export default Com_navbar;
