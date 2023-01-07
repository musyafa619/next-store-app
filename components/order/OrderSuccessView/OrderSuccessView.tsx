import { Box, Typography } from '@mui/material';
import { useCart } from 'context/CartContext';
import Image from 'next/image';
import styles from './OrderSuccessView.module.scss';

const OrderSuccessView: React.FC = () => {
  const { items } = useCart();
  return (
    <Box sx={{ mb: items.length ? 36 : 1 }}>
      {items.length < 1 && (
        <Box className={styles.box}>
          <Image
            alt={'order-success'}
            src="/assets/order-success.jpg"
            width="0"
            height="0"
            sizes="100vw"
            className={styles.image}
          />
          <Typography variant="h5" fontWeight={600}>
            Order Success
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default OrderSuccessView;
