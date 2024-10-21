import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import SkillsGrid from './components/SkillsGrid';
import ContactMe from './components/ContactMe';
import ScrollTopBtn from './components/ScrollTopBtn';
import Footer from './components/Footer';
import EventsList from './components/Events';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <ScrollTopBtn></ScrollTopBtn>
        <Routes>            
            <Route path="/" element={<Hero/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<ProjectGrid/>}>
                <Route path="filter/:category" element={<ProjectGrid />} />
                <Route path=":id" element={<Modal />} />
            </Route>
            <Route path="/skills" element={<SkillsGrid/>}/>
            <Route path="/contact" element={<ContactMe/>}/>   
            <Route path="/events" element={<EventsList/>}/>
            
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
