const mongoose = require("mongoose");

const MainDBSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  itemName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MainDB", MainDBSchema);
