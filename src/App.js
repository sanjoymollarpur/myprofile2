import './App.css';
import Card1 from './Components/Card1';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Footer1 from './Components/Footer1';
function App() {
  return (
    <div className="">
       <Navbar  />
     <Section1/>
     <Section2/>
     {/* <Section3/> */}
     <Card1/>
     <Resume />
     <Contact/>
     <Footer1/>
    </div>
  );
}

export default App;
