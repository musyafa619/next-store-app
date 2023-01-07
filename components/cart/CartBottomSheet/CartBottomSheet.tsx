import {
  Typography,
  Button,
  Box,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import { useCart } from 'context/CartContext';
import { useRouter } from 'next/router';
import { currencyFormatter } from 'utils/currency-formatter';
import styles from './CartBottomSheet.module.scss';

const CartBottomSheet: React.FC = () => {
  const { items, subTotal } = useCart();
  const router = useRouter();
  return (
    <Box
      className={styles.root}
      sx={{ visibility: items?.length < 1 ? 'hidden' : 'visibel' }}
    >
      <Card elevation={0} className={styles.card}>
        <Button
          size="large"
          variant="contained"
          className={styles.checkoutButton}
          onClick={() => router.push('/cart')}
        >
          <Box className={styles.summaryItem}>
            <Typography variant="subtitle1" fontWeight={600}>
              Subtotal{' '}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              {currencyFormatter(subTotal, 'USD')}
            </Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Checkout
          </Typography>
        </Button>
      </Card>
    </Box>
  );
};

export default CartBottomSheet;
