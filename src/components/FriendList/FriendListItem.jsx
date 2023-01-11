import { FriendItem, FriendName, FriendOnlineStatus } from './Friends.styled';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <FriendOnlineStatus>{isOnline}</FriendOnlineStatus>

      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
