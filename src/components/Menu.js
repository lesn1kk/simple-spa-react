import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import pagesData from '../assets/pagesData';

const styles = theme => ({
  menuList: {
    textDecoration: 'none',
    paddingLeft: 0,
  },
  menuItem: {
    paddingLeft: theme.spacing.unit,
    // color: theme.palette.menuItem.primaryColor,
  },
  menuItemNested: {
    paddingLeft: theme.spacing.unit * 4,
    // color: theme.palette.menuItem.secondaryColor,
  }
});

class Menu extends Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {classes} = this.props;

    return(
        <MenuList className={classes.menuList} style={{ width: this.props.menuWidth }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <MenuItem>
              <ListItemText classes={{ primary: classes.menuItem }} primary='Strona głowna' />
            </MenuItem>
          </NavLink>
          <MenuItem onClick={this.handleClick}>
            <ListItemText classes={{ primary: classes.menuItem }} primary='Zabytki' />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </MenuItem>
          <Collapse in={this.state.open} timeout='auto' unmountOnExit>
            {pagesData.map((page) => (
              page.path !== '/' ?
                <NavLink to={page.path} style={{ textDecoration: 'none' }} key={page.name}>
                  <MenuItem className={classes.menuItemNested}>{page.name}</MenuItem>
                </NavLink>
             : ''
            ))}
          </Collapse>
        </MenuList>
    )
  }
}

export default withStyles(styles)(Menu);
