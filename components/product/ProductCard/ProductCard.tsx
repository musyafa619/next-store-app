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
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { currencyFormatter } from 'utils/currency-formatter';
import { FcShipped } from 'react-icons/fc';
import styles from './ProductCard.module.scss';
import { ProductDto } from 'libs/dto/products';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  product: ProductDto;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      onClick={() => router.push(`/products/${product.default_price}`)}
      elevation={0}
      className={styles.root}
    >
      <CardContent
        className={styles.content}
        style={{
          height: isMobile ? 190 : 290,
        }}
      >
        <Image
          alt="product"
          src={product?.images[0]}
          width="0"
          height="0"
          sizes="100vw"
          className={styles.image}
          style={{
            height: isMobile ? 80 : 150,
          }}
        />
        <Typography variant={isMobile ? 'subtitle2' : 'h6'}>
          {product?.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant={isMobile ? 'subtitle2' : 'subtitle1'}
        >
          {currencyFormatter(product?.price as number, 'USD')}
        </Typography>
      </CardContent>
      <Box>
        <Divider />
        <CardActions
          className={styles.footer}
          sx={{ padding: isMobile ? '8px' : '16px' }}
        >
          <Rating
            sx={{ fontSize: isMobile ? 10 : 25 }}
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
