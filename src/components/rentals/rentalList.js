import React, { Component } from 'react';
import Rental from './rental';
export default class RentalList extends Component {
  constructor() {
    super();
    this.onAddNewRental = this.onAddNewRental.bind(this);
  }
  state = {
    rentalList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  };
  renderRentalList = () => {
    return this.state.rentalList.map((rental, index) => {
      return <Rental className="col-md-3" id={index} key={index} />;
    });
  };

  onAddNewRental() {
    const rentals = this.state.rentalList;
    rentals.push(1);
    this.setState({ rentalList: rentals });
  }
  render() {
    return (
      <section id="rentalList">
        <button
          type="button"
          onClick={this.onAddNewRental}
          className="btn btn-dark btn-sm"
        >
          Add Rental
        </button>
        <div className="font-weight-bold">Your home all around the worls!</div>
        <div className="row">{this.renderRentalList()}</div>
      </section>
    );
  }
}
