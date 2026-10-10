import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Founder from './components/Founder'
import Testimonials from './components/Testimonials'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Founder />
        <Testimonials />
        <FindUs />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  )
}

export default App
