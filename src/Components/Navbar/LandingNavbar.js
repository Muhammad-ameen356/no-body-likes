import React, { useState } from "react";
import Css from "./LandingNavbar.module.css";
import Logo from "../../images/logo.png";
import "../../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ModalComponent from "../InputModal/InputModal";

const LandingNavbar = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => history.push("/subscription")}>
                Start Course
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/faqs")}>FAQ's</Nav.Link>
              <Nav.Link onClick={() => history.push("/contact")}>
                Contact
              </Nav.Link>
              <button
                onClick={() => setModalShow(true)}
                className={`button120 ${Css.loginButton}`}
              >
                Login
              </button>
              <button
                onClick={() => history.push("/createaccount")}
                className={`button160 ${Css.signupButton}`}
              >
                Create Account
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </>
    // <div>
    //   <div className={Css.mainContainer}>
    //     <div>
    //       <img src={Logo} alt="" />
    //     </div>
    //     <div className={Css.navbarMenu}>
    //       <ul>
    //         <li>Home</li>
    //         <li>Start Course</li>
    //         <li>FAQ's</li>
    //         <li>Contact</li>
    //         <li>
    //           <button className={`button120 ${Css.loginButton}`}>Login</button>
    //         </li>
    //         <li>
    //           <button className={`button160 ${Css.signupButton}`}>
    //             Create Account
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingNavbar;
