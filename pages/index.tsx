import { Fragment } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import ProductBanner from 'components/product/ProductBanner';
import ProductList from 'components/product/ProductList';
import { ProductDto } from 'libs/dto/products';
import CartBottomSheet from 'components/cart/CartBottomSheet';
import { stripe } from 'config/stripe';
import Header from 'components/common/Header';

interface Props {
  products: ProductDto[];
  response: any;
}

export default function Home({ products }: Props) {
  return (
    <Fragment>
      <Header title="Home" />
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
  const response = await stripe.prices.list({
    limit: 12,
    expand: ['data.product'],
  });

  const products = response.data.map((item) => {
    return {
      ...(item.product as object),
      price: Number(item.unit_amount_decimal?.slice(0, -2)),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
