import input from './input';

function solve(arr: number[], offset: number): number {
  return arr.reduce((acc, curr, index, array) => {
    if (array[index + offset] > curr) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

const part1 = solve(input, 1);
const part2 = solve(input, 3);

console.log({ part1, part2 });
