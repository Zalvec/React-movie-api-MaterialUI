import React from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Backdrop
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default props => {
  /*Dropdown menu*/
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = e => {
    setAnchorEl(null);
  };

  /*Backdrop*/
  const [open, setOpen] = React.useState(false);
  const handleBackdropClose = () => {
    setOpen(false);
    handleMenuClose();
  };

  /*Onclick menu*/
  const OnMenu = e => {
    setAnchorEl(e.currentTarget);
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={OnMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Material UI Movie App</Typography>
        </Toolbar>
      </AppBar>
      <Backdrop open={open} onClick={handleBackdropClose}>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/" exact className="link" activeClassName="active">
              Home
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/movie" className="link" activeClassName="active">
              Movie
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/about" className="link" activeClassName="active">
              About
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/contact" className="link" activeClassName="active">
              Contact
            </NavLink>
          </MenuItem>
        </Menu>
      </Backdrop>
    </>
  );
};
