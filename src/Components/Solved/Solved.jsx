import styles from "./solved.module.css";

export default function Solved() {
  return (
    <div className=" position-relative">
      <div className={styles.solved}></div>
      <div className={styles.over}>
        <div className={styles.solved_text}>
          <div>Solved</div>
          <div className={styles.solved_text_0}>0</div>
          <div className={styles.solved_text_out}>Out of 0</div>
        </div>
      </div>
      <div className={styles.text}></div>
    </div>
  );
}
