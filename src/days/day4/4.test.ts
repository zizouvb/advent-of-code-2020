import { getFields, isValid, isValidUpdated } from "./4";

describe("part1", () => {
  const validPasseport = [
    "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
    "byr:1937 iyr:2017 cid:147 hgt:183cm"
  ];
  const invalidPassport = [
    "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884",
    "hcl:#cfa07d byr:1929"
  ];
  const validNorhtPole = [
    "hcl:#ae17e1 iyr:2013",
    "eyr:2024",
    "ecl:brn pid:760753108 byr:1931",
    "hgt:179cm"
  ];
  it("should return the fields of first passport in the example", () => {
    expect(getFields(validPasseport)).toEqual([
      "ecl",
      "pid",
      "eyr",
      "hcl",
      "byr",
      "iyr",
      "cid",
      "hgt"
    ]);
  });
  it("should return the fields of second passport in the example", () => {
    expect(getFields(invalidPassport)).toEqual([
      "iyr",
      "ecl",
      "cid",
      "eyr",
      "pid",
      "hcl",
      "byr"
    ]);
  });
  it("should detect the first passport in the example as valid", () => {
    expect(isValid(validPasseport)).toBe(true);
  });
  it("should detect the second passport in the example as invalid", () => {
    expect(isValid(invalidPassport)).toBe(false);
  });
  it("should detect the validNorthPole in the example as valid", () => {
    expect(isValid(validNorhtPole)).toBe(true);
  });
});

describe("part2", () => {
  const invalidPassportEyr = [
    "eyr:1972 cid:100",
    "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926"
  ];
  const validPassport = [
    "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980",
    "hcl:#623a2f"
  ];
  const invalidPassportHcl = [
    "hcl:dab227 iyr:2012",
    "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277"
  ];
  const invalidPassportByr = [
    "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:2010",
    "hcl:#623a2f"
  ];
  const invalidPassportHgt = [
    "pid:087499704 hgt:74cm ecl:grn iyr:2012 eyr:2030 byr:1980",
    "hcl:#623a2f"
  ];
  it("should detect the invalid passport if eyr is to low in the example as invalid", () => {
    expect(isValidUpdated(invalidPassportEyr)).toBe(false);
  });
  it("should detect a valid passport in the example as valid", () => {
    expect(isValidUpdated(validPassport)).toBe(true);
  });
  it("should detect the invalid passport if hcl is invalid in the example", () => {
    expect(isValidUpdated(invalidPassportHcl)).toBe(false);
  });
  it("should detect the invalid passport if byr is to high ", () => {
    expect(isValidUpdated(invalidPassportByr)).toBe(false);
  });
  it("should detect the invalid passport if byr is to high ", () => {
    expect(isValidUpdated(invalidPassportHgt)).toBe(false);
  });
});
