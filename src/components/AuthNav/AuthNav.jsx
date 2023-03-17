import {Nav, LinkRegister, LinkLogin} from './AuthNav.styled';

const AuthNav = () => {
    return (
        <Nav>
            <LinkRegister to="/register">Register</LinkRegister>  
            <LinkLogin to="/login">Login</LinkLogin>
        </Nav>
    )
}

export default AuthNav;