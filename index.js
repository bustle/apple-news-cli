#!/usr/bin/env node

// eslint-disable-next-line no-unused-expressions
require('yargs')
  .config()
  .option('apiId', {
    describe: 'Apple News API key',
    demandOption: true
  })
  .option('apiSecret', {
    describe: 'Apple News API secret',
    demandOption: true
  })
  .command(require('./search'))
  .command(require('./create'))
  .command(require('./update'))
  .help()
  .argv
