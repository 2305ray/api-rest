import { routes } from './routes'
import express, { Response, Request, NextFunction } from 'express'

const PORT = 4013
const app = express()

app.use(express.json())

//middleware global: app.use(myMiddleware)
app.use(routes)

app.use((err: any, req: Request, res: Response, _:NextFunction) => {
res.status(500).json({message: err.message || "Internal server error"})
})
app.listen(PORT, () => console.log(`server is running at ${PORT}`))
