import React, { Component } from "react";
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
    this.cardListing = this.cardListing.bind(this);
  }

  cardListing() {
    return this.props.countries.map(item => {
      return (
        <div className="card" key={item.name} >
          <div className="card-image">
            <img src={item.flag} onClick={this.props.detailChecker} id={item.name}/>
          </div>
          <div className="details">
            <h3>{item.name}</h3>
            <p>
              <span>Population:</span> {item.population}
            </p>
            <p>
              <span>Region:</span> {item.region}
            </p>
            <p>
              <span>Capital:</span> {item.capital}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.countries !== undefined) {
      return <div className="card-container">{this.cardListing()}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}
