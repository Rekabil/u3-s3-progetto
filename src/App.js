import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./component/MainPage";
import MyNavbar from "./component/MyNavbar";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "react-bootstrap";
import BottomNav from "./component/BottomNav";
import ArtistPage from "./component/ArtistPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <MyNavbar />

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/artist" element={<ArtistPage />} />
            </Routes>
          </Row>
        </Container>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
