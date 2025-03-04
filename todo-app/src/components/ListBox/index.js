import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineEditCalendar } from 'react-icons/md';
import styled from 'styled-components';

function ListBox({ items, setItems }) {
  const [checkList, setCheckList] = useState([]);
  const [editIdx, setEditIdx] = useState(null);

  const handleChange = (checked, index) => {
    if (checked) {
      setCheckList([...checkList, index]);
    } else {
      setCheckList([checkList.filter((item) => item !== index)]);
    }
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
                  checked={checkList.includes(index)}
                />
                <ItemCheckBox />
              </label>
              <InputText
                type="text"
                value={item.text}
                onChange={(e) => handleInputChange(index, e.target.value)}
                readOnly={editIdx !== index}
                onBlur={() => setEditIdx(null)}
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

  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemCheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #666;
  border-radius: 3px;
  box-sizing: border-box;
`;

const InputCheck = styled.input`
  display: none;

  &:checked + ${ItemCheckBox} {
    background: #aaa;
  }
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
