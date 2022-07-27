import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderProducts } from "../redux/products";

const PreviousOrders = ({ order }) => {
  const dispatch = useDispatch();
  const prodOrder = useSelector((state) => state.products);

  useEffect(() => {
    order.order_items.map((item) => dispatch(getOrderProducts(item.productId)));
  }, []);

  const getName = (id) => {
    return prodOrder.find((element) => element.id === id);
  };

  return (
    <table
      class="table is-hoverable has-background-color2"
      style={{ height: "100%" }}
    >
      <thead>
        <tr class="is-size-3">Orden #{order.id}</tr>
        <tr>
          <th></th>
          <th>PRODUCTO</th>
          <th>CANTIDAD</th>
        </tr>
      </thead>
      {order.order_items.map((order_item) => {
        let currentProd = getName(order_item.productId);
        return (
          <tbody>
            <tr>
              <th>
                {currentProd && (
                  <img
                    src={currentProd.photo}
                    style={{ height: "60px", width: "60px" }}
                    alt="cake"
                  ></img>
                )}
              </th>
              <th>{currentProd ? currentProd.name : "Producto"}</th>
              <th>{order_item.amount}</th>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default PreviousOrders;
