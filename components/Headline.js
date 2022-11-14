import styles from "../styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </div>
  );
}
