// "use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const checkAuth = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/check");
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/signIn", data);
      toast.success("Login successful");
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/signUp", data);
      console.log(response.data);
      toast.success("Register successful");
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "auth/favourites",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/add-favourites", data);
      toast.success("Added to favourites");
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "auth/removeFav",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/remove-favourites/${id}`);
      toast.success("Removed favourites");
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/signOut");
      toast.success("Logout successful");
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export interface User {
  _id: string;
  email: string;
  notification: [string | number];
  role: string;
  favourites: [any];
  booking: [any];
}

interface AuthState {
  user: User | null;
  isChecking: boolean;
  isSignInUp: boolean;
  isLogginIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isChecking: false,
  isSignInUp: false,
  isLogginIn: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isChecking = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isChecking = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isChecking = false;
      })
      .addCase(login.pending, (state) => {
        state.isLogginIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogginIn = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLogginIn = false;
      })
      .addCase(register.pending, (state) => {
        state.isSignInUp = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSignInUp = false;
      })
      .addCase(register.rejected, (state) => {
        state.isSignInUp = false;
      }).addCase(addFavorite.pending, (state) => {
        state.isChecking = true;
      }).addCase(addFavorite.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isChecking = false;
      }).addCase(addFavorite.rejected, (state) => {
        state.isChecking = false;
      }).addCase(removeFavorite.pending, (state) => {
        state.isChecking = true;
      }).addCase(removeFavorite.fulfilled, (state,action) => {
        state.user = action.payload;
        state.isChecking = false;
      }).addCase(removeFavorite.rejected, (state) => {
        state.isChecking = false;
      })
      .addCase(logout.pending, (state) => {
        state.isChecking = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isChecking = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isChecking = false;
      });
  },
});

export default AuthSlice.reducer;
