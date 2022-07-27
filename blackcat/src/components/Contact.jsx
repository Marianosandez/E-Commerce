import axios from "axios";
import React from "react";
import { useState } from "react";

import useInput from "../hooks/useInputs";

const Contact = () => {
  const name = useInput();
  const email = useInput();
  const phone = useInput();
  const text = useInput();

  const [Notif,setNotif] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/users/contacto", {
      name: name.value,
      email: email.value,
      phone: phone.value,
      text: text.value,
    });
    e.target.reset();
    setNotif(true)
  };

  return (
    <>
      <div class="column is-4 is-offset-4">
        <div class="column mt-2"></div>
        <div class="column is-6 is-offset-3">
          <picture class="image">
            <img
              class="mb-1"
              src="https://i.postimg.cc/sxTxGF1s/Blackcat-Logo/.png"
              alt="Logo"
            />
          </picture>
        </div>

 {Notif ? <div class="notification is-success">
            <button class="delete" onClick={()=>setNotif(false)}></button>
            Tu mensaje ha sido enviado <strong>correctamente</strong>. Te estaremos
            contestando a la brevedad.
          </div> : ""}

        <div className="layout m-5" color="color2">
          <form onSubmit={handleSubmit}>
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  onChange={name.onChange}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  onChange={email.onChange}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Teléfono</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  onChange={phone.onChange}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Mensaje</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Escriba aquí su mensaje o consulta"
                  onChange={text.onChange}
                  required
                ></textarea>
              </div>
            </div>
            <button class="button is-black is-pulled-right mb-6">ENVIAR</button>
          </form>
        </div>
      </div>
      <div class="column my-6"></div>
    </>
  );
};

export default Contact;
