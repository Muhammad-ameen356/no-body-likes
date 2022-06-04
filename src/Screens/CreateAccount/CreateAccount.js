import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import LandingNavbar from "../../Components/Navbar/LandingNavbar";
import Css from "./CreateAccount.module.css";
import Select from "react-select";
import ModalComponent from "../../Components/InputModal/InputModal";

const customStyles = {
  control: (styles, { isFocused, isDisabled }) => ({
    ...styles,
    // padding: "0px 12px 0px 8px",
    height: "80%",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "10px",
    paddingLeft: "10px",
  }),
  // valueContainer: (provided, state) => ({
  //   ...provided,
  //   // height: "52px",
  //   // width: 100,
  // }),
};

const CreateAccount = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "sindh", label: "Sindh" },
    { value: "punjab", label: "Punjab" },
    { value: "balochistan", label: "Balochistan" },
  ];
  return (
    <div className={Css.createAccountMainContainer}>
      <LandingNavbar />
      <Container>
        <Col>
          <div className={Css.createAccountBox}>
            <div className={Css.createAccountForm}>
              <Col md={12}>
                <div className={Css.sendMessageMainContainer}>
                  <h2 style={{ textAlign: "center" }}>Create Account</h2>
                  <div className={Css.inputDiv}>
                    <input type="text" placeholder="Username*" />
                  </div>
                  <div className={Css.inputDiv}>
                    <input type="text" placeholder="Email address*" />
                  </div>
                  <div className={Css.inputDiv}>
                    <input type="text" placeholder="Password*" />
                  </div>
                  <div className={Css.inputDiv}>
                    <Select
                      styles={customStyles}
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className={Css.select}
                      components={{ IndicatorSeparator: () => null }}
                    />
                  </div>

                  <p className={`p-16-500 ${Css.privacyPolicy}`}>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span className={Css.privacyPolicyText}>
                      Privacy policy.
                    </span>
                  </p>
                  <button className={`button160 ${Css.registerBtn}`}>
                    Register
                  </button>
                  <p className={`p-16 ${Css.alreadtHaveAccount}`}>
                    Already have an account?
                    <a>
                      {" "}
                      <span
                        onClick={() => setModalShow(true)}
                        className={Css.loginText}
                      >
                        Log In
                      </span>
                    </a>
                  </p>
                </div>
              </Col>
            </div>
          </div>
        </Col>
      </Container>

      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default CreateAccount;
