import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home'

function Routers() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> }/>
        </Routes>
      </Router>
  );
}

export default Routers;