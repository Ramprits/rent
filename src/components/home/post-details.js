import React from 'react';
const PostDetails = props => {
  return (
    <div>
      <div
        className="card"
        style={{
          marginTop: '1rem',
          height: '20rem',
          cursor: 'pointer',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Welcome to post details</h5>
          <p className="card-text">{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
