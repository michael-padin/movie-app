import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import "./MovieListing.scss";
import {
  getAllMovies,
  getAllSeries,
} from "../../features/movies/movieSlice.js";
import MovieCard from "../MovieCard/MovieCard.js";
import { Settings } from "../../common/settings.js";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  const moviesStatus = useSelector(state => state.movies.status);
  const renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, idx) => {
        return <MovieCard key={idx} data={movie} />;
      })
    ) : (
      <div className="searchError">
        <h3>{movies.Error}</h3>
      </div>
    );

  const renderSeries =
    series.Response === "True" ? (
      series.Search.map((movie, idx) => {
        return <MovieCard key={idx} data={movie} />;
      })
    ) : (
      <div className="searchError">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movieWrapper">
      {moviesStatus=== "pending" ? (
      <div><h1>Helllo, Loading</h1></div>
      ) : (
        <>
          <div className="movieList">
            <h2>Movies</h2>
            <div className="movieContainer">
              <Slider {...Settings}>{renderMovies}</Slider>
            </div>
          </div>
          <div className="seriesList">
            <h2>Series</h2>
            <div className="movieContainer">
              <Slider {...Settings}>{renderSeries}</Slider>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
