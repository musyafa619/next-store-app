import { Box } from '@mui/material';
import Image from 'next/image';

const ProductBanner: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Image
        src="/assets/banner1.png"
        alt="banner"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
};

export default ProductBanner;
