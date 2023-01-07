import { CartItemDto } from 'libs/dto/cart';
import { ProductDto } from 'libs/dto/products';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import { stripe } from 'config/stripe';
import { useRouter } from 'next/router';

interface CartContext {
  items: CartItemDto[];
  subTotal: number;
  addItem: (product: ProductDto, newQty?: number) => void;
  increaseItem: (product: CartItemDto) => void;
  decreaseItem: (product: CartItemDto) => void;
  removeItem: (product: ProductDto) => void;
  cartCheckout: () => Promise<void>;
  loading: boolean;
  resetCart: () => void;
}

const CartContext = createContext<CartContext>({} as CartContext);

export const useCart = () => useContext(CartContext);

interface Props {
  children: React.ReactNode;
}

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [items, setItems] = useState<CartItemDto[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const resetCart = () => {
    setItems([]);
    calculateSubTotal([]);
  };

  const calculateSubTotal = (items: CartItemDto[]) => {
    const allPrice = items.map(
      (item) => (item.price as number) * item.quantity
    );
    const result = allPrice.reduce((a, b) => a + b, 0);

    setSubTotal(result);

    localStorage.setItem('cartItems', JSON.stringify(items));
    localStorage.setItem('cartSubTotal', JSON.stringify(result));
  };

  const addItem = (product: ProductDto, newQty: number = 1) => {
    const productIndex = items.findIndex((item) => item.id === product.id);
    const isAlreadyExist = productIndex !== -1;

    let newItems = [...items];

    if (isAlreadyExist) {
      newItems[productIndex] = {
        ...items[productIndex],
        quantity: newItems[productIndex].quantity + newQty,
      };
    } else {
      newItems.push({
        ...product,
        quantity: newQty,
      });
    }

    calculateSubTotal(newItems);
    setItems(newItems);
  };

  const increaseItem = (product: CartItemDto) => {
    const productIndex = items.findIndex((item) => item.id === product.id);

    let newItems = [...items];

    newItems[productIndex] = {
      ...items[productIndex],
      quantity: newItems[productIndex].quantity + 1,
    };

    calculateSubTotal(newItems);
    setItems(newItems);
  };

  const decreaseItem = (product: CartItemDto) => {
    const productIndex = items.findIndex((item) => item.id === product.id);

    let newItems = [...items];

    newItems[productIndex] = {
      ...items[productIndex],
      quantity: newItems[productIndex].quantity - 1,
    };

    calculateSubTotal(newItems);
    setItems(newItems);
  };

  const removeItem = (product: ProductDto) => {
    let newItems = [...items].filter((item) => item.id !== product.id);

    calculateSubTotal(newItems);
    setItems(newItems);
  };

  const cartCheckout = async () => {
    setLoading(true);
    const lineItems = items?.map((item) => {
      return {
        price: item.default_price,
        quantity: item.quantity,
      };
    });
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ lineItems, baseUrl: window.location.origin }),
      });

      const result = await res.json();

      window.location.href = result.session.url;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const localCartItems = localStorage.getItem('cartItems');
    const localCartSubTotal = localStorage.getItem('cartSubTotal');

    setItems(JSON.parse(localCartItems || '[]'));
    setSubTotal(Number(localCartSubTotal || '0'));
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        subTotal,
        addItem,
        increaseItem,
        decreaseItem,
        removeItem,
        cartCheckout,
        loading,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
