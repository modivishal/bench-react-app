import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import Trasnsactions from "./components/Trasnsactions";




const App = () => {
  const [trasnsactions, setTrasnsactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [txnPerPage] = useState(10);

  useEffect(() => {
    const fetchTrasnsactions = async (pageCount) => {
      setLoading(true);
      const res = await axios.get(`http://localhost:3000/`);
      setTrasnsactions(res.data);
      setLoading(false);
     
    };

    fetchTrasnsactions();
  }, []);

  // console.log("++++++++++",trasnsactions);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Bench Test</h1>
      <ul className="mb-4">
        <Trasnsactions trasnsactions={trasnsactions} loading={loading} />
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
