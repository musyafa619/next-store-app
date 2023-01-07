import { Box, CircularProgress } from '@mui/material';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <Box className={styles.root}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
