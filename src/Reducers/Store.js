import { createStore } from "redux";
import { rootReducer } from "./rootReducers";
import { persisStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistCofig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistCofig, rootReducer);
export const store = createStore(persistedReducer);
export const persistore = persistStore(store);
