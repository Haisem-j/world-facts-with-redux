import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import Content from "./Content";
import "../sass/App.scss";
class App extends Component {
  render() {
    return (
      <div className={this.props.dark == true ? "dMode" : ""}>
        <Navbar />
        <Content />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { dark: state.dark };
};

export default connect(mapStateToProps)(App);
