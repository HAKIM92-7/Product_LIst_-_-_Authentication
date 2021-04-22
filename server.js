const express = require ('express')
const app = express()

const connectDB = require ('./database/connect')

const productRouter = require('./routes/product')


app.use(express.json())



connectDB();

app.use('/products' , productRouter)

// http://localhost:5000/products





app.listen(5000 ,  (err) => {

err ? console.log('server error') :

console.log('server is running at port 5000......');


})