import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Css from "../../Screens/CreateAccount/CreateAccount.module.css";
import inputModalCss from "./InputModal.module.css";
import "./ModalCustomize.css";

const ModalComponent = (props) => {
  const history = useHistory();
  return (
    <Container>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        rounded={3}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="px-5">
          <h1 style={{ textAlign: "center", margin: "15px 0px" }}>Log In</h1>
          <div className={Css.inputDiv}>
            <input type="text" placeholder="Username*" />
          </div>
          <div className={Css.inputDiv}>
            <input type="text" placeholder="Email address*" />
          </div>
          <div className={inputModalCss.checkBoxandForgetPasswordContainer}>
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
                style={{ width: "15px", height: "15px" }}
              />
              <label
                for="remember"
                unselectable="on"
                style={{ userSelect: "none" }}
              >
                {" "}
                &nbsp; Remember Me
              </label>
            </div>
            <div>
              <a>
                <p className={`p-16 ${inputModalCss.forgetPassText}`}>
                  Forget Password
                </p>
              </a>
            </div>
          </div>
          <div>
            <button className={`button160 ${Css.registerBtn}`}>Login</button>
          </div>
          <div className={inputModalCss.createNow}>
            <p className={`p-16`}>
              Don't have an account? &nbsp;
              <span onClick={() => history.push("/createaccount")}>
                Create Now
              </span>
            </p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default ModalComponent;
