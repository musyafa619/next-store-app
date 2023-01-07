import { Box, Typography, Grid, Divider } from '@mui/material';
import { ProductDto } from 'libs/dto/products';
import ProductCard from '../ProductCard';

interface Props {
  products: ProductDto[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Box sx={{ width: '100%', pb: 5 }}>
      <Typography variant="h5" fontWeight={600} sx={{ mb: 5 }}>
        Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
