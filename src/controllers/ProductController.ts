import { Response, Request } from "express";

export class ProductsController {
    //ter no maximo 5 metodos

    index(req: Request, res: Response) {
        const { page, limit } = req.query

        res.send(`Página ${page} de ${limit}`)
    }

    create(req: Request, res: Response) {
        const { name, price } = req.body

        res.status(201).json({ name, price, user_id: req.user_id })

    }

}