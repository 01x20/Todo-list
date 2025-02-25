import styled from 'styled-components';

import TodoCheckInput from '../TodoCheckInput';

function TodoBox({ data }) {
  return (
    <TodoBoxWrapper>
      {data.length === 0 ? (
        <NoItemsWrapper>
          <NoItemsTitle>할 일을 등록해 보세요!</NoItemsTitle>
        </NoItemsWrapper>
      ) : (
        <TodoCheckInput data={data} />
      )}
    </TodoBoxWrapper>
  );
}

const TodoBoxWrapper = styled.div`
  padding: 3rem 0;
`;

const NoItemsTitle = styled.div`
  color: #999;
  text-align: center;
`;

const NoItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TodoBox;
