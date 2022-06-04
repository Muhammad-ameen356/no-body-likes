import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LandingNavbar from "../../Components/Navbar/LandingNavbar";
import Css from "./FAQ.module.css";
import FAQImage from "../../images/faq.png";
import { accordionData } from "../../Data/Data";
import Join from "../../Components/Join/Join";

const FAQ = () => {
  return (
    <div className={Css.needHelpMainContainer}>
      <LandingNavbar />
      <Container>
        <div className={Css.needHelpInnerContainer}>
          <Row>
            <Col md={6} className={Css.needHelpText}>
              <div>
                <h1 className={Css.needHelpHeading}>FAQ's</h1>
                <p className={`p-24`}>
                  Join Thousands Of Happy Students Today!
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className={Css.needHelpImage}>
                <img src={FAQImage} alt="Telephone Vector" />
              </div>
            </Col>
          </Row>
          <div className={Css.faqsMainContainer}>
            {accordionData.map((item, index) => {
              return (
                <div key={index} className={Css.faqsContent}>
                  <h5>{item.question}</h5>
                  <p>{item.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Join />
      <p
        style={{
          textAlign: "center",
          marginTop: 30,
          fontFamily: "Lato-600",
          paddingBottom: 30,
        }}
      >
        Copyright © 2022 NobodyLikesTickets.com | DMVLicense #E9636
      </p>
    </div>
  );
};

export default FAQ;
