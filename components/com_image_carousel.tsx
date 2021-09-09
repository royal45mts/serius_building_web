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
  public slider() {
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
        slides = items.getElementsByClassName("slide"),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName("slide")[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

      // Clone first and last slide
      items.appendChild(cloneFirst);
      items.insertBefore(cloneLast, firstSlide);
      wrapper.classList.add("loaded");

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
        e = e || window.event;
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
        e = e || window.event;

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

      function shiftSlide(dir?: any, action?: any) {
        items.classList.add("shifting");

        if (allowShift) {
          if (!action) {
            posInitial = items.offsetLeft;
          }

          if (dir == 1) {
            items.style.left = posInitial - slideSize + "px";
            index++;
          } else if (dir == -1) {
            items.style.left = posInitial + slideSize + "px";
            index--;
          }
        }

        allowShift = false;
      }

      function checkIndex() {
        items.classList.remove("shifting");

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
}

const menu = new Menu();
const Com_navbar = ({ children }: any) => {
  let [count, se_count] = useState(menu.angka);
  const slider = new Menu();
  useEffect(() => {
    slider.slider();
  });
  return (
    <div>
      <div id="carousel_global">
        <div id="slider" className="slider">
          <div className="wrapper">
            <div id="slides" className="slides">
              <span className="slide">Slide 1</span>
              <span className="slide">Slide 2</span>
              <span className="slide">Slide 3</span>
              <span className="slide">Slide 4</span>
              <span className="slide">Slide 5</span>
            </div>
          </div>
          <a id="prev" className="control prev"></a>
          <a id="next" className="control next"></a>
        </div>
      </div>
    </div>
  );
};
export default Com_navbar;
