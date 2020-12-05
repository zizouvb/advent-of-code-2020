import {
  computeValidity,
  processInput,
  computeNbOfValidity,
  computeFixedValidity,
  computeFixedNbOfValidity
} from "./2";
const example = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
describe("part1", () => {
  it("should return {min:1, max:3, letter:a, password:abcde} if 1-3 a: abcde is provided", () => {
    expect(processInput("1-3 a: abcde")).toEqual({
      min: 1,
      max: 3,
      letter: "a",
      password: "abcde"
    });
  });
  it("should return {min:1, max:3, letter:b, password:cdefg} if 1-3 b: cdefg is provided", () => {
    expect(processInput("1-3 b: cdefg")).toEqual({
      min: 1,
      max: 3,
      letter: "b",
      password: "cdefg"
    });
  });
  it("should find true if 1-3 a: abcde is provided", () => {
    const processedInput = processInput("1-3 a: abcde");
    expect(computeValidity(processedInput)).toBe(true);
  });
  it("should return false if `cdefg`is given", () => {
    const processedInput = processInput("1-3 b: cdefg");
    expect(computeValidity(processedInput)).toBe(false);
  });
  it("should return 2 if `example input`is given", () => {
    expect(computeNbOfValidity(example)).toBe(2);
  });
});

describe("part2", () => {
  it("should find true if 1-3 a: abcde is provided", () => {
    const processedInput = processInput("1-3 a: abcde");
    expect(computeFixedValidity(processedInput)).toBe(true);
  });
  it("should return false if `2-9 c: ccccccccc`is given", () => {
    const processedInput = processInput("2-9 c: ccccccccc");
    expect(computeFixedValidity(processedInput)).toBe(false);
  });
  it("should return 2 if `example input`is given", () => {
    expect(computeFixedNbOfValidity(example)).toBe(1);
  });
});
