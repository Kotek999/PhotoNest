import textData from "../../../../textData.json";
import { createSlice } from "@reduxjs/toolkit";
import { RedirectAction } from "../../../types";

const initialState = {};

const authTokenSlice = createSlice({
  name: textData.value.auth,
  initialState,
  reducers: {
    getAuthToken: (state, action: RedirectAction) => {
      const { redirect } = action.payload;
    },
  },
});

export const { getAuthToken } = authTokenSlice.actions;

export default authTokenSlice.reducer;
