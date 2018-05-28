import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

import Menu from './components/Menu';
import Banner from './components/Banner';
import Routes from './routes/index';
import './App.css';

const drawerWidth = 240;
const toolbarHeight = 200;

const theme = createMuiTheme({
  palette: {
    menuItem: {
      primaryColor: '#02c1ee',
      secondaryColor: '#fcc308',
    }
  }
});

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
    zIndex: -1
  },
  paperDrawer: {
    position: 'relative',
    width: drawerWidth,
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  toolbar: {
    height: toolbarHeight,
    display: 'flex',
    padding: 0,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 3,
    marginTop: toolbarHeight,
    display: 'block',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;

    return (
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar
              position='absolute'
              className={classes.appBar}
            >
              <Toolbar className={classes.toolbar}>
                <Banner height={toolbarHeight} width={'100%'} />
              </Toolbar>
            </AppBar>
            <Drawer
              variant='permanent'
              className={classes.paperDrawer}
            >
              <div className={classes.toolbar} />
              <Divider />
              <Menu menuWidth={drawerWidth}/>
            </Drawer>
            <main className={classes.content}>
              {Routes.map((route) => (
                <Route exact path={route.path} component={route.component} key={route.name}/>
              ))}
            </main>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default withStyles(styles)(App);
