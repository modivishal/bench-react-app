import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const App = () => {

  async function getData() {
    console.log('calling');
    const result = await axios(
      `https://resttest.bench.co/transactions/1.json`
    )
    console.log(result);
  }

  getData();

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     // setIsLoading(true)
      

  //     // setItems(result.data)
  //     // setIsLoading(false)
  //   }
  // });

  return (
    <h1>Welcome to the Bench React App!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
