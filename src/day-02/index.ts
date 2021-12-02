import input from './input';

type TDirection = 'up' | 'down' | 'forward';

interface IInstruction {
  direction: TDirection;
  points: number;
}

interface IPosition {
  horizontal: number;
  depth: number;
}

interface IPrecisePosition {
  horizontal: number;
  depth: number;
  aim: number;
}

function parseInstruction(rawInstruction: string): IInstruction {
  const chunks = rawInstruction.split(' ');

  const direction = chunks[0] as TDirection;
  const points = parseInt(chunks[1], 10);

  return { direction, points };
}

const initialPosition: IPosition = {
  horizontal: 0,
  depth: 0,
};

const initialPrecisePosition: IPrecisePosition = {
  horizontal: 0,
  depth: 0,
  aim: 0,
};

const instructions = input.map(parseInstruction);

function instructionsReducer(acc: IPosition, { direction, points }: IInstruction): IPosition {
  switch (direction) {
    case 'up':
      return { ...acc, depth: acc.depth - points };
    case 'down':
      return { ...acc, depth: acc.depth + points };
    case 'forward':
      return { ...acc, horizontal: acc.horizontal + points };
  }
}

const position: IPosition = instructions.reduce(instructionsReducer, initialPosition);

function preciseInstructionsReducer(acc: IPrecisePosition, { direction, points }: IInstruction): IPrecisePosition {
  switch (direction) {
    case 'down':
      return { ...acc, aim: acc.aim + points };
    case 'up':
      return { ...acc, aim: acc.aim - points };
    case 'forward':
      return { ...acc, horizontal: acc.horizontal + points, depth: acc.depth + acc.aim * points };
  }
}

const precisePosition = instructions.reduce(preciseInstructionsReducer, initialPrecisePosition);

const part1 = position.depth * position.horizontal;
const part12 = precisePosition.depth * precisePosition.horizontal;

console.log({ part1, part12 });
