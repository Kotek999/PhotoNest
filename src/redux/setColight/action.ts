import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColightAssets, PointsValue } from "../../types";

const initialState = {
  colight: 0,
  loading: false,
  error: null,
};

const setColightSlice = createSlice({
  name: "setColight",
  initialState,
  reducers: {
    setColight: (state, action: PayloadAction<ColightAssets>) => {
      state.loading = true;
      const { colight, currentUserId, userId } = action.payload;
    },
    setPoints: (state, action: PayloadAction<PointsValue>) => {
      state.loading = true;
      const { points } = action.payload;
    },
    setColightSuccess: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.colight = action.payload;
      state.error = null;
    },
    setColightFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setColight, setPoints, setColightSuccess, setColightFailure } =
  setColightSlice.actions;

export default setColightSlice.reducer;
