import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage"
import ManageHouseSort from "./Components/ManageHouseSort"

function App() {
  return (
     <>
      <Route path="/" exact component={HomePage} />
      <Route path="/house" exact component={ManageHouseSort} />
     </>
  );
}

export default App;