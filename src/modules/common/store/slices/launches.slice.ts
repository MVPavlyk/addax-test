import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { launchesServices } from '../../services/launches.services';
import { ILaunch } from '../../types/launch.types';

export const getLaunches = createAsyncThunk(
  'launchesSlice/getLaunches',
  async (config: any, { rejectWithValue }) => {
    try {
      const apiData = await launchesServices.getLaunches(config);
      const pageNum = config.pageNumber
      delete config.pageNumber
      return { apiData, config, pageNum };
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

interface IInitialState {
  error: null | string | any,
  status: null | string,
  prevPageNum: number,
  totalPages: number,
  params: {
    sortParams?: string,
    sortOrder?: number
    searchQuery?: string
  },
  launches: ILaunch[]
}

const initialState: IInitialState = {
  error: null,
  status: null,
  prevPageNum: 0,
  totalPages: 0,
  params: {},
  launches: []
}


  const launchesSlice = createSlice({
  name: 'launchesSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLaunches.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getLaunches.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        if (
          JSON.stringify(state.params) !== JSON.stringify(action.payload.config)
        ) {
          state.launches = action.payload.apiData.docs;
          state.prevPageNum = action.payload.pageNum;
          state.totalPages = action.payload.apiData.totalPages;
          state.params = action.payload.config;
        } else if (state.prevPageNum !== action.payload.pageNum) {
          state.launches = state.launches.concat(action.payload.apiData.docs);
          state.prevPageNum = action.payload.pageNum;
          state.totalPages = action.payload.apiData.totalPages;
        }
      })
      .addCase(getLaunches.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  }
});


const launchesReducers = launchesSlice.reducer;

export default launchesReducers;
