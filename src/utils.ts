const fs = require("fs");
const pathResolver = require("path");

export const readFile = fileName => {
  return fs
    .readFileSync(pathResolver.join(__dirname, fileName), "utf-8")
    .split("\n");
};

export const computeProduct = array => array.reduce((a, b) => a * b, 1);
export const computeMax = (array, init = -Infinity) =>
  array.reduce((acc, cur) => (acc < cur ? cur : acc), init);
export const computeMin = (array, init = Infinity) =>
  array.reduce((acc, cur) => (acc > cur ? cur : acc), init);

export const readFileWihtoutSplit = fileName => {
  return fs.readFileSync(pathResolver.join(__dirname, fileName), "utf-8");
};
