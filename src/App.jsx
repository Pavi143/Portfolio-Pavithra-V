import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
  
      <Header />
      <Nav />
      <About />
      <Experience />
      <Work/>
      <Portfolio />
      <Contact />
      <div className="nav-container">
        <a href="https://webring.coddin.in/pavithra/back" className="btn btn-primary left-btn">
          Back
        </a>
        <a href="https://webring.coddin.in/pavithra/next" className="btn btn-primary right-btn">
          Next
        </a>
      </div>
      <Footer />

    </>
  );
};

export default App;
