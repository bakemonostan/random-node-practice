const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// return system uptime
console.log(`System uptime is ${os.uptime()} secs`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
