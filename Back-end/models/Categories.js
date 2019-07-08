const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  catName: {
    type: String,
    required: true
  },
  CatDesc: {
    type: String,
    required: true
  },
  catImg: {
    type: String,
    required: true
  }
})

module.exports = Categorie = mongoose.model("Categories", categoriesSchema);
