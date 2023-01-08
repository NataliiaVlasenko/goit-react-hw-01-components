import PropTypes from 'prop-types';

import {StatsQuantity, StatsLabel, ProfileDescription, StatsInfo, StatsItem, ProfileIcon, UserName,UserTag, UserLocation } from './Profile.styled';
export const Profile = ( { username, tag, location, avatar, stats:{followers, views, likes}} ) => {
   
    return (
      
<div className="profile">
  <ProfileDescription>
    <ProfileIcon
      src={avatar}
      alt={username} />
    <UserName >{username}</UserName>
    <UserTag >@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </ProfileDescription>

  <StatsInfo>
    <StatsItem>
      <StatsLabel className="label">Followers</StatsLabel>
      <StatsQuantity className="quantity">{followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel className="label">Views</StatsLabel>
      <StatsQuantity className="quantity">{views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel className="label">Likes</StatsLabel>
      <StatsQuantity className="quantity">{likes}</StatsQuantity>
    </StatsItem>
  </StatsInfo>
</div>

    )
  
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
           followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,})
    }