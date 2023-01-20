import { List } from './FriendList.styled';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendList = ({ list }) => {
  return (
    <List>
      {list.map(({ id, isOnline, avatar, name }) => {
        console.log(`work`);
        return (
          <FriendsListItem
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </List>
  );
};
