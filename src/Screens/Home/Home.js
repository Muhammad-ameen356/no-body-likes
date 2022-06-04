import React, { useState } from "react";
import LandingNavbar from "../../Components/Navbar/LandingNavbar";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import shortestTimeImage from "../../images/shortestTime.png";
import CarImage from "../../images/mainContainerCar.png";
import Join from "../../Components/Join/Join";
import Carousel from "react-elastic-carousel";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import Css from "./Home.module.css";
import Select from "react-select";
import "./ElasticCarousel.css";
import "./Accordion.css";
import Contact from "../../Components/Contact/Contact";
import { reviews, accordionData } from "../../Data/Data";
import WhatOurStudentsSay from "../../Components/WhatOurStudentsSay/WhatOurStudentsSay";
import { useHistory } from "react-router-dom";

const customStyles = {
  control: (styles, { isFocused, isDisabled }) => ({
    ...styles,
    // padding: "0px 12px 0px 8px",
    height: "100%",
    borderColor: "transparent",
    borderRadius: 0,
    boxShadow: "none",
  }),
  // valueContainer: (provided, state) => ({
  //   ...provided,
  //   // height: "52px",
  //   // width: 100,
  // }),
};
const Home = () => {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "sindh", label: "Sindh" },
    { value: "punjab", label: "Punjab" },
    { value: "balochistan", label: "Balochistan" },
  ];
  return (
    <>
      <section>
        <Container>
          <Row className="g-0">
            <Col md={12}>
              <LandingNavbar />
              <div className={Css.firstViewMainContainer}>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={6}>
                    <div>
                      <h1>
                        <span className={Css.your}> Your #1 </span>
                        <span className={Css.onlineTrafic}>
                          Online Traffic School Defensive Driving Course.
                        </span>
                      </h1>
                      <h6 className={Css.subHeading}>
                        Complete course in shortest time allowed. <br /> Access
                        your course from any device, anywhere.
                      </h6>
                      <div className={Css.startCourseContainer}>
                        <div className={Css.startCourseContent}>
                          <h4>Start Course Now - Select Your State</h4>
                          <Row
                            style={{
                              height: "52px",
                              borderRadius: 5,
                              backgroundColor: "#fff",
                              marginTop: 20,
                            }}
                            className={`g-0`}
                            // className={`d-flex justify-content-center align-items-center`}
                          >
                            <Col md={8}>
                              <Select
                                styles={customStyles}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className={Css.select}
                                components={{ IndicatorSeparator: () => null }}
                              />
                            </Col>
                            <Col md={4}>
                              <div
                                style={{
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: "4px",
                                  marginLeft: "auto",
                                  width: "max-content",
                                }}
                              >
                                <button
                                  className={`getStarted ${Css.getStarted}`}
                                >
                                  Get Started
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={Css.img}>
                      <img src={CarImage} alt="car driving school" />
                    </div>
                  </Col>
                </Row>
                <div className={Css.textOrCall}>
                  <p className={`p-18`}>Text or Call for Customer Support</p>
                  <h3>(800) 659-5113</h3>
                </div>
              </div>
            </Col>
          </Row>

          {/* Complete Course In Shortest Time Allowed */}
          <div className={Css.shortestTimeMainContainer}>
            <Container>
              <Row
                className={`d-flex justify-content-center align-items-center align-self-center`}
              >
                <Col md={6}>
                  <div
                    className={`d-flex justify-content-center ${Css.shortestTime}`}
                  >
                    <img src={shortestTimeImage} alt="ShortestTime Image" />
                  </div>
                </Col>
                <Col md={6}>
                  <h1>Complete Course In Shortest Time Allowed.</h1>
                  <p className={Css.shortestTimeDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat.
                  </p>
                  <button className={`button160 ${Css.shortestTimeButton}`}>
                    Get Started
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
          {/* _______________________ */}

          {/* What our student Says */}
          <WhatOurStudentsSay />
          {/* ------------- */}
        </Container>

        {/* Join Thousand Of happy Students Today */}
        <Join />
        {/* ______________________ */}

        {/* Frequently Asked Questions */}
        <div className={Css.frequentlyAskedMainContainer}>
          <Container>
            <Col md={12}>
              <h2 className={Css.frequentlyAskedHeading}>
                Frequently Asked Questions
              </h2>
              <div className={Css.frequentlyAskedBody}>
                <Accordion>
                  {accordionData.map((item, index) => {
                    return (
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
                <div className={Css.viewAllFaqsButton}>
                  <button
                    onClick={() => history.push("/faqs")}
                    className="button160"
                  >
                    View All FAQ's
                  </button>
                </div>
              </div>
            </Col>
          </Container>
        </div>
        {/* _______________________ */}

        {/* Our Customer Support Is Ready To Help */}
        <Container>
          <Contact />
        </Container>
        {/* _______________________________________ */}
      </section>
    </>
  );
};

export default Home;
