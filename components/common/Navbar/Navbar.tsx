import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { SiNextdotjs } from 'react-icons/si';
import styles from './Navbar.module.scss';
import { BsCart3 } from 'react-icons/bs';
import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

interface Props {
  title?: string;
  back?: string;
  displayCart?: boolean;
}

const Navbar: React.FC<Props> = ({ title, back, displayCart }) => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const stringAvatar = (name: string) => {
    return {
      children: `${name.split(' ')[0][0]}`,
    };
  };

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <AppBar elevation={0} className={styles.appbar}>
        <Container maxWidth="md">
          <Toolbar className={styles.toolbar} disableGutters>
            {back ? (
              <Box className={styles.title}>
                <IconButton onClick={() => router.push(back)}>
                  <MdArrowBack size={25} style={{ color: '#1976d2' }} />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'inherit',
                  }}
                >
                  {title || 'Next Store'}
                </Typography>
              </Box>
            ) : (
              <Box onClick={() => router.push('/')} className={styles.logo}>
                <SiNextdotjs size={25} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'inherit',
                  }}
                >
                  {title || 'Next Store'}
                </Typography>
              </Box>
            )}

            <Box className={styles.item}>
              {displayCart && (
                <Tooltip title="Cart">
                  <IconButton disableRipple sx={{ bgcolor: 'primary.main' }}>
                    <BsCart3 style={{ color: '#ffffff' }} />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title={user?.displayName || user?.email}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ bgcolor: 'primary.light' }}
                    src={user?.photoURL || ''}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 2.5,
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
