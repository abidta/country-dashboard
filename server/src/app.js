import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import countriesRoutes from './routes/countries.routes.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(cors())

app.use('/api/countries', countriesRoutes)

app.use((req, res, next) => {
    res.status(404).send('Not found')
})

app.use((err, req, res, next) => {
    console.log(err.message, 'abd')
    res.status(err.status || 500 ).send(err?.message || 'Something went wrong')
})

app.listen(port, () => {
    console.log(`Countries server listening on port ${port}`)
})