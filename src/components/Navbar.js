import React from "react";
import { darkMode } from "../actions";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="title">
          <h1>Where in the world?</h1>
        </div>
        <div
          className={""}
          id="dark"
          onClick={() => this.props.darkMode(this.props.dark)}
        >
          <i className="far fa-moon" />
          Dark mode
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { dark: state.dark };
};

export default connect(
  mapStateToProps,
  {
    darkMode
  }
)(Navbar);
