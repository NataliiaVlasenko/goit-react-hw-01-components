import styled from '@emotion/styled'
import {getRandomHexColor} from '../../utils/randomColor'
export  const StatTitle = styled.h2`
font-size: 36px;
    color: #333;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 25px;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
height: 60px;
display: flex;
list-style: none;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 70px;
    border: 1px solid gray;
    font-size: 18px;
    background-color: ${getRandomHexColor};
    `;
    
    
   