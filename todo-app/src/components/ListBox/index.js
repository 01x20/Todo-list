import React, { useState } from 'react';
import styled from 'styled-components';

import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

function ListBox({ items }) {
  const [checkList, setCheckList] = useState([]);

  const handleChange = (checked, index) => {
    if (checked) {
      setCheckList([...checkList, index]);
    } else {
      setCheckList([checkList.filter((item) => item !== index)]);
    }
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
              <InputText type="text" readOnly value={item.text} />
              <EditButton />
              <DeleteButton />
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

export default ListBox;
