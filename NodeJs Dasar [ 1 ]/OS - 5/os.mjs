import os from 'os';

console.info(os.platform());
console.info(os.arch());
console.table(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.hostname());
console.table(os.networkInterfaces());