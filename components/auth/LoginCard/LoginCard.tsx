import {
  Paper,
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from '@mui/material';
import styles from './LoginCard.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from 'context/AuthContext';
import { SiNextdotjs } from 'react-icons/si';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactNode;
}

const LoginCard: React.FC<Props> = () => {
  const { loginWithGoogle, loginWithEmail } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <Paper className={styles.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={styles.content}>
          <Avatar className={styles.avatar}>
            <SiNextdotjs size={25} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              onChange={(event) =>
                setForm((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
            />
            <TextField
              onChange={(event) =>
                setForm((prevState) => ({
                  ...prevState,
                  password: event.target.value,
                }))
              }
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={styles.loginButton}
              disabled={!form.email || !form.password}
              onClick={() => loginWithEmail(form.email, form.password)}
            >
              Sign In
            </Button>

            <Divider className={styles.divider}>OR</Divider>

            <Button
              fullWidth
              variant="outlined"
              className={styles.loginButton}
              onClick={loginWithGoogle}
            >
              <FcGoogle size={22} /> Sign In with Google
            </Button>
          </Box>
          <Button
            className={styles.register}
            onClick={() => router.push('/register')}
            variant="text"
          >
            {"Don't have an account? Sign Up"}
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default LoginCard;
