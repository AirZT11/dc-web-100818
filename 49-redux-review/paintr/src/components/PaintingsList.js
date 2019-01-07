import React from "react";
import PaintingListItem from "./PaintingListItem";
import {connect} from 'react-redux'

const PaintingsList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          selectPainting={props.selectPainting}
          painting={painting}
          key={painting.id}
        />
      ))}
    </div>
  </div>
);

//paintings is the original 100, paintings filtered based on the state.searchText
const mapStateToProps = state => {
  return {
    paintings: state.paintings.filter(p => p.title.includes(state.searchText))
  }
}

export default connect(mapStateToProps)(PaintingsList);
