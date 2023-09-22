/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/Shuffle.png";
import previus from "../assets/playerbuttons/Previous.png";
import play from "../assets/playerbuttons/Play.png";
import next from "../assets/playerbuttons/Next.png";
import repeat from "../assets/playerbuttons/Repeat.png";

const BottomNav = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="">
                  <img src={previus} alt="previus" />
                </a>
                <a href="">
                  <img src={play} alt="play" />
                </a>
                <a href="">
                  <img src={repeat} alt="repeat" />
                </a>

                <a href="">
                  <img src={next} alt="next" />
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <ProgressBar variant="light" now={50} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BottomNav;
