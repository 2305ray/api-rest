import { Response, Request } from "express";
import { AppError } from "../utils/App-Errors";
import z from "zod"

export class ProductsController {
    //ter no maximo 5 metodos

    index(req: Request, res: Response) {
        const { page, limit } = req.query

        res.send(`Página ${page} de ${limit}`)
    }

    create(req: Request, res: Response) {

        const bodySchema = z.object({
            name: z.string().min(6, "Nome do produto tem que ter pelo menos 6 letras"),
            price: z.number().min(0, "Preço do produto não pode ser negativo")
        })

        const { name, price } = bodySchema.parse(req.body)
        //throw new AppError("Erro ao criar produto")

        res.status(201).json({ name, price, user_id: req.user_id })

    }

}