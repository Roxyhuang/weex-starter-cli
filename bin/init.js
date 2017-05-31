#!/usr/bin/env node

// generator an template
const yargs = require('yargs');
const argv = yargs.argv;

const generator = require('../task/generator');

generator.generate(argv._[0]);