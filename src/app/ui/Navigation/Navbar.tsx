import React, { FunctionComponent, useCallback, useRef } from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  Theme,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import NavbarMenu from './NavbarMenu';
import NavbarItemMobile from './NavbarItemMobile';
import { AppRoutes, NavItem, navItems } from '../../ApprRoutes/AppRoutes';
import { makeStyles } from '@material-ui/styles';
import { Link, useLocation } from 'react-router-dom';

interface StyleProps {
  pathname: string;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    background: '#3d2f09',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 400,
    letterSpacing: '0.2rem',
    fontFamily: 'KaushanScript',
    '&:first-letter': {
      color: 'red',
    },
    color: '#FFF',
    cursor: 'pointer',
    transition: '.15s ease-in-out',
    '& span': {
      color: 'red',
    },
    '&:hover': {
      color: 'gold',
      letterSpacing: '0.21rem',
    },
  },
}));

const Navbar: FunctionComponent = () => {
  const { pathname } = useLocation();
  const classes = useStyles({ pathname });
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleMenu = (event: any) => {
    setAnchor(event.currentTarget);
  };

  const ref = useRef(null);
  const onAnchorHandler = useCallback(() => {
    if (ref.current) {
      setAnchor(null);
    }
  }, [ref]);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  return (
    <AppBar className={classes.root}>
      <Container>
        <Toolbar>
          <Link to={AppRoutes.Home}>
            <h4 className={classes.logo} >
              Currency
              <span> R</span>
              ates
              <span> T</span>racker
            </h4>
          </Link>
          {isMobile ? (
            <>
              <IconButton onClick={handleMenu}>
                <MenuIcon style={{ color: '#FFF' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
              >
                {navItems.map((item: NavItem) => (
                  <NavbarItemMobile
                    ref={ref}
                    key={item.id}
                    label={item.label}
                    path={item.path}
                    icon={item.icon}
                    onClick={onAnchorHandler}
                  />
                ))}
              </Menu>
            </>
          ) : (
            <NavbarMenu />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
