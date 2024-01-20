import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  // useEffect 안에 있는 내용은 html 렌더링 후에 동작
  // 주로 어려운 연산, 서버에서 데이터가져오는 작업, 타이머 장착하는거 등

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let [num, setNum] = useState("");
  let [error, setError] = useState(false);

  useEffect(() => {
    if (isNaN(num) == true) {
      setError(true);
    } else {
      setError(false);
    }
  }, [num]);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      {error && <p style={{ color: "red" }}>유효한 숫자를 입력해주세요</p>}
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
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
