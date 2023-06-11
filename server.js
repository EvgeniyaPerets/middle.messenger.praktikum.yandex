import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

app.use(express.static('./dist'))

app.get('*', (req, res) => {
  res.sendFile('./dist/index.html', {
    root: dirname(fileURLToPath(import.meta.url))
  })
})

app.listen(PORT, function () {
  console.log(`express app listening on post ${PORT}`);
})
