import Head from 'next/head'
import axios from 'axios'

export default function Home({name}) {
  return (
    <div>
      <Head>
        <title>Kimchi or DimSum</title>
        <meta name='keywords' content='kpop, kpop news, youtube channel' />
      </Head>
      <h1>{name}</h1>
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
