import { configureStore } from "@reduxjs/toolkit";
import shapeReducer from "./features/shapes/shapeSlice";

const store = configureStore({
  reducer: {
    shapes: shapeReducer,
  },
});

export default store;
