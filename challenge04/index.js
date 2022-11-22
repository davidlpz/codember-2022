const MIN = 11098;
const MAX = 98123;
let passwords = [];

for (let i = MIN; i <= MAX; i++) {
  let str = i + '';
  if (str.replaceAll('5', '').length <= 3) {
    let num = str.split('').map(Number);
    if (+num.sort().join('') === i) {
      passwords.push(i);
    }
  }
}

console.log(`${passwords.length}-${passwords[55]}`);