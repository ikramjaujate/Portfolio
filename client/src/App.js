import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import About from "./component/about/about"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />

      <Portfolio />
      <Features />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
