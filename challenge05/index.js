import mecenas from './mecenas.json';

const checkSurvivors = () => {
  return mecenas.filter((elem) => elem === 'x').length;
};

const doCombat = () => {
  for (let i = 0; i < mecenas.length; i++) {
    if (mecenas[i] === 'x') continue;
    let j = i;
    do {
      j = (j + 1) % mecenas.length;
    } while (mecenas[j] === 'x');
    mecenas[j] = 'x';
  }
};

while (checkSurvivors() < mecenas.length - 1) {
  doCombat();
}

const winnerIndex = mecenas.findIndex((elem) => elem !== 'x');

console.log(`${mecenas[winnerIndex]}-${winnerIndex}`);