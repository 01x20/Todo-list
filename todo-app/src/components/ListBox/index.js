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
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  if (items) {
    return (
      <>
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
              <Button onClick={() => handleDelete(index)}>
                <FaRegTrashAlt style={{ fontSize: '20px' }} />
              </Button>
            </TodoItemWrapper>
          </React.Fragment>
        ))}
      </>
    );
  }
}

const TodoItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemCheckBox = styled.div`
  font-size: 20px;
`;

const InputText = styled.input`
  height: 20px;
  line-height: 20px;
  border: none;
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
`;

export default ListBox;
