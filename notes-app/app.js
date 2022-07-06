const chalk = require("chalk");
const yargs = require("yargs");

//customize yargs
yargs.version("1.1.0");

//add, remove, read, list

//Create add command

yargs.command({
  command: "add",
  describe: "ADD a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: "true",
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title:" + argv.title);
    console.log("Body:" + argv.body);
  },
});

//remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a new note!");
  },
});

//Challenge 1

// Listing Command

yargs.command({
  command: "List",
  describe: "List a note",
  handler: function () {
    console.log("Listing a new note!");
  },
});

//Read Command
yargs.command({
  command: "Read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a new note!");
  },
});

//Challenge 2

yargs.parse();
// console.log(yargs.argv);
