import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrackCard = (props) => {
  const track = props.track;

  return (
    <Col xs={1} sm={2} lg={3} xl={4} className="text-center" id={track.id}>
      <Link to={"/album?id=" + track.album.id}>
        <img className="img-fluid" src={track.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to={"/album?id=" + track.album.id}>
          Album: {track.album.title.lenght < 16 ? track.album.title : track.album.title.substring(0, 16) + "..."}
        </Link>
        <br />
        <Link to={"/artist?id=" + track.artist.id}>Artist: {track.artist.name}</Link>
      </p>
    </Col>
  );
};
export default TrackCard;
