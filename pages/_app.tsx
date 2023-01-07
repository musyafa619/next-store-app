import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import { AuthContextProvider } from 'context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from 'components/common/ProtectedRoute';
import { CartContextProvider } from 'context/CartContext';
import NextProgress from 'next-progress';

const noAuthPath = ['/login', 'register'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <NextProgress
            color={theme.palette.primary.main}
            options={{ showSpinner: false }}
          />
          {noAuthPath.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </ThemeProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}
