import { useState } from "react";

import styles from "./slider.module.scss";

export default function Slider() {
  const [first, second, third, forth, fifth] = [1, 25, 50, 75, 100];
  const [value, setValue] = useState(third);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick(targetStop) {
    setValue(targetStop);
  }

  return (
    <div className={styles.container}>
      <div className={styles.resultBox}>
        <span>{value}</span>
        <span>%</span>
      </div>

      <div className="input-number">
        <input
          className={styles.inputSlider}
          style={{ "--value": `${value}%` }}
          list="number"
          type="range"
          id="slider"
          min={first}
          max={fifth}
          step="1"
          value={value}
          onChange={handleChange}
        />

        <ul className={styles.list}>
          {[first, second, third, forth, fifth].map((stop) => (
            <li className={styles.item} key={`list-${stop}`}>
              <button type="button" onClick={() => handleClick(stop)}>
                {stop}%
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
