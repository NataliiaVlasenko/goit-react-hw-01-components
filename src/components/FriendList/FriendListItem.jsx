
import PropTypes from 'prop-types';
import { FriendItem,FriendName,FriendOnlineStatus } from './Friends.styled';
export const FriendListItem = ({friend:{avatar,name,isOnline}}) => {
    //console.log(isOnline);
return(
    
    <FriendItem>
  <FriendOnlineStatus>{isOnline ? 'online' : 'offline'}</FriendOnlineStatus>
  <img  src={avatar} alt="User avatar" width="48" />
  <FriendName>{name}</FriendName>
</FriendItem>
)

}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
        }).isRequired
  };