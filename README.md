## Apple News CLI

`npm install -g apple-news-cli`

### List your articles

`apple-news search --apiId <your-key> --apiSecret <your-secret> --channelId <your-channelId>`

### Using a config file

You can specify all the common parameters via a json config file instead of providing them every time

`apple-news search --config config.json`

Contents of `./config.json`:

``` json
{
  "apiId": "foo",
  "apiSecret": "bar",
  "channelId": "baz"
}

```

### Create

`apple-news create --config config.json --article article.json`

### Update

`apple-news update --config config.json --article article.json --articleId <your-article-id>`
