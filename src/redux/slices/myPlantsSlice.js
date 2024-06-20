// redux/slices/myPlantsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMyPlants } from "../../services/plants";

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async () => {
  const plants = await getMyPlants();
  return plants;
});

const plantsSlice = createSlice({
  name: "plants",
  initialState: {
    myPlants: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.myPlants = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default plantsSlice.reducer;
