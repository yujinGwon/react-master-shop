
function Shoes(props) {
  return (
    <div className="col-md-4">
      {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} width="80%" /> */}
      <img
        src={props.images[0].src}
        width="80%"
      />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content}</p>
    </div>
  );
}

export default Shoes;