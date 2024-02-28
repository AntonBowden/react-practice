import { useState } from "react";

const ColorGenerator = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleGenerateRandomHexColor = () => {
    const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    const getRandomIndex = () => Math.floor(Math.random() * 16);
    let hexString = "#";
    for (let i = 0; i < 6; i++) {
      hexString += range[getRandomIndex()];
    }
    setColor(hexString);
  };

  const handleGenerateRandomRgbColor = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 256);
    const generateString = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    setColor(generateString);
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", background: color }}
      className="container"
    >
      <button onClick={() => setColorType("hex")}>HEX</button>
      <button onClick={() => setColorType("rgb")}>RGB</button>
      <button
        onClick={
          colorType === "hex"
            ? handleGenerateRandomHexColor
            : handleGenerateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <h2>{color}</h2>
    </div>
  );
};

export default ColorGenerator;
