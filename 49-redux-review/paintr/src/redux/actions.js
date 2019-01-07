const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
const VOTE_FOR_PAINTING = "VOTE_FOR_PAINTING";

const changeSearchText = value => ({ type: CHANGE_SEARCH_TEXT, value });
const voteForPainting = paintingId => ({ type: VOTE_FOR_PAINTING, paintingId});

export { changeSearchText, voteForPainting };
