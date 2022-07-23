import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar } from "rsuite";

const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <Navbar>
            <Navbar.Brand href="#">Sitio Ejemplo</Navbar.Brand>
            <Nav>
                <Link to="/" role='button' className="rs-navbar-item">Home</Link>
                <Link to="/posts" role='button' className="rs-navbar-item">Posts</Link>
            </Nav>
            <Nav pullRight>
                <Link to="/myposts" role='button' className="rs-navbar-item">Mis posts</Link>
                <Link to="/profile" role='button' className="rs-navbar-item">Perfil</Link>
                <Nav.Item onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                }}>Logout</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default HomeHeader;