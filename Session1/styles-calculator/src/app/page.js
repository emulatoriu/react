import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.calculator}>
        <div className={styles.display}>0</div>
          <div className={styles.buttons}>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>0</button>
          </div>
      </div>
    </div>
  );
}
