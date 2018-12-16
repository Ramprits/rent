import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from 'shared/Header';
import Home from 'components/home/home';
import PostDetails from 'components/home/post-details';

import RentalList from 'components/rentals/rental-list/rentalList';
import RentalDetails from 'components/rentals/rental-details/rentalDetail';

const store = require('./reducers').init();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route
                exact
                path="/"
                render={() => <Redirect to="/rentalList" />}
              />
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/:id" component={PostDetails} />
              <Route exact path="/rentalList" component={RentalList} />
              <Route exact path="/rentalList/:id" component={RentalDetails} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
