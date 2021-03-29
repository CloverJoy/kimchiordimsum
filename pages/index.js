import Hero from './components/Hero'
import NavBar from './components/NavBar'
import HeadComponent from './components/HeadComponent'
import HomeContent from './components/HomeContent'
import Footer from './components/Footer'

// ganti favicon

export default function Home() {
  return (
    <div>
      <HeadComponent />
      <NavBar />
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  )
}
