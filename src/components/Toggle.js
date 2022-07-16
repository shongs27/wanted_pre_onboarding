import styles from "./toggle.module.scss";

export default function Toggle() {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="checkbox" className={styles.input} />
      <label htmlFor="checkbox" className={styles.label}>
        <span>기본</span>
        <span>상세</span>
      </label>
    </div>
  );
}
