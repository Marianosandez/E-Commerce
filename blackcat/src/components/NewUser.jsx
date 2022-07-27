import axios from "axios";
import useInput from "../hooks/useInputs";

import { useNavigate } from "react-router";

const NewUser = () => {
  const navigate = useNavigate();

  const name = useInput();
  const surname = useInput();
  const email = useInput();
  const password = useInput();
  const adress = useInput();
  const phone = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/users/register", {
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
    });
    setTimeout(() => navigate("/login"), 500);
  };
  return (
    <>
      <div class="column my-4"></div>
      <div class="column is-4 is-offset-4">
        <div className="layout m-5" color="color2">
          <h3 class="title has-text-centered">
            Registrate por Aca! es muy facil{" "}
          </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label my-3">Nombre/s</label>
              <input
                onChange={name.onChange}
                className="input my-3"
                type="text"
                placeholder="Ingrese su nombre"
              />

              <label className="label my-3">Apellido/s</label>
              <input
                onChange={surname.onChange}
                className="input my-3"
                type="text"
                placeholder="Ingrese su apellido"
              />
            </div>
            <label className="label my-3">Email</label>
            <input
              onChange={email.onChange}
              className="input my-3"
              type="email"
              placeholder="Ej: mar1@hotmail.com"
            />
            <label className="label my-3">Contraseña</label>
            <input
              onChange={password.onChange}
              className="input my-3"
              type="password"
              placeholder="Nueva contraseña"
            />

            <button class="button is-black is-pulled-right" type="submit">
              Enviar y registrarme
            </button>
          </form>
        </div>
      </div>
      <div class="column my-4"></div>
    </>
  );
};

export default NewUser;
