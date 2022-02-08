const os = require('os');

// to get the operating system user info
console.log(os.userInfo());

// to check the current uptime in seconds
console.log(`The current uptime is ${os.uptime()}`);

const sysInfo = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(sysInfo)
