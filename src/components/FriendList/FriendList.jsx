import { List } from './FriendList.styled';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendList = ({ list }) => {
  return (
    <List>
      <FriendsListItem list={list} />
    </List>
  );
};
