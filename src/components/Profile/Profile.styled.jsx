import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
  width: 250px;
  border-radius: 50% 20% / 10% 40%;
`;

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgAvatar = styled.img`
  width: 100px;
  border-radius: 100px;

  padding: 30px;
`;
export const UserName = styled.p`
  text-align: center;

  font-size: 25px;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  text-align: center;
  color: #757575;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  color: #757575;
  margin-bottom: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 20px;

  padding: 0;
  margin: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.span``;
export const Quantity = styled.span``;
