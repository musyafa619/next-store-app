import { Fragment, useEffect } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import OrderSuccessView from 'components/order/OrderSuccessView';
import { useCart } from 'context/CartContext';

export default function Success() {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, []);
  return (
    <Fragment>
      <Navbar back="/" title="Order Success" />
      <Layout>
        <OrderSuccessView />
      </Layout>
    </Fragment>
  );
}
