import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCountries, updateCountires, updateDetails } from "../actions";

import Card from "./Card";
import Details from "./Details";
class Content extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      details: false,
      detailCountry: {}
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.clicked = this.clicked.bind(this);
    this.detailChecker = this.detailChecker.bind(this);
  }

  componentDidMount() {
    this.props.fetchCountries();
  }

  detailChecker(event) {
    if (this.props.details !== true) {
      let detailCountry = this.props.filteredData.filter(item => {
        if (event.target.id === item.name) {
          return item;
        }else{
          return '';
        }
      });
      let country = {
        country: detailCountry[0]
        
      }
     country = {...country, details: true}

      this.props.updateDetails(country)
      
    } else {
      this.props.updateDetails({country: null, details: false})
    }
  }

  clicked(event) {
    this.setState(
      {
        filter: event.target.id
      },
      () => {
        this.filteredData();
      }
    );
  }

  change(event) {
    this.setState(
      {
        name: event.target.value
      },
      () => {
        this.filteredData();
      }
    );
  }

  filteredData() {
    let newData = this.props.countries;
    if (this.props.filter !== "All") {
      let ff = this.props.filter;
      newData = newData.filter(item => {
        if (ff === item.region) {
          return true;
        }else{
          return '';
        }
      });
    }

    if (this.state.name !== "") {
      newData = newData.filter(item => {
        let name = item.name.toLowerCase();
        let checker = name.match(this.state.name);
        if (checker !== null) {
          return true;
        }else{
          return '';
        }
      });
    }

    this.props.updateCountires(newData);
  }
  render() {
    if (this.props.details !== true) {
      return (
        <div className="content-container">
          <div className="filters">
            <input
              type="text"
              className="search"
              placeholder="Search for a country...."
              onChange={this.change}
            />
            <div className="dropdown">
              <div className="dropbtn">
                <div>Filter By Region</div>{" "}
                <i className="fas fa-chevron-down" />
              </div>
              <div className="dropdown-content">
                <div className="fit" id="All" onClick={this.clicked}>
                  All
                </div>
                <div className="fit" id="Africa" onClick={this.clicked}>
                  Africa
                </div>
                <div className="fit" id="Americas" onClick={this.clicked}>
                  America
                </div>
                <div className="fit" id="Asia" onClick={this.clicked}>
                  Asia
                </div>
                <div className="fit" id="Europe" onClick={this.clicked}>
                  Europe
                </div>
                <div className="fit" id="Oceania" onClick={this.clicked}>
                  Oceania
                </div>
              </div>
            </div>
          </div>
          <Card
            countries={this.props.filteredData}
            detailChecker={this.detailChecker}
          />
        </div>
      );
    } else {
      return (
        <div className="content-container">
          <Details
            detailChecker={this.detailChecker}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {

  return {
    countries: state.fetchC.countries,
    filter: state.fetchC.filter,
    filteredData: state.fetchC.filteredData,
    details: state.details.details,
    detailsCountry: state.details.detailCountry
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCountries,
    updateCountires,
    updateDetails
  }
)(Content);
