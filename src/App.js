import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/home.js'
import Navbar from './Components/navbar.js'
import Contactus from './Pages/contactus.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </div>
  )
}

export default App;
