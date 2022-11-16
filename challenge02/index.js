import encrypted from './encrypted.txt';

const ASCII_CODE_A = 97;
const ASCII_CODE_Z = 122;

const words = encrypted.split(' ').map((word) => {
  let code = '';
  let letters = [];

  for (let n of word) {
    code = parseInt(code + n, 10);
    if (code >= ASCII_CODE_A && code <= ASCII_CODE_Z) {
      letters.push(code);
      code = '';
    }
  }

  return String.fromCharCode(...letters);
});

console.log(words.join(' '));
