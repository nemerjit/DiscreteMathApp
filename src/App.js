import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/home.js'
import Navbar from './Components/navbar.js'
import Contactus from './Pages/contactus.js'
import Quizme from './Pages/quizme.js'
import QuizTopics from './Components/quiztopics.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/quizme' element={<Quizme/>}/>
        <Route path='/aboutus' element={<QuizTopics/>}/>
      </Routes>
    </div>
  )
}

export default App;
