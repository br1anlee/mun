import './App.css';
import {animateScroll as scroll} from 'react-scroll'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {


  // When page refreshes returns to the top of the page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
