import { Link } from "react-router-dom";
import { Nav, Navbar } from "rsuite";

const LoginHeader = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Sitio Ejemplo</Navbar.Brand>
            <Nav>
                <Nav.Item><Link to="/">Home</Link></Nav.Item>
            </Nav>
            <Nav pullRight>
                <Link to="/register" role='button' className="rs-navbar-item">Registro</Link>
                <Link to="/login" role='button' className="rs-navbar-item">Login</Link>
            </Nav>
        </Navbar>
    );
}

export default LoginHeader;