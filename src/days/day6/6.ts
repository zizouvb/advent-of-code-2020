import { readFileWihtoutSplit } from "./../../utils";

export const countYesAnswersInGroup = (group: string[]) => {
  const unique = new Set<string>();
  group.forEach(passenger => {
    for (let answer of passenger) unique.add(answer);
  });
  return unique.size;
};
export const countEveryYesAnswersInGroup = (group: string[]) => {
  let remainingYesAnwser = group[0].split("");
  group.forEach(passenger => {
    remainingYesAnwser = remainingYesAnwser.filter(answer =>
      passenger.includes(answer)
    );
  });
  return remainingYesAnwser.length;
};

const countYesAnswers = groups => {
  return groups.reduce((acc, cur) => countYesAnswersInGroup(cur) + acc, 0);
};

const countEveryYesAnswers = groups => {
  return groups.reduce((acc, cur) => countEveryYesAnswersInGroup(cur) + acc, 0);
};

const input = readFileWihtoutSplit("./days/day6/6.input.txt");
export const day6ComputeResultPart1 = () => {
  const groups = input.split("\n\n").map(group => group.split("\n"));
  return countYesAnswers(groups);
};

export const day6ComputeResultPart2 = () => {
  const groups = input.split("\n\n").map(group => group.split("\n"));
  return countEveryYesAnswers(groups);
};
