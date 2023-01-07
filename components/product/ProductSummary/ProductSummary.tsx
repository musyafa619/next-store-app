import {
  Typography,
  Button,
  Box,
  Divider,
  IconButton,
  Rating,
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
  const { addItem } = useCart();
  return (
    <Fragment>
      <Box className={styles.titleSection}>
        <Typography variant="h5" component="div">
          {product?.title}
        </Typography>
        <Typography sx={{ my: 1.5 }} color="text.secondary">
          {currencyFormatter(product?.price, 'USD')}
        </Typography>
        <Rating value={4} readOnly />

        <Box className={styles.quantity}>
          <IconButton
            onClick={() =>
              setQty((prevState) => (prevState > 0 ? prevState - 1 : prevState))
            }
          >
            <HiMinus />
          </IconButton>
          <Typography>{qty}</Typography>
          <IconButton onClick={() => setQty((prevState) => prevState + 1)}>
            <HiPlus style={{ color: '#1976d2' }} />
          </IconButton>
        </Box>
        <Button variant="contained" onClick={() => addItem(product, qty)}>
          Add to Cart
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography color="text.secondary">{product?.description}</Typography>
    </Fragment>
  );
};

export default ProductSummary;
