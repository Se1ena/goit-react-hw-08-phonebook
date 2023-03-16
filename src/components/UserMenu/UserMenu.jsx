import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
