import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./components/home/home";
import PostDetails from "./components/home/post-details";

import RentalList from "./components/rentals/rentalList";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/:id" component={PostDetails} />
            <Route exact path="/rentalList" component={RentalList} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
