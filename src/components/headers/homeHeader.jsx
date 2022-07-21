import { Nav, Navbar } from "rsuite";

const HomeHeader = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#">Sitio Ejemplo</Navbar.Brand>
            <Nav>
                <Nav.Item>Home</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item>Perfil</Nav.Item>
                <Nav.Item>Logout</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default HomeHeader;