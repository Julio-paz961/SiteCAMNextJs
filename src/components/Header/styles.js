import styled from "styled-components";

export const Container = styled.div`
    background-color:${(props)=>props.theme.colors.primary};
    display:flex;
    justify-content:space-around;
    z-index:100;

`;

export const Logo = styled.img`
    margin:1em 6em;
    height:4.5em;
    z-index:100;
`;

export const Menu = styled.div`
    display:flex;
    align-items:center;
    margin:0 2em;
    z-index:100;
`;
export const Nav = styled.div`
    margin:0 2em;
    font-weight:bold;
    font-family:"sofiapro";
    z-index:100;

`;


