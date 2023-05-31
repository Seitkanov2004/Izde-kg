import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BeginReducer from "./Reducers/Beginning"


const rootReducer = combineReducers({
    BeginReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
