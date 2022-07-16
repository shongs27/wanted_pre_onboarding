import { useState } from "react";

import { Check, FalseEye, TrueEye } from "../image";

import styles from "./input.module.scss";

export default function Input() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: true,
    password: true,
  });
  const [validity, setValidity] = useState({
    email: false,
  });
  const [clicked, setClicked] = useState(false);

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "email") {
      const emailValidity =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        );
      emailValidity
        ? setValidity({ ...validity, email: true })
        : setValidity({ ...validity, email: false });
    }
  }

  function handleBlur(e) {
    const {
      target: { name },
    } = e;

    setTouched({ ...touched, [name]: false });
  }

  function handleClick() {
    setClicked((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <div className={styles.email}>
        <label htmlFor="input-email">E-mail</label>
        <div className={styles.emailInput} validity={validity.email}>
          <input
            type="email"
            id="input-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {validity.email && (
            <div>
              <Check width="20px" height="20px" fill="green" />
            </div>
          )}
        </div>
        {!validity.email && !touched.email && (
          <div>이메일 잘못 입력하셨어요</div>
        )}
      </div>
      <div className={styles.password}>
        <label htmlFor="input-password">Password</label>
        <div className={styles.passwordInput} clicked={clicked}>
          <input
            type={clicked ? "password" : "text"}
            id="input-password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="button" onClick={handleClick}>
            {clicked ? (
              <TrueEye width="20px" height="20px" />
            ) : (
              <FalseEye width="20px" height="20px" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
