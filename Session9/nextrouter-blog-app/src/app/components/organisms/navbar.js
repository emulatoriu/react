import Link from "next/link";
import styles from "../../page.module.css";

export default function Navbar() {
    return <div className={styles.navbar}>
        <Link href={"/"}>Home</Link>
        <Link href={"/pages/about"}>About us</Link>
    </div>
}