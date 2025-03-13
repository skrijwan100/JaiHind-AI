import './App.css'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Chatbot from './components/Chatbot'
import Navbar from './components/Navbar';
import Singup from './components/Singup';

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
    
    
    <Routes>
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/' element={<Chatbot/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
