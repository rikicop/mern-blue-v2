import {
  POSTS_LIST_FAIL,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
} from "../constants/postsConstants";

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return { loading: true };
    case POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POSTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
