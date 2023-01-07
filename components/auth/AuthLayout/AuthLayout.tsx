import { Box } from '@mui/material';
import Image from 'next/image';
import styles from './AuthLayout.module.scss';

interface Props {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Box
        className={styles.background}
        sx={{
          position: 'absolute',
          zIndex: '-1',
          height: '100vh',
          width: '100%',
        }}
      >
        <Image src="/assets/auth-background.svg" alt="background" fill />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
