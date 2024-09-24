import styles from "./css/MBTISelect.module.css";

export default function MBTIOption({ selected, label, value, onClick }) {
  const className = `${styles.mbtiOption} ${selected ? styles.selected : ""}`;
  return (
    <span className={className} onClick={onClick}>
      <span className={styles.char}>{value}</span>
      {label}
    </span>
  );
}
