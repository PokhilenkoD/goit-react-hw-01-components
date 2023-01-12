import styled from '@emotion/styled';
 
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  background-color: ${function getBackgroundColor({ status }) {
    if (status) {
      return '#00FF00';
    }
    return '#FF0000';
  }};
  border-radius: 50% 20% / 10% 40%;
  position: relative;
`;

export const Status = styled.span`
  position: absolute;
  top: 0;
  left: 80px;

  font-size: 12px;
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
