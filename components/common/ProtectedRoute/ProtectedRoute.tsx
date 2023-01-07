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
    console.log('tes>>>', user);
    if (!user) {
      router.push('/login');
    }
  }, []);

  return <Fragment>{user ? children : <Loader />}</Fragment>;
};

export default ProtectedRoute;
