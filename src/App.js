import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import img from "./image.js";
import Shoes from "./shoes.js";


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
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">

          <Shoes shoes={shoes} images={images}></Shoes>

        </div>
      </div>
    </div>
  );
}

export default App;
