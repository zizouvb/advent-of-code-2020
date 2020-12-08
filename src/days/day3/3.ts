import { readFile } from "./../../utils";

const TREE = "#";
export const SLOPES = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 }
];

export const countTrees = (input, slope = { right: 3, down: 1 }) => {
  const { right, down } = slope;
  let rowIdx = 0;
  const nbTrees = input.reduce((acc, curRow, index) => {
    if (index % down !== 0) return acc;
    if (curRow[(rowIdx * right) % curRow.length] === TREE) {
      rowIdx += 1;
      return acc + 1;
    }
    rowIdx += 1;
    return acc;
  }, 0);
  return nbTrees;
};

export const computeProductOfTrees = (input, slopes = SLOPES) => {
  return slopes.reduce((acc, curSlope) => acc * countTrees(input, curSlope), 1);
};

const input = readFile("./days/day3/3.input.txt");
export const day3ComputeResultPart1 = () => {
  return countTrees(input);
};

export const day3ComputeResultPart2 = () => {
  return computeProductOfTrees(input);
};
