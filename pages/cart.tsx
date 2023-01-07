import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import CartView from 'components/cart/CartView';
import CartSummary from 'components/cart/CartSummary';

export default function Cart() {
  return (
    <Fragment>
      <Navbar back="/" title="Cart" />
      <Layout>
        <CartView />
      </Layout>
      <CartSummary />
    </Fragment>
  );
}
