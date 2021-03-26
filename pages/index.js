import axios from 'axios'
import Hero from '@components/Hero'
import NavBar from '@components/NavBar'
import HeadComponent from '@components/Head'
import Style from '@styles/Home.module.css'

export default function Home({name}) {
  return (
    <div>
      <HeadComponent />
      <NavBar />
      <Hero />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await axios.get('http://localhost:3000/api/hello')
//   const { title } = res.data.anime[0]
//   return {
//     props: {name: title}
//   }
// }
