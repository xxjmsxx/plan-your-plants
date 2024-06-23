// redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Async thunk to fetch logged-in status
export const fetchLoggedInStatus = createAsyncThunk(
  "auth/fetchLoggedInStatus",
  async () => {
    const response = await api.get("/is_logged_in");
    return response.data.logged_in;
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoggedInStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = action.payload;
      })
      .addCase(fetchLoggedInStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
