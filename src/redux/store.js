import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/currentUserSlice";
import gardenReducer from "./slices/myGardensSlice";
import plantReducer from "./slices/myPlantsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    gardens: gardenReducer,
    plants: plantReducer,
  },
});

export default store;
