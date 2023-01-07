import { Fragment, useEffect } from 'react';
import Layout from 'components/common/Layout';
import Navbar from 'components/common/Navbar';
import OrderSuccessView from 'components/order/OrderSuccessView';
import { useCart } from 'context/CartContext';
import Header from 'components/common/Header';

export default function Success() {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Header title="Order Success" />
      <Navbar back="/" title="Order Success" />
      <Layout>
        <OrderSuccessView />
      </Layout>
    </Fragment>
  );
}
