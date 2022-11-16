import users from './users.txt';

const userList = users.split(/\n\s*\n/).map((u) => u.split(/\n/).join(' '));
const requiredKeys = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const validUsers = userList
  .filter((user) =>
    requiredKeys.every((key) => user.includes(key))
  )
  .map((user) =>
    Object.fromEntries(user.split(' ').map((key) => key.split(':')))
  );

console.log(validUsers.length, validUsers.at(-1).usr);