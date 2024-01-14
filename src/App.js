import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import img from "./image.js";
import Shoes from "./shoes.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  let [images] = useState(img);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url(" + bg + ")" }}
                ></div>
                <div className="container">
                  <div className="row">
                    {shoes.map((shoe, index) => (
                      <Shoes key={index} shoe={shoe} image={images[index]} />
                    ))}
                  </div>
                </div>
              </>
            </div>
          }
        />
        <Route path="/detail" element={<div>상세페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
