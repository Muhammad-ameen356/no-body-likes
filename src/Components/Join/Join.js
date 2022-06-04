import React from "react";
import Css from "./Join.module.css";
import { Container, Row, Col } from "react-bootstrap";
import IdeaImage from "../../images/idea.png";


const Join = () => {
  return (
    <div className={Css.joinThounsandMainContainer}>
      <Container>
        <Row
          className={`d-flex justify-content-center align-items-center ${Css.joinThousandBody}`}
        >
          <Col>
            <div className={Css.joinThousandText}>
              <h2>Join Thousands Of Happy Students Today!</h2>
              <h6>See Why Thousands Of People Choose Nobodylikestickets.Com</h6>
              <button
                className={`getStartedTransparent ${Css.joinThousandbutton}`}
              >
                Get Started
              </button>
            </div>
          </Col>
          <Col>
            <div className={Css.joinThousandImage}>
              <img src={IdeaImage} alt="Idea vector" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Join;
