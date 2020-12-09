import React from "react";

const Trasnsactions = ({ trasnsactions, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {trasnsactions.map((trasnsaction, index) => (
        <li key={index}>{trasnsaction.Date}</li>
      ))}
    </ul>
  );
};

export default Trasnsactions;
