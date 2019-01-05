require('dotenv');
var fs = require('fs');
const apiHost = process.env.API_HOST || 'http://localhost:3100';

var fileContent = `
// Host Configuration
export const apiServerConfig = {
    apiHost: '${apiHost}'
}`;

var apiServerConfigFile = './app/code/config/app.main.config.ts';
fs.writeFileSync(apiServerConfigFile, fileContent, "utf8");

var fileContentJS = `
// Host Configuration
exports.apiServerConfig = {
    apiHost: '${apiHost}'
}`;

var apiServerConfigFileJS = './app/code/config/app.main.config.js';
fs.writeFileSync(apiServerConfigFileJS, fileContentJS, "utf8");