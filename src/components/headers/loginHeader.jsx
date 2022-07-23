import { Link } from "react-router-dom";
import { Nav, Navbar } from "rsuite";

const HomeHeader = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Sitio Ejemplo</Navbar.Brand>
            <Nav>
                <Nav.Item><Link to="/">Home</Link></Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default HomeHeader;