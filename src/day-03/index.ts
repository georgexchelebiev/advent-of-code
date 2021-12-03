import input from './input';

type TBit = '1' | '0'

function hashMapPerBit(stack: string[], bit: number) {
  const data = stack.map(bits => (bits[bit] as TBit));

  const hashMap = data.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1;
    return acc;
  }, {
    0: 0,
    1: 0,
  });

  return hashMap;
}

const hashMaps = input[0].split('').map((_, index) => hashMapPerBit(input, index));

const gammaRateBinary = hashMaps.map(hashMap => hashMap['0'] > hashMap['1'] ? '0' : '1').join('');
const epsilonRateBinary = hashMaps.map(hashMap => hashMap['0'] < hashMap['1'] ? '0' : '1').join('');

const gammaRate = parseInt(gammaRateBinary, 2);
const epsilonRate = parseInt(epsilonRateBinary, 2);

const part1 = gammaRate * epsilonRate;

console.log({ part1 });
