import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, } from "./components";
import FooterType from "./components/FooterType";
import Main from "./components/Main";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Main />
        
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
