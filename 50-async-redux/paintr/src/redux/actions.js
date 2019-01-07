URL = 'http://localhost:3000/paintings'

const changeSearchText = (value) => {
  return { type: "CHANGE_SEARCH_TEXT", value };
}

const increasedVotes = (paintingId) => {
  return { type: "INCREASE_VOTES", paintingId };
}

const increasingVotes = (paintingId) => {
  return (dispatch, getState) => {
    let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
    fetch(`${URL}/${paintingId}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        votes: oldVotes + 1
      })
    })
    .then(res => res.json())
    .then(painting => {
      dispatch(increasedVotes(paintingId))
    })
  }
}

const updatedPainting = ({ title, name, birthday, deathday, paintingId }) => {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday },
    paintingId
  };
}

const updatingPainting = (painting) => {
  return (dispatch) => {
    fetch(`${URL}/${painting.paintingId}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        title: painting.title,
        artist: {
          "name": painting.name,
          "birthday": painting.birthday,
          "deathday": painting.deathday
        }
      })
    })
    .then(res => res.json())
    .then(() => {
      dispatch(updatedPainting(painting))
    })
  }
}

const fetchedPaintings = (paintings) => {
  return {type:"FETCHED_PAINTINGS", paintings}
}

const loadingPaintings = () => {
  return {type: "LOADING_PAINTINGS"}
}

const fetchingPaintings = () => {
  return (dispatch) => {
    dispatch(loadingPaintings())
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      console.log(paintings)
      dispatch(fetchedPaintings(paintings))
    })
  }
}
//problem 1, we don't have access to dispath()
//problem 2, we can't return a function from an action creator

export { changeSearchText, increasingVotes, updatingPainting, fetchingPaintings };
