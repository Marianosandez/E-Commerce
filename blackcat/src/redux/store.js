import { configureStore } from "@reduxjs/toolkit";
import selectedProductReducer from "./cart";
import cartContReducer from "./cartCont";
import deleteproductReducer from "./deletePruduct";
import getUsersReducer from "./getUsers";
import adminReducer from "./giveAdmin";
import loginReducer from "./login";
import meReducer from "./me";
import productDetailsReducer from "./productDetails";
import productsReducer from "./products";
import tableReducer from "./table";

const store = configureStore({
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cont: cartContReducer,
    details: productDetailsReducer,
    products: productsReducer,
    selected: selectedProductReducer,
    table: tableReducer,
    login: loginReducer,
    users: getUsersReducer,
    admin: adminReducer,
    me: meReducer,
    delete: deleteproductReducer,
  },
});

export default store;
