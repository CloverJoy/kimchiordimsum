import Head from 'next/head'
import axios from 'axios'
import NavBar from './components/NavBar'
import Style from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div>
      <Head>
        <title>Kimchi or DimSum</title>
        <meta name='keywords' content='kpop, kpop news, youtube channel' />
      </Head>
      <NavBar />
      <h1 className={Style.title}>{name}</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3000/api/hello')
  const { title } = await res.data.anime[0]
  return {
    props: {name: title}
  }
}
