import { useState } from 'react';

import arrowImage from '../image/arrow.svg';
import styled from '@emotion/styled';

const SelectBox = styled.div({
  width: '300px',
  margin: '1em auto',
});

const Selected = styled.div(({ toggle }) => ({
  marginBottom: '4px',
  padding: '12px 24px',

  backgroundColor: '#2f3640',
  color: '#f5f6fa',
  borderRadius: '8px',

  position: 'relative',
  '&::after': {
    content: "''",
    background: `url(${arrowImage})`,
    backgroundRepeat: 'no-repeat',
    width: '20px',
    height: '100%',

    position: 'absolute',
    top: toggle ? '-5px' : '15px',
    right: '20px',

    transform: toggle && 'rotateX(180deg)',
    transition: 'all 0.4s',
  },

  '&:hover': {
    cursor: 'pointer',
  },
}));

const OptionsContainer = styled.div(({ toggle }) => ({
  backgroundColor: '#2f3640',
  borderRadius: '0 0 8px 8px',
  color: 'white',

  maxHeight: '240px',
  overflowY: 'scroll',

  display: toggle || 'none',
  // opacity: 1,
  // maxHeight: undefined,
  // overflow: undefined,

  '&::-webkit-scrollbar': {
    width: '8px',
    background: '#0d141f',
    borderRadius: '0px 8px 8px 0px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: 'white',
    borderRadius: '0 0 8px 0',
  },
}));

const Option = styled.div(({ show }) => ({
  display: show ? 'block' : 'none',

  padding: '10px 20px',
  cursor: 'pointer',

  '&:hover': {
    background: '#414b57',
  },

  '& label': {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  '& input': {
    display: 'none',
  },
}));

const Filter = styled.div(({ toggle }) => ({
  display: toggle || 'none',

  border: '9px solid #2f3640',
  borderRadius: '8px 8px 0 0',

  '& input': {
    boxSizing: 'border-box',
    width: '100%',
    padding: '12px 16px',
    fontSize: '.8em',
  },
}));

export default function Dropzone() {
  const [options, setOptions] = useState([
    { abbr: 'front', name: 'Frontend', show: true },
    { abbr: 'back', name: 'Backend', show: true },
    { abbr: 'ai', name: 'AI', show: true },
    { abbr: 'devops', name: 'DevOps', show: true },
    { abbr: 'etc1', name: '기타등등1', show: true },
    { abbr: 'etc2', name: '기타등등2', show: true },
    { abbr: 'etc3', name: '기타등등3', show: true },
  ]);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('All Position');
  const [search, setSearch] = useState('');

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleOption(e) {
    const targetText = e.target.childNodes[1].outerText;
    setSelected(targetText);
    handleToggle();
  }

  function handleChange(e) {
    const targetText = e.target.value;
    setSearch(targetText);

    options.forEach(({ name }, i) => {
      const LowerTarget = targetText.toLowerCase();
      const LowerName = name.toLowerCase();

      if (LowerName.indexOf(LowerTarget) !== -1) {
        const newState = [...options];
        newState[i]['show'] = true;
        setOptions(newState);
      } else {
        const newState = [...options];
        newState[i]['show'] = false;
        setOptions(newState);
      }
    });
  }

  return (
    <SelectBox>
      <Selected toggle={toggle} onClick={handleToggle}>
        {selected}
      </Selected>
      <Filter toggle={toggle}>
        <input type="text" value={search} onChange={handleChange} />
      </Filter>
      <OptionsContainer toggle={toggle}>
        {options.map(({ abbr, name, show }, index) => (
          <Option key={index} onClick={handleOption} show={show}>
            <input type="radio" id={abbr} name="category" />
            <label htmlFor={abbr}>{name}</label>
          </Option>
        ))}
      </OptionsContainer>
    </SelectBox>
  );
}
