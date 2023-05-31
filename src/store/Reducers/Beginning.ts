import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBEgin {
  loader: boolean;
  error: string;
}

const initialState: IBEgin = {
  loader: false,
  error: "",
};

export const Beginning = createSlice({
  name: "IZDE",
  initialState,
  reducers: {
    workingLoader(state) {
      state.loader = true;
    },
    workingError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
  },
});


export const {workingError, workingLoader} = Beginning.actions
export default Beginning.reducer