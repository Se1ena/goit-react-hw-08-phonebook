import { NavLink } from 'react-router-dom';
import {useAuth} from '';
import Phonebook from '../../Pages/Phonebook/Phonebook';
import {NavLink} from './Navigation.styled';

export const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return(
        <nav>
            <NavLink to="/" end>Home</NavLink>
            {isLoggedIn && (<NavLink to="/phonebook" element={<Phonebook/>}>PhoneBook</NavLink>)}
        </nav>
    )
}