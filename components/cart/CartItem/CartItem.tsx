import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { currencyFormatter } from 'utils/currency-formatter';
import styles from './CartItem.module.scss';
import { HiPlus, HiMinus, HiTrash } from 'react-icons/hi';
import { CartItemDto } from 'libs/dto/cart';
import { useCart } from 'context/CartContext';

interface Props {
  item: CartItemDto;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { increaseItem, decreaseItem, removeItem } = useCart();

  return (
    <Card elevation={0} className={styles.root}>
      <CardContent className={styles.content}>
        <Box className={styles.product}>
          <Image
            alt="product"
            src={item.thumbnail}
            width="0"
            height="0"
            sizes="100vw"
            className={styles.image}
          />
          <Box className={styles.detail}>
            <Typography variant="subtitle1" component="div">
              {item.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {currencyFormatter(item.price, 'USD')}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.action}>
          <Box className={styles.trash}>
            <IconButton onClick={() => removeItem(item)}>
              <HiTrash size={15} style={{ color: '#D12727' }} />
            </IconButton>
          </Box>
          <Box className={styles.quantity}>
            <IconButton
              disabled={item.quantity === 1}
              onClick={() => decreaseItem(item)}
            >
              <HiMinus size={15} />
            </IconButton>
            <Typography>{item?.quantity}</Typography>
            <IconButton onClick={() => increaseItem(item)}>
              <HiPlus size={15} style={{ color: '#1976d2' }} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <CardActions className={styles.footer}></CardActions>
    </Card>
  );
};

export default CartItem;
