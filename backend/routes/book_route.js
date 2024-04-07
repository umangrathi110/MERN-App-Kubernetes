const express = require("express");
const Book = require("../model/book");

// now creating router which have all functionality of this Router().

const router = express.Router();
const books_controller = require("../controllers/books_controller");
router.get("/", books_controller.getAllBooks);

// in the post we add data in body->raw->json->addData
router.post("/", books_controller.addBooks);
module.exports = router;

// Now we want data by simply id(url). for this we want to create Id varibale in books_controller.
router.get("/:id", books_controller.getById);

// Now we use put method it used for update.
router.put("/:id", books_controller.updateBooks);

// Now only need is delete.
router.delete("/:id", books_controller.deleteBook);
