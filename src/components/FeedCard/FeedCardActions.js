
import React, { PureComponent } from 'react';
import {
  IconButton,
  Grid,
  Dialog,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CommentIcon from '@material-ui/icons/Comment';
import LinkIcon from '@material-ui/icons/Link';

const palette = require('../../configs/palette.json');

export default class FeedCardActions extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height,
      comments: this.props.comments,
      link: this.props.link,
      open: false
    };
  }

  openMenu = () => {
    this.setState({
      open: true
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  // Open new tab with given url
  handleUrl = (url) => {
    window.open(url);
    this.handleClose();
  }

  render() {

    const { height, comments, link, open } = this.state;
    const feedCardIconTheme = palette.icons.feedcard;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height }}
      >
        <Grid item>
          <IconButton
            onClick={this.openMenu}
          >
            <MenuIcon 
              style={{
                color: feedCardIconTheme.link
              }}
            />
          </IconButton>
        </Grid>

        <Dialog
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {backgroundColor: palette.mui.background.post}
          }}
        >
          <List>
            <ListItem
              button
              onClick={() => {
                this.handleUrl(link)
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <LinkIcon 
                    style={{ color: feedCardIconTheme.comments }}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Link" 
                style={{
                  color: palette.text.feedcard.title
                }}
              />
            </ListItem>
            {
              comments &&
              <ListItem
                button
                onClick={() => {
                  this.handleUrl(comments)
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <CommentIcon 
                      style={{ color: feedCardIconTheme.comments }}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary="Comments"
                  style={{
                    color: palette.text.feedcard.title
                  }}
                />
              </ListItem>
            }
          </List>
        </Dialog>
      </Grid>
    );
  }
}
