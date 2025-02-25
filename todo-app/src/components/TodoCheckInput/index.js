import styled from 'styled-components';

function TodoCheckInput({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <ItemsWrapper>
          <input type="checkbox" placeholder="test" />
          <WriteBoxWrapper>
            <input type="text" value={item.todos[index]} />
          </WriteBoxWrapper>
        </ItemsWrapper>
      ))}
    </>
  );
}

const ItemsWrapper = styled.label`
  input[type='checkbox'] {
    display: none;
  }
`;

const WriteBoxWrapper = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #666;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  input[type='text'] {
    width: 100%;
    padding: 0 0.8rem;
    box-sizing: border-box;
    height: 24px;
    line-height: 24px;
    border: 1px solid transparent;
    border-bottom: 1px solid #666;
    outline: none;
    font-size: 1.1rem;
  }
`;

export default TodoCheckInput;
