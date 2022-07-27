import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import useInput from "../hooks/useInputs";
import { updateProductRequest } from "../redux/updateProd";

function UpdateProd() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.details);
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const navigate = useNavigate()

  const [Notif, setNotif] = useState(false);

  const name = useInput();
  const price = useInput();
  const stock = useInput();
  const description = useInput();
  const ingredients = useInput();
  const categories = useInput();
  const photo = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    let nombre = name.value.length === 0 ? product.name : name.value;
    let precio = price.value.length === 0 ? product.price : price.value;
    let cantidad = stock.value.length === 0 ? product.stock : stock.value;
    let descripcion =
      description.value.length === 0 ? product.description : description.value;
    let ingredientes =
      ingredients.value.length === 0 ? product.ingredients : ingredients.value;
    let categorias =
      categories.value.length === 0 ? product.categories : categories.value;
    let foto = photo.value.length === 0 ? product.photo : photo.value;
    dispatch(
      updateProductRequest([
        {
          name: nombre,
          price: precio,
          stock: cantidad,
          description: descripcion,
          ingredients: ingredientes,
          categories: categorias,
          photo: foto,
        },
        product.id,
      ])
    );
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <>{user.admin? <>
        <div class="column my-4"></div>
        <div class="column is-4 is-offset-4">
          <div className="layout m-5" color="color2">
            <h3 class="title has-text-centered">
              Modifique los datos del producto{" "}
            </h3>
            {Notif ? (
              <div class="notification is-success">
                <button class="delete" onClick={() => setNotif(false)}></button>
                El producto se editó <strong>correctamente</strong>.
              </div>
            ) : (
              ""
            )}

            <form onSubmit={handleSubmit}>
              <div>
                <label className="label my-3">Nombre</label>
                <input
                  onChange={name.onChange}
                  className="input my-3"
                  type="text"
                  placeholder={product.name}
                />
                <label className="label my-3">Precio</label>
                <input
                  onChange={price.onChange}
                  className="input my-3"
                  type="text"
                  placeholder={"$" + product.price}
                />
                <label className="label my-3">Stock</label>
                <input
                  onChange={stock.onChange}
                  className="input my-3"
                  type="text"
                  placeholder={product.stock}
                />
              </div>
              <label className="label my-3">Description</label>
              <input
                onChange={description.onChange}
                className="input my-3"
                type="text"
                placeholder={product.description}
              />

              <div class="field">
                <label class="label">Ingredientes</label>
                <div class="control">
                  <textarea
                    onChange={ingredients.onChange}
                    class="textarea"
                    placeholder={product.ingredients}
                  ></textarea>
                </div>
              </div>
              <label className="label my-3">Categorias</label>
              <input
                onChange={categories.onChange}
                className="input my-3"
                type="text"
                placeholder={product.categories}
              />
              <label className="label my-3">fotos</label>
              <input
                onChange={photo.onChange}
                className="input my-3"
                type="text"
                placeholder={product.photo}
              />

              <button
                class="button is-black is-pulled-right"
                type="submit"
                onClick={() => setNotif(true)}
              >
                Listo!
              </button>
            </form>
          </div>
        </div>
        <div class="column my-4"></div>
      </> 
      :
       <p onChange={ setTimeout(() => navigate("/"), 500)}></p>}
    </>
  );
}

export default UpdateProd;
