import React from "react";
import { Link } from "react-router-dom";

function PostBuy() {
  return (
    <>
      <div class="mt-6"></div>
      <div class="columns is-centered">
        <div class="column is-narrow">
          <figure>
            <img
              src="https://media.discordapp.net/attachments/964225534395564112/986677157860372480/Black_Cat.png?width=660&height=660"
              alt="GRACIAS POR SU COMPRA"
            />
          </figure>
          <div class="content has-text-centered">
            <Link to={"/"}>
              <button class="button is-black  ">Volver a Home</button>
            </Link>
          </div>
        </div>

        <div class="mt-6"></div>
      </div>
    </>
  );
}

export default PostBuy;
