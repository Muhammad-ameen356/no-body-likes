import React from "react";
import Css from "./Navbar.module.css";
import { RiSearchLine } from "react-icons/ri";
import Avatar from "../../images/avatar.png";

const Navbar = () => {
  return (
    <>
      <section>
        <div className={Css.mainContainer}>
          <div className={Css.search}>
            <RiSearchLine className={Css.icon} />
            <input  placeholder="Search Here"  type="text" />
          </div>
          <div className={Css.profile}>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
