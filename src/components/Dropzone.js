import { useState } from 'react';

import styled from '@emotion/styled';
import image from '../image/arrow.svg';

const SelectBox = styled.div({
  width: '300px',
  margin: '1em auto',
});

const Selected = styled.div(({ toggle }) => ({
  backgroundColor: '#2f3640',
  color: '#f5f6fa',
  borderRadius: '8px',

  marginBottom: '4px',
  padding: '12px 24px',

  position: 'relative',

  '&:hover': {
    cursor: 'pointer',
  },

  '&::after': {
    content: "''",
    background: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    width: '20px',
    height: '100%',

    position: 'absolute',
    top: toggle ? '-5px' : '15px',
    right: '20px',

    transform: toggle && 'rotateX(180deg)',
    transition: 'all 0.4s',
  },
}));

const OptionsContainer = styled.div(({ toggle }) => ({
  backgroundColor: '#2f3640',
  borderRadius: '8px',
  color: 'white',

  display: toggle || 'none',
  // opacity: 1,
  // maxHeight: undefined,
  // overflow: undefined,
}));

const Option = styled.div({
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
});

export default function Dropzone() {
  const options = [
    { abbr: 'front', name: 'Frontend' },
    { abbr: 'back', name: 'Backend' },
    { abbr: 'ai', name: 'AI' },
    { abbr: 'devops', name: 'DevOps' },
    { abbr: 'etc1', name: '기타등등1' },
    { abbr: 'etc2', name: '기타등등2' },
    { abbr: 'etc3', name: '기타등등3' },
  ];
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('All Position');

  function handleClick() {
    setToggle((prev) => !prev);
  }

  function handleOption(e) {
    const targetText = e.target.childNodes[1].outerText;
    setSelected(targetText);
  }

  return (
    <SelectBox>
      <Selected toggle={toggle} onClick={handleClick}>
        {selected}
      </Selected>
      <OptionsContainer toggle={toggle}>
        {options.map(({ abbr, name }, id) => (
          <Option key={id} onClick={handleOption}>
            <input type="radio" id={abbr} />
            <label htmlFor={abbr}>{name}</label>
          </Option>
        ))}
      </OptionsContainer>
    </SelectBox>
  );
}
