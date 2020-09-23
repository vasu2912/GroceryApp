const mongoose = require("mongoose");

const CartDBSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemQuantity: {
    type: Integer,
    required: true,
  },
});

module.exports = mongoose.model("CartDB", CartDBSchema);
