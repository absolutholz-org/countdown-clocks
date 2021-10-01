import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import IndexedDBProvider from 'use-indexeddb';

import Home from './components/pages/Home';
import Countdown from './components/pages/Countdown';

import dbConfig from './dbConfig';

function App() {
  return (
    <IndexedDBProvider config={dbConfig}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countdown/:id" component={Countdown} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </IndexedDBProvider>
  );
}

export default App;
