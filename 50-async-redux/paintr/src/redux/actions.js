const changeSearchText = (value) => {
  return { type: "CHANGE_SEARCH_TEXT", value };
}

const increaseVotes = (paintingId) => {
  return { type: "INCREASE_VOTES", paintingId };
}

const updatePainting = ({ title, name, birthday, deathday, paintingId }) => {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday },
    paintingId
  };
}

export { changeSearchText, increaseVotes, updatePainting };
