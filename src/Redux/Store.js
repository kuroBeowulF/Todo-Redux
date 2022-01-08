import { createStore } from "redux";
import { rootReducer } from "./rootReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCofig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistCofig, rootReducer);
export const store = createStore(persistedReducer);
export const persistore = persistStore(store);
