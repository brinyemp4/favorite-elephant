import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import GhostCard from "../components/ghostcard";
import ReactPlaceholder from "react-placeholder";

export default function Home() {
  const [id, setId] = useState(22);
  const [ready, setReady] = useState(false);
  const [character, setCharacter] = useState({});

  const getRandomCharacter = async () => {
    setReady(false);
    try {
      const result = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setId(Math.floor(Math.random() * Math.floor(671)));
      setCharacter(await result.json());
      setReady(true);
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
          <ReactPlaceholder
            ready={ready}
            customPlaceholder={<GhostCard />}
          >
            <Card character={character} />
          </ReactPlaceholder>
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
