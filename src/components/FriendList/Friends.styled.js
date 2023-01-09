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
font-size: 24px;
font-style: italic;
margin-right: 20px;
color: ${isOnline => isOnline.children === "online" ? 'green' : 'red'};
`;

