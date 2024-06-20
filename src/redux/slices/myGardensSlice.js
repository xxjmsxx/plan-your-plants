// redux/slices/myGardensSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMyGardens } from "../../services/gardens";

export const fetchGardens = createAsyncThunk(
  "gardens/fetchGardens",
  async () => {
    const gardens = await getMyGardens();
    return gardens;
  }
);

const gardensSlice = createSlice({
  name: "gardens",
  initialState: {
    myGardens: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGardens.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGardens.fulfilled, (state, action) => {
        state.loading = false;
        state.myGardens = action.payload;
      })
      .addCase(fetchGardens.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gardensSlice.reducer;
