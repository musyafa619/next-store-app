import { Fragment, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import styles from './Layout.module.scss';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import Loader from '../Loader';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{user ? children : <Loader />}</Fragment>;
};

export default ProtectedRoute;
