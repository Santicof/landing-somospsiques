import { useEffect } from 'react'
import {
  Approach,
  Contact,
  Director,
  Faq,
  Gallery,
  Header,
  Hero,
  Services,
} from './components/LandingSections'

function App() {
  useEffect(() => {
    if (!window.location.hash) return

    requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    })
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Approach />
      <Director />
      <Gallery />
      <Faq />
      <Contact />
    </>
  )
}

export default App
