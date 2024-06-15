import express from 'express'
import { dbConecction } from './database/dbConnection.js'
import bookRouter from './src/Modules/book/book.routes.js'
import authorRouter from './src/Modules/author/author.routes.js'



const app = express()
const port = 3000
app.use(express.json())
app.use("/books",bookRouter)
app.use("/authors",authorRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



