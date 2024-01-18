import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

let NewBtn = styled.button(YellowBtn)`
  
`;

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <YellowBtn bg="yellow">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <YellowBtn bg="blue">버튼</YellowBtn>

      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.image} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
