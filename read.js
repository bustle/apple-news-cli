/* eslint-disable no-console */
const appleNews = require('apple-news')

exports.command = 'read'

exports.describe = 'Get information for a single article'

exports.builder = {
  articleId: {
    demandOption: true,
    describe: 'ID of article to be updated'
  }
}

exports.handler = function ({ apiId, apiSecret, articleId }) {
  const client = appleNews({
    apiId,
    apiSecret
  })

  client.readArticle({ articleId }, (err, article) => {
    if (err) throw err
    console.log(JSON.stringify(article, null, 2))
  })
}
