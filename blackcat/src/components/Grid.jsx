import React, { useEffect, useState, forceUpdate, useReducer } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../redux/products";
import Card from "./Card";

function Grid() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);


  return (
    <>
      <div>
        <div class="column py-5"></div>
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="columns is-multiline ">
            <div class="column is-full">
              <section class="hero has-background-color1">
                <div class="column is-flex is-6 is-offset-3">
                  <input
                    class="input mr-4"
                    type="text"
                    placeholder="Buscar..."
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span>Filtrar por categoria</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        <a
                          href="#"
                          class="dropdown-item"
                          onClick={() => setCategory("Tortas")}
                        >
                          Tortas
                        </a>
                        <a
                          href="#"
                          class="dropdown-item"
                          onClick={() => setCategory("Postres")}
                        >
                          Postres
                        </a>
                        <a
                          href="#"
                          class="dropdown-item"
                          onClick={() => setCategory("")}
                        >
                          Eliminar filtro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {products
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .filter((val) => {
                if (category === "") {
                  return val;
                } else if (val.categories === category) {
                  return val;
                }
              })
              .map((product) => (
                <>
                  <div class="column is-3 is-flex is-align-content-stretch is-justify-content-center">
                    <Card product={product} key={product.id} id={product.id} />
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
