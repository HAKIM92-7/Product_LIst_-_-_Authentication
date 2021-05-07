const express = require ('express')
const router = express.Router()
const User = require ('../models/User')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const {check , validationResult} = require('express-validator')
const config = require ('config')
const auth = require ('../middelware/authMiddelware')



//@method  POST  /login
//@desc login user
//@access public

router.post('/' , [

check('email' , 'enter a correct email').isEmail() ,
check('password' , 'password is required' ).notEmpty()
] , async (req ,res) => {

const errors = validationResult(req) ;

if(!errors.isEmpty()) {

 return res.status(400).json({errors : errors.array()})

}


const {email , password} = req.body

try {

await User.findOne({email}).then((user) => {

if(!user) {

return res.status(400).json({msg : "email or password are invalid"})

}


bcrypt.compare(password , user.password).then((isMatch) => {

if(!isMatch) {

return res.status(400).json({msg : "password or email is incorrect"})

}


jwt.sign(

{id : user._id} ,
config.get('jwtSecret') ,
{expiresIn : 3600} , 
(err,token) => {

if(err) console.log(err)


return res.status(200).json({

token ,

user :{

fullname : user.fullname ,
email : user.email ,
password : user.password


}})}



)})})} 


catch (error) {
    return res.status(500).send('server error')
    
}

}  )


//@method GET /login 
//@description  get current user
//@access private

router.get('/', auth ,  async (req,res) => {

try {
await User.findById(req.user.id).then((user) => {

return res.json(user)
})
}

catch {

res.status(500).send('server error')


}





})





module.exports = router