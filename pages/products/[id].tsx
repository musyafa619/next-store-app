import { Fragment } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import ProductDetailView from 'components/product/ProductDetailView';
import { GetStaticPropsContext } from 'next';
import CartBottomSheet from 'components/cart/CartBottomSheet';
import { stripe } from 'config/stripe';
import { ProductDto } from 'libs/dto/products';
import Header from 'components/common/Header';

interface Props {
  product: ProductDto;
}

export default function Product({ product }: Props) {
  return (
    <Fragment>
      <Header title={product?.name} />
      <Navbar back="/" title="Product Detail" displayCart />
      <Layout>
        <ProductDetailView product={product} />
      </Layout>
      <CartBottomSheet />
    </Fragment>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const response = await stripe.prices.retrieve(context?.params?.id as string, {
    expand: ['product'],
  });

  const product = {
    ...(response.product as object),
    price: Number(response.unit_amount_decimal?.slice(0, -2)),
  };

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const response = await stripe.prices.list({
    limit: 12,
    expand: ['data.product'],
  });

  const paths = response.data.map((item: any) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}
