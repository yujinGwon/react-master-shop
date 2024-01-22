import Shoes from "../components/Shoes.js";
import axios from "axios";

function Main(props) {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + props.bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((shoe, index) => (
            <Shoes key={index} shoe={shoe} image={props.images[index]} />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              console.log(result.data);
              let copy = [...props.shoes, ...result.data];
              props.setShoes(copy);
            })
            .catch(() => {
              console.log("실패함ㅅㄱ");
            });
        }}
      >
        버튼
      </button>
    </>
  );
}

export default Main;
