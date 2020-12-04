import { findPair, findTriplet, computeProduct } from "./days/day1/1";

const day1 = () => {
  const pair = findPair();
  console.log(computeProduct(pair));

  const triplet = findTriplet();
  console.log(computeProduct(triplet));
};

day1();
