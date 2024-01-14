function Shoes(props) {
  return (
    <div className="row">
      {props.shoes.map((shoe, index) => (
        <div className="col-md-4" key={index}>
          <img src={props.images[index].src} width="80%" alt={`Shoe ${index + 1}`} />
          <h4>{shoe.title}</h4>
          <p>{shoe.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Shoes;
