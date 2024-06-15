import {Router} from 'express';
import { addBook, deleteBook, getBook, getBooks, updateBook } from './book.controller.js';

 
const bookRouter = Router()




bookRouter.route("/").post(addBook).get(getBooks)


bookRouter.route("/:id").delete(deleteBook).patch(updateBook).get(getBook)


export default  bookRouter