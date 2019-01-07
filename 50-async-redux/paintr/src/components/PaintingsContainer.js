import React from "react";
import { Route, Switch } from "react-router-dom";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";
import {connect} from "react-redux"
import {fetchingPaintings} from '../redux/actions'

class PaintingsContainer extends React.Component {
  componentDidMount(){
    this.props.fetchingPaintings()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            component={PaintingForm}
          />
          <Route
            path="/paintings/:paintingId"
            component={PaintingDetail}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar />
                <PaintingsList />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {fetchingPaintings})(PaintingsContainer);
