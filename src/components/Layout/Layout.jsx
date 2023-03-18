import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import {Box} from './Layout.styled';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <Box>
        Copyright &copy; {new Date().getFullYear()} GoIT. Created by
        Veronika&nbsp;Moskaliuk.
      </Box>
    </div>
  );
};
