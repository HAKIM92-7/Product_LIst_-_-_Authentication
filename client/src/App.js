import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import {Switch , Route} from 'react-router-dom'
import RegisterForm from './components/authForms/RegisterForm';
import Landing from './components/Landing';
import LoginForm from './components/authForms/LoginForm';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { loadUser } from './redux/actions/authActions';
function App() {

const dispatch = useDispatch()

useEffect(() => {

dispatch(loadUser())


}, [])



  return (
    <div className="App">
      <Navbar/>

   <Switch>  
   <Route exact path="/" component={Landing} />
   <Route path="/products" component={ProductList} />
   <Route path="/register" component={RegisterForm} />
   <Route path='/login'  component={LoginForm} />


   </Switch> 
    </div>
  );
}

export default App;
