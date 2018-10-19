import React from "react";
import { Switch, Route } from "react-router-dom";

import AnimalEdit from "./components/AnimalEdit";
import AnimalList from "./components/AnimalList";
import About from "./components/About";
import Home from "./components/Home";

export default (
  <Switch>
    <Route path="/animalEdit/:id" component={AnimalEdit} />
    <Route path="/animalList" component={AnimalList} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={Home} />
    <Route
      path="*"
      render={() => (
        <div>
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
