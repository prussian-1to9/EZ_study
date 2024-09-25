import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ColorSurvey from "./components/MBTISelect/ColorSurvey";
import axios from "./lib/axios";
import styles from "./css/Home.module.css";

export default function Home() {
  const [items, setItems] = useState([]); // MBTI-color data
  const [filter, setFilter] = useState(null); // MBTI filter

  const nextPageRef = useRef(null); // pagination Ref
  const isLoadingRef = useRef(false); // prevent multiple requests

  const handleLoad = async (mbti) => {
    const res = await axios("/color-surveys/", {
      params: { mbti, limit: 20 },
    });
    nextPageRef.current = res.data.next; // next request URL
    const { results } = res.data;
    setItems(results);
  };

  const handleLoadNext = async () => {
    const res = await axios(nextPageRef.current);
    const { results, next } = res.data;
    setItems((prev) => [...prev, ...results]);
    nextPageRef.current = next;
  };

  /* cleanup => render => useEffect(from child nodes) */
  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

  useEffect(() => {
    // when scroll to the bottom of the page
    const handleScroll = async () => {
      if (!nextPageRef.current || isLoadingRef.current) return;
      isLoadingRef.current = true;

      const maxScrollTop =
        document.documentElement.offsetHeight - window.innerHeight - 100; // padding
      const currentScrollTop = document.documentElement.scrollTop;

      if (currentScrollTop >= maxScrollTop) await handleLoadNext();
      isLoadingRef.current = false;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
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
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + Add new color
        </Link>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
