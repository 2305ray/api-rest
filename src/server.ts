import express from 'express'
import { routes } from './routes'

const PORT = 4013
const app = express()

app.use(express.json())

//middleware global: app.use(myMiddleware)
app.use(routes)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))
