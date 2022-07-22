import { Nav, Navbar } from "rsuite";

const HomeHeader = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#">Sitio Ejemplo</Navbar.Brand>
            <Nav>
                <Nav.Item>Home</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default HomeHeader;