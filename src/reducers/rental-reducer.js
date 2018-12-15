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
const RentalReducer = (state = rentals, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default RentalReducer;
