/* eslint-disable no-console */

const appleNews = require('apple-news')
const fs = require('fs')

exports.command = 'create'

exports.describe = 'Create a new article in a channel'

exports.builder = {
  article: {
    demandOption: true,
    describe: 'Path to a json file containg the article'
  }
}

exports.handler = function ({ apiId, apiSecret, article: articlePath, channelId }) {
  const client = appleNews({
    apiId,
    apiSecret
  })

  const article = JSON.parse(fs.readFileSync(articlePath))

  client.createArticle({ channelId, article }, (err, { id }) => {
    if (err) throw err
    console.log('Article Created')
    console.log(`ID: ${id}`)
  })
}
