import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";

class Header extends Component {
  renderDescription = () => {
    const count = this.props.count;
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  render() {
    console.log("header props:", this.props);
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

// what props does the header need from the redux store?
// props: { count }

const mapStateToProps = state => {
  return { count: state.count };
  // the props we need for the header
};

const withHeaderProps = connect(mapStateToProps);
const ConnectedHeader = withHeaderProps(Header);

export default ConnectedHeader;
