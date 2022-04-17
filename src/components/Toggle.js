import { useState } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em auto',

  display: 'flex',

  width: '300px',
  backgroundColor: '#efefef',

  border: '1px solid #eee',
  borderRadius: '30px',
});

const Button = styled.button(({ toggle }) => ({
  backgroundColor: toggle ? 'white' : 'inherit',
  border: 'none',
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

  function handleBasic() {
    setToggle(true);
  }
  function handleDetail() {
    setToggle(false);
  }
  return (
    <Container>
      <Button toggle={toggle} onClick={handleBasic}>
        기본
      </Button>

      <Button toggle={!toggle} onClick={handleDetail}>
        상세
      </Button>
    </Container>
  );
}
