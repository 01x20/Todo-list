import styled from 'styled-components';

import AddItemButton from '../components/AddItemButton';
import TodoBox from '../components/TodoBox';

const data = [];

function TodoList() {
  return (
    <>
      <TodayInfoWrapper>
        <DayTitle>📆 2025-02-25</DayTitle>
        <AddItemButton
          onClick={() => {
            data.push({
              id: '',
              todos: [],
            });
          }}
        />
      </TodayInfoWrapper>
      <TodoBox data={data} />
    </>
  );
}

const TodayInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DayTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export default TodoList;
