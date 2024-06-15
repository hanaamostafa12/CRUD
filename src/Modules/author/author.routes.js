import {Router} from 'express';
import { addAuthor, deleteAuthor, getAllAuthors, getAuthor, updateAuthor } from './author.controller.js';

const authorRouter = Router()




authorRouter.route("/").post(addAuthor).get(getAllAuthors)

authorRouter.route("/:id").get(getAuthor).patch(updateAuthor).delete(deleteAuthor)



export default  authorRouter