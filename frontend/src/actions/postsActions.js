import {
  POSTS_LIST_FAIL,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
} from "../constants/postsConstants";
import axios from "axios";

export const listPosts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POSTS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts`, config);

    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POSTS_LIST_FAIL,
      payload: message,
    });
  }
};
