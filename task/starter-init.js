// generator an template
const yargs = require('yargs');
const argv = yargs.argv;

const generator = require('./generator');

generator.generate(argv._[0]);