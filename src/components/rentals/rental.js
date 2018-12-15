import React from 'react';

const Rental = props => {
  return (
    <section id="rental" className={props.className}>
      <div className="card mt-1 mr-1">
        <div className="card-body">
          <div className="mr-2">{props.id}</div>
          Welcome to Retal
        </div>
      </div>
    </section>
  );
};

export default Rental;
