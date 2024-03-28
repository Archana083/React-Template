import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/common/header';
import Home from './pages/landing.js';
import About from './pages/about.js';
import Courses from './pages/courses.js';


function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
