import { createSlice } from "@reduxjs/toolkit";

// interface ExampleState {}

const square = {
  type: "square",
  x: 20,
  y: 20,
  width: 50,
  height: 50,
  fill: "red",
  draggable: true,
};

const initialState = {
  shapes: [],
};

const shapeSlice = createSlice({
  name: "shapes",
  initialState,
  reducers: {
    addSquare(state, action) {},
  },
});

// export const { exampleAction } = shapeSlice.actions;
export default shapeSlice.reducer;
