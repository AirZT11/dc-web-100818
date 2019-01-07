import { combineReducers } from "redux";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "LOADING_PAINTINGS":
      return true
    case "FETCHED_PAINTINGS":
      return false;
    default:
      return state
  }
}

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state;
  }
};

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case "INCREASE_VOTES":
      return state.map(painting => {
        if (painting.id === action.paintingId) {
          return {
            ...painting,
            votes: painting.votes + 1
          };
        } else {
          return painting;
        }
      });
    case "UPDATE_PAINTING":
      return state.map(painting => {
        if (painting.id === action.paintingId) {
          return {
            ...painting,
            title: action.payload.title,
            artist: {
              ...painting.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          };
        } else {
          return painting;
        }
      })
    case "FETCHED_PAINTINGS":
      return action.paintings
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer,
  loading: loadingReducer
});

export default rootReducer;
