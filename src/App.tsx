import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Projects from "./components/projects/Projects"

function App() {

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
