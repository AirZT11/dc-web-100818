import { createStore, combineReducers } from "redux";

const initialState = {
  paintings: [],
  searchText: "SOme test search text"
};

const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";

const changeSearchText = value => ({ type: CHANGE_SEARCH_TEXT, value });

const searchTextReducer = (searchText = "", action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.value;
    default:
      return searchText;
  }
};

const paintingsReducer = (paintings = [], action) => {
  console.log(paintings, action);
  return paintings;
};

const reducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
});

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_SEARCH_TEXT:
//       return { paintings: state.paintings, searchText: action.value };
//     default:
//       return state;
//   }
// };

const store = createStore(reducer);

export default store;
export { changeSearchText };
