import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
display: flex;

`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  padding: 10px;
  background-color: ${getRandomHexColor};
  border-radius: 50% 20% / 10% 40%;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}