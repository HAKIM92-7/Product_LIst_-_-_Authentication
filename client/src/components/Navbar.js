import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'


const Navbar = () => {

const dispatch = useDispatch()
const isAuth = useSelector(state => state.auth.isAuth) ;
const user = useSelector (state => state.auth.user)

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

      <h4  style={{color:"black" , border:"2px green solid" , borderRadius:"50%" , marginRight:"10px" , padding:"10px"}}>
          
          {user ? user.fullname[0] : null }</h4>
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={isAuth ? "/" : "/login"} onClick={()=> isAuth ? dispatch(logout()) : null}>{isAuth ? "Logout" : "Login"}</Link>
        </li>
        { !isAuth ?
        <li class="nav-item">
          <Link class="nav-link" to="/register">Sign up</Link>
        </li> : null

         }
        <li class="nav-item">
          <Link class="nav-link" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/" tabindex="-1">Home</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



        </div>
    )
}

export default Navbar
