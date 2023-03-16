import {Nav, Link} from './AuthNav.styled';

const AuthNav = () => {
    return (
        <Nav>
            <Link to="/register">Register</Link> | 
            <Link to="/login">Login</Link>
        </Nav>
    )
}

export default AuthNav;