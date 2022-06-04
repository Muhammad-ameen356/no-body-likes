import React from "react";
import LandingNavbar from "../../Components/Navbar/LandingNavbar";
import Css from "./Subscription.module.css";
import subscriptionImage from "../../images/subscription.png";
import { Container, Row, Col, NavItem } from "react-bootstrap";
import { subscriptionPlan } from "../../Data/Data";
import WhatOurStudentsSay from "../../Components/WhatOurStudentsSay/WhatOurStudentsSay";
import Join from "../../Components/Join/Join";

const Subscription = () => {
  return (
    <div className={Css.subscriptionMainContainer}>
      <LandingNavbar />
      <Container>
        <div className={Css.subscriptionInnerContainer}>
          <Row>
            <Col md={6} className={Css.subscriptionText}>
              <div>
                <h1 className={Css.subscriptionHeading}>Subscription</h1>
                <p className={`p-24`}>
                  Join Thousands Of Happy Students Today!
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className={Css.subscriptionImage}>
                <img src={subscriptionImage} alt="Subscription Vector" />
              </div>
            </Col>
          </Row>
          <div className={Css.subscriptionPlanMainContainer}>
            <h2>California Courses</h2>
            <p
              className={`p-18`}
              style={{ width: "90%", margin: "15px auto 30px auto" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <Row>
              {subscriptionPlan.map((item, index) => {
                return (
                  <Col md={4}>
                    <div key={index} className={Css.subscripCard}>
                      <h3 className={Css.subscripCardHeading}>
                        {item.planName}
                      </h3>
                      <div className={Css.subscripCardBody}>
                        <div className={Css.subscriptionPrice}>
                          {item.price}
                        </div>
                        <div className={Css.subscripincluded}>
                          {item.included.map((includedItem, includedInd) => {
                            return (
                              <div
                                key={includedInd}
                                className={Css.subscripCardContent}
                              >
                                {includedItem}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className={Css.cardFooter}>
                        <button className={Css.buyNowButton}>Buy Now</button>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
      <Container>
        <WhatOurStudentsSay />
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

export default Subscription;
