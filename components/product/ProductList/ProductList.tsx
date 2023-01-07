import { Box, Typography, Grid, Divider } from '@mui/material';
import { useCart } from 'context/CartContext';
import { ProductDto } from 'libs/dto/products';
import ProductCard from '../ProductCard';

interface Props {
  products: ProductDto[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const { items } = useCart();
  return (
    <Box sx={{ width: '100%', pb: items.length < 1 ? 5 : 15 }}>
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
