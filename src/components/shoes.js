import { useNavigate } from "react-router-dom";

function Shoes(props) {
  let navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          navigate(`/detail/${props.shoe.id}`);
        }}
        src={props.image.src}
        width="80%"
        alt={`Shoe ${props.shoe.id}`}
      />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
    </div>
  );
}

export default Shoes;
