import { useState } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '300px',
  margin: '1em 10em',
});

const InputSlider = styled.input({
  width: '400px',
  WebkitAppearance: 'none',
  margin: 0,

  '&::-webkit-slider-runnable-track': {
    background:
      'linear-gradient(to right, #82CFD0 0%, #82CFD0 50%, #fff 50%, #fff 100%)',
    border: 'solid 1px #82CFD0',
    borderRadius: '30px',
  },

  '&::-webkit-slider-thumb': {
    WebkitAppearance: 'none',

    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#1abc9c',
    cursor: 'pointer',
    // transition: 'background .15s ease-in-out',
    boxShadow: '0 0 0 3px white, 0 0 0 6px #1abc9c',
  },
});

const Datalist = styled.datalist({
  width: '400px',
  display: 'flex',
  justifyContent: 'space-between',

  margin: 0,
  padding: 0,

  position: 'relative',
  bottom: '-22px',
  WebkitUserSelect: 'none',
  //   WebkitUserSelect: 'none' /* Safari */,
  pointerEvents: 'none',

  '& option': {
    WebkitAppearance: 'none',

    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#1abc9c',
  },
});

const List = styled.ul({
  width: '400px',

  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
  padding: 0,
});

const Item = styled.li({
  '& button': {
    color: '#b2bec3',
    backgroundColor: '#efefef',
    border: '1px solid #efefef',
    borderRadius: '30px',
    padding: '.2em 1em',

    '&:hover': {
      backgroundColor: '#1abc9c',
      color: '#fff',
    },
  },
});

export default function Slider() {
  const [first, second, third, forth, fifth] = [1, 25, 50, 75, 100];
  const [value, setValue] = useState('50');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick(targetNumber) {
    setValue(targetNumber);
  }
  return (
    <Container>
      <div
        style={{
          boxSizing: 'border-box',
          width: '400px',
          textAlign: 'end',
          border: '2px solid #efefef',
          padding: '.4em',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>{value}</span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '1em',
            marginRight: '1em',
          }}
        >
          %
        </span>
      </div>
      <Datalist id="number">
        <option value="1"></option>
        <option value="25"></option>
        <option value="50"></option>
        <option value="75"></option>
        <option value="100"></option>
      </Datalist>
      <div>
        <InputSlider
          list="number"
          type="range"
          id="slider"
          min="1"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
        />
        <List>
          <Item>
            <button type="button" onClick={() => handleClick(first)}>
              {first}%
            </button>
          </Item>
          <Item>
            <button type="button" onClick={() => handleClick(second)}>
              {second}%
            </button>
          </Item>
          <Item>
            <button type="button" onClick={() => handleClick(third)}>
              {third}%
            </button>
          </Item>
          <Item>
            <button type="button" onClick={() => handleClick(forth)}>
              {forth}%
            </button>
          </Item>
          <Item>
            <button type="button" onClick={() => handleClick(fifth)}>
              {fifth}%
            </button>
          </Item>
        </List>
      </div>
    </Container>
  );
}
