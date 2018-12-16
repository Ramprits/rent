import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class RentalDetails extends Component {
  componentWillMount() {
    const rentalId = +this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }
  render() {
    const rental = this.props.rental;
    return (
      <div className="row">
         <div className="card offset-3 col-md-4"
        style={{
          marginTop: '1rem',
          width:"20%",
          height: '20rem',
          cursor: 'pointer',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
          {rental.name}
          </h5>
          <p className="card-text">{rental.email}</p>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data,
  };
}

export default connect(mapStateToProps)(RentalDetails);
