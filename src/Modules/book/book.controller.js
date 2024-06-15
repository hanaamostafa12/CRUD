import { Book } from "../../../database/Models/book.model.js";




// Create a new book
const addBook = async (req, res) =>{
    let book = await Book.insertMany(req.body)
    res.status(201).json({message:"success",book})
}

// Get all books with pagination and search

const getBooks = async (req, res) => {
  const page = 1, limit = 5, skip = (page - 1) * limit;
  try {
    const books = await Book.find()
      .limit(limit)
      .skip(skip);

    res.json({
      books,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// // Get a single book by its ID
const getBook = async (req, res) => {    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
          return res.status(404).json({message: "error"});
        }
        res.status(200).json({message:"success",book});
      } catch (error) {
        res.status(500).json(error);
      }
    }

// // Update a book by its ID

const updateBook = async (req, res) => { try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!book) {
          return res.status(404).json({message: "error"});
        }
        res.status(200).json({message:"successUpdated",book})
      } catch (error) {
        res.status(400).json(error);
      }
    }

// // Delete a book by its ID
const deleteBook=async (req, res) => {try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({message: "error"});
    }
    res.status(200).json({message:"successDeleted",book})
  } catch (error) {
    res.status(500).json(error);
  }
}

export {
    addBook,getBooks,getBook,updateBook,deleteBook
}