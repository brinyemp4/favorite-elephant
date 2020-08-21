import styles from "../styles/Home.module.css";
import { TextBlock, RectShape } from "react-placeholder/lib/placeholders";

export default function GhostCard({ character }) {
  return (
    <div className={styles.card}>
      <RectShape color="gray" style={{ width: 300, height: 300 }} />
      <div className={styles.card_body}>
        <TextBlock rows={3} color="gray" style={{ width: 300, height: 125 }} />
      </div>
    </div>
  );
}
