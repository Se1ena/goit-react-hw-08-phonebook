import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoude';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../Pages/Home/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const PhonebookPage = lazy(() => import('../Pages/Phonebook/Phonebook'));
const NotFoundPage = lazy(()=> import('../Pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;