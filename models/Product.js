const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

name : {
type : String ,
required : true

} ,

price : {

type : Number ,
required : true

} ,


brand : String ,


description : String

})



module.exports = mongoose.model('products' , productSchema)