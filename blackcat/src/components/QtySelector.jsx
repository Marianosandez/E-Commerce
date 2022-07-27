import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartContAdd } from "../redux/cartCont";
import { RiShoppingCart2Line } from "react-icons/ri";
import { getSelectedProductsRequest } from "../redux/cart";



const QtySelector = ({ product}) => {
  const dispatch = useDispatch();
  const arrCart = useSelector((state) => state.selected);
  const currentProd=arrCart.find(element=> element.productId===product.id)
  const amount=currentProd?currentProd.amount:1
  const [value, setValue] = useState(amount||1);

  const handleIncrease = (e) => {
    setValue(value + 1);
  };

  const handleDecrease = (e) => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleSubmit = () => {
    dispatch(cartContAdd(value));
    dispatch(
      getSelectedProductsRequest({
        productId: product.id,
        amount: value,
        productPrice: product.price,
      })
    );
  };

  useEffect(()=>setValue(amount), [amount])

  return (
    <div class="card-footer p-2 is-justify-content-space-between">
      <div>
        <button onClick={() => handleDecrease(value)}>-</button>
        <input class="has-text-centered" size="2" readOnly={true} value={value} />
        <button onClick={() => handleIncrease(value)}> +</button>
      </div>
      <RiShoppingCart2Line
        class="is-clickable"
        onClick={handleSubmit}
        size={30}
        color={""}
      />
    </div>
  );
};
export default QtySelector;
