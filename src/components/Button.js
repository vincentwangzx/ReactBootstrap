import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'lightpink' :
     '#bbb')};
     white-space: nowrap;
     padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
     color: ${({dark}) => (dark ? '#bbb' : '#fff')};
     font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
     max-width: 300px;
     outline: none; 
     border: none;
     cursor: pointer;
     display: flex; 
     justify-content: center;
     align-items: center; 
     transition: all 0.2s ease-in-out;

     &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' :
     'lightpink')};
     }
`;

