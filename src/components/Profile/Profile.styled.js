import styled from '@emotion/styled'

export  const StatsInfo = styled.ul`
display: flex;
justify-content: space-evenly;
list-style: none;
background-color: #f3f6f9;
border-radius: 0 0 5px 5px;
padding: 0;
`;

export const ProfileDescription = styled.div`
width: 250px;
height: auto;
text-align: center;
`;

export const StatsItem = styled.li`
font-size: 20px;
display: flex;
flex-direction: column;
`;

export const ProfileIcon = styled.img`
width: 128px;
height: 128px;
border-radius: 50%;
overflow: hidden;
text-align: center;
margin: auto;
`;

export const UserName = styled.p`
font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 10px;
`;
export const UserTag = styled.p`
font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 10px;
`;

export const UserLocation = styled.p`
font-size: 14px;
color: #97a2ae;
line-height: 32px;
margin-top: 10px;
margin-bottom: 30px;`;


export const StatsLabel = styled.span`
color: #97a2ae;
//padding-top: 22px;
font-size: 12px;
display: flex;
`;

export const StatsQuantity = styled.span`

//padding-bottom: 22px;
line-height: 1.2;
font-weight: 700;
font-size: 14px;
display: flex;
`;