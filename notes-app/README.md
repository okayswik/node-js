# node.js

## File System

Process has a property, a big object which includes argv

It's best to look for an npm package that helps with parsing the strings in code.

## Parsing with Yargs

- console.log(yargs.argv);

input:

- node app.js add --title="things to buy"

output:

- { \_: [ 'add' ], title: 'things to buy', '$0': 'app.js' }

## Storing Data with JSON

- const book = { //Varible made for book
  title: "Ego is the friend", // title data
  author: "Swik", //Author name
  };

const bookJSON = JSON.stringify(book); // The JSON.stringify() method converts a JavaScript object or value to a JSON string.
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON); // A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string

console.log(parsedData.author);

# Challenge

- Create new command for yargs and test out is the result is correct or not.
