// src/store/slices/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api";


const initialState = {
    "user": null,
    "bio": null,
    "profile_picture": null,
    "is_verified": null,
    "phone_number": null,
    "location": null,
    "date_of_birth": null,
    "gender": null,
    "education": null,
    "preferred_language": null
}


// ✅ Async thunk to fetch user info
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("api-v1/userget/");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.detail || "Failed to fetch user data");
    }
  }
);

// ✅ Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        return { ...state, ...action.payload, loading: false };
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;