import { readFile } from "./../../utils";
const NB_FIELDS = 8;
const EYE_COLORS = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
const HAIR_REGEX = /^#[0-9a-f]{6}$/;

const fieldsNameAreValid = fields => {
  return (
    fields.length === NB_FIELDS ||
    (fields.length === NB_FIELDS - 1 && fields.indexOf("cid") === -1)
  );
};

export const getFields = (input: string[]) => {
  const fields = [];
  for (let i = 0; i < input.length; i++) {
    fields.push(input[i].split(" ").map(item => item.split(":")[0]));
  }
  return fields.reduce((acc, val) => [...acc, ...val], []);
};

export const isValid = (input: string[]) => {
  const fields = getFields(input);
  return fieldsNameAreValid(fields);
};

export const getFieldsUpdated = (input: string[]) => {
  const fields = {};
  for (let i = 0; i < input.length; i++) {
    input[i]
      .split(" ")
      .forEach(item => (fields[item.split(":")[0]] = item.split(":")[1]));
  }
  return fields;
};
const isFieldValid = ([key, value]) => {
  if (key === "byr") {
    return value.length === 4 && +value >= 1920 && +value <= 2002;
  } else if (key === "iyr") {
    return value.length === 4 && +value >= 2010 && +value <= 2020;
  } else if (key === "eyr") {
    return value.length === 4 && +value >= 2020 && +value <= 2030;
  } else if (key === "hgt") {
    if (value.endsWith("cm")) {
      const height = parseInt(value);
      return height >= 150 && height <= 193;
    } else if (value.endsWith("in")) {
      const height = parseInt(value);
      return height >= 59 && height <= 76;
    }
    return false;
  } else if (key === "hcl") {
    return HAIR_REGEX.test(value);
  } else if (key === "ecl") {
    return EYE_COLORS.indexOf(value) > -1;
  } else if (key === "pid") {
    return value.length === 9;
  }
  return true;
};

export const isValidUpdated = (input: string[]) => {
  const fields = getFieldsUpdated(input);

  const fieldsAreValids = Object.entries(fields).every(field =>
    isFieldValid(field)
  );
  if (!fieldsAreValids) return false;
  const keys = Object.keys(fields);
  return fieldsNameAreValid(keys);
};

const input = readFile("./days/day4/4.input.txt");
export const day4ComputeResultPart1 = () => {
  let passeport = [];
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    if (!row) {
      if (passeport.length > 0 && isValid(passeport)) counter += 1;
      passeport = [];
      continue;
    }
    passeport.push(row);
  }

  return counter;
};

export const day4ComputeResultPart2 = () => {
  let passeport = [];
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    if (!row) {
      if (passeport.length > 0 && isValidUpdated(passeport)) counter += 1;
      passeport = [];
      continue;
    }
    passeport.push(row);
  }

  return counter;
};
