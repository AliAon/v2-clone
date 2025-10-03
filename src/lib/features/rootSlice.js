import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";
import { productApi } from "../services/productApi";
import { warehouseApi } from "../services/warehouseApi";
import { orderApi } from "../services/orderApi";
import { inventoryApi } from "../services/inventoryApi";
import { flashSalesApi } from "../services/flashSalesApi";
import { shipingApi } from "../services/shipingApi";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import { userApi } from "../services/userApi";
import {paymentApi} from '../services/paymentApi';
import {shopifyAccountsApi} from "../services/shopifyAccountsApi"

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  [userApi.reducerPath]: userApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [warehouseApi.reducerPath]: warehouseApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [inventoryApi.reducerPath]: inventoryApi.reducer,
  [flashSalesApi.reducerPath]: flashSalesApi.reducer,
  [shipingApi.reducerPath]: shipingApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [shopifyAccountsApi.reducerPath]:shopifyAccountsApi.reducer
  
});

export default rootReducer;
