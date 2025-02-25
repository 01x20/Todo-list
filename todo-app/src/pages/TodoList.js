import styled from 'styled-components';

import TodoBox from '../components/TodoBox';

function TodoList() {
  return (
    <>
      <TodayInfoTitle>📆 2025-02-25</TodayInfoTitle>
      <TodoBox />
    </>
  );
}

const TodayInfoTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export default TodoList;
