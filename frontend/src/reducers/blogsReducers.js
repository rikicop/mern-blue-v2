import {
  BLOGS_LIST_FAIL,
  BLOGS_LIST_REQUEST,
  BLOGS_LIST_SUCCESS,
} from "../constants/blogsConstants";

export const blogsListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case BLOGS_LIST_REQUEST:
      return { loading: true };
    case BLOGS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case BLOGS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
