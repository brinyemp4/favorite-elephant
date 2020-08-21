import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const getRandomElephant = async () => {
    try {
      const result = await fetch(`https://elephant-api.herokuapp.com/elephants/random`);
      const record = await result.json();
      console.log(record);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Elephant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pick your favorite elephant!
        </h1>

        <button onClick={getRandomElephant} className={`go-pick`}>
          Pick one!
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
