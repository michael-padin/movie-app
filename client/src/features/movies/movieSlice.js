import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/movieApiKey.js";
import movieApi from "../../common/apis/movieApi.js";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(term) => {
  const { data } = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`);
  return data;
});

export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncShows", async(term) => {
  const { data } = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`);
  return data;
});

export const fetchAsyncSelectedMovie = createAsyncThunk("movies/fetchAsyncSelectedMovie", async(id) => {
  const { data } = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
  return data;
});



const initialState = { movies: {}, series: {}, selectedMovie: {}, status: ""}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return {...state, status: "pending"}
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
      return {...state, movies: payload, status: "fulfilled"};
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
      console.log("fulfilled");
      return {...state, series: payload};
    },
    [fetchAsyncSelectedMovie.fulfilled]: (state, {payload}) => {
      console.log("fulfilled");
      return {...state, selectedMovie: payload};
    }
  }
});

export const {removeSelectedMovie} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;