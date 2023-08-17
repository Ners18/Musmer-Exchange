import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "./Navbar";
import Hero from "./Hero";
const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0xff4a3f, // Change this color to your preference
          backgroundColor: 0x151515, // Change this color to your preference
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      ref={myRef}
      className="w-fill h-screen flex flex-col items-center justify-center"
    >
      <Navbar />
      <Hero />
    </div>
  );
};
function Main() {
  return (
    <>
      <MyComponent />
    </>
  );
}
export default Main;
