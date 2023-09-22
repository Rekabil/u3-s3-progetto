import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const TypeMusic = (props) => {
  const title = props.title;
  const artistList = props.artistList;
  useEffect(() => {});
  return (
    <Row>
      <Col xs={10}>
        <h2>{title}</h2>
        <Row className="imgLinks py-3">
          {artistList.map((name) => {
            return <AlbumCard artistName={name} />;
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default TypeMusic;
