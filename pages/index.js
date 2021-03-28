import axios from 'axios'
import Hero from '@components/Hero'
import NavBar from '@components/NavBar'
import HeadComponent from '@components/Head'
import HomeContent from '@components/Homecontent'
import Footer from '@components/Footer'
import Style from '@styles/Home.module.css'

// urusin playlist. terus cari tau id id playlist nya
// bikin dropdown list render per playlist kalo bisa
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
