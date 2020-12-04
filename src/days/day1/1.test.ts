import { findPair, findTriplet, computeProduct } from "./1";
describe("part1", () => {
  it("should find 0 if [2020,0] is given", () => {
    const pair = findPair([2020, 0]);
    const product = computeProduct(pair);
    expect(product).toBe(0);
  });

  it("should find 2019 if [2019,1] is given", () => {
    const pair = findPair([2019, 1]);
    const product = computeProduct(pair);
    expect(product).toBe(2019);
  });

  it("should find 2019 if [2019,1,3] is given", () => {
    const pair = findPair([2019, 3, 1]);
    const product = computeProduct(pair);
    expect(product).toBe(2019);
  });
});

describe("part2", () => {
  it("should find 0 if [2020,0,0] is given", () => {
    const triplet = findTriplet([2020, 0, 0]);
    const product = computeProduct(triplet);
    expect(product).toBe(0);
  });

  it("should find 2018 if [2018,1,1] is given", () => {
    const triplet = findTriplet([2018, 1, 1]);
    const product = computeProduct(triplet);
    expect(product).toBe(2018);
  });

  it("should find 2018 if [2018,3,1,1] is given", () => {
    const triplet = findTriplet([2018, 3, 1, 1]);
    const product = computeProduct(triplet);
    expect(product).toBe(2018);
  });
});
