import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import ParticleBG from "./components/particlebg"
import Projects from "./components/projects/Projects"

function App() {

  return (
    <div>
      <ParticleBG />
      <div style={{
        position: "absolute",
        "zIndex": 2
      }}>

        <Nav />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
