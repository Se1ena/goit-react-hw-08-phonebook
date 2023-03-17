import {useAuth} from '../../hooks';
import Phonebook from '../../Pages/Phonebook/Phonebook';
import {Nav, Ul, Li, Link } from './Navigation.styled';

export const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return (
        <Nav>
          <Ul>
            <Li>
              <Link to="/" end>
                Home
              </Link>
            </Li>
            <Li>
              {isLoggedIn && (
                <Link to="/phonebook" element={<Phonebook />}>
                  Phonebook
                </Link>
              )}
            </Li>
          </Ul>
        </Nav>
      );
}