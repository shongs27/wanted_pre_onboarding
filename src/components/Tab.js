import { useState } from "react";

import styles from "./tab.module.scss";

export default function Tab() {
  const [potato, sweetPotato, careRice] = ["감자", "고구마", "카레라이스"];
  const length = [0, 200, 400];

  const [clickedKind, setClickedKind] = useState(0);
  function handleClick(index) {
    setClickedKind(index);
  }

  return (
    <div
      className={styles.list}
      style={{ "--length": `${length[clickedKind]}px` }}
    >
      {[potato, sweetPotato, careRice].map((kind, index) => (
        <button
          className={`${
            clickedKind === index ? styles.selected : styles.notSelected
          } ${styles.item} `}
          type="button"
          onClick={() => handleClick(index)}
        >
          {kind}
        </button>
      ))}
    </div>
  );
}
