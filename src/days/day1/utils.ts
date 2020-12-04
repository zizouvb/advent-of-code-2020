const fs = require("fs");
const pathResolver = require("path");
const expenseReportRawInput = fs.readFileSync(
  pathResolver.join(__dirname, "./input.txt"),
  "utf-8"
);
export const expenseReportInput = expenseReportRawInput
  .split("\n")
  .map(e => parseInt(e));
