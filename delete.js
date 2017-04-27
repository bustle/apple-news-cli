/* eslint-disable no-console */
const appleNews = require('apple-news')

exports.command = 'delete'

exports.describe = 'Delete an article from Apple News'

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

  client.deleteArticle({ articleId }, (err, res) => {
    if (err) throw err
    console.log(res)
  })
}
