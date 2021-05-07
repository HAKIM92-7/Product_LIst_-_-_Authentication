const express = require ('express')
const app = express()

const connectDB = require ('./config/connect')

const productRouter = require('./routes/product')

const userRouter = require ('./routes/user')

const loginRouter = require ('./routes/login')

app.use(express.json())



connectDB();

app.use('/products' , productRouter)
app.use('/user' , userRouter)
app.use('/login' , loginRouter)

// http://localhost:5000/products





app.listen(5000 ,  (err) => {

err ? console.log('server error') :

console.log('server is running at port 5000......');


})