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

# Module System

# Challenge

- Create new command for yargs and test out is the result is correct or not
