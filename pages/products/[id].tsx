import { Fragment } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import ProductDetailView from 'components/product/ProductDetailView';
import { getAllProducts, getSingleProduct } from 'services/products';
import { GetStaticPropsContext } from 'next';
import { GetSingleProductResponseDto } from 'libs/dto/products';
import CartBottomSheet from 'components/cart/CartBottomSheet';

interface Props {
  product: GetSingleProductResponseDto;
}

export default function Product({ product }: Props) {
  return (
    <Fragment>
      <Navbar back="/" title="Product Detail" displayCart />
      <Layout>
        <ProductDetailView product={product} />
      </Layout>
      <CartBottomSheet />
    </Fragment>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const product = await getSingleProduct(context?.params?.id as string);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { products } = await getAllProducts();

  const paths = products.map((product: any) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}
