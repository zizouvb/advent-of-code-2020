import { countTrees, computeProductOfTrees, SLOPES } from "./3";
const example = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#"
];
describe("part1", () => {
  it("should return 0 if no tree", () => {
    expect(countTrees(["...........", "..........."])).toEqual(0);
  });
  it("should return 1 if one tree in position [3,1] ", () => {
    expect(countTrees(["...........", "...#......."])).toEqual(1);
  });
  it("should return 2 if one tree in position [3,1] and one in position [6,2]", () => {
    expect(countTrees(["...........", "...#.......", "......#..."])).toEqual(2);
  });
  it("should return 2 if one tree in position [3,1] and one in position [1,2] and length row is 5", () => {
    expect(countTrees([".....", "...#.", ".#..."])).toEqual(2);
  });
  it("should manage to do the example", () => {
    expect(countTrees(example)).toEqual(7);
  });
});

describe("part2", () => {
  it("should return 0 if one tree in position [3,1] and given a slop of 1,1", () => {
    expect(
      countTrees(["...........", "...#......."], { right: 1, down: 1 })
    ).toEqual(0);
  });
  it("should return 2 if example is given with a slop of 1,2", () => {
    expect(countTrees(example, { right: 1, down: 2 })).toEqual(2);
  });
  it("should compute product of trees encountered of the example", () => {
    expect(computeProductOfTrees(example, SLOPES)).toEqual(336);
  });
  it("should compute product of trees encountered of the first 2 slops of the example", () => {
    expect(computeProductOfTrees(example, SLOPES.slice(0, 2))).toEqual(2 * 7);
  });
});
