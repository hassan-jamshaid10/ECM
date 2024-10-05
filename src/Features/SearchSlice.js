import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('search/fetchProducts', async (query) => {
  const response = await axios.get(`https://api.freeapi.app/api/v1/ecommerce/products?search=${query}`);
  return response.data.products; // Assuming the API returns a list of products in `products` key
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    products: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = '';
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
