import { readFile, computeMax, computeMin } from "./../../utils";

const INIT_ROW_RANGES = [0, 127];
const INIT_COL_RANGES = [0, 7];
const HALF_FRONT = "F";
const HALF_LEFT = "L";
const EIGHT = 8;

export const computeDichotomie = ({ code, initRange, carCode }) => {
  const finalRange = code.split("").reduce((curRange, curCode) => {
    if (curCode === carCode) {
      return [curRange[0], Math.floor((curRange[1] + curRange[0]) / 2)];
    }
    return [Math.ceil((curRange[1] + curRange[0]) / 2), curRange[1]];
  }, initRange);
  return finalRange[0];
};

export const computeRow = (boardingPass: string) => {
  const rowCode = boardingPass.slice(0, 7);
  const row = computeDichotomie({
    code: rowCode,
    initRange: INIT_ROW_RANGES,
    carCode: HALF_FRONT
  });
  return row;
};
export const computeCol = (boardingPass: string) => {
  const colCode = boardingPass.slice(7);
  const col = computeDichotomie({
    code: colCode,
    initRange: INIT_COL_RANGES,
    carCode: HALF_LEFT
  });
  return col;
};

export const computeId = (boardinPass: string) => {
  const row = computeRow(boardinPass);
  const col = computeCol(boardinPass);
  const id = row * EIGHT + col;
  return id;
};

const input = readFile("./days/day5/5.input.txt");
export const day5ComputeResultPart1 = () => {
  const maxId = computeMax(input.map(computeId));
  return maxId;
};

export const day5ComputeResultPart2 = () => {
  const seatsId = input.map(computeId).sort((a, b) => a - b);
  const mySeat = seatsId.reduce(
    (acc, cur) => {
      if (acc.found) return acc;
      if (cur - acc.prev > 1) return { found: true, id: cur - 1 };
      else return { prev: cur };
    },
    { prev: seatsId[0] }
  );
  return mySeat.id;
};
