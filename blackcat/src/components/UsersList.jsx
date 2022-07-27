import React, { useReducer } from "react";
import { useEffect, useState, forceUpdate } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsersRequest, getUsersRequest } from "../redux/getUsers";
import { VscTrash } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { createAdminRequest, removeAdminRequest } from "../redux/giveAdmin";
import { useNavigate } from "react-router";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const me = JSON.parse(localStorage.getItem("user")) || undefined;
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const navigate = useNavigate();

  const handleDelete = (userId) => {
    dispatch(deleteUsersRequest(userId));
    window.location.reload();
  };

  const handleMakeAdmin = (userId) => {
    dispatch(createAdminRequest(userId));
    setTimeout(() => {
      forceUpdate();
    }, 100);
  };

  const handleRemoveAdmin = (userId) => {
    dispatch(removeAdminRequest(userId));
    setTimeout(() => {
      forceUpdate();
    }, 100);
  };

  useEffect(() => {
    dispatch(getUsersRequest(me.id));
  }, [reducerValue]);

  return (
    <>
      {me.admin ? (
        <div>
          <div class="py-6"></div>
          <div class="columns is-centered is-multiline">
            <div class="column is-full">
              <p class="title has-text-centered">Usuarios</p>
            </div>
            <div class="column is-6 is-offset-2">
              <table class="table is-hoverable has-background-color2">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>EMAIL</th>
                    <th>
                      <p class="has-text-centered">ADMIN</p>
                    </th>
                    <th>
                      <p class="has-text-centered">
                        <abbr title="Modificar status de admin">MOD</abbr>
                      </p>
                    </th>
                    <th>BORRAR</th>
                  </tr>
                </thead>
                {users?.length !== 0
                  ? users?.map((user, index) => (
                      <tbody>
                        <tr>
                          <th>{user?.id}</th>
                          <th>{user?.name}</th>
                          <th>{user?.surname}</th>
                          <th>{user?.email}</th>
                          <th>
                            <p class="has-text-centered">
                              {user?.admin === false ? "NO" : "SI"}
                            </p>
                          </th>
                          <th>
                            <p class="has-text-centered">
                              <button
                                class="button is-small"
                                onClick={() => handleMakeAdmin(user?.id)}
                              >
                                <FaCheck />
                              </button>
                              <button
                                class="button is-small"
                                onClick={() => handleRemoveAdmin(user?.id)}
                              >
                                <TbLetterX />
                              </button>
                            </p>
                          </th>
                          <th>
                            <p class="has-text-centered">
                              <VscTrash
                                class="is-clickable"
                                size={20}
                                onClick={() => handleDelete(user?.id)}
                              />
                            </p>
                          </th>
                        </tr>
                      </tbody>
                    ))
                  : "NO HAY OTROS USUARIOS REGISTRADOS"}
              </table>
            </div>
          </div>
          <div class="py-6"></div>
          <div class="py-6"></div>
          <div class="py-6"></div>
        </div>
      ) : (
        <p onChange={setTimeout(() => navigate("/"), 500)}></p>
      )}
    </>
  );
}

export default UsersList;
