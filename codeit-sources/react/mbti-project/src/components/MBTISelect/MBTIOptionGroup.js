import MBTIOption from "./MBTIOption";
import styles from "./css/MBTISelect.module.css";

export default function MBTIOptionGroup({ options, value, onChange }) {
  // onChange : useState() setter
  return (
    <div className={styles.mbtiOptionGroup}>
      {options.map((option) => (
        <MBTIOption
          key={option.value}
          /* compare current value */
          selected={option.value === value}
          label={option.label}
          value={option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}
