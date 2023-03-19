import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <MenuButton as={Button} >
        Welcome, {user.name}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => dispatch(logOut())}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
