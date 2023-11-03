import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const nbrFishesAfter80Days = (/** @type {string} */ data) => {
  const DAYS = 80;
  const nbrDaysBeforeHasFishChild = data.split(",").map(Number);

  for (let day = 0; day < DAYS; day++) {
    const saveLength = nbrDaysBeforeHasFishChild.length;
    for (let i = 0; i < saveLength; i++) {
      if (nbrDaysBeforeHasFishChild[i] === 0) {
        nbrDaysBeforeHasFishChild[i] = 6;
        nbrDaysBeforeHasFishChild.push(8);
      } else {
        nbrDaysBeforeHasFishChild[i]--;
      }
    }
  }
  return {
    nbrDaysBeforeHasFishChild,
    nbrFishesAfter80Days: nbrDaysBeforeHasFishChild.length,
  };
};

console.log({ part1: nbrFishesAfter80Days(final) });

const nbrFishesAfter256Days = (data) => {
  const DAYS = 256;
  const nbrOfFishesPerAge = data
    .split(",")
    .map(Number)
    .reduce(
      (
        /** @type {{ [x: string]: number; }} */ accumulator,
        /** @type {string | number} */ currentValue
      ) => {
        accumulator[currentValue] += 1;
        return accumulator;
      },
      Array.from({ length: 9 }).fill(0)
    );

  for (let day = 0; day < DAYS; day++) {
    const day0 = nbrOfFishesPerAge.shift();

    nbrOfFishesPerAge[6] += day0;
    nbrOfFishesPerAge.push(day0);
  }

  return {
    nbrOfFishesPerAge,
    nbrFishesAfter256Days: nbrOfFishesPerAge.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ),
  };
};

console.log({ part2: nbrFishesAfter256Days(final) });
