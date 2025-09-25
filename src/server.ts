import express from 'express'

const PORT = 3333
const app = express()

app.get("/products/:id/:user", (req, res) => {
    const { page, limit } = req.query

    res.send(`Página ${page} de ${limit}`)
})

app.listen(PORT, () => console.log(`server is running at ${PORT}`))
