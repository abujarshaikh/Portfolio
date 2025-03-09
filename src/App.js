import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Education from './component/Education/Education';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
