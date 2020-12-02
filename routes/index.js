const express = require("express");
const Router = express.Router();

const DataController = require('../controllers/dataController')

Router.get('/',DataController.list)
Router.post('/',DataController.create)
Router.patch('/:id',DataController.update)
Router.delete('/:id',DataController.delete)



module.exports = Router