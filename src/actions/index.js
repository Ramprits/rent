import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID_SUCESS,
  FETCH_RENTAL_BY_ID_INIT,
} from './types';
const rentals = [
  {
    id: 1,
    name: 'Ramprit Sahani',
    email: 'Rampritsahani@gmail.com',
    title: 'Sr. Software developer',
  },
  {
    id: 2,
    name: 'Anita Sahani',
    email: 'Anitasahani@gmail.com',
    title: 'Web developer',
  },
  {
    id: 3,
    name: 'Rambhual Sahani',
    email: 'Rambhualsahani@gmail.com',
    title: 'Software developer',
  },
  {
    id: 4,
    name: 'Monika Sahani',
    email: 'Monikasahani@gmail.com',
    title: 'Sr. Tester developer',
  },
];
export const fetchRentals = () => {
  return {
    type: FETCH_RENTALS,
    rentals,
  };
};

const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT,
  };
};
const fetchRentalByIdSucess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCESS,
    rental,
  };
};
export const fetchRentalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRentalByIdInit());
    setTimeout(() => {
      const rental = rentals.find(res => res.id === rentalId);
      dispatch(fetchRentalByIdSucess(rental));
    }, 3000);
  };
};
