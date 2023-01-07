import { Fragment } from 'react';
import { CssBaseline, Container } from '@mui/material';
import styles from './Layout.module.scss';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={styles.layout}>
        {children}
      </Container>
    </Fragment>
  );
};

export default Layout;
