import axios from 'axios'
import { createListStart, createListsFailure, createListsSuccess, deleteListsFailure, deleteListsStart, deleteListsSuccess, getListsFailure, getListsStart, getListsSuccess } from './ListActions';

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
      const response = await axios.get("/lists", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getListsSuccess(response.data));
    } catch (err) {
      dispatch(getListsFailure());
    }
  };

  export const createLists = async (list, dispatch) => {
    dispatch(createListStart());
    try {
       const response=await axios.post("/lists/",list, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createListsSuccess(response.data));
    } catch (err) {
      dispatch(createListsFailure());
    }
  };

  export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListsStart());
    try {
       await axios.delete("/lists/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteListsSuccess(id));
    } catch (err) {
      dispatch(deleteListsFailure());
    }
  };