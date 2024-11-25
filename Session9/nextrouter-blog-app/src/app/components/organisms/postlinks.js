import styles from "../../page.module.css";
export default function PostLinks({ links }) {
    return <div className={styles.postlinks}>
        {links}
    </div>
}