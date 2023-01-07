import {
  Typography,
  Button,
  Box,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import { currencyFormatter } from 'utils/currency-formatter';
import styles from './CartSummary.module.scss';
import { Fragment, useState } from 'react';
import { useCart } from 'context/CartContext';

const CartSummary: React.FC = () => {
  const { subTotal, items } = useCart();
  return (
    <Box
      className={styles.root}
      sx={{ visibility: items?.length < 1 ? 'hidden' : 'visibel' }}
    >
      <Card elevation={0} className={styles.card}>
        <CardContent>
          <Box className={styles.summaryItem}>
            <Typography variant="subtitle1">Subtotal</Typography>
            <Typography variant="subtitle1">
              {currencyFormatter(subTotal, 'USD')}
            </Typography>
          </Box>
          <Box className={styles.summaryItem}>
            <Typography variant="subtitle1">Shipping</Typography>
            <Typography variant="subtitle1">
              {currencyFormatter(0, 'USD')}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box className={styles.summaryItem}>
            <Typography variant="h6" fontWeight={600}>
              Total
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              {currencyFormatter(subTotal, 'USD')}
            </Typography>
          </Box>
          <Button
            size="large"
            variant="contained"
            className={styles.checkoutButton}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Checkout
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartSummary;
