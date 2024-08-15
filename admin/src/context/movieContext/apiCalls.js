import axios from "axios";
import {
    createMoviesFailure,
    createMoviesStart,
    createMoviesSuccess,
  deleteMoviesFailure,
  deleteMoviesStart,
  deleteMoviesSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const response = await axios.get("movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(response.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

export const createMovies = async (movie, dispatch) => {
    dispatch(createMoviesStart());
    try {
       const response=await axios.post("/movies",movie, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createMoviesSuccess(response.data));
    } catch (err) {
      dispatch(createMoviesFailure());
    }
  };

export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMoviesStart());
  try {
     await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (err) {
    dispatch(deleteMoviesFailure());
  }
};
