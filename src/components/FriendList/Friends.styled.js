import styled from '@emotion/styled';

export  const FriendItem = styled.li`
display: flex;
align-items: center;
box-shadow: 0 0 10px #c6cccced;
padding: 20px;
`;

export const FriendName = styled.p`
font-weight: 700;
font-size: 30px;

margin-left: 20px;
color: #524a4d;
`;

export const FriendOnlineStatus = styled.span`
width: 30px;
height: 30px;
border-radius: 50%;
margin-right: 20px;

background-color: ${isOnline => isOnline.children ? 'green' : 'red' };

`;

