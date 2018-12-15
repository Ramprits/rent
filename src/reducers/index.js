import * as redux from 'redux';
import RentalReducer from './rental-reducer';
export const init = () => {
  const reducer = redux.combineReducers({
    rentals: RentalReducer,
  });
  const store = redux.createStore(reducer);
  return store;
};
