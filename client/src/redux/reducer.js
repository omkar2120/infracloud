import { combineReducers } from "redux";

const initialState = {
  loading: false,
  post: [],
  comment: [],
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case "requestingPost":
      return {
        ...state,
        loading: true,
      };
    case "postSuccess":
      console.log("here!");
      return {
        ...state,
        loading: false,
        post: action.post,
      };
    default:
      return state;
  }
};
const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case "requestingComment":
      return {
        ...state,
        loading: true,
      };
    case "commentSuccess":
      return {
        ...state,
        loading: false,
        comment: action.comment,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postReducers,
  commentReducers,
});
export default rootReducer;
