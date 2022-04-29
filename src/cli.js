#!/usr/bin/env node
const usa = require('./index.js');

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (params[0] === '--border') {
        console.log(usa.flag_border);
    } else {
        console.log('\nUsage:\n' + '  $ usa-flag\n' + '  $ usa-flag --border\n');
    }
} else {
    console.log(usa.flag);
}