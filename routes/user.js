const express = require ('express')
const router = express.Router()
const User = require ('../models/User')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const {check , validationResult} = require('express-validator')
const config = require ('config')


//@method POST  /user
//@desc  register new user
//@access public


router.post('/' , [

check('fullname', 'fullname is required').notEmpty() ,
check ('email' , 'enter a valid email').isEmail() , 
check ('password' , "the password should include more than 6 caracters").isLength({min:6})


]  , async (req,res) => {

const errors = validationResult(req) 

if(!errors.isEmpty()) {


return res.status(400).json({errors : errors.array() })

}




const {fullname , email , password , password2} = req.body

try {

await User.findOne({email}).then((user) => {

if(user) {

return res.status(400).json({msg : "email already used"})


}})

if(password != password2) {

return res.status(400).json({msg : "passwords don't match"})


}



const newUser = new User({fullname , email , password})


await bcrypt.genSalt(10 , (err , salt) => {

if (err) console.log(err);

bcrypt.hash(newUser.password , salt , (err , hash) => {

if(err) console.log(err)

newUser.password = hash ;

newUser.save().then((user) => {

jwt.sign(

{id : user._id},
config.get('jwtSecret') ,
{expiresIn : 3600} , 
(err , token) => {

if(err) console.log(err)

return res.status(200).json({

token ,

user:{

fullname : user.fullname ,
email : user.email ,
password : user.password

}



})


})})

})
})} 

catch (error) {

    return res.status(500).send('server error')
    
}})


module.exports = router