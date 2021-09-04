const os = require("os");

//info about current user
const user = os.userInfo();

//method returns the system uptime in seconds

const currentOs = {
  name: os.type(),
  relase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
