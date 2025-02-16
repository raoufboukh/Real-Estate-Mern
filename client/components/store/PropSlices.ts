/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const GetProps = createAsyncThunk(
  "prop/getProps",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/properties");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProperty = createAsyncThunk(
  "prop/property",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/properties/${id}`);
      return response.data;
    } catch (error) {
      const errorMessage =
        (error as any).response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const addProps = createAsyncThunk(
  "prop/addProps",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/add-properties", data);
      toast.success("Request added successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

interface Props {
  _id: string;
  country: string;
  city: string;
  address:string;
  title:string;
  price: number;
  description: string;
  image: string;
  bedrooms: number;
  parkings: number;
  bathrooms: number;
  createdAt: string;
}


interface PropState {
    prop: any;
    props: Props[];
    loading: boolean;
    error: any;
}


const initialState: PropState = {
    prop: null,
    props: [],
    loading: false,
    error: null
}


export const PropSlices = createSlice({
    name: 'prop',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(GetProps.pending, (state) => {
            state.loading = true;
        }).addCase(GetProps.fulfilled, (state, action) => {
            state.props = action.payload;
            state.loading = false;
        }).addCase(GetProps.rejected, (state) => {
            state.loading = false;
        }).addCase(getProperty.pending, (state) => {
            state.loading = true;
        }).addCase(getProperty.fulfilled, (state, action) => {
            state.prop = action.payload;
            state.loading = false;
        }).addCase(getProperty.rejected, (state) => {
            state.loading = false;
        })
        .addCase(addProps.pending, (state) => {
            state.loading = true;
        }).addCase(addProps.fulfilled, (state,action) => {
            state.props = [...state.props, action.payload];
            state.loading = false;
        }).addCase(addProps.rejected, (state) => {
            state.loading = false;
        })
    }
})


export default PropSlices.reducer;