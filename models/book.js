const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookSchema = new Schema(
    {
        name: {
            type: String
        },
        amount: {
            type: Number
        
        }
    }, { timestamps: { createdAt: "createdAt" } }
); 

module.exports =  mongoose.model("Book", bookSchema);