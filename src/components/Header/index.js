import { Container,Logo,Menu,Nav } from "./styles";



export default function Header(){
    return(
        <Container>
            <Logo src="/Logo.png"></Logo>
            <Menu>
                <Nav>Home</Nav>
                <Nav>História</Nav>
                <Nav>Carômetro</Nav>
                <Nav>Diretorias</Nav>
                <Nav>FAQ</Nav>
                <Nav>Contato</Nav>                
            </Menu>
        </Container>


    );

}