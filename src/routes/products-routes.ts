import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductController";


export const productRoutes = Router()
const productsController = new ProductsController()
//local, em uma rota específica
productRoutes.get("/", productsController.index)

productRoutes.post("/", myMiddleware, productsController.create)