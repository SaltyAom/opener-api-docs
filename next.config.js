const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS(
      withImages({
          exportPathMap: function () {
              return {
              '/': { page: '/' },
              }
          },
          target: 'serverless',
      })
  )