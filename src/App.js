import './App.css';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import About from './About';

const App = () => {
  return (
    <>
    <Header />
    <Skills id="skills"/>
    <Education id="education"/>
    <Projects />   
    <Contact />
    <Footer />
    </>
  )
}

export default App;
