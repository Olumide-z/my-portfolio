import React from 'react'
import './home.css';
import { Header, Navbar, About, Skills, Projects, Contact, Footer } from '../../components'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
        <Header />
        <Projects />
        <About />
        {/* <Skills />    */}
        <Contact />
        <Footer />
    </div>
  )
}

export default Home