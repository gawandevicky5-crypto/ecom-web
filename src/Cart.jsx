import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increse,
  decrese,
} from "./counter/counterSlice";
import Header from "./Header";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector(
    (state) => state.counter.cart
  );

  const increment = (id) => {
    dispatch(increse(id));
  };

  const decrement = (id) => {
    dispatch(decrese(id));
  };

  return (
    <div>
      <Header />
      <div className="container border p-3 mt-4">

        <h2>My Cart</h2>

        <table className="table table-striped">

          <thead>
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Add/Remove</th>
            </tr>
          </thead>

          <tbody>
            {cartData.map((item, index) => (
              <tr key={item.id}>

                <td>{index + 1}</td>

                <td>
                  <img src={item.thumbnail} width="80" />

                  <span className="ms-3">
                    {item.title}
                  </span>
                </td>

                <td className="text-center">
                  ${item.price * item.quantity}
                </td>

                <td className="text-center">
                  {item.quantity}
                </td>


                <td>
                  <button className="btn border rounded-pill mx-2" onClick={() => increment(item.id)}>
                    +
                  </button>

                  <button className="btn border rounded-pill" onClick={() => decrement(item.id)}>
                    -
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Cart;
