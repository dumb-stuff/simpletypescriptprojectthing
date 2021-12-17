import * as request from 'request'
import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    console.log(`You can copy this link and paste it in your browser: ${request.get('https://redirect.rukchadisa.live/add?url=http://localhost:3000')}`)
})