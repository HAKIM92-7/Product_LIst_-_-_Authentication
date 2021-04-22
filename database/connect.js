const mongoose = require ('mongoose')


const connectDB = () => mongoose.connect('mongodb://127.0.0.1:27017/products' , { useNewUrlParser: true , useUnifiedTopology: true})
.then (() => console.log('connected to database successefully'))
.catch ((err) => console.log('connection to database failed'))



module.exports = connectDB