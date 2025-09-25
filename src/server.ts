import express from 'express'

const PORT = 3333
const app = express()

app.get("/products/:id/:user", (req, res) => {
    const { id, user } = req.params

    res.send(`Produto ${id} do candidato ${user}`)
})

app.listen(PORT, () => console.log(`server is running at ${PORT}`))
