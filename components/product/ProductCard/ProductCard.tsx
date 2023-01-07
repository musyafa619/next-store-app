import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Divider,
  Rating,
  Chip,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { currencyFormatter } from 'utils/currency-formatter';
import { FcShipped } from 'react-icons/fc';
import styles from './ProductCard.module.scss';
import { ProductDto } from 'libs/dto/products';

interface Props {
  product: ProductDto;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/products/${product.default_price}`)}
      elevation={0}
      className={styles.root}
    >
      <CardContent className={styles.content}>
        <Image
          alt="product"
          src={product?.images[0]}
          width="0"
          height="0"
          sizes="100vw"
          className={styles.image}
        />
        <Typography variant="h6">{product?.name}</Typography>
        <Typography color="text.secondary">
          {currencyFormatter(product?.price as number, 'USD')}
        </Typography>
      </CardContent>
      <Box>
        <Divider />
        <CardActions className={styles.footer}>
          <Rating
            size={'small'}
            value={Number(product?.metadata?.rating)}
            readOnly
          />
          <Chip
            icon={<FcShipped />}
            sx={{ color: 'green' }}
            className={styles.freeShipping}
            label={<Typography variant="caption">Free</Typography>}
          />
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;
