import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TrackCard from "./TrackCard";

const ArtistPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setArtist] = useState({});
  const [trackList, setTrackList] = useState([]);

  let artistId = new URLSearchParams(document.location.search).get("id");

  const fetchArtist = async () => {
    setIsLoading(true);
    try {
      let resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + artistId, {
        headers: {
          "X-RapidAPI-Key": "c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (resp.ok) {
        let artistData = await resp.json();
        setArtist(artistData);
        let trackListResponse = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q" + artist.name, {
          headers: {
            "X-RapidAPI-Key": "c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });
        if (trackListResponse.ok) {
          let tracks = await trackListResponse.json();
          setTrackList(tracks);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : (
        <Row>
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain">{artist.name}</h2>
            <div id="followers">{artist.nb_fan}</div>

            <Row className="mb-3">
              <Col xs={10} md={10} lg={10} className="offset-1 p-0">
                <h2>Tracks</h2>
                <Row className="pt-5 mb-5">
                  {trackList.map((song) => {
                    return <TrackCard track={song} />;
                  })}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ArtistPage;
