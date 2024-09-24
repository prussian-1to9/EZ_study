import { useState } from "react";
import { Link } from "react-router-dom";
import ColorSurvey from "./components/MBTISelect/ColorSurvey";
import mock from "./mock";
import styles from "./Home.module.css";

export default function Home() {
  // MBTI filter
  const [filter, setFilter] = useState(null);

  return (
    <div class={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.accent}>favorite color</span>
          <br />
          by MBTI
        </h1>
        <div>
          {filter && (
            <div className={styles.filter} onClick={() => setFilter(null)}>
              {filter}
              <img
                className={styles.removeIcon}
                src="/images/x.svg"
                alt="unset filter"
              />
            </div>
          )}
        </div>
      </header>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + Add new color
        </Link>
        <ul className={styles.items}>
          {mock.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
