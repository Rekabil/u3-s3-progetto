/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row } from "react-bootstrap";
import TypeMusic from "./TypeMusic";

const MainPage = () => {
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW REALEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <TypeMusic title="Rock Classics" artistList={["queen", "u2", "thepolice", "eagles"]} />
      <TypeMusic title="Pop Culture" artistList={["maroon5", "coldplay", "onerepublic", "jamesblunt"]} />
      <TypeMusic title="#HipHop" artistList={["eminem", "snoopdogg", "lilwayne", "drake"]} />
    </Col>
  );
};

export default MainPage;
