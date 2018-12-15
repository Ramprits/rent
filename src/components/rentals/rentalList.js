import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rental from './rental';
class RentalList extends Component {
  renderRentalList = () => {
    return this.props.rentals.map((rental, index) => {
      return (
        <div>
          <Rental
            name={rental.name}
            email={rental.email}
            title={rental.title}
            key={rental.id}
          />
        </div>
      );
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

function mapStateToProps(state) {
  return {
    rentals: state.rentals,
  };
}

export default connect(mapStateToProps)(RentalList);
