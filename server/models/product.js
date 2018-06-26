const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "name cannot be empty!"],
        minlength: [3, "name must be at least 3 letters "]
    },
    qty:{
        type: Number,
        required: [true, "put a quatity!"],
        min: [0, "number must be 0 or above"],
        },
    price:{
        type: Number,
        required: [true, "price is required!"],
        min: [0, "number must be 0 or above"],
        }
    },
    { timestamps: true }
  );
  
  mongoose.model('Product', ProductSchema); 
