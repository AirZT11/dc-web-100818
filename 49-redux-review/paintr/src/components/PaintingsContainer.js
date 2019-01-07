import React from "react";
import { Route, Switch } from "react-router-dom";

import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          {/*<Route
            path="/paintings/:paintingId/edit"
            render={data => {
              let selectedPainting = this.state.paintings.find(
                painting => painting.id === data.match.params.paintingId
              );
              return (
                <PaintingForm
                  painting={selectedPainting}
                  updatePaintingInfo={this.updatePaintingInfo}
                />
              );
            }}
          />*/}
          <Route
            path="/paintings/:paintingId"
            render={(routerProps) => <PaintingDetail paintingId={routerProps.match.params.Id}/>}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar/>
                <PaintingsList/>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
