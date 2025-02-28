import styled from 'styled-components';

function Title() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  const CurrentDate = `${year} - ${month} - ${date}`;

  return (
    <TitleWrapper>
      <BoxTitle>Todo-List</BoxTitle>
      <BoxTitle>📆 {CurrentDate}</BoxTitle>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid #bebebe;
`;

const BoxTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export default Title;
