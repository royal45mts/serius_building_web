import Style from "~/styles/scss/corousel.module.scss";
import type { AppProps } from "next/app";
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
  /*
  public slider() {var slider = document.getElementById('slider'),
      sliderItems = document.getElementById('slides'),
      prev = document.getElementById('prev'),
      next = document.getElementById('next');

    function slide(wrapper, items, prev, next) {
      var posX1 = 0,
          posX2 = 0,
          posInitial,
          posFinal,
          threshold = 100,
          slides = items.getElementsByClassName('slide'),
          slidesLength = slides.length,
          slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
          firstSlide = slides[0],
          lastSlide = slides[slidesLength - 1],
          cloneFirst = firstSlide.cloneNode(true),
          cloneLast = lastSlide.cloneNode(true),
          index = 0,
          allowShift = true;

      // Clone first and last slide
      items.appendChild(cloneFirst);
      items.insertBefore(cloneLast, firstSlide);
      wrapper.classList.add('loaded');

      // Mouse events
      items.onmousedown = dragStart;

      // Touch events
      items.addEventListener('touchstart', dragStart);
      items.addEventListener('touchend', dragEnd);
      items.addEventListener('touchmove', dragAction);

      // Click events
      prev.addEventListener('click', function () { shiftSlide(-1) });
      next.addEventListener('click', function () { shiftSlide(1) });

      // Transition events
      items.addEventListener('transitionend', checkIndex);

      function dragStart (e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
          posX1 = e.touches[0].clientX;
        } else {
          posX1 = e.clientX;
          document.onmouseup = dragEnd;
          document.onmousemove = dragAction;
        }
      }

      function dragAction (e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
          posX2 = posX1 - e.touches[0].clientX;
          posX1 = e.touches[0].clientX;
        } else {
          posX2 = posX1 - e.clientX;
          posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
      }

      function dragEnd (e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
          shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
          shiftSlide(-1, 'drag');
        } else {
          items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
      }

      function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
          if (!action) { posInitial = items.offsetLeft; }

          if (dir == 1) {
            items.style.left = (posInitial - slideSize) + "px";
            index++;
          } else if (dir == -1) {
            items.style.left = (posInitial + slideSize) + "px";
            index--;
          }
        };

        allowShift = false;
      }

      function checkIndex (){
        items.classList.remove('shifting');

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

    slide(slider, sliderItems, prev, next);}
*/

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
        threshold = 10,
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
      /*items.appendChild(cloneFirst);
      items.insertBefore(cloneLast, firstSlide);
      wrapper.classList.add(Style.loaded);*/

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
        posFinal = items.offsetLeft;
        console.log(posFinal);

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

  public check_fung() {
    let get_bg = document.getElementById("slides");
    let get_scroll: any = get_bg!.getElementsByClassName(Style.slider)[0];
    const check = (event: any) => {
      event.preventDefault();
      // get_scroll.style;
      get_bg!.style.transform = `translateX(${
        event.clientX - event.clientX + get_bg!.offsetLeft
      }px)`;
      console.log(event.clientX);
    };

    get_bg!.addEventListener("mousedown", (e: any) => {
      get_bg!.addEventListener("mousemove", check);
    });
    get_bg!.addEventListener("mouseup", (e: any) => {
      get_bg!.removeEventListener("mousemove", check);
    });
    get_bg!.addEventListener("mouseout", (e: any) => {
      get_bg!.removeEventListener("mousemove", check);
    });
  }
}
let array: any = [];
for (let i = 0; i < 10; i++) {
  array.push(i);
}
const menu = new Menu();

const Com_navbar = ({ children }: any) => {
  useEffect(() => {
    menu.slider2();
  }, []);
  return (
    <div>
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

      {/*
      <div id="slider" className={`${Style.scroll_check} slider`}>
        <div className="wrapper">
          <div id="slides" className={`${Style.background} slides`}>
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
      </div>
*/}
    </div>
  );
};
export default Com_navbar;
