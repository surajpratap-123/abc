let mongoose= require('mongoose');
const productshchema =new mongoose.Schema({
    name : {type: String },
    price : { type : Number},
    brands : { type : String },
    category : { type : String}
})
let product= mongoose.model("product", productshchema);
module.exports = product;