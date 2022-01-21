import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import Intro from './intro';
// Created by https://tonyhazama.github.io/

export default function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Landing} exact />
          {/* {/* <Route path="/bread" component={Bread} exact /> */}
          <Route path="/intro" component={Intro} exact /> */}
        </Switch>
      </HashRouter>
    </div>
  )
}
