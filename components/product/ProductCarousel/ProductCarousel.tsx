import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './ProductCarousel.module.scss';
import { Box } from '@mui/material';

interface Props {
  images: string[];
  title: string;
}

const ProductCarousel: React.FC<Props> = ({ images, title }) => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={true}
      showIndicators={false}
      renderThumbs={() =>
        images.map((image) => (
          <Image
            key={image}
            alt="product"
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className={styles.thumb}
          />
        ))
      }
    >
      {images?.map((image) => (
        <Box key={image} sx={{ width: '90%' }}>
          <Image
            alt={title}
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className={styles.imageItem}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
