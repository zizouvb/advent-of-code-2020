import { computeRow, computeCol, computeId } from "./5";

describe("part1", () => {
  it("should find row 44 if FBFBBFFRLR is provided", () => {
    const id357 = "FBFBBFFRLR";
    expect(computeRow(id357)).toBe(44);
  });
  it("should find row 70 if BFFFBBFRRR is provided", () => {
    const id119 = "FFFBBBFRRR";
    expect(computeRow(id119)).toBe(14);
  });
  it("should find col 5 if FBFBBFFRLR is provided", () => {
    const id357 = "FBFBBFFRLR";
    expect(computeCol(id357)).toBe(5);
  });
  it("should find id 357 if FBFBBFFRLR is provided", () => {
    const id357 = "FBFBBFFRLR";
    expect(computeId(id357)).toBe(357);
  });
});
