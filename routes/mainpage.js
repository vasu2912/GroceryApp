const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Item = require("../models/maindb");

router.get("/", (req, res, next) => {
  Item.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
  });
  item
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /Items",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
