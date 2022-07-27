import React, { useEffect } from "react";
import { VscTrash } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTableRequest, cleanTableRequest } from "../redux/table";
import { deleteSelectedProductsRequest } from "../redux/cart";

function Table() {
  const dispatch = useDispatch();
  let arrCart = useSelector((state) => state.selected);
  const tableProducts = useSelector((state) => state.table);
  const navigate=useNavigate()
  const user= JSON.parse(localStorage.getItem('user'))|| undefined
  
  
  const handleCheckout=()=>{
    if(user){navigate('/checkout')}
   else{navigate('/login')} 
  }

  const handleRemove=(item)=>{
     dispatch(deleteSelectedProductsRequest(item))
  }
 
  useEffect(() => {
    dispatch(cleanTableRequest());
    arrCart.forEach((item) => {
      dispatch(getTableRequest(item.productId));
    });
  }, [arrCart]);

  return (
    <>
      <div class="column py-2"></div>
      <div class="column py-6"></div>
      <div class="column is-6 is-offset-4">
        <table class="table is-hoverable has-background-color2">
          <thead>
            <tr>
              <th></th>
              <th>PRODUCTO</th>
              <th>CANTIDAD</th>
              <th>PRECIO</th>
              <th>ELIMINAR</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>TOTAL:</th>
              <th>
                $
                {arrCart.reduce(
                  (acum, obj) => acum + obj.productPrice * obj.amount,
                  0
                )}
              </th>
            </tr>
          </tfoot>
          {tableProducts.map((item, index) => (
            <tbody>
              <tr>
                <th>
                  <figure>
                    <img width={50} src={item.photo} alt="cake" />
                  </figure>
                </th>
                <th>{item.name}</th>
                <th>
                  <p class="has-text-centered">
                    {arrCart.length === tableProducts.length &&
                      arrCart[index].amount}
                  </p>
                </th>
                <th>${item.price}</th>
                <th>{<VscTrash class="is-clickable" onClick={()=>handleRemove(item)} size={20}/>}</th>
              </tr>
            </tbody>
          ))}
        </table>
        <button class="button is-black" onClick={handleCheckout}>
          Siguiente
        </button>
      </div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
      <div class="column py-5"></div>
    </>
  );
}

export default Table;
