import React from "react";
import Css from "./Contact.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    // Our Customer Support Is Ready To Help
    <div className={Css.coustomerSupportMainContainer}>
      <Container>
        <Row
          className={`d-flex justify-content-center align-items-center align-self-center`}
        >
          <Col md={6}>
            <h1>
              Our Customer Support Is
              <span className={Css.readytoHelpText}> Ready To Help.</span>
            </h1>
            <div
              className={`d-flex align-content-center ${Css.locationContainer}`}
            >
              <div className={Css.coustomerSupporticon}>
                <MdLocationOn />
              </div>
              <div className={Css.coustomerSupportText}>
                <p>Headquarters</p>
                <p className={`p-20`}>Memphis, TN</p>
              </div>
            </div>
            <div
              className={`d-flex align-content-center ${Css.EmailContainer}`}
            >
              <div className={Css.coustomerSupporticon}>
                <MdEmail />
              </div>
              <div className={Css.coustomerSupportText}>
                <p>Email Us At</p>
                <p className={`p-20`}>customerservice@nobodylikestickets.com</p>
              </div>
            </div>
            <div
              className={`d-flex align-content-center ${Css.callOrTextContainer}`}
            >
              <div className={Css.coustomerSupporticon}>
                <IoIosCall />
              </div>
              <div className={Css.coustomerSupportText}>
                <p>Call or Text Us At</p>
                <p className={`p-20`}>1 (800) 659-5113</p>
              </div>
            </div>
            <div
              className={`d-flex align-content-center ${Css.customerServiceContainer}`}
            >
              <div className={Css.coustomerSupporticon}>
                <FaClock />
              </div>
              <div className={Css.coustomerSupportText}>
                <p>Customer Service Hours</p>
                <p className={`p-20`}>Monday-Saturday 9am-5pm</p>
                <p className={`p-20`}>Closed Sunday</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={Css.sendMessageMainContainer}>
              <h3>Send Us A Message</h3>
              <div className={Css.inputDiv}>
                <input type="text" placeholder="Full Name*" />
              </div>
              <div className={Css.inputDiv}>
                <input type="text" placeholder="Email address*" />
              </div>
              <div className={Css.inputDiv}>
                <input type="text" placeholder="Subject*" />
              </div>
              <div className={Css.inputDiv}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Message*"
                ></textarea>
              </div>
              <button className={`button160`}>Send Message</button>
            </div>
          </Col>
        </Row>
        <p
          style={{
            textAlign: "center",
            marginTop: 50,
            fontFamily: "Lato-600",
            paddingBottom: 30,
          }}
        >
          Copyright © 2022 NobodyLikesTickets.com | DMVLicense #E9636
        </p>
      </Container>
    </div>
    // -------------------
  );
};

export default Contact;
