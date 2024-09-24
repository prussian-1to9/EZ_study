import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MBTISelect from "./components/MBTISelect/MBTISelect";
import ColorInput from "./components/MBTISelect/ColorInput";
import Button from "./components/MBTISelect/Button";

import generateColorCode from "./lib/generateColorCode";
import axios from "./lib/axios";
import styles from "./css/New.module.css";

export default function New() {
  // handle form values
  const [formValue, setFormValue] = useState({
    mbti: "INTJ",
    colorCode: "#180866",
  });
  const navigate = useNavigate(); // handle url

  const handleChange = (name, value) => {
    setFormValue((preFormValue) => ({
      ...preFormValue,
      [name]: value,
    }));
  };

  const handleRandomClick = () => {
    const nextColorCode = generateColorCode();
    handleChange("colorCode", nextColorCode);
  };

  const handleSubmit = async () => {
    await axios.post("/color-surveys/", {
      ...formValue,
      password: "0000",
    });
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerHeading}>Add new color!</h1>
        <Link className={styles.cancel} to="/">
          <img className={styles.cancelIcon} src="/images/x.svg" alt="cancel" />
        </Link>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>MBTI</h2>
        <MBTISelect
          value={formValue.mbti}
          onChange={(newMBTI) => handleChange("mbti", newMBTI)}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>
          Color
          <button className={styles.random} onClick={handleRandomClick}>
            <img
              className={styles.repeatIcon}
              src="/images/repeat.svg"
              alt="random"
            />
          </button>
        </h2>
        <ColorInput
          value={formValue.colorCode}
          onChange={(newColorCode) => handleChange("colorCode", newColorCode)}
        />
      </section>
      <Button className={styles.submit} onClick={handleSubmit}>
        Add Color
      </Button>
    </div>
  );
}
