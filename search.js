/* eslint-disable no-console */
const appleNews = require('apple-news')

exports.command = 'search'

exports.describe = 'List articles for a channelId or sectionId'

exports.builder = {}

exports.handler = function ({ apiId, apiSecret, channelId }) {
  const client = appleNews({
    apiId,
    apiSecret
  })

  client.searchArticles({ channelId }, (err, articles) => {
    articles.map((article) => {
      if (err) throw err
      console.log(`Title: ${article.title}
STATE: ${article.state}
ID: ${article.id}
URL: ${article.shareUrl}
-------------`)
    })
  })
}
