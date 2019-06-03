const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS(
      withImages({
          exportPathMap: () => {
              return {
              '/': { page: '/' }
              }
          },
          target: 'serverless',
      })
  )