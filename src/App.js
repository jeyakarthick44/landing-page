import React from "react";
import "./App.css";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Footer from "./sections/Footer";
import Section1 from "./sections/Section1";

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
