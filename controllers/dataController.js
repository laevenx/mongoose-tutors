const Book = require("../models/book");

class DataController {
  static list(req, res, next) {
    Book.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static create(req, res, next) {
    const { name, amount } = req.body;

    Book.create({ name, amount })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }

  static update(req, res, next) {
    // const {name,amount} = req.body
    const entries = Object.keys(req.body);
    let update = {};

   
    entries.map((value,index)=> {
        console.log(value)
        update[value] = Object.values(req.body)[index]
    })

    console.log(update)

    Book.findOneAndUpdate({ _id: req.params.id }, { $set: update })
      .then((data) => {
        res.status(200).json({
          message: "update completed",
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }

  static delete(req, res, next) {
    Book.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "delete completed",
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
}

module.exports = DataController;
