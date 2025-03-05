import styled from 'styled-components';

function Title() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  const CurrentDate = `${year}-${month}-${date}`;

  return (
    <TitleWrapper>
      <BoxTitle>📆 {CurrentDate}</BoxTitle>
      <BoxTitle>Todo-List</BoxTitle>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem;
  border-bottom: 1px solid #bebebe;

  @media (max-width: 768px) {
    padding: 1.3rem 2rem;
  }
`;

const BoxTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default Title;
