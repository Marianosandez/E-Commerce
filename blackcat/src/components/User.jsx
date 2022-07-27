import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import PreviousOrders from "./PreviousOrders";

const User = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const [orders, setOrders] = useState([]);

  const getMyOrders = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/order/all/${user.id}`
    );
    const results = response.data;
    setOrders(results);
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <div class="pt-6">
      <div class="p-6"></div>
      {user.admin ? (
        <div class="p-6">
          {user.admin && (
            <h1 class="p-6 is-size-4">Bienvenido {user.completeName}</h1>
          )}
          <div class="p-6"></div>
          {user.admin ? (
            <div class="is-flex is-flex-direction-row is-justify-content-space-around">
              <button
                class="button is-medium is-rounded is-color3"
                onClick={() => navigate("/users_list")}
              >
                ADMINISTRAR USUARIOS
              </button>
              <button
                class="button is-medium is-rounded is-color3"
                onClick={() => navigate("/add_prod")}
              >
                AGREGAR PRODUCTO
              </button>
            </div>
          ) : (
            <h1 class="is-size-1">UNAUTHORIZED</h1>
          )}
          <div class="p-6"></div>
          <div class="p-6"></div>
        </div>
      ) : (
        <div>
          <h1 class="is-size-2">
            Bienvenido {user.name}, este es tu historial de pedidos:
          </h1>
          <ul class="is-flex is-flex-direction-row is-flex-wrap-wrap">
            {orders.map((order) => {
              return (
                <li class="p-3 ">
                  {" "}
                  <PreviousOrders order={order} />
                </li>
              );
            })}
          </ul>
          <div class="p-6"></div>
          <div class="p-6"></div>
        </div>
      )}
    </div>
  );
};

export default User;
