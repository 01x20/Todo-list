import styled from 'styled-components';

import TodoListPage from './pages/TodoListPage';

function App() {
  return (
    <ContensWrapper>
      <TodoListWrapper>
        <TodoListPage />
      </TodoListWrapper>
    </ContensWrapper>
  );
}

const ContensWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #f1f2f3;
`;

const TodoListWrapper = styled.div`
  min-width: 560px;
  background: #fff;
  height: 80%;
  border-radius: 30px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.02);
`;

export default App;
