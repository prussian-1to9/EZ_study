import styles from "./css/ColorInput.module.css";

function isValidColorCode(colorCode) {
  // New.js handleColorCodeBlur() before
  return /^#[a-f0-9]{6}$/i.test(colorCode);
}
export default function ColorInput({ value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  function handleBlur() {
    if (!isValidColorCode(value)) {
      onChange("#000000");
    }
  }

  return (
    <div className={styles.colorInput}>
      <input
        className={styles.input}
        value={value}
        maxLength={7}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isValidColorCode(value) && (
        <span className={styles.chip} style={{ backgroundColor: value }}></span>
      )}
    </div>
  );
}
