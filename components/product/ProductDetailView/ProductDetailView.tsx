import { Card, CardContent, Grid } from '@mui/material';
import styles from './ProductDetailView.module.scss';
import ProductCarousel from 'components/product/ProductCarousel';
import ProductSummary from 'components/product/ProductSummary';
import { ProductDto } from 'libs/dto/products';

interface Props {
  product: ProductDto;
}

const ProductDetailView: React.FC<Props> = ({ product }) => {
  return (
    <Card elevation={0} className={styles.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <ProductCarousel
              title={product?.name}
              images={product?.images?.slice(0, 3)}
            />
          </Grid>
          <Grid item md={6}>
            <ProductSummary product={product} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductDetailView;
