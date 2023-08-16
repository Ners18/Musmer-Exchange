import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, } from "./components";
import FooterType from "./components/FooterType";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-[1000px] md:h-fit'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Feedbacks />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <FooterType />
      </div>
    </BrowserRouter>
  );
}

export default App;
