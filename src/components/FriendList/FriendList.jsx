import PropTypes from 'prop-types';
import { Avatar, FriendItem, List, Name, Status } from './FriendList.styled';

export const FriendList = ({ list }) => {
  return (
    <List>
      {list.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendItem key={id} status={isOnline}>
            <Status>{isOnline ? 'online' : 'offline'}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
