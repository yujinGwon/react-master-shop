import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./../store/userSlice";
import { addCount } from "../store.js";

function Cart() {
  
  let cart = useSelector((state)=>state.cart)
  let user = useSelector((state)=>state.user)
  console.log(cart)
  let dispatch = useDispatch()

  return (
    <div>

      {user.name} {user.age} 의 장바구니
      <button onClick={()=> dispatch(increase(100))}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((a, i)=>
            <tr key={i}>
              <td>{cart[i].id}</td>
              <td>{cart[i].name}</td>
              <td>{cart[i].count}</td>
              <td><button onClick={()=>{
                dispatch(addCount(cart[i].id))
              }}>+</button></td>
            </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
