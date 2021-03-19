import Head from 'next/head'

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

export const getStaticProps = () => {
  return {
    props: {name: 'hello warudo'}
  }
}
