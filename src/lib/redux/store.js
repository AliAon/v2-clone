// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootSlice"; // Import your root reducer
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "../services/categoryApi";
import { productApi } from "../services/productApi";
import { warehouseApi } from "../services/warehouseApi";
import { orderApi } from "../services/orderApi";
import { inventoryApi } from "../services/inventoryApi";
import { flashSalesApi } from "../services/flashSalesApi";
import { shipingApi } from "../services/shipingApi";
import { paymentApi } from "../services/paymentApi";
import { shopifyAccountsApi } from "../services/shopifyAccountsApi";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userApi } from "../services/userApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // Only the 'counter' slice will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(categoryApi.middleware)
        .concat(productApi.middleware)
        .concat(warehouseApi.middleware)
        .concat(orderApi.middleware)
        .concat(inventoryApi.middleware)
        .concat(flashSalesApi.middleware)
        .concat(shipingApi.middleware)
        .concat(paymentApi.middleware)
        .concat(shopifyAccountsApi.middleware),
  });

const store = makeStore();
setupListeners(store.dispatch);
const persist = persistStore(store);
export { store, persist };
