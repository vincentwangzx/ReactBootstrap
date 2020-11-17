import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    background: #ff5c7a; 
    height: 50px;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 1rem;
    position: sticky;
    top: 0; 
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex; 
    height: 50px; 
    z-index: 1; 
    width: 100%; 
    padding: 0 24px; 
    align-content: right;
    max-width: 1100px; 

    .nav-link {
        color: white !important; 
        &:hover {
            color: palevioletred;
        }
    }
`;

export const NavLogo = styled(LinkR)` 
    
    justify-self: flex-start;
    cursor: pointer;
    display: flex; 
    align-items: center; 
    text-decoration: none; 

    .img-fluid {
        width: 160px;
        height: 44px;
        position: absolute;

    }
`;