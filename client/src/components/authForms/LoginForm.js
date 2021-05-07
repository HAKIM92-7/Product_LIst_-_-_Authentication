import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {login} from '../../redux/actions/authActions'
import {Link} from 'react-router-dom'
import './RegisterForm.css'

const LoginForm = () => {

const isAuth = useSelector(state => state.auth.isAuth)

const dispatch = useDispatch()

const history = useHistory()

const [email , setEmail] = useState("")
const [password , setPassword] = useState("")






const onSubmit = (e) => {

e.preventDefault() ;

dispatch(login({email , password}))

setEmail('')
setPassword('')


}

if (isAuth) {

history.push('/products')


}



    return (
        <div>
    
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form onSubmit={onSubmit}>
			<h1>Sign In</h1>
            	 
			<input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}placeholder="Email" />
			<input type="password" name="password" onChange={(e)=> setPassword(e.target.value) }  value={password} placeholder="Password" />
			
			
			<button type="submit">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<Link to="/register" class="ghost btn btn-primary" id="signUp">Sign Up</Link>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>            







        </div>
    )
}

export default LoginForm


