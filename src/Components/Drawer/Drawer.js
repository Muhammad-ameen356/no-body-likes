import React from "react";
import Css from "./Drawer.module.css";
import Logo from "../../images/logo.png";
import { GrBook } from "react-icons/gr";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";

const Drawer = () => {
  return (
    <>
      <section>
        <div className={Css.mainContainer}>
          <div className={Css.logoContainer}>
            <img src={Logo} width={100} />
          </div>
          <div className={Css.menuContainer}>
            <ul>
              <li>
                <span className={Css.menuIcon}>
                  <GrBook />
                </span>
                <span className={Css.menuText}>Course</span>
              </li>
              <li>
                <span className={Css.menuIcon}>
                  <AiOutlineSetting />
                </span>
                <span className={Css.menuText}>Setting</span>
              </li>
              <li>
                <span className={Css.menuIcon}>
                  <BiLogOutCircle />
                </span>
                <span className={Css.menuText}>Layout</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drawer;
