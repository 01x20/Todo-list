import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getItem, setItem } from '../../lib/storage';
import ListBox from '../ListBox';

function Contents() {
  const [text, setText] = useState('');
  const [items, setItems] = useState(getItem('todo') || []);

  const handleEnterAdd = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
      setText('');
    }
  };

  const handleAddItem = () => {
    if (text !== '') {
      setItems([{ text: text, checked: false }, ...items]);
      setText('');
    }
  };

  useEffect(() => {
    setItem('todo', items);
  }, [items]);

  return (
    <ContentsWrapper>
      <AddItemWrapper>
        <Input
          type="text"
          value={text}
          placeholder="할 일을 입력해 보세요"
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleEnterAdd}
        />
        <Button
          onClick={() => {
            handleAddItem();
            setText('');
          }}
        >
          등록
        </Button>
      </AddItemWrapper>
      <ListBox items={items} setItems={setItems} />
    </ContentsWrapper>
  );
}

const ContentsWrapper = styled.div`
  padding: 1.5rem 1.3rem;
  height: 84%;
`;

const AddItemWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }
`;

export default Contents;
