import { useAtom } from 'jotai';
import { useState } from 'react';
import styled from 'styled-components';

import itemData from '../../stores/todos/itemData';

function TodoCheckInput() {
  const [data] = useAtom(itemData);
  const items = data.items;
  const [check, setCheck] = useState([]);

  const handleChange = (isChecked, index) => {
    if (isChecked) {
      setCheck((prev) => [...prev, index]);
    } else {
      setCheck(check.filter((el) => el !== index));
    }
  };

  return (
    <>
      {items.map((data, index) => (
        <ItemsWrapper key={index}>
          <CheckWrapper>
            <input
              type="checkbox"
              placeholder="test"
              checked={check.includes(index)}
              onChange={(e) => {
                handleChange(e.target.checked, index);
              }}
            />
            <span></span>
          </CheckWrapper>
          <WriteBoxWrapper>
            <input type="text" onChange={(e) => e.target.value} value={data} />
          </WriteBoxWrapper>
        </ItemsWrapper>
      ))}
    </>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0.4rem 0;
`;

const CheckWrapper = styled.label`
  input[type='checkbox'] {
    display: none;

    &:checked + span {
      background: #ddd;
    }

    &:checked ~ input[type='text'] {
      font-weight: bold;
    }
  }

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #666;
  }
`;

const WriteBoxWrapper = styled.div`
  width: calc(100% - 36px);

  input[type='text'] {
    width: 100%;
    padding: 0 0.3rem;
    box-sizing: border-box;
    height: 24px;
    line-height: 24px;
    border: 1px solid transparent;
    border-bottom: 1px solid #666;
    outline: none;
    font-size: 1.1rem;
  }
`;

export default TodoCheckInput;
