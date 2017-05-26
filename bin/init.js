#!/usr/bin/env node

var xtoolkit = require('xtoolkit');
xtoolkit.command('init','local:../task/starter-init.js');
xtoolkit.version(require('../package.json').version);