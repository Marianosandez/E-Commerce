


import React from "react";
import { Link } from "react-router-dom";
import QtySelector from "./QtySelector";
import React, { useEffect, useReducer, forceUpdate } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getMeRequest } from "../redux/me";
import { deleteProductRequest } from "../redux/deletePruduct";

import QtySelector from "./QtySelector";
import { getProductDetailsRequest } from "../redux/productDetails";

function Card({ product }) {
  // let arrCart = useSelector((state) => state.selected);
  // console.log("SOY CART",arrCart)
  const user = JSON.parse(localStorage.getItem("user")) || undefined;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const me = useSelector((state) => state.me);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProductRequest(productId));
    setTimeout(() => window.location.reload(), 500);
    localStorage.removeItem("cart");
  };

  const handleUpdate = (productId) => {
    dispatch(getProductDetailsRequest(productId));
    navigate("/update_prod");
  };

  useEffect(() => {
    dispatch(getMeRequest(user.id));
  }, []);

  return (
    <div class="card">
      <div class="card-image">
        <Link to={`/pedidos/${product.id}`}>
          <figure class="image is-3by3">
            <img
              src={product.photo}
              alt="torta"
              style={{ height: "160px", width: "300px" }}
            />
          </figure>
        </Link>
      </div>
      <div class="card-content  is-align-content-baseline">
        <div class="media">
          <div class="media"></div>
          <div class="media-content">
            <p class="title is-4 has-text-centered">{product.name}</p>
          </div>
        </div>
        <div class="content is-10 has-text-centered is-italic">
          {product.ingredients}
        </div>
        <p class="has-text-centered">${product.price}</p>
      </div>
      {me.admin === true ? (
        <div class="card-footer ">
          <div class="column is-flex  is-justify-content-space-between">
            <FaPencilAlt
              class="is-clickable"
              onClick={() => handleUpdate(product.id)}
            />

            <VscTrash
              class="is-clickable"
              onClick={() => handleDeleteProduct(product.id)}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {product.stock === 0 ? (
        <div class="card-footer mt-6">
          {" "}
          <p class="has-text-left is-medium is-size-6 m-1">
            No hay stock disponible!
          </p>{" "}
        </div>
      ) : (
        <QtySelector product={product} />
      )}
    </div>
  );
}

export default Card;
