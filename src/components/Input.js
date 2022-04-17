import { useState } from 'react';

export default function Input() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;

    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input
          type="email"
          id="input-email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          id="input-password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
