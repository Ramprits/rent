import React from 'react';

const News = props => {
  return (
    <div className={props.className}>
      <div
        className="card"
        style={{
          marginTop: '1rem',
          height: '20rem',
          cursor: 'pointer',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
