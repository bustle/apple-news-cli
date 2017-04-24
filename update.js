/* eslint-disable no-console */
const appleNews = require('apple-news')
const fs = require('fs')

exports.command = 'update'

exports.describe = 'Update an existing article on Apple News'

exports.builder = {
  articleId: {
    demandOption: true,
    describe: 'ID of article to be updated'
  },
  article: {
    demandOption: true,
    describe: 'Path to a json file containg the article'
  }
}

exports.handler = function ({ apiId, apiSecret, article: articlePath, articleId }) {
  const client = appleNews({
    apiId,
    apiSecret
  })

  const article = JSON.parse(fs.readFileSync(articlePath))

  client.readArticle({ articleId }, (err, { revision }) => {
    if (err) throw err
    client.updateArticle({ articleId, revision, article }, (err, resp) => {
      if (err) throw err
      console.log('Article Updated')
      console.log(`ID: ${resp.id}`)
    })
  })
}
