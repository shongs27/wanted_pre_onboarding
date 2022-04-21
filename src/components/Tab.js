import { useState } from 'react';

import styled from '@emotion/styled';

const List = styled.ul(({ clicked }) => ({
  display: 'flex',
  width: '600px',
  padding: 0,
  margin: '1em auto',

  listStyle: 'none',

  borderBottom: '2px solid #efefef',

  position: 'relative',
  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: '-2px',

    left: clicked === '감자' ? 0 : clicked === '고구마' ? '200px' : '400px',

    display: 'block',
    width: '200px',
    height: '2px',
    backgroundColor: '#00cec9',

    transition: '0.5s',
  },
}));

const Item = styled.li(({ clicked }) => ({
  '& button': {
    width: '200px',
    padding: '1em 4em',

    fontWeight: clicked ? '900' : 'bold',
    color: clicked ? 'black' : '#b2bec3',
    backgroundColor: 'inherit',

    border: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default function Tab() {
  const [potato, sweetPotato, careRice] = ['감자', '고구마', '카레라이스'];
  const [clicked, setClicked] = useState('감자');

  function handleClick(kind) {
    setClicked(kind);
  }

  return (
    <List clicked={clicked}>
      {[potato, sweetPotato, careRice].map((kind) => (
        <Item clicked={clicked === kind}>
          <button type="button" onClick={() => handleClick(kind)}>
            {kind}
          </button>
        </Item>
      ))}
    </List>
  );
}
