import React, { Component } from "react";
import {connect } from 'react-redux';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      temp: {}
    };
    this.detailRender = this.detailRender.bind(this);
    this.countryGenerator = this.countryGenerator.bind(this);
  }

  countryGenerator(array){
     return array.length
  }

  detailRender() {
    let a  =this.props.country;

    return (
      <div className="details">
        <div className="flag-img">
          <img src={a.flag} alt={a.name}/>
        </div>
        <div className="more-details">
          <h1>{a.name}</h1>
          <div className="contain-more">
            <div className="even-more">
              <h5>Native Name: </h5> {a.nativeName} <br />
              <h5>Population: </h5> {a.population} <br />
              <h5>Region: </h5> {a.region} <br />
              <h5>Sub Region: </h5> {a.subregion} <br />
              <h5>Capital: </h5> {a.capital}
            </div>
            <div className="even-more2">
              <h5>Top Level Domain: </h5> {a.topLevelDomain[0]} <br />
              <h5>Currencies: </h5> {a.currencies[0].code} <br />
              <h5>Languages: </h5> {a.languages.length}
            </div>
          </div>
          <h4 id="border-countries">Border Countries: </h4> 
        </div>
      </div>
    );
  }

  render() {
    
    return (
      <div id="details">
        <div className="back-btn" onClick={this.props.detailChecker}>
          <i className="fas fa-long-arrow-alt-left" />
          Back
        </div>
        {this.detailRender()}
      </div>
    );
  }
}

const mapStateToProps = state=>{

  return {country: state.details.detailCountry};
}

export default connect(mapStateToProps)(Details)