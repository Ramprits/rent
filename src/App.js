import React, { Component } from "react";
import Header from "./shared/Header";
import Home from "./components/home/home";
import RentalList from "./components/rentals/rentalList";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Home />
          <RentalList />
        </div>
      </div>
    );
  }
}

export default App;
