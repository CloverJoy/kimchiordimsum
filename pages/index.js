import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from '@components/NavBar'
import HeadComponent from '@components/Head'
import Style from '@styles/Home.module.css'

export default function Home({name}) {
  return (
    <div>
      <HeadComponent />
      <NavBar />
      <div className={Style.hero}>
        <Jumbotron className={Style.bgreset}>
          <h1>Kimchi or DimSum</h1>
          <p>Your dynamic KPOP analytics and news! </p>
          <Button variant="primary">Subscribe now!</Button>
        </Jumbotron>
      </div>
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
