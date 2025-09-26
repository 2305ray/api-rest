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

        const bodySchema = z.object({//por padrão é obigatorio se n tiver nullish
            name: z
                .string({ required_error: "Nome é requerido" })
                .trim()
                .min(6, "Nome do produto tem que ter pelo menos 6 letras"),
            price: z
                .number({ required_error: "Preço é requerido" })
                .positive({ message: "Preço do produto não pode ser negativo" })
                .gte(10),//deve ser maior ou igual
            // price: z.number().nullish()
        })

        const { name, price } = bodySchema.parse(req.body)
        //throw new AppError("Erro ao criar produto")

        res.status(201).json({ name, price, user_id: req.user_id })

    }

}