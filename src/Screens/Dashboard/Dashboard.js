import React, { useState } from "react";
import Drawer from "../../Components/Drawer/Drawer";
import Navbar from "../../Components/Navbar/Navbar";
import Css from "./Dashboard.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../../Components/Course/Course";
import Lesson from "../../Components/Lesson/Lesson";

const data = [
  {
    title: "Lesson 1",
    data: [
      {
        id: 1,
        name: "topic1",
        description:
          "crambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
        video: "https://www.youtube.com/watch?v=dip_8dmrcaU",
        images: [],
        attachment: [],
      },
      {
        id: 2,
        name: "topic2",
        description:
          "nd web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
        video: "https://www.youtube.com/watch?v=ekgUjyWe1Yc",
        images: [],
        attachment: [],
      },
    ],
  },
  {
    title: "Lesson 2",
    data: [
      {
        id: 1,
        name: "topic1",
        description:
          "h the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
        video: "https://www.youtube.com/watch?v=-72P_EFphSc",
        images: [],
        attachment: [],
      },
      {
        id: 2,
        name: "topic2",
        description:
          "r on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem",
        video: "https://www.youtube.com/watch?v=1WaGUqQwfxo",
        images: [],
        attachment: [],
      },
    ],
  },
  {
    title: "Lesson 3",
    data: [
      {
        id: 1,
        name: "topic1",
        description:
          "it amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ",
        video: "https://www.youtube.com/watch?v=AnSEAwx_8yc",
        images: [],
        attachment: [],
      },
      {
        id: 2,
        name: "topic2",
        description:
          "eakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it ",
        video: "https://www.youtube.com/watch?v=-72P_EFphSc",
        images: [],
        attachment: [],
      },
    ],
  },
];

const Dashboard = () => {
  const [selectedData, setSelectedData] = useState(data[0].data[0]);
  const [selectLesson, setSelectLesson] = useState(data[0].title);

  return (
    <>
      <section style={{ backgroundColor: "#f5fbff" }}>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={2}>
              <Drawer />
            </Col>
            <Col md={10}>
              <Navbar />
              <Row className="g-0">
                <Col md={3}>
                  <Course
                    data={data}
                    setSelectedData={setSelectedData}
                    setSelectLesson={setSelectLesson}
                  />
                </Col>
                <Col md={6}>
                  <Lesson
                    selectedData={selectedData}
                    selectLesson={selectLesson}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
