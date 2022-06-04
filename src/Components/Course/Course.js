import React from "react";
import Css from "./Course.module.css";
import { RiSearchLine } from "react-icons/ri";

const Course = ({ data, setSelectedData, setSelectLesson }) => {
  const setData = (topic, lesson) => {
    setSelectedData(topic);
    setSelectLesson(lesson);
  };
  return (
    <>
      <section>
        <div className={Css.mainContainer}>
          <h3>Course</h3>
          <p className={Css.subHeading}>Defensive Driving Course</p>
          <div className={Css.search}>
            <RiSearchLine className={Css.icon} />
            <input placeholder="Search Here" type="text" />
          </div>
          <div className={Css.lessonContainer}>
            <div className={Css.lessonHeading}>
              {data &&
                data.map((lesson, index) => {
                  return (
                    <>
                      <p key={index} className={Css.lessonHeadingP}>
                        {lesson.title}
                      </p>
                      {lesson &&
                        lesson.data.map((topic, topicind) => {
                          return (
                            <>
                              <div
                                key={topicind}
                                onClick={() => setData(topic, lesson.title)}
                              >
                                <p className={Css.lessonTopic}>{topic.name}</p>
                              </div>
                            </>
                          );
                        })}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
