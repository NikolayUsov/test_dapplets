import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './picture/logo.svg';
import './App.css';
import { AppRoutes } from '../../const';
import AllDapplets from '../../pages/all-dapplets';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
    <Route exact path={AppRoutes.ROOT}>
      <AllDapplets />
    </Route>
  </Switch>
    </BrowserRouter>

  );
}

export default App;
