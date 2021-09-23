import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice.js";
import "./Header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncSeries(search));
    setSearch("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie app </Link>
      </div>
      <div className="searchBar">
        <form onSubmit={submitHandler}>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Movie"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
