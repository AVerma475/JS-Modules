const os = require("os")

let systemArch = os.arch();
console.log(systemArch);

// let cpu = os.cpus()
// console.log(cpu);

let hostname = os.hostname()
console.log(hostname);

let networkinfo = os.networkInterfaces()
//console.log(networkinfo);

console.log(os.release());