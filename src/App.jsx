import Experience from "./section/Experience"
import TechStack from "./section/TechStack"
import Hero from "./section/Hero"
import Footer from "./section/Footer"
import About from "./section/About"
import LanguageSwitch from "./components/ui/LanguageSwitch"

const App = () => {
  return (
    <>
      <LanguageSwitch />
      <Hero />
      <Experience />
      <TechStack />
      <About />
      <Footer />
    </>
  )
}

export default App