import express from 'express'

import homeRouter from "./routes/home.router.js"

const app = express()
const port = 3000

app.use(homeRouter)


app.listen(port, () => {
console.log(`localhost:${port}`)
})