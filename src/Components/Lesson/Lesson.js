import React from "react";
import Css from "./Lesson.module.css";
import { RiBookOpenLine } from "react-icons/ri";
import ReactPlayer from "react-player";

const Lesson = ({ selectedData, selectLesson }) => {
  return (
    <>
      <div className={Css.mainContainer}>
        <div className={Css.heading}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RiBookOpenLine className={Css.headingIcon} />{" "}
            <span className={Css.headingText}>{selectLesson}</span>
          </div>
          <div>
            <button>Images</button>
            <button>Attachments</button>
          </div>
        </div>
        <div className={Css.contentbody}>
          <p>{selectedData && selectedData.description}</p>
          <ReactPlayer
            style={{ height: "100px" }}
            url={selectedData.video}
            playing={false}
            controls={true}
            width={"100%"}
            height={"300px"}
          />
        </div>
      </div>
    </>
  );
};

export default Lesson;
