import React, { Component } from "react";
import Rental from "./rental";
export default class RentalList extends Component {
  state = {
    rentalList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  };

  renderRentalList = () => {
    return this.state.rentalList.map((rental, index) => {
      return <Rental className="col-md-3" id={index} key={index} />;
    });
  };
  render() {
    return (
      <section id="rentalList">
        <div className="font-weight-bold">Your home all around the worls!</div>
        <div className="row">{this.renderRentalList()}</div>
      </section>
    );
  }
}
