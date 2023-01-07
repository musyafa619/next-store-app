import { Fragment } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import ProductBanner from 'components/product/ProductBanner';
import ProductList from 'components/product/ProductList';
import { getAllProducts } from 'services/products';
import { GetAllProductsResponseDto, ProductDto } from 'libs/dto/products';
import CartBottomSheet from 'components/cart/CartBottomSheet';

interface Props {
  products: ProductDto[];
}

export default function Home({ products }: Props) {
  return (
    <Fragment>
      <Navbar displayCart />
      <Layout>
        <ProductBanner />
        <ProductList products={products} />
      </Layout>
      <CartBottomSheet />
    </Fragment>
  );
}

export async function getStaticProps() {
  const { products } = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
