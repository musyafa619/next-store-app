import {
  Typography,
  Button,
  Box,
  Divider,
  IconButton,
  Rating,
  Input,
} from '@mui/material';
import { currencyFormatter } from 'utils/currency-formatter';
import styles from './ProductSummary.module.scss';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { Fragment, useState } from 'react';
import { ProductDto } from 'libs/dto/products';
import { useCart } from 'context/CartContext';

interface Props {
  product: ProductDto;
}

const ProductSummary: React.FC<Props> = ({ product }) => {
  const [qty, setQty] = useState(1);
  const { addItem, items } = useCart();

  const itemCart = items.find((item) => item.id === product.id);
  return (
    <Fragment>
      <Box className={styles.titleSection}>
        <Typography variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography sx={{ my: 1.5 }} color="text.secondary">
          Stock: <b>{product?.metadata?.stock}</b>
        </Typography>
        <Typography sx={{ my: 1.5 }} color="text.secondary">
          {currencyFormatter(product?.price as number, 'USD')}
        </Typography>
        <Rating value={4} readOnly />

        <Box className={styles.quantity}>
          <IconButton
            disabled={qty <= 1}
            onClick={() => setQty((prevState) => prevState - 1)}
          >
            <HiMinus />
          </IconButton>
          <Input
            type="number"
            sx={{ width: '100%' }}
            inputProps={{
              type: 'number',
              min: 0,
              max: Number(product?.metadata?.stock),
              style: {
                textAlign: 'center',
              },
            }}
            value={qty.toString()}
            onChange={(event) => {
              const value = Number(event.target.value);
              setQty(value);
            }}
          />
          <IconButton
            disabled={qty >= Number(product?.metadata?.stock)}
            onClick={() => setQty((prevState) => prevState + 1)}
          >
            <HiPlus style={{ color: '#1976d2' }} />
          </IconButton>
        </Box>
        <Button
          disabled={
            qty > Number(product?.metadata?.stock) ||
            qty + Number(itemCart?.quantity) > Number(product?.metadata?.stock)
          }
          variant="contained"
          onClick={() => addItem(product, qty)}
        >
          Add to Cart
        </Button>
        {qty + Number(itemCart?.quantity) >
          Number(product?.metadata?.stock) && (
          <Typography sx={{ my: 1.5 }} color="red">
            You already have {itemCart?.quantity} item at your cart
          </Typography>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography color="text.secondary">{product?.description}</Typography>
    </Fragment>
  );
};

export default ProductSummary;
