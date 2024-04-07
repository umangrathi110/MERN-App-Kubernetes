// creating moongose.
const mongoose = require("mongoose");

const Schemas = mongoose.Schema;
const bookSchema = new Schemas({
  // these are the properties which shows about the product .
  name: {
    type: String,
    required: true, // default false but we want true.
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  // now we want create for image.
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Books", bookSchema);
