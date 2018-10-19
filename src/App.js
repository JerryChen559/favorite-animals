import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import routes from "./routes";
import store from "./ducks/store";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header className="header" />
            <Navbar className="navbar" />
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
