/* Alias */
require('module-alias/register')()

/* Status */
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

/* Server */
const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const app = next({ dev })
const handle = app.getRequestHandler()

/* Config */
const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

app.prepare().then(() => {
  /* Create Server */
  const server = express();

  /* Route */
  server.get("/", (req,res) => {
    ssrCache({ req, res, pagePath: '/' })
  });

  server.get("*", (req,res) => {
    handle(req, res)
  });

  /* Listen */
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})
