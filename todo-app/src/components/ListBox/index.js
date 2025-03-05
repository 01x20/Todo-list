import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdOutlineEditCalendar,
} from 'react-icons/md';
import styled from 'styled-components';

import { setItem } from '../../lib/storage';

function ListBox({ items, setItems }) {
  const [checkList, setCheckList] = useState([]);
  const [editIdx, setEditIdx] = useState(null);

  const handleChange = (checked, index) => {
    const newItems = [...items];
    newItems[index].checked = checked;

    if (checked) {
      setCheckList([...checkList, index]);
    } else {
      setCheckList(checkList.filter((item) => item !== index));
    }

    setItem('todo', newItems);
    setItems(newItems);
  };

  const handleEdit = (index) => {
    setEditIdx(index);
  };

  const handleInputChange = (index, value) => {
    const newItems = [...items];
    newItems[index].text = value;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    alert('정말 삭제하시겠습니까?');
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  if (items) {
    return (
      <ScrollBox>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <TodoItemWrapper>
              <label>
                <InputCheck
                  type="checkbox"
                  readOnly
                  onChange={(e) => {
                    handleChange(e.target.checked, index);
                  }}
                  checked={items[index].checked}
                />
                <ItemCheckBox>
                  {items[index].checked ? (
                    <MdCheckBox />
                  ) : (
                    <MdCheckBoxOutlineBlank />
                  )}
                </ItemCheckBox>
              </label>
              <InputText
                type="text"
                value={item.text}
                onChange={(e) => handleInputChange(index, e.target.value)}
                readOnly={editIdx !== index}
                onBlur={() => setEditIdx(null)}
                className={items[index].checked ? 'done' : null}
              />
              <Button onClick={() => handleEdit(index)}>
                <MdOutlineEditCalendar style={{ fontSize: '20px' }} />
              </Button>
              <Button onClick={() => handleDelete(index)} className="delete">
                <FaRegTrashAlt style={{ fontSize: '20px' }} />
              </Button>
            </TodoItemWrapper>
          </React.Fragment>
        ))}
      </ScrollBox>
    );
  }
}

const ScrollBox = styled.div`
  overflow-y: auto;
  height: 100%;
  max-height: calc(100% - 65px);
`;

const TodoItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0.8rem;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 5px;
    margin-bottom: 0.5rem;
  }
`;

const ItemCheckBox = styled.div`
  font-size: 20px;
`;

const InputText = styled.input`
  height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #666;
  outline: none;
  font-size: 0.9rem;
  padding: 0 12px;
  box-sizing: border-box;
  flex: 1;

  &.done {
    text-decoration: line-through;
    color: #999;
  }

  @media (max-width: 768px) {
    padding: 0 0.3rem;
  }
`;

const InputCheck = styled.input`
  display: none;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  padding: 0;
  color: #2962ff;

  &.delete {
    color: #ee1717;
  }
`;

export default ListBox;
