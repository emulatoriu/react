import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>My favourite sports</h1>
      <p>
        Here I am listing my favourite sports to share.
      </p>
      <ol>
        <li>Snooker</li>
        <li>Chess</li>
        <li>Soccer</li>
        <li>American Football</li>
      </ol>
    </div>
  );
}
