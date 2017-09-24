import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction ,ListItemButton} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InfoIcon from 'material-ui-icons/Info';
import AddToQueueIcon from 'material-ui-icons/AddToQueue';
import ListSubheader from 'material-ui/List/ListSubheader';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 450,
    background: theme.palette.background.paper,
  },
  
});

function LeftPanel(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <List className={classes.root} subheader={<ListSubheader>Building name <ListItemSecondaryAction> Income/Upgrade Cost</ListItemSecondaryAction></ListSubheader>}>
        <ListItem button>
          <ListItemIcon>
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Asteroidy HQ" />
          <ListItemSecondaryAction>
            <ListItemText primary="10" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Metallino extracterino" />
          <ListItemSecondaryAction>
            <ListItemText primary="100" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Curserino ratatarino" />
          <ListItemSecondaryAction>
            <ListItemText primary="1" />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}

LeftPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPanel);

/*


import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from '../MobileTearSheet';
import ActionInfo from 'material-ui-icons/Info';
import AddToQueue from 'material-ui-icons/AddToQueue';
import Divider from 'material-ui/Divider';


const LeftPanel = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="New command" leftIcon={<AddToQueue />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="Command 1" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Command 2" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Command 3" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Command 4" rightIcon={<ActionInfo />} />
    </List>
  </MobileTearSheet>
);

export default LeftPanel;
*/