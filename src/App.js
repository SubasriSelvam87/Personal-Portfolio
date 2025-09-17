import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './Components/Home/Svg';
import 'primereact/resources/themes/saga-blue/theme.css';  // or another theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Skillpro from './Components/Skills/SkillPro/Skillspro';
import Wave from './Components/Experience/Wave/Wave';
import Gallery from './Components/Image/Image';
import Demo from './Components/About/Demo';
import Newskill from './Components/Skills/SkillPro/NewSkill';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      {/* <Logo /> */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/Contact" element={<Contact />} />
           {/* <Route path="/" element={<div />} /> */}
<Route path="/about" element={<About />} />
<Route path="/Skill" element={<Skillpro />} />

          <Route path="/Wave" element={<Wave />} />
          <Route path="/Gallary" element={<Gallery />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/Newskill" element={<Newskill />} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
