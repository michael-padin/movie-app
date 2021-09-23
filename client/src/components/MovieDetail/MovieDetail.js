import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  fetchAsyncSelectedMovie,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../features/movies/movieSlice.js";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncSelectedMovie(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movieSection">
      {Object.keys(data).length === 0 ? (
        <div>
          <h1>LOAADING BITCH</h1>
        </div>
      ) : (
        <>
          <div className="sectionLeft">
            <div className="movieTitle">{data.Title}</div>
            <div className="movieRating">
              <span>
                IMDB Rating <i className="fa fa-star"></i>: {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i>: {data.imdbVotes}
              </span>
              <span>
                IMDB Runtime <i className="fa fa-film"></i>: {data.Runtime}
              </span>
              <span>
                IMDB Year <i className="fa fa-calendar"></i>: {data.Year}
              </span>
            </div>
            <div className="moviePlot">{data.Plot}</div>
            <div className="movieInfo">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="sectionRight">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
