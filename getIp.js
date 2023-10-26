const os = require('os');
const networkInterfaces = os.networkInterfaces();

const getIp = () => {
  let ip = '';
  for (let key in networkInterfaces) {
    networkInterfaces[key].forEach((item) => {
      if (item.family === 'IPv4' && !item.internal) {
        ip = item.address;
      }
    });
    if (ip !== '') {
      break;
    }
  }
  return ip;
};

const ip = getIp();
console.log(ip);
