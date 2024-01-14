import Shoes from "../components/Shoes.js";

function Main(props) {
  return (
    <div>
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
      </>
    </div>
  );
}

export default Main;
