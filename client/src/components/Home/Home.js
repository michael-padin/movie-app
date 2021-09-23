import React, { useEffect } from "react";
import "./Home.scss";

import MovieListing from "../MovieListing/MovieListing.js";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const defaultMovie = "Harry";
  const defaultSeries = "Harry";

  useEffect(() => {
    const fetchMovies = async () => {};
    dispatch(fetchAsyncMovies(defaultMovie));
    dispatch(fetchAsyncSeries(defaultSeries));
    fetchMovies();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="bannerImg"></div> 
      <MovieListing />
    </div>
  );
};

export default Home;
