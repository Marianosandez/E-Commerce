import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import useInput from "../hooks/useInputs";

function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(localStorage.getItem("user"));

  const email = useInput();
  const adress = useInput();
  const suggestion = useInput();
  const payerName = useInput();
  const payerSurname = useInput();
  const payerPhone = useInput();
  const seekerName = useInput();
  const seekerSurname = useInput();
  const seekerPhone = useInput();
  const [checkboxBool, setCheckboxBool] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/api/order/buy", {
      data: [
        {
          email: email.value,
          adress: adress.value,
          suggestion: suggestion.value,
          payerName: payerName.value,
          payerSurname: payerSurname.value,
          payerPhone: payerPhone.value,
          seekerName: seekerName.value,
          seekerSurname: seekerSurname.value,
          seekerPhone: seekerPhone.value,
          userId: user.id,
        },
        cart,
      ],
    });
    localStorage.removeItem("cart");
  };

  

  return (
    <div>
      <div class="py-6"></div>
      <div class="py-3"></div>
      <div class="columns is-multiline">
        <div class="column is-6 is-offset-3 ">
          <div class="column is-6 is-offset-3">
            <picture class="image">
              <img
                class="mb-6"
                src="https://i.postimg.cc/sxTxGF1s/Blackcat-Logo/.png"
                alt="Logo"
              />
            </picture>
          </div>
          <form>
            <p class="title">Datos de contacto:</p>
            <input
              class="input mb-6"
              type="text"
              placeholder="Email"
              onChange={email.onChange}
            />
            <p class="title">Datos de entrega:</p>
            <label class="checkbox mb-6">
              <input
                type="checkbox"
                onClick={() => setCheckboxBool(!checkboxBool)}
              />
              Retiro por local (GRATIS)
            </label>
            {checkboxBool === false ? (
              <div>
                {" "}
                <p class="subtitle">Entrega a domicilio:</p>
                <p class="subtitle-6 is-italic">
                  Ingrese datos de su domicilio
                </p>
                <input
                  class="input mb-6"
                  type="text"
                  placeholder="Dirección"
                  onChange={adress.onChange}
                />
                <p class="subtitle-6 is-italic">
                  Datos útiles para envío exitoso (opcional)
                </p>
                <textarea
                  class="textarea mb-6"
                  type="text"
                  placeholder="mensaje"
                  onChange={suggestion.onChange}
                />
              </div>
            ) : (
              ""
            )}

            <p class="title">Datos de facturación:</p>
            <p class="subtitle-6 is-italic mb-4">
              Persona que pagará el pedido
            </p>
            <input
              class="input mb-4"
              type="text"
              placeholder="Nombre"
              onChange={payerName.onChange}
            />
            <input
              class="input mb-4"
              type="text"
              placeholder="Apellido"
              onChange={payerSurname.onChange}
            />
            <input
              class="input mb-6"
              type="text"
              placeholder="Teléfono"
              onChange={payerPhone.onChange}
            />
            <p class="subtitle-6 is-italic mb-4">
              Persona que retirará el pedido
            </p>
            <input
              class="input mb-4"
              type="text"
              placeholder="Nombre"
              onChange={seekerName.onChange}
            />
            <input
              class="input mb-4"
              type="text"
              placeholder="Apellido"
              onChange={seekerSurname.onChange}
            />
            <input
              class="input mb-6"
              type="text"
              placeholder="Teléfono"
              onChange={seekerPhone.onChange}
            />
            <div>
              <p class="subtitle has-text-weight-medium ">
                Al clickear el botón se le redigirá al medio de pago
              </p>

              <button
                class="button is-black is-pulled-right"
                onClick={(e) => {
                  handleSubmit(e);
                  navigate("/post_buy");
                  window.open(
                    "https://www.mercadopago.com.ar/developers/es",
                    "_blank"
                  );
                }}
              >
                Pagar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="py-6"></div>
      <div class="py-6"></div>
      <div class="py-6"></div>
    </div>
  );
}

export default Checkout;
