import {combineReducers} from 'redux'
import paintingsData from "../paintings.json";


const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
const VOTE_FOR_PAINTING = "VOTE_FOR_PAINTING";

const searchTextReducer = (searchText = "", action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.value;
    default:
      return searchText;
  }
};

const paintingsReducer = (paintings = paintingsData.paintings, action) => {
  console.log(action)
  switch (action.type) {
    case VOTE_FOR_PAINTING:
      //return a copy of paintings, except painting.votes++ will use action.paintingId
      return paintings.map(p => {
        if(p.id === action.paintingId){
          return {...p, votes: p.votes + 1}
        }else{
          return p
        }
      })
    default:
      return paintings;
  }
};

const reducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
});

export default reducer;
