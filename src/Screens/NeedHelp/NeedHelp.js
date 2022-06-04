import React from "react";
import Css from "./NeedHelp.module.css";
import { Container, Row, Col } from "react-bootstrap";
import LandingNavbar from "../../Components/Navbar/LandingNavbar";
import Contact from "../../Components/Contact/Contact";
import Telephone from "../../images/telephone.png";

const NeedHelp = () => {
  return (
    <>
      <div className={Css.needHelpMainContainer}>
        <LandingNavbar />
        <Container>
          <div className={Css.needHelpInnerContainer}>
            <Row>
              <Col md={6} className={Css.needHelpText}>
                <div>
                  <h1 className={Css.needHelpHeading}>Need Help?</h1>
                  <p className={`p-24`}>
                    At NobodyLikesTickets.com our customers are #1! If you have
                    a question or a concern we are standing by ready to help!
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className={Css.needHelpImage}>
                  <img src={Telephone} alt="Telephone Vector" />
                </div>
              </Col>
            </Row>
          </div>
          <div className={Css.customerSupport}>
            <Contact />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NeedHelp;
