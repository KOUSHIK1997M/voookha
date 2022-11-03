import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
// import { makeStyles } from '@mui/styles';
import useStyles from './NavStyle';
import { NavLink } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import LoginIcon from '@mui/icons-material/Login';
import InputIcon from '@mui/icons-material/Input';
import LoginPopup from './Popup/LoginPopup'
import SignUpPopup from './Popup/SignUpPopup'
import CloseIcon from '@mui/icons-material/Close';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const menusdata = [{ path: '/home', data: "Home" },
{ path: '/about', data: "AboutUs" },
{ path: '/product', data: "Products" },
{ path: '/contact', data: "ContactUs" }]



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openLogin, setLoginOpen] = React.useState(false);
  const [openSignUp, setSignUpOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const isLogin = true;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();

  return (
    <React.StrictMode>
      <AppBar className={classes.appBar} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', color: '#972e0e', md: 'flex' }, mr: 2 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 20,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .6)',
                color: '#972e0e',
                textDecoration: 'none',
              }}
            >
              VOOOKHA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              // color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menusdata.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <Typography textAlign="center" >
                      <NavLink to={page.path} style={{ paddingLeft: 13, color: 'black', textDecoration: 'none' }} >{page.data}</NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', color: '#972e0e', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .6)',
                color: '#972e0e',
                textDecoration: 'none',
              }}
            >
              VOOOKHA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menusdata.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to={page.path} className={classes.navlink} style={{ paddingLeft: 13, textDecoration: 'none' }}>{page.data}</NavLink>
                </Button>
              ))}
            </Box>
            {isLogin ? (
              <Stack spacing={3} direction="row" alignItems="center" justifyContent={"center"} sx={{ '& button': { m: 1 } }}>
                <Button size="small" onClick={handleLoginOpen} sx={{ width: 100, padding: 1, margin: 2, color: 'black', display: 'block' }} variant="outlined" >
                  Login
                </Button>
                <Button size="small" onClick={handleSignUpOpen} className={classes.root} sx={{ width: 100, higth: 10, padding: 1, margin: 2, color: 'black', display: 'block' }} variant="contained" >
                  SignUp
                </Button>
              </Stack>

            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>)}
          </Toolbar>
        </Container>
      </AppBar>
      <Typography>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openLogin}
          onClose={handleLoginClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openLogin}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              height: 480,
              bgcolor: 'background.paper',
              border: '1px solid #000',
              borderRadius: 1.5,
              boxShadow: 24,
              p: 4,
            }}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                <InputIcon sx={{ mx: '10px' }} />
                Login
                <CloseIcon onClick={handleLoginClose} sx={{ ml: '290px', fontSize: '30px', color: 'red' }} />
              </Typography>
              <Typography >
                <LoginPopup />
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Typography>
      <Typography>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openSignUp}
          onClose={handleSignUpClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openSignUp}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              height: 530,
              bgcolor: 'background.paper',
              border: '1px solid #000',
              borderRadius: 1.5,
              boxShadow: 24,
              p: 4,
            }}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                <InputIcon sx={{ mx: '10px' }} />
                Sign Up
                <CloseIcon onClick={handleSignUpClose} sx={{ ml: '290px', fontSize: '30px', color: 'red' }} />
              </Typography>
              <Typography >
                <SignUpPopup />
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Typography>
    </React.StrictMode>
  );
}
export default Navbar;
