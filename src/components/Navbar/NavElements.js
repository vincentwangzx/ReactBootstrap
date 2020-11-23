import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
    background: #ff5c7a; 
    height: 68px;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    font-size: 1rem;
    position: sticky;
    top: 0; 
    z-index: 1;

    @media screen and (max-width: 1100px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex; 
    height: 68px; 
    z-index: 1; 
    width: 100%; 
    padding: 0 24px; 
    text-align: center;
    max-width: 1100px; 
    
`

export const NavLogo = styled(Link)` 
    
    justify-self: flex-start;
    display: flex; 
    text-decoration: none; 
    box-sizing: border-box;
    max-width: 160px;
    margin-right: 0.5rem;
    align-items: left; 
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 960px) {
    display: block; 
    position: absolute; 
    top: 0;
    right: 0; 
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer; 
}
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center; 
    list-style: none;
    text-align: center; 

    @media screen and (max-width: 960px) {
        display: flex; 
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute; 
        top: 68px; 
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 0.95;
        transition: all 0.5s ease;
        background: #ff5c7a;
    }

`
export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;

    &:hover {
        border-bottom: 2px solid lightpink;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none; 
    padding: 0.5rem 1rem;
    height: 100%;
    font-weight: bold;

    &:hover {
        color: lightpink;
    }

    @media screen and (max-width: 960px) {
        text-align: center; 
        padding: 1rem; 
        width: 100%; 
        display: table; 

        &:hover {
            color: lightpink;
            transition: all 0.3s ease;
        }
    }
`
