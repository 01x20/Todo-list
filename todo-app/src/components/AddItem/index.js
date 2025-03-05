import styled from 'styled-components';

function AddItem() {
  return (
    <AddItemWrapper>
      <Input
        type="text"
        placeholder="할 일을 입력해 보세요"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button>등록</Button>
    </AddItemWrapper>
  );
}

const AddItemWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  border: none;
  background: #f1f1f1;
  outline: none;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 1rem;
  flex: 1;
`;

const Button = styled.button`
  outline: none;
  background: #ebebeb;
  border: none;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  font-size: 1rem;
  border-radius: 6px;
  color: #111;
`;
export default AddItem;
