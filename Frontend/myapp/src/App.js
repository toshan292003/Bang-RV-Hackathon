import './App.css';
import HomeT from './Pages/home';
import Signup from './Pages/signup';
import Signin from './Pages/singin';
import HomeS from './Pages/homeS';
import CreateTest from './Pages/createTest';
import TestTeacher from './Pages/testsTeacher';
import TestStudent from './Pages/testsStudent';
import ClassDashboard from './Pages/ClassDashboard';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Signin/>}/>
          <Route path = "/home/teacher" element = {<HomeT/>}/>
          <Route path = "/home/teacher/class/:id" element = {<ClassDashboard/>}/>
          <Route path = "/home/student" element = {<HomeS/>}/>
          <Route path = "/tests/teacher" element = {<TestTeacher/>}/>
          <Route path = "/tests/student" element = {<TestStudent/>}/>
          <Route path = "/tests/add" element = {<CreateTest/>}/>s
          <Route path = "/signup" element = {<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;