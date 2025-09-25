import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'

const PORT = 4013
const app = express()

app.use(express.json())

// global: app.use(myMiddleware)

//local, em uma rota específica
app.get("/products/:id/:user", myMiddleware, (req, res) => {
    const { page, limit } = req.query

    res.send(`Página ${page} de ${limit}`)
})

app.post("/products", (req, res) => {
    const { name, price } = req.body

    res.status(201).json([name, price])
})
app.listen(PORT, () => console.log(`server is running at ${PORT}`))
