import { routes } from './routes'
import express, { Response, Request, NextFunction } from 'express'
import { AppError } from './utils/App-Errors'
import { ZodError } from 'zod'

const PORT = 4013
const app = express()

app.use(express.json())

//middleware global: app.use(myMiddleware)
app.use(routes)

app.use((err: any, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    if(err instanceof ZodError) {
        res.status(400).json({message: "Validations Error", issues: err.format()

        })
    }
    res.status(500).json({ message: err.message || "Internal server error" })
})
app.listen(PORT, () => console.log(`server is running at ${PORT}`))
