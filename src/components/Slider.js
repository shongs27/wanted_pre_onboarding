import { useState } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '300px',
  margin: '1em 10em',
});

const ResultBox = styled.div({
  boxSizing: 'border-box',
  width: '400px',
  padding: '.4em',
  textAlign: 'end',
  border: '2px solid #efefef',

  '& span:first-child': {
    fontWeight: 'bold',
  },

  '& span': {
    display: 'inline-block',
    marginLeft: '1em',
    marginRight: '1em',
  },
});

const InputSlider = styled.input(({ value }) => ({
  width: '400px',
  WebkitAppearance: 'none',
  margin: 0,

  '&::-webkit-slider-runnable-track': {
    background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff 0)`,
    border: 'solid 1px #82CFD0',
    borderRadius: '30px',
  },

  '&::-webkit-slider-thumb': {
    WebkitAppearance: 'none',

    width: '20px',
    height: '20px',
    background: '#1abc9c',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 0 0 3px white, 0 0 0 6px #1abc9c',
  },
}));

const Datalist = styled.datalist({
  display: 'flex',
  justifyContent: 'space-between',

  width: '400px',
  margin: 0,
  padding: 0,

  position: 'relative',
  bottom: '-22px',

  WebkitUserSelect: 'none',
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
  display: 'flex',
  justifyContent: 'space-between',

  width: '400px',
  padding: 0,

  listStyle: 'none',
});

const Item = styled.li({
  '& button': {
    padding: '.2em 1em',

    color: '#b2bec3',
    backgroundColor: '#efefef',
    border: '1px solid #efefef',
    borderRadius: '30px',

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
      <ResultBox>
        <span>{value}</span>
        <span>%</span>
      </ResultBox>
      <Datalist id="number">
        <option value="1"></option>
        <option value="25"></option>
        <option value="50"></option>
        <option value="75"></option>
        <option value="100"></option>
      </Datalist>
      <div className="input-number">
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
          {[first, second, third, forth, fifth].map((step) => (
            <Item key={step}>
              <button type="button" onClick={() => handleClick(step)}>
                {step}%
              </button>
            </Item>
          ))}
        </List>
      </div>
    </Container>
  );
}
