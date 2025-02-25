import styled from 'styled-components';

import AddItemButton from '../AddItemButton';

const data = [
  {
    id: '1',
    todos: [],
  },
];

function TodoBox() {
  return (
    <>
      {data ? (
        <NoItemsWrapper>
          <NoItemsTitle>할 일을 등록해 보세요!</NoItemsTitle>
          <AddItemButton />
        </NoItemsWrapper>
      ) : null}
    </>
  );
}

const NoItemsTitle = styled.div`
  color: #999;
  text-align: center;
  margin-bottom: 20px;
`;

const NoItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TodoBox;
