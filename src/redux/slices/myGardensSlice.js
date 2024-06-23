// redux/slices/myGardensSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMyGardensReq,
  deleteGardenReq,
  createGardenReq,
} from "../../services/gardens";

// Async thunk to fetch gardens
export const fetchGardens = createAsyncThunk(
  "gardens/fetchGardens",
  async () => {
    const gardens = await getMyGardensReq();
    return gardens;
  }
);

export const createGarden = createAsyncThunk(
  "gardens/createGarden",
  async (gardenData) => {
    const garden = await createGardenReq(gardenData);
    return garden;
  }
);

export const deleteGarden = createAsyncThunk(
  "gardens/deleteGarden",
  async (gardenId) => {
    await deleteGardenReq(gardenId);
    return gardenId;
  }
);

const gardensSlice = createSlice({
  name: "gardens",
  initialState: {
    myGardens: null,
    loading: false,
    error: null,
  },
  reducers: {
    removeGarden(state, action) {
      state.myGardens = state.myGardens.filter(
        (garden) => garden.id !== action.payload
      );
    },
    addGarden(state, action) {
      state.myGardens.push(action.payload);
    },
  },
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
      })
      .addCase(deleteGarden.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteGarden.fulfilled, (state, action) => {
        state.loading = false;
        state.myGardens = state.myGardens.filter(
          (garden) => garden.id !== action.payload
        );
      })
      .addCase(deleteGarden.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createGarden.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createGarden.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Garden created:", action.payload);
        console.log(state.myGardens);
        state.myGardens.push(action.payload);
      })
      .addCase(createGarden.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeGarden, addGarden } = gardensSlice.actions;

export default gardensSlice.reducer;
