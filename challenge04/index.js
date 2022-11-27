const MIN = 11098;
const MAX = 98123;
let passwords = [];

for (let i = MIN; i <= MAX; i++) {
  let str = i.toString();
  if (str.replaceAll('5', '').length <= 3) {
    if (str.split('').sort().join('') === str) {
      passwords.push(i);
    }
  }
}

console.log(`${passwords.length}-${passwords[55]}`);