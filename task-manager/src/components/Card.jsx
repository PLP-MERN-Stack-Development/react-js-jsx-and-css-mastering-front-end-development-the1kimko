import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
