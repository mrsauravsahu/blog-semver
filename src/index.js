const packageInfo = require('../package.json')

console.log(JSON.stringify({version:packageInfo.version}, undefined, 2))