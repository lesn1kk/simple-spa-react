import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

class Menu extends Component {
  render() {
    return(
        <MenuList className="App-menu" style={{ width: this.props.menuWidth }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <MenuItem>Home</MenuItem>
          </NavLink>
          <NavLink to="/gallery" style={{ textDecoration: 'none' }}>
            <MenuItem>Gallery</MenuItem>
          </NavLink>
        </MenuList>
    )
  }
}

export default Menu;
