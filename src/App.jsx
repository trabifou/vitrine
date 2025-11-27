import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Presentation from './components/Presentation/Presentation'
import Projets from './components/Projets/Projets'
import Contact from './components/Contact/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('presentation')

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    
    const handleScroll = () => {
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id')
        }
      })
      
      if (current) {
        setActiveSection(current)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      <Presentation />
      <Projets />
      <Contact />
    </>
  )
}

export default App
