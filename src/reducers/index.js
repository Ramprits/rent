import * as redux from 'redux';
import thunk from 'redux-thunk';

import { RentalReducer, SelectedRentalReducer } from './rental-reducer';
export const init = () => {
  const reducer = redux.combineReducers({
    rentals: RentalReducer,
    rental: SelectedRentalReducer,
  });
  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
  return store;
};
