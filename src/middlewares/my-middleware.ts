import { NextFunction, Request, Response} from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {
req.user_id = "12345"

console.log("passei no muddleware")

return next()

}