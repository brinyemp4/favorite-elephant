import styles from "../styles/Home.module.css";

export default function Card({ character }) {
  return (
    <div className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        title={character.name}
      />
      <div className={styles.card_body}>
        <h3>{character.name}</h3>
        <p>
            {character.name} is a {character.species} and {character.gender} {character.type}.
        </p>
      </div>
    </div>
  );
}
