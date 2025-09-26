import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

export const productRoutes = Router()

//local, em uma rota específica
productRoutes.get("/", myMiddleware, (req, res) => {
    const { page, limit } = req.query

    res.send(`Página ${page} de ${limit}`)
})

productRoutes.post("/", (req, res) => {
    const { name, price } = req.body

    res.status(201).json([name, price])
})