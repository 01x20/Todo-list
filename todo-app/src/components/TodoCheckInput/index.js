import { useAtomValue } from 'jotai';
import styled from 'styled-components';

import itemState from '../../stores/todos/itemState';

function TodoCheckInput() {
  const data = useAtomValue(itemState);
  const items = data.items;

  return (
    <>
      {items.map((item, index) => (
        <ItemsWrapper key={index}>
          <CheckWrapper>
            <input type="checkbox" placeholder="test" />
          </CheckWrapper>
          <WriteBoxWrapper>
            <input type="text" value={item} />
          </WriteBoxWrapper>
        </ItemsWrapper>
      ))}
    </>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0.4rem 0;
`;

const CheckWrapper = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid #666;

  input[type='checkbox'] {
    display: none;
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
