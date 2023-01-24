import CardPost from '@/components/CardPost'
import Head from 'next/head'
import styles from '../styles/home.module.scss'




export default function Home() {

  return (
    <>
      <Head>
        <title>Kiss Blog</title>
        <meta name="description" content="Blog de noticia de artistas Baianos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.page}>
        <h1>
          Últimos artigos
        </h1>
        <div>
          <CardPost />
        </div>
      </section>

    </>
  )
}


