import React from 'react';
import styled from 'styled-components';

import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

function ListBox({ items }) {
  if (items) {
    return (
      <>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <TodoItemWrapper>
              <ItemCheckBox />
              <InputCheck type="checkbox" />
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

const InputCheck = styled.input`
  display: none;
`;

const ItemCheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #666;
  border-radius: 3px;
  box-sizing: border-box;
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
