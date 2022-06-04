import React from "react";
import Css from "./WhatOurStudentsSay.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { reviews } from "../../Data/Data";

const WhatOurStudentsSay = () => {
  return (
    <div className={`${Css.whatOurStudentSays}`}>
      {/* What our student Says */}
      <h2 style={{ textAlign: "center" }}>What Our Student Say's</h2>
      <Row>
        <Col md={12}>
          <div className={Css.reviewBoxMainContainer}>
            <Carousel itemsToShow={3} showArrows={false}>
              {reviews.map((item, ind) => {
                return (
                  <>
                    <div className={Css.reviewBox}>
                      <p className={`p-28`}>{item.reviewText}</p>
                      <div className={Css.reviewinnerBox}>
                        <div className={Css.reviewPersonImage}>
                          <img src={item.image} />
                        </div>
                        <div className={Css.reviewPersonName}>
                          <p className={`p-24`}>{item.name}</p>
                          <p className={`p-18`}>{item.from}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhatOurStudentsSay;
