import styled from '@emotion/styled';
import { useState } from 'react';

const List = styled.ul({
  width: '600px',
  margin: '1em auto',

  display: 'flex',
  listStyle: 'none',
  padding: 0,
});

const Item = styled.li(({ clicked }) => ({
  '& button': {
    backgroundColor: 'inherit',
    fontWeight: 'bold',

    width: '200px',
    padding: '1em 4em',
    border: 'none',
    borderBottom: clicked ? '2px solid #00cec9' : '2px solid #efefef',

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
    <List>
      <Item clicked={clicked === potato}>
        <button type="button" onClick={() => handleClick(potato)}>
          감자
        </button>
      </Item>
      <Item clicked={clicked === sweetPotato}>
        <button type="button" onClick={() => handleClick(sweetPotato)}>
          고구마
        </button>
      </Item>
      <Item clicked={clicked === careRice}>
        <button type="button" onClick={() => handleClick(careRice)}>
          카레라이스
        </button>
      </Item>
    </List>
  );
}
