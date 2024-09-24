import { useState } from "react";
import { Link } from "react-router-dom";
import MBTISelect from "./components/MBTISelect/MBTISelect";
import ColorInput from "./components/MBTISelect/ColorInput";
import Button from "./components/MBTISelect/Button";
import generateColorCode from "./lib/generateColorCode";

export default function New() {
  // handle form values
  const [formValue, setFormValue] = useState({
    mbti: "INTJ",
    colorCode: "#180866",
  });

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

  return (
    <div>
      <h1>Add new color!</h1>
      <Link to="/">
        <img src="/images/x.svg" alt="cancel" />
      </Link>

      <h2>MBTI</h2>
      <MBTISelect
        value={formValue.mbti}
        onChange={(newMBTI) => handleChange("mbti", newMBTI)}
      />

      <h2>Color</h2>
      <img src="/images/repeat.svg" alt="random" onClick={handleRandomClick} />
      <ColorInput
        value={formValue.colorCode}
        onChange={(newColorCode) => handleChange("colorCode", newColorCode)}
      />
      <Button>Add Color</Button>
    </div>
  );
}
