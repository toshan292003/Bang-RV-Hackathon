import './App.css';
import Navbar from './Pages/navbar';
import Home from './Pages/home';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;