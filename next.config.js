const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
    target: 'serverless',
    pageExtensions: ['tsx', 'ts']
  })
