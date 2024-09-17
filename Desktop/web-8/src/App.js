import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Service from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact"
import Footer from "./Component/Footer/Footer";
import Benefit from "./Component/Benefit/Benefit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path="blog" element={<Blog/> } />
          <Route path="service" element={<Service/>}/>
          <Route path="contact" element={<Contact/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
