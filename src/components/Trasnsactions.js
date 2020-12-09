import React from "react";
import { Table } from "react-bootstrap";

const Trasnsactions = ({ trasnsactions, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Company</th>
          <th>Account</th>
          <th>Total</th>
        </tr>
      </thead>
      {trasnsactions.map((trasnsaction) => (
      <tbody>
        <tr>
          <td>{trasnsaction.Date}</td>
          <td>{trasnsaction.Ledger}</td>
          <td>{trasnsaction.Company}</td>
          <td>{trasnsaction.Amount}</td>
        </tr>
      </tbody>
      ))}
    </Table>
  );
};

export default Trasnsactions;