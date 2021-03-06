import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID_SUCESS,
  FETCH_RENTAL_BY_ID_INIT,
} from '../actions/types';
const INITIAL_STATE = {
  rentals: {
    data: [],
  },
  rental: {
    data: {},
  },
};
export const RentalReducer = (state = INITIAL_STATE.rentals, action) => {
  switch (action.type) {
    case FETCH_RENTALS:
      return { ...state, data: action.rentals };
    default:
      return state;
  }
};

export const SelectedRentalReducer = (state = INITIAL_STATE.rental, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_INIT:
      return { ...state, data: {} };
    case FETCH_RENTAL_BY_ID_SUCESS:
      return Object.assign({}, state, { data: action.rental });
    default:
      return state;
  }
};
