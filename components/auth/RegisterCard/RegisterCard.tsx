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
} from '@mui/material';
import styles from './RegisterCard.module.scss';
import { useAuth } from 'context/AuthContext';
import { SiNextdotjs } from 'react-icons/si';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactNode;
}

const RegisteCard: React.FC<Props> = () => {
  const { registerWithEmail } = useAuth();
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
            Sign Up
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
              onClick={() => registerWithEmail(form.email, form.password)}
            >
              Sign Up
            </Button>
          </Box>
          <Button
            className={styles.login}
            onClick={() => router.push('/login')}
            variant="text"
          >
            {'Already have an account? Sign In'}
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default RegisteCard;
