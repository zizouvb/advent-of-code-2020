import { expenseReportInput } from "./utils";
import { computeProduct } from "./../../utils";

export const findPair = (expenseReport = expenseReportInput) => {
  const complements = {};
  for (let i = 0; i < expenseReport.length; i++) {
    const currentValue = expenseReport[i];
    if (currentValue in complements) {
      return [currentValue, complements[currentValue]];
    } else {
      complements[2020 - currentValue] = currentValue;
    }
  }
  throw new Error("Not found");
};

export const findTriplet = (expenseReport = expenseReportInput) => {
  for (let i = 0; i < expenseReport.length - 2; i++) {
    for (let j = i + 1; j < expenseReport.length - 1; j++) {
      for (let k = j + 1; k < expenseReport.length; k++) {
        if (expenseReport[i] + expenseReport[j] + expenseReport[k] === 2020) {
          return [expenseReport[i], expenseReport[j], expenseReport[k]];
        }
      }
    }
  }
  throw new Error("Not found");
};

export const day1ComputeResultPart1 = () => {
  const pair = findPair();
  return computeProduct(pair);
};

export const day1ComputeResultPart2 = () => {
  const triplet = findTriplet();
  return computeProduct(triplet);
};
