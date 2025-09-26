import { Response, Request } from "express";
import { AppError } from "../utils/App-Errors";

export class ProductsController {
    //ter no maximo 5 metodos

    index(req: Request, res: Response) {
        const { page, limit } = req.query

        res.send(`Página ${page} de ${limit}`)
    }

    create(req: Request, res: Response) {
        const { name, price } = req.body

        if (!name) {
            throw new AppError("Nome do produto é obrigatório")
        }

        if (name.trim().length < 6) {
            throw new AppError("Nome do produto tem que ter pelo menos 6 letras")
        }

        if (!price) {
            throw new AppError("Preço do produto é obrigatório")
        }

        if (price < 0) {
            throw new AppError("Preço do produto não pode ser negativo")
        }

        //throw new AppError("Erro ao criar produto")

        res.status(201).json({ name, price, user_id: req.user_id })

    }

}