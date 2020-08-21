import { useState } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/card";

export default function Home() {
  const [id, setId] = useState(22);
  const [character, setCharacter] = useState({});
  const getRandomCharacter = async () => {
    try {
      const result = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setId(Math.floor(Math.random() * Math.floor(671)));
      return setCharacter(await result.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Character</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pick your favorite character!</h1>

        <button onClick={getRandomCharacter} className={`go-pick`}>
          Pick one!
        </button>

        <div id={`result`}>
          <Card character={character}></Card>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
