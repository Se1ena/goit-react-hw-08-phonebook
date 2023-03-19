import {Navigation} from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {  Box  } from '@chakra-ui/react';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();
 
  return (
    <Box
      as="header"
      shadow="0 0 3px rgba(0,0,0,0.3)"
      py={2}
      px={4}
      minH="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      
    </Box>
  );
};
