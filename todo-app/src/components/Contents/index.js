import { useState } from 'react';
import styled from 'styled-components';

import ListBox from '../ListBox';

function Contents() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (text !== '') {
      const newItems = [
        ...items,
        {
          text: text,
        },
      ];

      return setItems(newItems);
    }
  };

  const handleEnterAdd = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
      e.target.value = '';
    }
  };

  return (
    <ContentsWrapper>
      <AddItemWrapper>
        <Input
          type="text"
          placeholder="할 일을 입력해 보세요"
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleEnterAdd}
        />
        <Button
          onClick={() => {
            handleAddItem();
            text = '';
          }}
        >
          등록
        </Button>
      </AddItemWrapper>
      <ListBox items={items} />
    </ContentsWrapper>
  );
}

const ContentsWrapper = styled.div`
  padding: 0 40px;
`;

const AddItemWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  border: none;
  background: #f1f1f1;
  outline: none;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 1rem;
  flex: 1;
`;

const Button = styled.button`
  outline: none;
  background: #ebebeb;
  border: none;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  font-size: 1rem;
  border-radius: 6px;
`;

export default Contents;
