import React from 'react';

const Rental = props => {
  return (
    <section id="rental" className={props.className}>
      <div className="card mt-1 mr-1">
        <div className="card-body">
          <div className="mr-2">{props.id}</div>
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.title}</p>
          {props.key}
        </div>
      </div>
    </section>
  );
};

export default Rental;
