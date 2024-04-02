'use strict';
const moment = require("moment");
const mod = require("./module");
const chalk = require('chalk');

console.log(chalk.blue('Hello World!'));
console.log(mod.goodNight());
console.log(chalk.red('Now is: ') + chalk.yellow(moment().format('D MMMM YYYY, h:mm:ss')));