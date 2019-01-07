import { combineReducers } from "redux";
import paintingsData from "../paintings.json";

const searchTextReducer = (searchText = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return searchText;
  }
};

const paintingsReducer = (paintings = paintingsData.paintings, action) => {
  switch (action.type) {
    case "INCREASE_VOTES":
      return paintings.map(p => {
        if (p.id === action.paintingId) {
          return {
            ...p,
            votes: p.votes + 1
          };
        } else {
          return p;
        }
      });
    case "UPDATE_PAINTING":
      return paintings.map(p => {
        if (p.id === action.paintingId) {
          return {
            ...p,
            title: action.payload.title,
            artist: {
              ...p.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          };
        } else {
          return p;
        }
      });
    default:
      return paintings;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
});

export default rootReducer;
