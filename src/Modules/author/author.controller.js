import { Author } from "../../../database/Models/authormodel.js"


// Create a new Author
const addAuthor = async (req, res) =>{
    let author = await Author.insertMany(req.body)
    res.status(201).json({message:"success",author})
}

// Get all authors with pagination and search
const getAllAuthors = async (req, res) => {
  const page = 1, limit = 5, skip = (page - 1) * limit;
  try {
    const authors = await Author.find()
      .limit(limit)
      .skip(skip);


    res.json({
      authors,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
// // Get a single author by its ID
  const getAuthor = async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate('books');
      if (!author) {
        return res.status(404).json({message: "error"});
      }
      res.status(200).json({message:"success",author});
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  
// // Update a author by its ID

const updateAuthor = async (req, res) => { try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if (!author) {
      return res.status(404).json({message: "error"});
    }
    res.status(200).json({message:"successUpdated",author})
  } catch (error) {
    res.status(400).json(error);
  }
}

// // Delete a author by its ID
const deleteAuthor=async (req, res) => {try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({message: "error"});
    }
    res.status(200).json({message:"successDeleted",author})
  } catch (error) {
    res.status(500).json(error);
  }
}



export {
    addAuthor,getAllAuthors,getAuthor,updateAuthor,deleteAuthor
}