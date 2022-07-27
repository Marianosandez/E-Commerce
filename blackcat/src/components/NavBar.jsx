import React, { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { postLogoutRequest, postMeRequest } from "../redux/login";


function NavBar() {
  const update = useSelector((state) => state.cont);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || undefined;
  const cont = cart ? cart.reduce((acum, obj) => acum + obj.amount, 0) : 0;
  const user = localStorage.getItem("user");
  const userJson = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(postLogoutRequest());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      class="navbar is-fixed-top has-background-color1"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand mt-1">
        <Link to={"/"}>
          <div class="column is-12">
            <p class="navbar-item ">
              <img
                src="https://i.postimg.cc/sxTxGF1s/Blackcat-Logo.png"
                alt="Logo"
              />
            </p>
          </div>
        </Link>
        <p class="navbar-burger" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>

      <div class="navbar-menu" id="navOptions">
        <div class="navbar-start ">
          <div class="column is-full is-invisible">prueba arreglo navbar</div>
        </div>

        <div class="columns is-multiline mt-4">
          <div class="column is-full ">
            <div class="columns">
              <div class="column ">
                <Link to={"/"}>
                  <p class="navbar-item">Inicio</p>
                </Link>
              </div>
              <div class="column">
                <Link to={"/pedidos"}>
                  <p class="navbar-item">Pastelería</p>
                </Link>
              </div>
              <div class="column">
                <Link to={"/contact"}>
                  <p class="navbar-item">Contacto</p>
                </Link>
              </div>
              <div class="column">
                <Link to={"/empresariales"}>
                  <p class="navbar-item">Empresariales</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {user ? (
                <>
                  <div
                    class="column is-flex is-clickable"
                    onClick={() => navigate("/myuser")}
                  >
                    <CgProfile size={30} />
                    <p class="subtitle">Hola {userJson.name}!</p>
                  </div>
                  <p class="button" onClick={handleLogout}>
                    <strong class="has-text-black-bis">Logout</strong>
                  </p>
                </>
              ) : (
                <>
                  <p class="button">
                    <Link to={"/singup"}>
                      <strong class="has-text-black-bis">Sign up</strong>
                    </Link>
                  </p>
                  <Link to={"/login"}>
                    <p class="button">Log in</p>
                  </Link>
                </>
              )}

              <div class="has-text-black-bis">
                <Link to={"/carrito"}>
                  <RiShoppingCart2Line size={30} />
                </Link>
              </div>
              <p>{cont}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
