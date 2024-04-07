// this file control all the function  in the books_controller and export to books_route

const Books = require("../model/book");

const getAllBooks = async (req, resp, next) => {
  // this route will provide all of the books.
  let books;
  //   here we will use async and await.
  // below code means it find Book Schema which is available in mongoose.

  try {
    books = await Books.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return resp.status(404).json({ message: "No Products Found" });
  }
  return resp.status(200).json({ books });
};

const getById = async (req, resp, next) => {
  let books;
  const id = req.params.id;

  try {
    books = await Books.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return resp.status(404).json({ message: "No Book Found" });
  } else {
    return resp.status(200).json({ books });
  }
};

const addBooks = async (req, resp, next) => {
  // In addBooks it contain Book schema as a instance.
  let books;

  // createing destructuring object so that we can use with help of req.body.
  const { name, author, description, price, available, image } = req.body;
  try {
    books = new Books({
      // create new instance of book
      name,
      author,
      description,
      price,
      available,
      image,
    });
    // Now to save for save we use metod in moongose
    await books.save();
  } catch (err) {
    console.log(err);
  }
  // NOw Check Validation
  if (!books) {
    return resp.status(404).json({ message: "Unable to Add" });
  }
  // if it is true.
  return resp.status(200).json({ books });
};

const updateBooks = async (req, resp, next) => {
  let books;
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;

  try {
    // id se lege konsa data aur hume usme kya update karna h like wo pass karunga name,author,description etc.
    books = await Books.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    books = await books.save();
  } catch (err) {
    console.log(err);
  }
  // validation
  if (!books) {
    return resp.status(404).json({ message: "Unable to Update by this ID" });
  }
  return resp.status(200).json({ books });
};

const deleteBook = async (req, resp, next) => {
  let books;
  let id = req.params.id;
  try {
    books = await Books.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  //validation
  if (!books) {
    return resp.status(404).json({ message: "Unable to delete by ID" });
  }
  return resp.status(200).json({ message: " Book deleted successfully" });
};
exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBooks = updateBooks;
exports.deleteBook = deleteBook;
// now this function call inside the book_route.js

// we need image when i add book and update time.
