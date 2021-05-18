import { useState } from "react";
import "./styles.css";

export default function App() {
  const [money, setMoney] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  function fractionMoney(money) {
    let result = [];
    let hasil = Math.floor(money / 100000);
    let sisa = money % 100000;
    if (money >= 100000) {
      result.push(`Rp. 100.000: ${hasil}x`);
    }
    if (sisa >= 50000) {
      hasil = Math.floor(sisa / 50000);
      sisa = sisa % 50000;
      result.push(`Rp. 50.000: ${hasil}x`);
    }
    if (sisa >= 20000) {
      hasil = Math.floor(sisa / 20000);
      sisa = sisa % 20000;
      result.push(`Rp. 20.000: ${hasil}x`);
    }
    if (sisa >= 10000) {
      hasil = Math.floor(sisa / 10000);
      sisa = sisa % 10000;
      result.push(`Rp. 10.000: ${hasil}x`);
    }
    if (sisa >= 5000) {
      hasil = Math.floor(sisa / 5000);
      sisa = sisa % 5000;
      result.push(`Rp. 5.000: ${hasil}x`);
    }
    if (sisa >= 1000) {
      hasil = Math.floor(sisa / 1000);
      sisa = sisa % 1000;
      result.push(`Rp. 1.000: ${hasil}x`);
    }
    if (sisa >= 500) {
      hasil = Math.floor(sisa / 500);
      sisa = sisa % 500;
      result.push(`Rp. 500: ${hasil}x`);
    }
    if (sisa >= 200) {
      hasil = Math.floor(sisa / 200);
      sisa = sisa % 200;
      result.push(`Rp. 200: ${hasil}x`);
    }
    if (sisa >= 100) {
      hasil = Math.floor(sisa / 100);
      sisa = sisa % 100;
      result.push(`Rp. 100: ${hasil}x`);
    }

    if (sisa < 100 && sisa !== 0) {
      result.push(`left: ${sisa}`);
    }

    return [...result];
  }

  const handleChange = (e) => {
    let reg = /\D/g;
    let value = e.target.value.replace(reg, "");
    let min = 99;
    let max = 1000000000;

    if (value >= max) {
      setError("Field too long");
      value = "";
    } else if (value <= min) {
      setError("Field must more than 99");
    } else {
      setError("");
    }
    const fraction = fractionMoney(value);
    setResult(fraction);
    setMoney(value);
  };

  return (
    <>
      <div className="App">
        <h1>Fraction Money</h1>
        <input
          placeholder="Input number"
          type="text"
          value={money}
          onChange={handleChange}
        />
        <p>{error}</p>

        <ul>
          {result.length > 0 &&
            result.map((res, i) => {
              return (
                <li key={i}>
                  <span style={{ marginRight: "1em" }}>{res}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
