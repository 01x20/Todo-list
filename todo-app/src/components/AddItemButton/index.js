import { CiCirclePlus } from 'react-icons/ci';
import styled from 'styled-components';

function AddItemButton() {
  return (
    <AddItemButtonWrapper>
      <CiCirclePlus />
    </AddItemButtonWrapper>
  );
}

const AddItemButtonWrapper = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
`;

export default AddItemButton;
