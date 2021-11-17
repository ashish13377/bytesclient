import { useEffect, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useScrollPosition from "use-scroll-position";
//import "../css/skin/skin-1.css";
//import "../css/skin/skin-3.css";
import "../css/style.css";
import "../css/skin/skin-2.css";
import "../styles/globals.css";
import "../styles/switcher.css";

function MyApp({ Component, pageProps }) {
  const [toggle1, setToggle1] = useState(false);
  const [body_, setbody_] = useState();
  const [layout, setLayout] = useState("wide");
  const [header, setHeader] = useState("fixed");
  const [header_, setHeader_] = useState();
  const [sliderValu, setSliderValu] = useState(20);

  useEffect(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);

  let scrollPosition = useScrollPosition();
  function toggle() {
    setToggle1(!toggle1);
  }

 
  

  const backGroundImage = (value) => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = (value) => {
    setHeader(value);
    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = (value) => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10
    ? header_ && header_[0].classList.add("is-fixed")
    : header_ && header_[0].classList.remove("is-fixed");

  return (
    <>
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>
      {/* <div
        id="dzSwitcher-right"
        class={`styleswitcher ${toggle1 ? "open" : "closed"}`}
      >
        <div className="switcher-btn-bx">
          <a
            href="javascript:void(0);"
            class={`switch-btn ${toggle1 ? "open" : "closed"}`}
            onClick={toggle}
          >
            {" "}
            <span className="fa fa-cogs fa-lg"></span>
          </a>
        </div>
        <div className="styleswitcher-inner">
          <a
            href="javascript:void(0);"
            className="dez-page btn btn-primary btn-sm"
            onclick="deleteAllCookie();"
          >
            Delete All Cookie
          </a>

          <div className="theme-box">
            <h5 className="switcher-title">
              <span>Theme</span>
            </h5>
            <h6 className="switcher-title">Standard</h6>
            <ul val="themeFullColor" className="color-skins-db theme-panel-save">
              <li onClick={() => body_.setAttribute("color", "color_1")}>
                <a
                  className="theme-skin skin-1"
                  dir="css/skin/skin-1"
                  logo="images/logo.png"
                ></a>
              </li>
              <li onClick={() => body_.setAttribute("color", "color_2")}>
                <a
                  className="theme-skin skin-2"
                  href="#"
                  dir="css/skin/skin-2"
                  logo="images/logo-2.png"
                ></a>
              </li>
              <li onClick={() => body_.setAttribute("color", "color_3")}>
                <a
                  className="theme-skin skin-3"
                  href="#"
                  dir="css/skin/skin-3"
                  logo="images/logo-3.png"
                ></a>
              </li>
            </ul>

            
          </div>
          <div className="theme-box">
            <h5 className="switcher-title">
              <span>Layout</span>
            </h5>
            <ul val="layout" className="layout-view theme-panel-save">
              <li class={`wide-layout ${layout === "wide" ? "active" : ""}`}>
                <a
                  href="#"
                  dir="wide-layout"
                  onClick={() => layoutChange("wide")}
                >
                  Wide
                </a>
              </li>
              <li class={`boxed ${layout === "boxed" ? "active" : ""}`}>
                <a href="#" dir="boxed" onClick={() => layoutChange("boxed")}>
                  Boxed
                </a>
              </li>
              <li class={`frame ${layout === "frame" ? "active" : ""}`}>
                <a href="#" dir="frame" onClick={() => layoutChange("frame")}>
                  Frame
                </a>
              </li>
            </ul>

            <div
              id="ThemeRangeSlider"
              className="price-slide-2 range-slider"
              style={{ display: layout === "frame" ? "block" : "none" }}
            >
              <div className="price">
                <b>{sliderValu}px</b>
                <Slider
                  min={20}
                  max={80}
                  tooltip={false}
                  value={sliderValu}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="theme-box">
            <h5 className="switcher-title">
              <span>Header</span>
            </h5>
            <ul val="header" className="header-view theme-panel-save">
              <li
                class={`header-fixed ${header === "fixed" ? "active" : ""}`}
                onClick={() => chageHeader("fixed")}
              >
                <a href="#" dir="sticky-header">
                  Fixed
                </a>
              </li>
              <li
                class={`header-static ${header === "static" ? "active" : ""}`}
                onClick={() => chageHeader("static")}
              >
                <a href="#" dir="sticky-no">
                  Static
                </a>
              </li>
            </ul>
          </div>
          <div className="theme-box">
            <h5 className="switcher-title">
              <span>Background</span>
            </h5>
            <h6 className="switcher-title">Color</h6>
            <ul val="bgColor" className="bg-color-switcher theme-panel-save">
              <li>
                <a
                  className="bg-color-1"
                  href="#"
                  dir="#896eff"
                  onClick={() => backGroundChage("color_1")}
                ></a>
              </li>
              <li>
                <a
                  className="bg-color-2"
                  href="#"
                  dir="#f55f8d"
                  onClick={() => backGroundChage("color_2")}
                ></a>
              </li>
              <li>
                <a
                  className="bg-color-3"
                  href="#"
                  dir="#ef146e"
                  onClick={() => backGroundChage("color_3")}
                ></a>
              </li>
            </ul>
            <h6 className="switcher-title">Image</h6>
            <ul val="bgImage" className="background-switcher theme-panel-save">
              <li>
                <img
                  src="images/switcher/switcher-bg/bg1.jpg"
                  dir="images/background/bg1.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/background/bg1.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-bg/bg2.jpg"
                  dir="images/background/bg2.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/background/bg2.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-bg/bg3.jpg"
                  dir="images/background/bg3.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/background/bg3.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-bg/bg4.jpg"
                  dir="images/background/bg4.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/background/bg4.jpg")}
                />
              </li>
            </ul>
            <h6 className="switcher-title">Pattern</h6>
            <ul val="bgPatten" className="pattern-switcher theme-panel-save">
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg1.jpg"
                  dir="images/pattern/pt1.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt1.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg2.jpg"
                  dir="images/pattern/pt2.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt2.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg3.jpg"
                  dir="images/pattern/pt3.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt3.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg4.jpg"
                  dir="images/pattern/pt4.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt4.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg5.jpg"
                  dir="images/pattern/pt5.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt5.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg6.jpg"
                  dir="images/pattern/pt6.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt6.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg7.jpg"
                  dir="images/pattern/pt7.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt7.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg8.jpg"
                  dir="images/pattern/pt8.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt8.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg9.jpg"
                  dir="images/pattern/pt9.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt9.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg10.jpg"
                  dir="images/pattern/pt10.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt10.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg11.jpg"
                  dir="images/pattern/pt11.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt11.jpg")}
                />
              </li>
              <li>
                <img
                  src="images/switcher/switcher-patterns/bg12.jpg"
                  dir="images/pattern/pt12.jpg"
                  alt=""
                  onClick={() => backGroundImage("/images/pattern/pt12.jpg")}
                />
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <a
        href="https://1.envato.market/VLMVO"
        target="_blank"
        className="bt-buy-now theme-btn"
      >
        <i className="ti-shopping-cart" />
        <span>Buy Now</span>
      </a>
      <a
        href="https://w3itexperts.ticksy.com"
        target="_blank"
        className="bt-support-now theme-btn"
      >
        <i className="ti-headphone-alt" />
        <span>Support</span>
      </a>
      <a href="#top">
        <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </>
  );
}

export default MyApp;
