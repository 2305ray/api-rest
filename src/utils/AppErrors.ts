export class AppError {
    message: string
    statusCode: number

    constructor(message: string, statusCode: number = 400) {
        //o this é pra quando escapa do contexto é o global 
        this.message = message
        this.statusCode = statusCode
    }
}