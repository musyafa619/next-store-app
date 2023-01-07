import { Box, Divider, Typography } from '@mui/material';
import CartItem from 'components/cart/CartItem';
import { useCart } from 'context/CartContext';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from './CartView.module.scss';

const CartView: React.FC = () => {
  const { items } = useCart();
  return (
    <Box sx={{ mb: items.length ? 36 : 1 }}>
      {items.length < 1 && (
        <Box className={styles.emptyBox}>
          <Image
            alt={'empty-cart'}
            src="/assets/empty-cart.jpg"
            width="0"
            height="0"
            sizes="100vw"
            className={styles.emptyImage}
          />
          <Typography variant="h5" fontWeight={600}>
            Your Cart is Empty
          </Typography>
        </Box>
      )}

      {items.map((item, index) => (
        <Fragment key={item.id}>
          <CartItem item={item} />
          {index !== 7 && <Divider sx={{ my: 2 }} />}
        </Fragment>
      ))}
    </Box>
  );
};

export default CartView;
