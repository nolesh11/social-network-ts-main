import { createSlice } from "@reduxjs/toolkit";

interface IAuthSliceState {
  user: IUser | null,
}

export interface IUser {
  name: string,
  phone_number: string,
}

const initialState: IAuthSliceState = {
  user: null,
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    regUser(state, action) {
      state.user = action.payload
    }
  }
})

export default authSlice.reducer
export const { regUser } = authSlice.actions