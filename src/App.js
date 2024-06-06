import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { createContext, useEffect, useState } from "react";
import data from "./data.js";
import img from "./image.js";

import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Main from "./components/Main.js";
import Cart from "./routes/Cart.js";
import axios from "axios";
import { useQuery } from "react-query";

export let Context1 = createContext();


function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  },[])

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let [images] = useState(img);
  let navigate = useNavigate();

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청됨')
      return a.data
    })
  )

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { result.isLoading && '로딩중' }
            { result.error && '에러남' }
            { result.data && result.data.name }
          </Nav>
          
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <Main bg={bg} shoes={shoes} setShoes={setShoes} images={images} />
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />

        {/* <Route path="*" element={<div>없는페이지요</div>} /> */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>

        <Route path="/cart" element={ <Cart />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
