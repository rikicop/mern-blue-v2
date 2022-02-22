import {
  BLOGS_LIST_FAIL,
  BLOGS_LIST_REQUEST,
  BLOGS_LIST_SUCCESS,
} from "../constants/blogsConstants";
import axios from "axios";

export const listBlog = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOGS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/blogs`);

    dispatch({
      type: BLOGS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: BLOGS_LIST_FAIL,
      payload: message,
    });
  }
};
