import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import Menu from './components/Menu';
import Banner from './components/Banner';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import './App.css';

const drawerWidth = 240;
const toolbarHeight = 100;

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
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 3,
    marginTop: toolbarHeight,
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
            <Route exact path="/" component={Home}/>
            <Route path="/gallery" component={Gallery}/>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default withStyles(styles)(App);
