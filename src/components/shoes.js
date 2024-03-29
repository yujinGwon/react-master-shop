import { useNavigate } from "react-router-dom";

function Shoes(props) {
  let navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          navigate(`/detail/${props.shoe.id}`);
        }}
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoe.id + 1
        }.jpg`}
        width="80%"
        alt={`Shoe ${props.shoe.id}`}
      />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
    </div>
  );
}

export default Shoes;
