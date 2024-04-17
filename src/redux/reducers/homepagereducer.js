
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchImageData = createAsyncThunk(            //async action creator that fetches image data 
  'homepagereducer/fetchImageData', //slicename/actionname/actiontype
  async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=25');
    const data = await response.json();
    return data;
  }
);

const homepagereducerSlice = createSlice({
  name: 'homepagereducer',
  initialState: {
    imageData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {  //cases not handled by the other reducers
    builder
      .addCase(fetchImageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImageData.fulfilled, (state, action) => {
        state.loading = false;
        state.imageData = action.payload;
      })
      .addCase(fetchImageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homepagereducerSlice.reducer;
