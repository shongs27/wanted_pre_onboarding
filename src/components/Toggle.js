import { useState } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '300px',
  margin: '1em auto',

  display: 'flex',

  backgroundColor: '#efefef',

  border: '1px solid #eee',
  borderRadius: '30px',
});

const Button = styled.button(({ toggle }) => ({
  backgroundColor: toggle ? 'white' : 'inherit',

  padding: '1em',
  width: '150px',
  fontWeight: 'bold',

  border: '1px solid #eee',
  borderRadius: '30px',

  '&:hover': {
    cursor: 'pointer',
  },
}));

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <Container>
      <Button toggle={toggle} onClick={handleToggle}>
        기본
      </Button>

      <Button toggle={!toggle} onClick={handleToggle}>
        상세
      </Button>
    </Container>
  );
}
