import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const slideIn = keyframes`
  from { 
    opacity:0;
    border-bottom: 2px solid #00cec9;
    left: -1000
  }

  to {
    opacity: 1;
    border-bottom: 2px solid #efefef;
    left: 0;
  }
`;

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
    // borderBottom: clicked ? '2px solid #00cec9' : '2px solid #efefef',

    animation: clicked && `${slideIn} 1s cubic-bezier(0.25, 0.1, 0.25, 1)`,

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
