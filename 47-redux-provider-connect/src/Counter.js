import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";

const incrementAction = { type: "INCREMENT", amount: 1 };
const incrementByThreeAction = { type: "INCREMENT", amount: 3 };
const decrementAction = { type: "DECREMENT", amount: 1 };
const decrementByFiveAction = { type: "DECREMENT", amount: 5 };

class Counter extends Component {
  increment = () => {
    this.props.dispatch(incrementAction);
  };

  incrementByThree = () => {
    this.props.dispatch(incrementByThreeAction);
  };

  decrement = () => {
    this.props.dispatch(decrementAction);
  };

  decrementByFive = () => {
    this.props.dispatch(decrementByFiveAction);
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.decrementByFive}> - 5 </button>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
        <button onClick={this.incrementByThree}> + 3 </button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "INCREMENT", amount: 10000 })
          }
        >
          + 10000
        </button>
      </div>
    );
  }
}

// props: { count }
const mapStateToProps = state => {
  return { count: state.count }; // props object
};

const withCounterProps = connect(mapStateToProps);
const ConnectedCounter = withCounterProps(Counter);

export default ConnectedCounter;
