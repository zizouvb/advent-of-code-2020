import { countYesAnswersInGroup, countEveryYesAnswersInGroup } from "./6";

describe("part1", () => {
  it("should find 3 if [ab,ac] is provided", () => {
    expect(countYesAnswersInGroup(["ab", "ac"])).toBe(3);
  });
  it("should find 1 if [a,a,a] is provided", () => {
    expect(countYesAnswersInGroup(["a", "a", "a"])).toBe(1);
  });
});

describe("part2", () => {
  it("should find 1 if [ab,ac] is provided", () => {
    expect(countEveryYesAnswersInGroup(["ab", "ac"])).toBe(1);
  });
});
