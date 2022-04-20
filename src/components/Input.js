import { useState } from 'react';

import check from '../image/check.svg';
import falseEye from '../image/falseEye.svg';
import trueEye from '../image/trueEye.svg';

import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em',
});

const EmailInput = styled.div(({ validity }) => ({
  position: 'relative',
  width: '300px',

  '& input': {
    width: '300px',
    height: '30px',
    padding: '2px 6px',
    fontSize: '16px',
  },

  '& div': {
    display: validity ? 'inline-block' : 'none',

    position: 'absolute',
    top: '7px',
    right: '2px',
  },
}));

const PasswordInput = styled.div({
  position: 'relative',
  width: '300px',

  '& input': {
    width: '300px',
    height: '30px',
    padding: '2px 6px',
    fontSize: '16px',
  },

  '& button': {
    position: 'absolute',
    top: '7px',
    right: '-5px',

    backgroundColor: 'inherit',
    border: 'none',
  },
});

export default function Input() {
  const [form, setForm] = useState({
    email: '',
    password: '',
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

    if (name === 'email') {
      const emailValidity = /^[\w]+@\w+\.[A-Za-z]{2,3}$/.test(value);
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
    <Container>
      <div className="email">
        <label htmlFor="input-email">E-mail</label>
        <EmailInput validity={validity.email}>
          <input
            type="email"
            id="input-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            <img src={check} alt="체크 이미지" width="20px" height="20px" />
          </div>
        </EmailInput>
        {!validity.email && !touched.email && (
          <div>이메일 잘못 입력하셨어요</div>
        )}
      </div>
      <div className="password">
        <label htmlFor="input-password">Password</label>
        <PasswordInput clicked={clicked}>
          <input
            type={clicked ? 'password' : 'text'}
            id="input-password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button onClick={handleClick}>
            <img
              src={clicked ? trueEye : falseEye}
              alt="비밀번호 "
              width="20px"
              height="20px"
            />
          </button>
        </PasswordInput>
      </div>
    </Container>
  );
}
