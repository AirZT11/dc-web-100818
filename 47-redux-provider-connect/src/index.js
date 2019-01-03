import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import Header from "./Header";
import Counter from "./Counter";

// How did we set up the 'plumbing' for react-router-dom?
// import { BrowserRouter as Router } from 'react-router-dom';
//  <BrowserRouter>
//   <App />
// </BrowserRouter>
//

// withRouter function?
// import from 'react-router-dom'

// <Route children={SomeComponent} />
// SomeComponent gets props history, location, match
// export withRouter(SomeComponent)
// gives you access to props, including history inside SomeComponent

// Higher Order Component HOC
// withRouter: (ReactComponent) => ReactComponent

// specialHOC: (customization) => (ReactComponent) => ReactComponent
// connect

// set up our store

// takes in (state: { count }, action: { type: string }), returns state: { count }
const reducer = (state = { count: 0 }, action) => {
  // return the new state
  // console.log("state", state, "action", action);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    default:
      return state;
  }
};

// actions
// object
// 'type' key
// ...and anything else we need

// { type: "INCREMENT", amount: 1 }

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Counter />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
