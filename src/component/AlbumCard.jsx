import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCard = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [albumData, setAlbumData] = useState({});
  const getArtist = async () => {
    setIsLoading(true);
    try {
      let resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + props.artistName, {
        headers: {
          "X-RapidAPI-Key": "c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (resp.ok) {
        let result = await resp.json();
        setAlbumData(result.data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getArtist();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : (
        <Col xs={1} sm={2} lg={3} xl={4} className="text-center" id={albumData.id}>
          <Link to={"/album?id=" + albumData.album.id}>
            <img className="img-fluid" src={albumData.album.cover_medium} alt="1" />
          </Link>
          <p>
            <Link to={"/album?id=" + albumData.album.id}>
              Album:{" "}
              {albumData.album.title.lenght < 16
                ? albumData.album.title
                : albumData.album.title.substring(0, 16) + "..."}
            </Link>
            <br />
            <Link to={"/artist?id=" + albumData.artist.id}>Artist: {albumData.artist.name}</Link>
          </p>
        </Col>
      )}
    </>
  );
};

export default AlbumCard;
