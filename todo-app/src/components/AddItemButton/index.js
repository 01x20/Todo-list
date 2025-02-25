import { GoPencil } from 'react-icons/go';
import styled from 'styled-components';

function AddItemButton({ onClick }) {
  return (
    <AddItemButtonWrapper>
      <button onClick={onClick}>
        <GoPencil />
      </button>
    </AddItemButtonWrapper>
  );
}

const AddItemButtonWrapper = styled.div`
  button {
    outline: none;
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
  }
`;

export default AddItemButton;
