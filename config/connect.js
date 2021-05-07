const mongoose = require ('mongoose')
const config = require('config')

const connectDB = () => mongoose.connect(config.get('MONGOURI'), { useNewUrlParser: true ,useCreateIndex:true, useFindAndModify:false,useUnifiedTopology: true})
.then (() => console.log('connected to database successefully'))
.catch ((err) => console.log('connection to database failed'))



module.exports = connectDB