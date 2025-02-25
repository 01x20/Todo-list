import { useAtomValue } from 'jotai';
import styled from 'styled-components';

import itemLengthState from '../../stores/todos/itemLengthState';
import itemState from '../../stores/todos/itemState';
import TodoCheckInput from '../TodoCheckInput';

function TodoBox() {
  const data = useAtomValue(itemState);
  const dataLength = useAtomValue(itemLengthState);

  console.log(dataLength);
  return (
    <TodoBoxWrapper>
      {!dataLength ? (
        <TodoCheckInput data={data} />
      ) : (
        <NoItemsWrapper>
          <NoItemsTitle>할 일을 등록해 보세요!</NoItemsTitle>
        </NoItemsWrapper>
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
