import './App.css';
import Navbar from './Pages/navbar';
import Home from './Pages/home';
import Signup from './Pages/signup';
import Signin from './Pages/singin';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/signin" element = {<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;