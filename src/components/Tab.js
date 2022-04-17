import styled from '@emotion/styled';

const List = styled.ul({
  margin: '1em auto',

  width: '450px',

  display: 'flex',
});

const Item = styled.li({
  listStyle: 'none',

  padding: '1em 1.5em',
});
export default function Tab() {
  return (
    <List>
      <Item>감자</Item>
      <Item>고구마</Item>
      <Item>카레라이스</Item>
    </List>
  );
}
