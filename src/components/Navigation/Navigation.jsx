import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar,IconButton, Typography,Button, SwipeableDrawer  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { PathsMap } from '../../constants/constants';
import { getIsLogin } from '../../store/reducers/authorization.reducer';
import { logoutUser } from '../../store/actions/authorization.actions';

const NavigationList = [
  {
    path: PathsMap.COUNTRIES, 
    label: 'Countries',
    Icon: PublicIcon,
  },
  {
    path: PathsMap.STATES, 
    label: 'States',
    Icon: FlagIcon,
  },
  {
    path: PathsMap.CITIES, 
    label: 'Cities',
    Icon: LocationCityIcon,
  },
  {
    path: PathsMap.CARDS, 
    label: 'Cards',
    Icon: DashboardIcon,
  },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLogin = useSelector(getIsLogin);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Table
          </Typography>
          {!isLogin 
            ? (
                <Button color="inherit">
                  <Link className="login-link" to={PathsMap.LOGIN}>Login</Link>
                </Button>
            ) 
            : (
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            ) 
          }
        </Toolbar>
      </AppBar>
    </Box>

    <SwipeableDrawer
      anchor='left'
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Box
        sx={{ width: 250, p: 5, background: '#1976d2', height: 1000}}
        role="presentation"
        onClick={handleClose}
        onKeyDown={handleClose}
      >
      {NavigationList.map(({ path, label, Icon }) => 
        <Link className="navigation-element" to={path} key={path}>
          <Icon/><pre> </pre>{label}
        </Link>
      )}
      </Box>
    </SwipeableDrawer>
  </>
  )
};

export default Navigation;
