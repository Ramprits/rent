import { FETCH_RENTALS } from './types';
const rentals = [
  {
    id: 1,
    name: 'Ramprit Sahani',
    email: 'Rampritsahani@gmail.com',
    title: 'Software developer',
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
    title: 'Tester developer',
  },
];
export const fetchRentals = () => {
  return {
    type: FETCH_RENTALS,
    rentals,
  };
};
