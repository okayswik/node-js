const validator = require("validator");
const chalk = require("chalk");

console.log(validator.isURL("https//google.com"));
//Challenge

const msg = chalk.green("sup!");
console.log(msg);

//Shortcut
console.log(
  chalk.blue.bgWhite.inverse.bold("Hi mate ") + chalk.yellow(" cutsy")
);
