import { readFile } from "./../../utils";

export const processInput = (input: string) => {
  const [range, _letter, password] = input.split(" ");
  const [min, max] = range.split("-").map(n => parseInt(n));
  const letter = _letter[0];

  return {
    min,
    max,
    letter,
    password
  };
};

export const computeValidity = ({ min, max, letter, password }) => {
  const nbOccurrence = password.split("").filter(l => letter === l).length;
  return nbOccurrence >= min && nbOccurrence <= max;
};

export const computeFixedValidity = ({
  min: firstIndex,
  max: secondIndex,
  letter,
  password
}) => {
  const firstLetter = password[firstIndex - 1];
  const secondLetter = password[secondIndex - 1];

  return (
    firstLetter !== secondLetter &&
    (firstLetter === letter || secondLetter === letter)
  );
};

export const computeNbOfValidity = (rawInput: string[]) => {
  const processedInput = rawInput.map(row => processInput(row));
  const computeNbOfValidity = processedInput.filter(row => computeValidity(row))
    .length;
  return computeNbOfValidity;
};

export const computeFixedNbOfValidity = (rawInput: string[]) => {
  const processedInput = rawInput.map(row => processInput(row));
  const computeNbOfValidity = processedInput.filter(row =>
    computeFixedValidity(row)
  ).length;
  return computeNbOfValidity;
};

const input = readFile("./days/day2/2.input.txt");
export const day2ComputeResultPart1 = () => {
  return computeNbOfValidity(input);
};

export const day2ComputeResultPart2 = () => {
  return computeFixedNbOfValidity(input);
};
