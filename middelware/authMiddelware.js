const jwt = require ('jsonwebtoken')
const config = require ('config')


const auth = (req , res , next) =>{

const token=req.header('token')

if(!token) {

    return res.status(400).json({msg : "token not found"})
}


try {


const decoded = jwt.verify(token , config.get('jwtSecret'))

req.user = decoded

next()

    
} 




catch (error) {
 
      
    return res.status(400).json({msg : "token no valid"})


}}


module.exports = auth